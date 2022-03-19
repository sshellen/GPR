import React from "react";
import TopPage from "/src/Components/TopPage/TopPage";
import Footer from "/src/Components/Footer/Footer";
import "./css/index.css";

class Contact extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <TopPage />
        <main>
          <h1>Contact</h1>
          <div className="contact">
            <h2>CONTACT FORM</h2>
            <form>
              <div className="formRow">
                <label htmlFor="name">
                  Name<sup>*</sup>{" "}
                </label>
                <input id="name" type="text" />
              </div>

              <div className="formRow">
                <label htmlFor="email">
                  Email<sup>*</sup>{" "}
                </label>
                <input id="email" type="text" />
              </div>

              <div className="formRow">
                <label htmlFor="subject">Subject</label>
                <input id="subject" type="text" />
              </div>

              <div className="formRow">
                <label htmlFor="message">
                  Message<sup>*</sup>{" "}
                </label>
                <textarea id="message" type="text"></textarea>
              </div>

              <div className="requiredFields">
                <sup>*</sup>Required fields
              </div>
              <div className="buttonBar">
                <button className="blueButton">SEND MESSAGE</button>
              </div>
            </form>
          </div>
        </main>

        <Footer />
      </div>
    );
  }
}

export default Contact;
