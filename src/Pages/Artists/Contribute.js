import React from "react";
import SpotlightBanner from "/src/Components/SpotlightBanner/SpotlightBanner";
import qs from "qs";
import "./css/index.css";
import TopPage from "/src/Components/TopPage/TopPage";
import Footer from "/src/Components/Footer/Footer";

class Contribute extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      submitSuccess: "",
      name: "",
      email: "",
      mediaTitle: "",
      description: "",
    };
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
    let fieldsToCheck = ["name", "email", "mediaTitle", "genre", "description"];
    let errors = false;

    Array.prototype.slice.call(formEls).map((formEl) => {
      if (
        fieldsToCheck.includes(formEl.name) &&
        (formEl.value === "" || formEl.value === "SelectOne")
      ) {
        formEl.parentNode.classList.add("required");
        let requiredField = document.createElement("span");
        requiredField.className = "requiredTag";
        requiredField.appendChild(document.createTextNode("REQUIRED FIELD "));

        formEl.parentNode
          .getElementsByTagName("label")[0]
          .prepend(requiredField);
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
                name="contributeForm"
                onSubmit={(e) => {
                  this.onSubmit(e);
                  return false;
                }}
                method="POST"
              >
                <input type="hidden" name="form-name" value="contributeForm" />
                <div className="formRow">
                  <label htmlFor="name">
                    Name<sup>*</sup>{" "}
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={(e) => this.setState({ name: e.target.value })}
                  />
                </div>

                <div className="formRow">
                  <label htmlFor="email">
                    Email<sup>*</sup>{" "}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="text"
                    value={this.state.email}
                    onChange={(e) => this.setState({ email: e.target.value })}
                  />
                </div>

                <div className="formRow">
                  <label htmlFor="mediaTitle">
                    Title of media<sup>*</sup>
                  </label>
                  <input
                    id="mediaTitle"
                    name="mediaTitle"
                    type="text"
                    value={this.state.mediaTitle}
                    onChange={(e) =>
                      this.setState({ mediaTitle: e.target.value })
                    }
                  />
                </div>
                <div className="formRow">
                  <label htmlFor="genre">
                    Genre<sup>*</sup>
                  </label>
                  <select name="genre" id="genre">
                    <option value="SelectOne">Select One</option>
                    <option value="Rock">Rock</option>
                    <option value="RandB">R&amp;B</option>
                    <option value="Jazz">Jazz</option>
                    <option value="HipHop">Hip Hop</option>
                    <option value="Blues">Blues</option>
                    <option value="Folk">Folk</option>
                    <option value="Reggae">Reggae</option>
                    <option value="Pop">Pop</option>
                    <option value="Country">Country</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="formRow">
                  <label htmlFor="description">
                    Description of your band or you as an artist.<sup>*</sup>{" "}
                  </label>
                  <textarea
                    id="description"
                    type="text"
                    name="description"
                    value={this.state.description}
                    onChange={(e) =>
                      this.setState({ description: e.target.value })
                    }
                  ></textarea>
                </div>

                <h3>Links to Social Media</h3>

                <div className="formRow">
                  <label htmlFor="youtubeLinks">Links to YouTube clips</label>
                  <textarea
                    id="youtubeLinks"
                    type="text"
                    name="youtubeLinks"
                    value={this.state.youtubeLinks}
                    onChange={(e) =>
                      this.setState({ youtubeLinks: e.target.value })
                    }
                  ></textarea>
                </div>

                <div className="formRow">
                  <label htmlFor="twitterLinks">Twitter Links</label>
                  <textarea
                    id="twitterLinks"
                    type="text"
                    name="twitterLinks"
                    value={this.state.twitterLinks}
                    onChange={(e) =>
                      this.setState({ twitterLinks: e.target.value })
                    }
                  ></textarea>
                </div>
                <div className="formRow">
                  <label htmlFor="facebookLinks">Facebook Links</label>
                  <textarea
                    id="facebookLinks"
                    type="text"
                    name="facebookLinks"
                    value={this.state.facebookLinks}
                    onChange={(e) =>
                      this.setState({ facebookLinks: e.target.value })
                    }
                  ></textarea>
                </div>

                <div className="formRow">
                  <label htmlFor="instagramLinks">Instagram Links</label>
                  <textarea
                    id="instagramLinks"
                    type="text"
                    name="instagramLinks"
                    value={this.state.instagramLinks}
                    onChange={(e) =>
                      this.setState({ instagramLinks: e.target.value })
                    }
                  ></textarea>
                </div>

                <div className="formRow">
                  <label htmlFor="personalSiteLinks">
                    Links to personal/portfolio sites
                  </label>
                  <textarea
                    id="personalSiteLinks"
                    type="text"
                    name="personalSiteLinks"
                    value={this.state.personalSiteLinks}
                    onChange={(e) =>
                      this.setState({ personalSiteLinks: e.target.value })
                    }
                  ></textarea>
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
            )}
            {this.state.submitSuccess === "true" && (
              <div className="thanks">
                <h3>Thanks for your submission.</h3>

                <p>We'll get back to you as soon as we can.</p>
              </div>
            )}
            {this.state.submitSuccess === "error" && (
              <div className="thanks">
                <p>
                  Sorry. There was an issue with sending your submission. Please
                  try again later.
                </p>
              </div>
            )}
          </section>
        </main>
        <Footer />
      </>
    );
  }
}
export default Contribute;
