import React from "react";
import "../assets/css/Home.css";
import bannerimg2 from "../assets/images/banner2.jpg";
import { SiCodefresh } from "react-icons/si";
import { FaBan, FaLeaf, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import aboutImg1 from "../assets/images/clients-1-120x114.png";
import aboutImg2 from "../assets/images/clients-2-105x118.png";
import aboutImg3 from "../assets/images/clients-3-111x98.png";
import aboutImg4 from "../assets/images/clients-4-122x92.png";
import axios from "axios";
import { toast } from "react-toastify";

function Home() {
  const url = "http://localhost:3004/queries";
  const initialUserQuery = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  };

  // defining userQuerySchema for validation
  const userQuerySchema = Yup.object().shape({
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

    message: Yup.string()
      .matches(
        /^[a-zA-Z0-9]+(?: [a-zA-Z0-9]+)*$/,
        "Message should be Alpha Numeric"
      )
      .min(2, "Message should beleast 2 characters long")
      .max(20, "Message is too long")
      .required("Message is required"),
  });

  // function to handle Submit
  const handleSubmit = (userQuery) => {
    axios.post(url, userQuery).then(() => {
      toast.success("Your Query is Submitted", {
        position: "top-center",
      });
    });
  };

  return (
    <div className="home-wrapper pt-3">
      <div id="carouselExampleDark" className="carousel carousel-light slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="2000">
            <img src={bannerimg2} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-sm-block">
              <h5>Organic Veggies</h5>
              <p>
                Enjoy the freshness of organically grown vegetables straight
                from our farm to your table.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={bannerimg2} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Farm Fresh Goodness</h5>
              <p>
                Experience the crisp taste of organic produce straight from our
                fields.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={bannerimg2} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Healthy Harvest</h5>
              <p>
                Celebrate wellness with our selection of wholesome organic
                foods.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev light"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* Cards section */}
      <div className="home-info p-5 overflow-hidden gap-4">
        <div className="row justify-content-evenly">
          <div className="home-info-item col-md-3 col-sm-12 py-3 mt-4">
            <div className="row py-2">
              <div className="col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
                <h1>01</h1>
              </div>
              <div className="col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
                <SiCodefresh
                  style={{ height: "70px", width: "70px", color: "green" }}
                />
              </div>
            </div>
            <div className="row py-2">
              <div className="col-12 text-center">
                <h3>ALWAYS FRESH</h3>
              </div>
            </div>
            <div className="row py-2">
              <div className="col-12 text-center">
                <p>
                  Thanks to innovative organic technologies, our products are
                  always fresh and don’t need any treatment.
                </p>
              </div>
            </div>
          </div>
          <div className="home-info-item col-md-3 col-sm-12 py-3  mt-4">
            <div className="row py-2">
              <div className="col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
                <h1>02</h1>
              </div>
              <div className="col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
                <FaBan
                  style={{ height: "70px", width: "70px", color: "green" }}
                />
              </div>
            </div>
            <div className="row py-2">
              <div className="col-12 text-center">
                <h3>NO ADDITIVES</h3>
              </div>
            </div>
            <div className="row py-2">
              <div className="col-12 text-center">
                <p>
                  We avoid any artificial additives after harvesting the crops
                  to offer you the best organic products.
                </p>
              </div>
            </div>
          </div>
          <div className="home-info-item col-md-3 col-sm-12 py-3  mt-4">
            <div className="row py-2">
              <div className="col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
                <h1>03</h1>
              </div>
              <div className="col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
                <FaLeaf
                  style={{ height: "70px", width: "70px", color: "green" }}
                />
              </div>
            </div>
            <div className="row py-2">
              <div className="col-12 text-center">
                <h3>100% ORGANIC</h3>
              </div>
            </div>
            <div className="row py-2">
              <div className="col-12 text-center">
                <p>
                  We adhere to our organic philosophy, which implies avoiding
                  pesticides and non-organic fertilizers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* FAQ section */}
      <div className="faq-section">
        <div className="row">
          <div className="faq-image col-sm-12 col-md-6 mt-3"></div>
          <div className="faq-accordion col-sm-12 col-md-6 mt-3">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    <h3>What does organic mean?</h3>
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Organic products are grown in environmentally friendly ways.
                    Toxic or persistent pesticides and other agricultural
                    chemicals are prohibited. There is also a focus on renewable
                    resources and the conservation of soil and water. Organic
                    farming promotes biodiversity by avoiding genetically
                    modified organisms (GMOs) and favoring natural methods for
                    pest and disease control. Soil health is a priority in
                    organic farming with practices like crop rotation,
                    composting, and mulching used to maintain and improve soil
                    fertility. Organic farmers prioritize animal welfare,
                    ensuring livestock.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    <h3>Why eat organic?</h3>
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Avoiding agricultural chemicals is one of the top reasons to
                    eat organic food. In general, according to the latest
                    research, consumers who buy organic products cite
                    health/nutrition, taste, and food safety as the top
                    motivators for their purchases. Environmental effects are
                    also a strong reason to buy and eat organic products.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    <h3>Is organic food healthier?</h3>
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    There is growing research that indicates greater amounts of
                    certain nutrients in organic crops compared to conventional
                    crops. If you’re concerned about pesticides, the application
                    of potentially harmful, long-lasting pesticides and
                    fertilizers are not allowed in organic agriculture. The EPA
                    considers 60% of all herbicides, 90% of all fungicides, and
                    30% of all insecticides as potentially cancer-causing.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center my-4">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="img-outer d-flex justify-content-center my-3">
              <img src={aboutImg1} alt="" className="img-fluid" />
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="img-outer d-flex justify-content-center my-3">
              <img src={aboutImg2} alt="" className="img-fluid" />
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="img-outer d-flex justify-content-center my-3">
              <img src={aboutImg3} alt="" className="img-fluid" />
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="img-outer d-flex justify-content-center my-3">
              <img src={aboutImg4} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
      {/* Contact Us section */}
      <div className="contact-us-section p-5">
        <h2 className="text-center mb-4">Contact Us</h2>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <Formik
              initialValues={initialUserQuery}
              validationSchema={userQuerySchema}
              onSubmit={(values, { resetForm }) => {
                handleSubmit(values);
                resetForm();
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <div className="row">
                    <div className="col-md-6 col-sm-12">
                      <div className="form-group">
                        <label htmlFor="name">First Name</label>
                        <Field
                          name="firstName"
                          id="firstName"
                          type="text"
                          className="form-control"
                          placeholder="First Name"
                        />
                        {errors.firstName && touched.firstName ? (
                          <div className="error">{errors.firstName}</div>
                        ) : null}
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                      <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <Field
                          name="lastName"
                          id="lastName"
                          type="text"
                          className="form-control"
                          placeholder="Last Name"
                        />
                        {errors.lastName && touched.lastName ? (
                          <div className="error">{errors.lastName}</div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <Field
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Your Email"
                    />
                    {errors.email && touched.email ? (
                      <div className="error">{errors.email}</div>
                    ) : null}
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="message" className="form-label">
                      Message
                    </label>
                    <Field
                      as="textarea"
                      name="message"
                      id="message"
                      type="text"
                      className="form-control"
                      placeholder="Your Message"
                    />
                    {errors.message && touched.message ? (
                      <div className="error">{errors.message}</div>
                    ) : null}
                  </div>
                  <div className="row d-flex align-items-center justify-content-center">
                    <button
                      type="submit"
                      className="btn btn-success my-4 "
                      style={{ width: "150px" }}
                    >
                      Send Message
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-evenly align-items-center">
            <div className="row W-100">
              <div>
                <iframe
                  title="map"
                  style={{
                    border: "1px solid #508d4e",
                    borderRadius: "10px",
                  }}
                  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Nashik+(Farm2Fork)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                >
                  <a href="https://www.gps.ie/">gps devices</a>
                </iframe>
              </div>
            </div>
            <div className="row mt-3 w-100">
              <div className="col-md-6">
                <div className="d-flex align-items-center justify-content-center">
                  <FaEnvelope
                    style={{
                      fontSize: "22px",
                      marginRight: "10px",
                      marginBottom: "12px",
                      color: "green",
                    }}
                  />
                  <p>info@farmtofork.com</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex align-items-center justify-content-center">
                  <FaPhoneAlt
                    style={{
                      fontSize: "22px",
                      marginRight: "10px",
                      marginBottom: "12px",
                      color: "green",
                    }}
                  />
                  <p>+91 123 456 7890</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
