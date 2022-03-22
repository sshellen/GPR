import React from "react";
import TopPage from "/src/Components/TopPage/TopPage";
import Footer from "/src/Components/Footer/Footer";
import "./css/index.css";
import Success from "./Success";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = { submitSuccess: "" };
  }

  handleSubmit = (form) => {
    let formData = new FormData(form);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => this.setState({ submitSuccess: "true" }))
      .catch((error) => this.setState({ submitSuccess: "error" }));
  };

  clearErrors = (formEls) => {
    Array.prototype.slice.call(formEls).map((formEl) => {
      formEl.parentNode.classList.remove("required");

      if (formEl.parentNode.getElementsByClassName("requiredTag")[0]) {
        formEl.parentNode.getElementsByClassName("requiredTag")[0].remove();
      }
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    let formEls = e.target.elements;
    this.clearErrors(formEls);
    let fieldsToCheck = ["name", "email", "message"];
    let errors = false;

    Array.prototype.slice.call(formEls).map((formEl) => {
      if (fieldsToCheck.includes(formEl.name) && formEl.value === "") {
        formEl.parentNode.classList.add("required");
        let requiredField = document.createElement("div");
        requiredField.className = "requiredTag";
        requiredField.appendChild(document.createTextNode("REQUIRED FIELD "));

        formEl.parentNode.prepend(requiredField);
        requiredField;
        errors = true;
      }
    });
    if (errors) {
      this.setState({ submitSuccess: "false" });
    } else {
      this.handleSubmit(e.target);
    }
  };

  render() {
    return (
      <div>
        <TopPage />
        <main>
          <h1>Contact</h1>
          <div className="contact">
            <h2>CONTACT FORM</h2>

            {this.state.submitSuccess === "false" && (
              <div className="alertMessage">
                <p>
                  There are required fields on this page that have not been
                  filled out.
                </p>

                <p>Please see errors below.</p>
              </div>
            )}
            {this.state.submitSuccess !== "true" && (
              <form
                name="contactForm"
                onSubmit={(e) => {
                  this.onSubmit(e);
                  return false;
                }}
                method="POST"
                data-netlify="true"
              >
                <div className="formRow">
                  <label htmlFor="name">
                    Name<sup>*</sup>{" "}
                  </label>
                  <input id="name" name="name" type="text" />
                </div>

                <div className="formRow">
                  <label htmlFor="email">
                    Email<sup>*</sup>{" "}
                  </label>
                  <input id="email" name="email" type="text" />
                </div>

                <div className="formRow">
                  <label htmlFor="subject">Subject</label>
                  <input id="subject" name="subject" type="text" />
                </div>

                <div className="formRow">
                  <label htmlFor="message">
                    Message<sup>*</sup>{" "}
                  </label>
                  <textarea id="message" name="message" type="text"></textarea>
                </div>

                <div className="requiredFields">
                  <sup>*</sup>Required fields
                </div>
                <div className="buttonBar">
                  <button className="blueButton">SEND MESSAGE</button>
                </div>
              </form>
            )}
            {this.state.submitSuccess === "true" && (
              <div className="thanks">
                <h3>Thanks.</h3>

                <p>Your message has been sent successfully.</p>
              </div>
            )}
            {this.state.submitSuccess === "error" && (
              <div className="thanks">
                <p>
                  Sorry. There was an issue with sending your message. Please
                  try again later.
                </p>
              </div>
            )}
          </div>
        </main>

        <Footer />
      </div>
    );
  }
}

export default Contact;
