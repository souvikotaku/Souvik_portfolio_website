import "./App.css";
import "bootstrap";
import "./anotherCss.css";
import { Form, Input, Button, notification } from "antd";
import "antd/dist/antd.css";
import { useState } from "react";
import firebase from "./utils/firebase";
import axios from "axios";

const { TextArea } = Input;

// window.bootstrap = require("bootstrap/dist/js/bootstrap.bundle.js");

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");
  const [form] = Form.useForm();

  window.addEventListener("DOMContentLoaded", (event) => {
    // Navbar shrink function
    var navbarShrink = function () {
      const navbarCollapsible = document.body.querySelector("#mainNav");
      if (!navbarCollapsible) {
        return;
      }
      if (window.scrollY === 0) {
        navbarCollapsible.classList.remove("navbar-shrink");
      } else {
        navbarCollapsible.classList.add("navbar-shrink");
      }
    };

    // Shrink the navbar
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener("scroll", navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    // const mainNav = document.body.querySelector("#mainNav");
    // if (mainNav) {
    //   new bootstrap.ScrollSpy(document.body, {
    //     target: "#mainNav",
    //     offset: 72,
    //   });
    // }

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector(".navbar-toggler");
    const responsiveNavItems = [].slice.call(
      document.querySelectorAll("#navbarResponsive .nav-link")
    );
    responsiveNavItems.map(function (responsiveNavItem) {
      responsiveNavItem.addEventListener("click", () => {
        if (window.getComputedStyle(navbarToggler).display !== "none") {
          navbarToggler.click();
        }
      });
    });
  });

  const onFinish = (values) => {
    const formRef = firebase.database().ref("portfolioForm");

    const portfolioform = {
      name,
      email,
      mobile: mobile === "" ? "NA" : mobile,
      message,
    };

    formRef.push(portfolioform);
    console.log(portfolioform);

    form.resetFields();

    const type = "success";

    const placement = "bottomRight";

    const openNotificationWithIcon = () => {
      notification[type]({
        message: "Form Submitted",
        description: "Thanks for filling my contact form",
        placement: placement,
      });
    };

    openNotificationWithIcon();

    axios
      .post("https://formsubmit.co/ajax/souvikpunk@gmail.com", portfolioform)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="App" style={{ background: "#9ACD32" }}>
      {/* <!-- Navigation--> */}
      <nav
        className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top"
        id="mainNav"
      >
        <div className="container">
          <a className="navbar-brand" href="#page-top">
            Souvik Das
          </a>
          <button
            className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i className="fas fa-bars" />
          </button>

          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item mx-0 mx-lg-1">
                <a
                  className="nav-link py-3 px-0 px-lg-3 rounded"
                  href="#portfolio"
                >
                  Portfolio
                </a>
              </li>
              <li className="nav-item mx-0 mx-lg-1">
                <a className="nav-link py-3 px-0 px-lg-3 rounded" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item mx-0 mx-lg-1">
                <a
                  className="nav-link py-3 px-0 px-lg-3 rounded"
                  href="#contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* <!-- Masthead--> */}
      <header
        className="masthead bg-primary text-white text-center"
        style={{ paddingBottom: "0rem", paddingTop: "0rem" }}
      >
        <div
          className="container d-flex align-items-center flex-column"
          style={{
            background:
              "url(https://www.wallpaperup.com/uploads/wallpapers/2014/01/30/243499/4cd07be6d963be1260a0e833a48cf508-700.jpg)",
            maxWidth: "100%",
            paddingBottom: "6rem",
            paddingTop: "8rem",
          }}
        >
          <div
            id="profileDiv"
            style={{
              height: "100%",

              // backgroundColor: "black",
              background: "#c31432" /* fallback for old browsers */,
              background:
                "-webkit-linear-gradient(to right, #240b36, #c31432)" /* Chrome 10-25, Safari 5.1-6 */,
              background:
                "linear-gradient(to right, #240b36, #c31432)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,

              // borderTopLeftRadius: "7rem",
              // borderTopRightRadius: "7rem",
              boxShadow: "0px 0px 10px rgba(0,0,0,0.7)",
              borderRadius: "10px",
              padding: "10px",
            }}
          >
            {/* Masthead Avatar Image*/}
            <img
              className="masthead-avatar mb-5"
              src="/img/portfolio/mypic.jpg"
              alt="..."
              style={{ borderRadius: "8rem" }}
            />
            {/* Masthead Heading*/}
            <h1
              className="masthead-heading text-uppercase mb-0"
              style={{ color: "white" }}
            >
              Souvik Das
            </h1>
            {/* Icon Divider*/}
            <div className="divider-custom divider-light">
              <div className="divider-custom-line" />
              <div className="divider-custom-icon">
                <i className="fas fa-skull" />
              </div>
              <div className="divider-custom-line" />
            </div>
            {/* Masthead Subheading*/}
            <p
              className="masthead-subheading font-weight-light mb-0"
              style={{ color: "white" }}
            >
              Web/Javascript/Frontend Developer
            </p>

            <p
              className="masthead-subheading font-weight-light mb-0"
              style={{ color: "white" }}
            >
              Check out my{" "}
              <a href="https://github.com/souvikotaku">
                <i>Github</i>
              </a>
            </p>
          </div>
        </div>
      </header>

      {/* <!-- Portfolio Section--> */}
      <section className="page-section portfolio" id="portfolio">
        <div className="container">
          {/* Portfolio Section Heading*/}
          <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
            Portfolio
          </h2>
          {/* Icon Divider*/}
          <div className="divider-custom">
            <div className="divider-custom-line" />
            <div className="divider-custom-icon">
              <i className="fas fa-skull-crossbones" />
            </div>
            <div className="divider-custom-line" />
          </div>
          {/* Portfolio Grid Items*/}
          <div
            className="row justify-content-center"
            style={{ height: "650px", overflow: "scroll", overflowX: "hidden" }}
          >
            {/* Portfolio Item 1*/}
            <div className="col-md-6 col-lg-4 mb-5">
              <div
                className="portfolio-item mx-auto"
                data-bs-toggle="modal"
                data-bs-target="#portfolioModal1"
              >
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white">
                    <p>Appointment booking app</p>
                    <i className="fas fa-plus fa-3x" />
                  </div>
                </div>
                <img
                  className="img-fluid"
                  src="/img/portfolio/cabin.png"
                  alt="..."
                />
              </div>
            </div>
            {/* Portfolio Item 2*/}
            <div className="col-md-6 col-lg-4 mb-5">
              <div
                className="portfolio-item mx-auto"
                data-bs-toggle="modal"
                data-bs-target="#portfolioModal2"
              >
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white">
                    <p>Image uploader app</p>
                    <i className="fas fa-plus fa-3x" />
                  </div>
                </div>
                <img
                  className="img-fluid"
                  src="/img/portfolio/cake.png"
                  alt="..."
                />
              </div>
            </div>
            {/* Portfolio Item 3*/}
            <div className="col-md-6 col-lg-4 mb-5">
              <div
                className="portfolio-item mx-auto"
                data-bs-toggle="modal"
                data-bs-target="#portfolioModal3"
              >
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white">
                    <p>Movie trailers app</p>
                    <i className="fas fa-plus fa-3x" />
                  </div>
                </div>
                <img
                  className="img-fluid"
                  src="/img/portfolio/circus.png"
                  alt="..."
                />
              </div>
            </div>
            {/* Portfolio Item 4*/}
            <div className="col-md-6 col-lg-4 mb-5 ">
              <div
                className="portfolio-item mx-auto"
                data-bs-toggle="modal"
                data-bs-target="#portfolioModal4"
              >
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white">
                    <p>Invoice generating app</p>
                    <i className="fas fa-plus fa-3x" />
                  </div>
                </div>
                <img
                  className="img-fluid"
                  src="/img/portfolio/game.png"
                  alt="..."
                />
              </div>
            </div>
            {/* Portfolio Item 5*/}
            <div className="col-md-6 col-lg-4 mb-5 ">
              <div
                className="portfolio-item mx-auto"
                data-bs-toggle="modal"
                data-bs-target="#portfolioModal5"
              >
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white">
                    <p>Invitation sender/mailer app</p>
                    <i className="fas fa-plus fa-3x" />
                  </div>
                </div>
                <img
                  className="img-fluid"
                  src="/img/portfolio/safe.png"
                  alt="..."
                />
              </div>
            </div>
            {/* Portfolio Item 6*/}
            <div className="col-md-6 col-lg-4 mb-5">
              <div
                className="portfolio-item mx-auto"
                data-bs-toggle="modal"
                data-bs-target="#portfolioModal6"
              >
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white">
                    <p>Blog post/edit/delete App</p>
                    <i className="fas fa-plus fa-3x" />
                  </div>
                </div>
                <img
                  className="img-fluid"
                  src="/img/portfolio/submarine.png"
                  alt="..."
                />
              </div>
            </div>
            {/* Portfolio Item 7*/}
            <div className="col-md-6 col-lg-4 mb-5 ">
              <div
                className="portfolio-item mx-auto"
                data-bs-toggle="modal"
                data-bs-target="#portfolioModal7"
              >
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white">
                    <p>Restaurant CRUD inventory app</p>
                    <i className="fas fa-plus fa-3x" />
                  </div>
                </div>
                <img
                  className="img-fluid"
                  src="/img/portfolio/img6.png"
                  alt="..."
                />
              </div>
            </div>
            {/* Portfolio Item 8*/}
            <div className="col-md-6 col-lg-4 mb-5 ">
              <div
                className="portfolio-item mx-auto"
                data-bs-toggle="modal"
                data-bs-target="#portfolioModal8"
              >
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white">
                    <p>Auth number search app</p>
                    <i className="fas fa-plus fa-3x" />
                  </div>
                </div>
                <img
                  className="img-fluid"
                  src="/img/portfolio/img7.png"
                  alt="..."
                />
              </div>
            </div>
            {/* Portfolio Item 9*/}
            <div className="col-md-6 col-lg-4 mb-5">
              <div
                className="portfolio-item mx-auto"
                data-bs-toggle="modal"
                data-bs-target="#portfolioModal9"
              >
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white">
                    <p>Event listing app</p>
                    <i className="fas fa-plus fa-3x" />
                  </div>
                </div>
                <img
                  className="img-fluid"
                  src="/img/portfolio/img8.png"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- About Section--> */}
      <section
        className=" bg-primary text-white mb-0"
        id="about"
        style={{
          background:
            "url(https://www.desktopbackground.org/download/2560x1440/2012/02/14/343740_vector-xray-hipster-characters-jthree-concepts-jared_2560x1600_h.jpg)",
        }}
      >
        <div
          className="container"
          style={{
            background: "rgba(0,0,0,0.7)",
            maxWidth: "100%",
            height: "100%",
            paddingTop: "7rem",
            paddingBottom: "7rem",
          }}
        >
          {/* About Section Heading*/}
          <h2 className="page-section-heading text-center text-uppercase text-white">
            About
          </h2>
          {/* Icon Divider*/}
          <div className="divider-custom divider-light">
            <div className="divider-custom-line" />
            <div className="divider-custom-icon">
              <i className="fas fa-star" />
            </div>
            <div className="divider-custom-line" />
          </div>
          {/* About Section Content*/}
          <div className="row">
            <div className="col-lg-4 ms-auto">
              <p className="lead">
                I am a web developer and I have done professional work with
                mostly Javascript and React.
                <br />I also have made some personal projects in
                node/mongo/react native/ionic/vue etc
              </p>
            </div>
            <div className="col-lg-4 me-auto">
              <p className="lead">
                I can work with UI logic and frontend design
              </p>
            </div>
          </div>
          {/* About Section Button*/}
          {/* <div className="text-center mt-4">
            <a
              className="btn btn-xl btn-outline-light"
              href="https://startbootstrap.com/theme/freelancer/"
            >
              <i className="fas fa-download me-2" />
              Free Download!
            </a>
          </div> */}
        </div>
      </section>

      {/* <!-- Contact Section--> */}
      <section className="page-section" id="contact">
        <div className="container">
          {/* Contact Section Heading*/}
          <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
            Contact Me
          </h2>
          {/* Icon Divider*/}
          <div className="divider-custom">
            <div className="divider-custom-line" />
            <div className="divider-custom-icon">
              <i className="fas fa-star" />
            </div>
            <div className="divider-custom-line" />
          </div>
          {/* Contact Section Form*/}
          <div className="row justify-content-center">
            <div className="col-lg-8 col-xl-7">
              <Form
                form={form}
                name="basic"
                // labelCol={{
                //   span: 8,
                // }}
                // wrapperCol={{
                //   span: 16,
                // }}
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <Form.Item
                  // label="Username"
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your name!",
                    },
                  ]}
                >
                  <Input
                    placeholder="Name"
                    onChange={(event) => setName(event.target.value)}
                    value={name}
                    style={{ height: "4rem", fontSize: "33px" }}
                  />
                </Form.Item>
                <Form.Item
                  // label="Username"
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your email!",
                      type: "email",
                    },
                  ]}
                >
                  <Input
                    placeholder="Email"
                    onChange={(event) => setEmail(event.target.value)}
                    value={email}
                    style={{ height: "4rem", fontSize: "33px" }}
                  />
                </Form.Item>
                <Form.Item
                  // label="Username"
                  name="phonenumber"
                  rules={[
                    {
                      message: "Please enter your mobile number!",
                    },
                  ]}
                >
                  <Input
                    placeholder="Mobile Number (Optional)"
                    onChange={(event) => setMobile(event.target.value)}
                    value={mobile}
                    style={{ height: "4rem", fontSize: "33px" }}
                  />
                </Form.Item>
                <Form.Item
                  name="message"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your message!",
                    },
                  ]}
                >
                  <TextArea
                    onChange={(event) => setMessage(event.target.value)}
                    value={message}
                    placeholder="Message"
                    style={{ height: "10rem", fontSize: "33px" }}
                  />
                </Form.Item>
                <Form.Item
                // wrapperCol={{
                //   offset: 8,
                //   span: 16,
                // }}
                >
                  <Button
                    type="primary"
                    htmlType="submit"
                    size={"large"}
                    style={{ height: "4rem", fontSize: "33px", width: "100%" }}
                  >
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Footer--> */}
      <footer className="footer text-center">
        <div className="container">
          <div className="row">
            {/* Footer Location*/}
            <div className="col-lg-4 mb-5 mb-lg-0">
              <h4 className="text-uppercase mb-4">Location</h4>
              <p className="lead mb-0">
                Lodha Casa Rio, Palava City
                <br />
                Dombivli, Mumbai
              </p>
            </div>
            {/* Footer Social Icons*/}
            <div className="col-lg-4 mb-5 mb-lg-0">
              <h4 className="text-uppercase mb-4">Around the Web</h4>
              <a
                className="btn btn-outline-light btn-social mx-1"
                href="https://www.facebook.com/souviksvartblod/"
                target="_blank"
              >
                <i className="fab fa-fw fa-facebook-f" />
              </a>
              <a
                className="btn btn-outline-light btn-social mx-1"
                href="https://github.com/souvikotaku"
                target="_blank"
              >
                <i className="fab fa-fw fa-github" />
              </a>
              <a
                className="btn btn-outline-light btn-social mx-1"
                href="https://www.linkedin.com/in/souvik-das-42139220/"
                target="_blank"
              >
                <i className="fab fa-fw fa-linkedin-in" />
              </a>
              <a
                className="btn btn-outline-light btn-social mx-1"
                href="https://www.instagram.com/souvikotaku/"
                target="_blank"
              >
                <i className="fab fa-fw fa-instagram" />
              </a>
            </div>
            {/* Footer About Text*/}
            <div className="col-lg-4">
              <h4 className="text-uppercase mb-4">About Souvik</h4>
              <p className="lead mb-0">
                Frontend/javascript developer
                <br />
                <i className="fa fa-envelope" /> souvikpunk@gmail.com
                <br />
                <i className="fa fa-phone" /> 9123332112
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* <!-- Copyright Section--> */}
      <div className="copyright py-4 text-center text-white">
        <div className="container">
          <small>Copyright © Souvik Das 2021</small>
        </div>
      </div>

      {/* <!-- Portfolio Modals-->
        <!-- Portfolio Modal 1--> */}
      <div
        className="portfolio-modal modal fade"
        id="portfolioModal1"
        tabIndex={-1}
        aria-labelledby="portfolioModal1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header border-0">
              <button
                className="btn-close"
                type="button"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body text-center pb-5">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    {/* Portfolio Modal - Title*/}
                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">
                      Appointment booking app
                    </h2>
                    {/* Icon Divider*/}
                    <div className="divider-custom">
                      <div className="divider-custom-line" />
                      <div className="divider-custom-icon">
                        <i className="fas fa-star" />
                      </div>
                      <div className="divider-custom-line" />
                    </div>
                    {/* Portfolio Modal - Image*/}
                    <img
                      className="img-fluid rounded mb-5"
                      src="/img/portfolio/cabin.png"
                      alt="..."
                    />
                    {/* Portfolio Modal - Text*/}
                    <p className="mb-4">
                      I made this appointment booking app using MERN
                      (mongo/express/react/node) stack with jwt authentication
                      for both user and admin accounts. I have implemented
                      protected routes in this project which limits pages based
                      on the person logging it (whether it is a auser or an
                      admin). The users can make a booking and also delete it to
                      make another booking. The admin can see the bookings of
                      all the users.
                    </p>

                    <div className="btn-group">
                      <a
                        href="https://github.com/souvikotaku/souvik-appointment-booking-app"
                        className="btn btn-primary btn-lg "
                        role="button"
                        target="_blank"
                      >
                        Source Code
                      </a>
                      <a
                        href="https://souvik-appointment-bookingapp.herokuapp.com/"
                        className="btn btn-secondary btn-lg "
                        role="button"
                        target="_blank"
                      >
                        Live app link
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Portfolio Modal 2--> */}
      <div
        className="portfolio-modal modal fade"
        id="portfolioModal2"
        tabIndex={-1}
        aria-labelledby="portfolioModal2"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header border-0">
              <button
                className="btn-close"
                type="button"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body text-center pb-5">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    {/* Portfolio Modal - Title*/}
                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">
                      Image uploader app
                    </h2>
                    {/* Icon Divider*/}
                    <div className="divider-custom">
                      <div className="divider-custom-line" />
                      <div className="divider-custom-icon">
                        <i className="fas fa-star" />
                      </div>
                      <div className="divider-custom-line" />
                    </div>
                    {/* Portfolio Modal - Image*/}
                    <img
                      className="img-fluid rounded mb-5"
                      src="/img/portfolio/cake.png"
                      alt="..."
                    />
                    {/* Portfolio Modal - Text*/}
                    <p className="mb-4">
                      Made this image uploader app using MERN stack with
                      cloudinary for interview task purpose. Hope you all like
                      it.
                    </p>
                    <div className="btn-group">
                      <a
                        href="https://github.com/souvikotaku/souvik_MERN_Cloudinary_imageupload_App"
                        className="btn btn-primary btn-lg "
                        role="button"
                        target="_blank"
                      >
                        Source Code
                      </a>
                      <a
                        href="https://souvikimageuploaderapp.herokuapp.com/"
                        className="btn btn-secondary btn-lg "
                        role="button"
                        target="_blank"
                      >
                        Live app link
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Portfolio Modal 3--> */}

      <div
        className="portfolio-modal modal fade"
        id="portfolioModal3"
        tabIndex={-1}
        aria-labelledby="portfolioModal3"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header border-0">
              <button
                className="btn-close"
                type="button"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body text-center pb-5">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    {/* Portfolio Modal - Title*/}
                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">
                      Movie trailers app
                    </h2>
                    {/* Icon Divider*/}
                    <div className="divider-custom">
                      <div className="divider-custom-line" />
                      <div className="divider-custom-icon">
                        <i className="fas fa-star" />
                      </div>
                      <div className="divider-custom-line" />
                    </div>
                    {/* Portfolio Modal - Image*/}
                    <img
                      className="img-fluid rounded mb-5"
                      src="/img/portfolio/circus.png"
                      alt="..."
                    />
                    {/* Portfolio Modal - Text*/}
                    <p className="mb-4">
                      Its a movie search & watch trailers app i made by
                      consuming the API from omdb and youtube. Type the movie
                      name on the search bar, the movie panels would fill out
                      automatically below the search bar. When you hover on the
                      panels you would see the button 'watch trailer', click on
                      the button and then a modal panel would open. On the
                      modal, you can see the youtube video of the trailer.
                    </p>
                    <div className="btn-group">
                      <a
                        href="https://github.com/souvikotaku/movie_search_trailers_app/tree/main/movie_search_trailers_app_code"
                        className="btn btn-primary btn-lg "
                        role="button"
                        target="_blank"
                      >
                        Source Code
                      </a>
                      <a
                        href="https://movie-search-trailers-app.netlify.app/"
                        className="btn btn-secondary btn-lg "
                        role="button"
                        target="_blank"
                      >
                        Live app link
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Portfolio Modal 4--> */}
      <div
        className="portfolio-modal modal fade"
        id="portfolioModal4"
        tabIndex={-1}
        aria-labelledby="portfolioModal4"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header border-0">
              <button
                className="btn-close"
                type="button"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body text-center pb-5">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    {/* Portfolio Modal - Title*/}
                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">
                      Invoice generating app
                    </h2>
                    {/* Icon Divider*/}
                    <div className="divider-custom">
                      <div className="divider-custom-line" />
                      <div className="divider-custom-icon">
                        <i className="fas fa-star" />
                      </div>
                      <div className="divider-custom-line" />
                    </div>
                    {/* Portfolio Modal - Image*/}
                    <img
                      className="img-fluid rounded mb-5"
                      src="/img/portfolio/game.png"
                      alt="..."
                    />
                    {/* Portfolio Modal - Text*/}
                    <p className="mb-4">
                      This is full stack Invoice generator and viewer i made on
                      MERN stack (mongo/express/react/node) When you open the
                      app, fill out all the details and click on generate
                      invoice. a page will open where you can see the invoice
                      with the details you have filled,click on capture as pdf
                      to download the pdf of the invoice. You can also click on
                      view invoices to see the total invoices that you have
                      generated on the invoice . When you go to invoice records
                      page you can see all the invoices there with their own
                      respective download pdf button.
                    </p>
                    <div className="btn-group">
                      <a
                        href="https://github.com/souvikotaku/Souvik_invoice_app/tree/main/Souvik_invoice_app_code"
                        className="btn btn-primary btn-lg "
                        role="button"
                        target="_blank"
                      >
                        Source Code
                      </a>
                      <a
                        href="https://souvikinvoiceapp.herokuapp.com/"
                        className="btn btn-secondary btn-lg "
                        role="button"
                        target="_blank"
                      >
                        Live app link
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Portfolio Modal 5--> */}
      <div
        className="portfolio-modal modal fade"
        id="portfolioModal5"
        tabIndex={-1}
        aria-labelledby="portfolioModal5"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header border-0">
              <button
                className="btn-close"
                type="button"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body text-center pb-5">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    {/* Portfolio Modal - Title*/}
                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">
                      Invitation sender/mailer app
                    </h2>
                    {/* Icon Divider*/}
                    <div className="divider-custom">
                      <div className="divider-custom-line" />
                      <div className="divider-custom-icon">
                        <i className="fas fa-star" />
                      </div>
                      <div className="divider-custom-line" />
                    </div>
                    {/* Portfolio Modal - Image*/}
                    <img
                      className="img-fluid rounded mb-5"
                      src="/img/portfolio/safe.png"
                      alt="..."
                    />
                    {/* Portfolio Modal - Text*/}
                    <p className="mb-4">
                      Its a full stack mailer app i made for my friend to send
                      invites to people for his slack group. I used firebase for
                      the backend to receive the details filled in the form and
                      emailJs to send mails to the person filling the form.
                    </p>
                    <div className="btn-group">
                      <a
                        href="https://github.com/souvikotaku/joindollars-mailer-app"
                        className="btn btn-primary btn-lg "
                        role="button"
                        target="_blank"
                      >
                        Source Code
                      </a>
                      <a
                        href="https://joindollars-mailerapp.netlify.app/"
                        className="btn btn-secondary btn-lg "
                        role="button"
                        target="_blank"
                      >
                        Live app link
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Portfolio Modal 6--> */}
      <div
        className="portfolio-modal modal fade"
        id="portfolioModal6"
        tabIndex={-1}
        aria-labelledby="portfolioModal6"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header border-0">
              <button
                className="btn-close"
                type="button"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body text-center pb-5">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    {/* Portfolio Modal - Title*/}
                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">
                      Blog post/edit/delete App
                    </h2>
                    {/* Icon Divider*/}
                    <div className="divider-custom">
                      <div className="divider-custom-line" />
                      <div className="divider-custom-icon">
                        <i className="fas fa-star" />
                      </div>
                      <div className="divider-custom-line" />
                    </div>
                    {/* Portfolio Modal - Image*/}
                    <img
                      className="img-fluid rounded mb-5"
                      src="/img/portfolio/submarine.png"
                      alt="..."
                    />
                    {/* Portfolio Modal - Text*/}
                    <p className="mb-4">
                      Made this blog app using mongo,express,react and node. You
                      can submit posts, delete them, edit them and also search
                      posts by entering the author's name.
                    </p>
                    <div className="btn-group">
                      <a
                        href="https://github.com/souvikotaku/souvik_blog_app"
                        className="btn btn-primary btn-lg "
                        role="button"
                        target="_blank"
                      >
                        Source Code
                      </a>
                      <a
                        href="https://souvik-blog-app.herokuapp.com/"
                        className="btn btn-secondary btn-lg "
                        role="button"
                        target="_blank"
                      >
                        Live app link
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Portfolio Modal 7--> */}
      <div
        className="portfolio-modal modal fade"
        id="portfolioModal7"
        tabIndex={-1}
        aria-labelledby="portfolioModal7"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header border-0">
              <button
                className="btn-close"
                type="button"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body text-center pb-5">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    {/* Portfolio Modal - Title*/}
                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">
                      Restaurant CRUD inventory app
                    </h2>
                    {/* Icon Divider*/}
                    <div className="divider-custom">
                      <div className="divider-custom-line" />
                      <div className="divider-custom-icon">
                        <i className="fas fa-star" />
                      </div>
                      <div className="divider-custom-line" />
                    </div>
                    {/* Portfolio Modal - Image*/}
                    <img
                      className="img-fluid rounded mb-5"
                      src="/img/portfolio/img6.png"
                      alt="..."
                    />
                    {/* Portfolio Modal - Text*/}
                    <p className="mb-4">
                      This is a MERN stack app i created for a fictional
                      restaurant's inventory where you can add, delete and check
                      out the products in the inventory. The edit functionality
                      has been added but you cannot edit the image as of now.
                    </p>
                    <div className="btn-group">
                      <a
                        href="https://github.com/souvikotaku/souvik-restaurant-inventory-backend-app-MERN-stack-"
                        className="btn btn-primary btn-lg "
                        role="button"
                        target="_blank"
                      >
                        Source Code
                      </a>
                      <a
                        href="https://souvikbackendapp.herokuapp.com/"
                        className="btn btn-secondary btn-lg "
                        role="button"
                        target="_blank"
                      >
                        Live app link
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Portfolio Modal 8-> */}
      <div
        className="portfolio-modal modal fade"
        id="portfolioModal8"
        tabIndex={-1}
        aria-labelledby="portfolioModal8"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header border-0">
              <button
                className="btn-close"
                type="button"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body text-center pb-5">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    {/* Portfolio Modal - Title*/}
                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">
                      Auth number search app
                    </h2>
                    {/* Icon Divider*/}
                    <div className="divider-custom">
                      <div className="divider-custom-line" />
                      <div className="divider-custom-icon">
                        <i className="fas fa-star" />
                      </div>
                      <div className="divider-custom-line" />
                    </div>
                    {/* Portfolio Modal - Image*/}
                    <img
                      className="img-fluid rounded mb-5"
                      src="/img/portfolio/img7.png"
                      alt="..."
                    />
                    {/* Portfolio Modal - Text*/}
                    <p className="mb-4">
                      I made this simple search Phone numbers with name app by
                      using MERN stack. There are a lot of phone numbers given
                      there on the list, you can search for a particular phone
                      number by clicking on search button and then entering name
                      in the search bar of the modal. You can only see the
                      results if you are logged in. So ,create an account and
                      log in and then you can see the search results. I have
                      used jwt authentication on the back end to authenticate
                      user. and also protected the routes on react.
                    </p>
                    <div className="btn-group">
                      <a
                        href="https://github.com/souvikotaku/Souvik-search-app-MERN-"
                        className="btn btn-primary btn-lg "
                        role="button"
                        target="_blank"
                      >
                        Source Code
                      </a>
                      <a
                        href="https://souvik-search-app.herokuapp.com/"
                        className="btn btn-secondary btn-lg "
                        role="button"
                        target="_blank"
                      >
                        Live app link
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Portfolio Modal 9-> */}
      <div
        className="portfolio-modal modal fade"
        id="portfolioModal9"
        tabIndex={-1}
        aria-labelledby="portfolioModal9"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header border-0">
              <button
                className="btn-close"
                type="button"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body text-center pb-5">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    {/* Portfolio Modal - Title*/}
                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">
                      Event listing app
                    </h2>
                    {/* Icon Divider*/}
                    <div className="divider-custom">
                      <div className="divider-custom-line" />
                      <div className="divider-custom-icon">
                        <i className="fas fa-star" />
                      </div>
                      <div className="divider-custom-line" />
                    </div>
                    {/* Portfolio Modal - Image*/}
                    <img
                      className="img-fluid rounded mb-5"
                      src="/img/portfolio/img8.png"
                      alt="..."
                    />
                    {/* Portfolio Modal - Text*/}
                    <p className="mb-4">
                      Its a simple event listing app i made for interview task
                      purpose. Click on view listing button of any category you
                      like,you would be taken to a listings page with all the
                      events.
                    </p>
                    <div className="btn-group">
                      <a
                        href="https://github.com/souvikotaku/simpleReact-eventlisting-app"
                        className="btn btn-primary btn-lg "
                        role="button"
                        target="_blank"
                      >
                        Source Code
                      </a>
                      <a
                        href="https://souvik-event-listing-app.netlify.app/"
                        className="btn btn-secondary btn-lg "
                        role="button"
                        target="_blank"
                      >
                        Live app link
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
