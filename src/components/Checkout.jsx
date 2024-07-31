import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/Checkout.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { ProductContext } from "../productContext/ProductContext";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

function Checkout() {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    mobileNo: "",
    address: "",
  };

  const email = JSON.parse(localStorage.getItem("loggedUser")).email;
  const { productData, setProductData, setTotal, quantity, total } =
    useContext(ProductContext);
  const navigate = useNavigate();
  const url = "http://localhost:3004/orders";

  // function to save details to json server
  const saveDetails = (details) => {
    var products = [];
    productData.map((product, i) => {
      return products.push({
        productId: product.id,
        productName: product.name,
        productPrice: product.price,
        quantity: quantity[i],
      });
    });

    // storing payload in json
    const orderDetails = {
      firstName: details.firstName,
      lastName: details.lastName,
      email: email,
      optionalEmail: details.email,
      mobileNo: details.mobileNo,
      address: details.address,
      products: products,
      total: total,
    };

    axios.post(url, orderDetails).then((res) => {
      setProductData([]);
      setTotal(0);
      toast.success("Order Placed Successfully");
      setTimeout(() => {
        navigate("/orders");
      }, 1000);
    });
  };

  // Checkout detailsSchema
  const detailsSchema = Yup.object().shape({
    firstName: Yup.string()
      .matches(
        /^[a-zA-Z]+(?: [a-zA-Z]+)*$/,
        "First Name must be alphabetical(No spaces)"
      )
      .min(2, "First name should be at least 2 characters long")
      .max(20, "First name is too long")
      .required("First name is required"),

    lastName: Yup.string()
      .matches(
        /^[a-zA-Z]+(?: [a-zA-Z]+)*$/,
        "Last Name must be alphabetical(No spaces)"
      )
      .min(2, "Last name should be at least 2 characters long")
      .max(20, "Last name is too long")
      .required("Last name is required"),

    email: Yup.string().email("Invalid email").required("Email is required"),

    mobileNo: Yup.string()
      .required("Mobile is required")
      .matches(
        /^(?:(?:\+|0{0,2})91(\s*[\\-]\s*)?|[0]?)?[789]\d{9}$/,
        "Please Enter Valid  Mobile Number"
      ),

    address: Yup.string()
      .min(10, "Address should be at least 10 characters long")
      .max(40, "Address can be maximum 50 characters long")
      .matches(
        /^(?=.*[a-zA-Z,])[a-zA-Z0-9,]+(?: [a-zA-Z0-9,]+)*$/,
        "Address must be alphanumeric only"
      )
      .required("Address is required"),
  });
  return (
    <div className="checkout-container">
      <div className="checkout-form">
        <h3 className="py-3 mb-3">
          <b>Checkout</b>
        </h3>
        <div className="form-wrapper">
          <Formik
            initialValues={initialValues}
            validationSchema={detailsSchema}
            onSubmit={(values, { resetForm }) => {
              saveDetails(values);

              resetForm();
            }}
          >
            {({ errors, touched }) => (
              <div className="form-checkout">
                <Form className="containerr">
                  <div className="row">
                    <div className="form-group col-md-6 col-sm-12">
                      <div className="label">
                        <label htmlFor="firstName">First Name</label>
                      </div>
                      <Field name="firstName" />
                      {errors.firstName && touched.firstName ? (
                        <div className="error">{errors.firstName}</div>
                      ) : null}
                    </div>
                    <div className="col-md-6 col-sm-12">
                      <div className="form-group">
                        <div className="label">
                          <label htmlFor="lastName">Last Name</label>
                        </div>
                        <Field name="lastName" />
                        {errors.lastName && touched.lastName ? (
                          <div className="error">{errors.lastName}</div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-sm-12">
                      <div className="form-group">
                        <div className="label">
                          <label htmlFor="email"> Email</label>
                        </div>
                        <Field name="email" type="email" />
                        {errors.email && touched.email ? (
                          <div className="error">{errors.email}</div>
                        ) : null}
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                      <div className="form-group">
                        <div className="label">
                          <label htmlFor="mobile">Mobile</label>
                        </div>
                        <Field type="number" name="mobileNo" />
                        {errors.mobileNo && touched.mobileNo ? (
                          <div className="error">{errors.mobileNo}</div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group textarea">
                      <div className="label">
                        <label htmlFor="address">Address</label>
                      </div>
                      <Field as={"textarea"} name="address" />
                      {errors.address && touched.address ? (
                        <div className="error">{errors.address}</div>
                      ) : null}
                    </div>
                  </div>
                  <div className="row ">
                    <div className="col-12 d-flex justify-content-center mt-5">
                      <div className="row w-100 justify-content-evenly">
                        <div className="col-3">
                          <button
                            className="btn btn-secondary"
                            onClick={() => navigate("/cart")}
                          >
                            Back
                          </button>
                        </div>
                        <div className="col-3">
                          <button className="btn btn-success" type="submit">
                            Confirm
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Form>
              </div>
            )}
          </Formik>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Checkout;
