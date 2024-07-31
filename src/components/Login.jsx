import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "../assets/css/LoginForm.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdOutgoingMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

function LoginForm() {
  const [dbcredentials, setDBCredentials] = useState([]);
  const initialUserCredentials = {
    email: "",
    password: "",
  };
  const url = "http://localhost:3004/users";
  const navigate = useNavigate();

  useEffect(() => {
    getCredentials();
    // if (localStorage.getItem("loggedUser")) {
    localStorage.removeItem("loggedUser");
    // }
    // eslint-disable-next-line
  }, []);

  // function to get the database user credentials
  const getCredentials = () => {
    axios
      .get(url)
      .then((res) => {
        setDBCredentials(res.data);
      })
      .catch(() => {
        toast.error("Error while getting user credentials");
      });
  };

  // function to login
  const login = (credentials) => {
    const loggedUser = dbcredentials.find(
      (dbUser) =>
        dbUser.email === credentials.email &&
        dbUser.password === credentials.password
    );
    if (loggedUser) {
      const user = {
        name: loggedUser.name,
        email: loggedUser.email,
      };

      // storing user to localstorage
      localStorage.setItem("loggedUser", JSON.stringify(user));
      toast.success("Logged In");
      setTimeout(() => {
        navigate("/home");
      }, 500);
    } else {
      toast.error("Invalid Credentials");
    }
  };

  // defining registrationSchema for validation
  const loginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),

    password: Yup.string().required("Password is Required"),
  });

  return (
    <div className="login-container">
      {/* using Formik for Form  */}
      <Formik
        initialValues={initialUserCredentials}
        validationSchema={loginSchema}
        onSubmit={(values, { resetForm }) => {
          login(values);
          resetForm();
        }}
      >
        {({ errors, touched }) => (
          <Form className="login-form">
            <h2>LOGIN </h2>
            <div className="roww mt-4">
              <div className="form-group mb-3">
                <label htmlFor="email">
                  <MdOutgoingMail size={28} className="mb-1" /> Email
                </label>
                <Field name="email" type="email" className="form-controll" />
                {errors.email && touched.email ? (
                  <div className="error">{errors.email}</div>
                ) : null}
              </div>
              {/* password  */}
              <div className="form-group mb-3">
                <label htmlFor="password">
                  <RiLockPasswordLine size={28} className="mb-1" /> Password
                </label>
                <Field
                  name="password"
                  type="password"
                  className="form-controll"
                />
                {errors.password && touched.password ? (
                  <div className="error">{errors.password}</div>
                ) : null}
              </div>
            </div>
            <div className="btn-group d-flex justify-content-center my-4">
              <button type="submit">Login</button>
            </div>
          </Form>
        )}
      </Formik>
      <ToastContainer />
    </div>
  );
}

export default LoginForm;
