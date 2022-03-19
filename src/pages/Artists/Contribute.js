import React from "react";
import SpotlightBanner from "/src/components/SpotlightBanner/SpotlightBanner";
import qs from "qs";
import "./css/index.css";
import TopPage from "/src/components/TopPage/TopPage";
import Footer from "/src/components/Footer/Footer";

class Contribute extends React.Component {
  render() {
    return (
      <>
        <TopPage />
        <SpotlightBanner />
        <h1>Artists</h1>
        <main className="artists">
          <aside className="filterNav">
            <div className="buttonBar">
              <button
                className="navOption"
                onClick={() => this.props.history.push("./viewartists")}
              >
                VIEW ARTISTS
              </button>
              <button
                className="navOption  selected"
                onClick={() => this.props.history.push("./contribute")}
              >
                CONTRIBUTE AS AN ARTIST
              </button>
            </div>
          </aside>
          <section className="contribute">
            <h2 className="viewHeading">Contribute as an Artist</h2>
            <div className="instructions">
              <p>
                Thanks for your interest in Global Peace Rhythms. We look
                forward to listening to your music.
              </p>

              <p>
                Please keep in mind that we do not host files on our site, but
                rather share links to any social media where you may have your
                music hosted (e.g. YouTube). You may also include links to sites
                that have more information about your music, including any
                personal sites that you may have.
              </p>

              <p>
                If we post your profile on this site, we may reach out to you
                via email for images that best represent you or your band.
              </p>
            </div>
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
                <input id="email" type="text" required={true} />
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
                <button className="blueButton" type="submit">
                  SUBMIT
                </button>
              </div>
            </form>
          </section>
        </main>
        <Footer />
      </>
    );
  }
}
export default Contribute;
