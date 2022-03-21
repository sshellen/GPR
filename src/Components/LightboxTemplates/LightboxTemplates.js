import React from "react";
import ReactDOM from "react-dom";
import ReactMarkdown from "react-markdown";
import "./css/index.css";
import close from "/img/close.png";
import { Link } from "react-router-dom";
import twitterBlack from "/img/twitterBlack.png";
import facebookBlack from "/img/facebookBlack.png";
import youtubeBlack from "/img/youtubeBlack.png";
import instagramBlack from "/img/instagramBlack.png";

class RenderTemplate extends React.Component {
  constructor(props) {
    super(props);
  }

  resizeContent() {
    this.lbDiv = document.getElementById("lightbox");
    this.lbDiv.style.width = window.innerWidth + "px";
    this.lbDiv.style.height = window.innerHeight + "px";
  }
  componentDidMount() {
    document.body.classList.add("fixed");
    this.resizeContent();
    window.addEventListener("resize", this.resizeContent);
  }

  componentWillUnmount() {
    document.body.classList.remove("fixed");
    window.removeEventListener("resize", this.resizeContent);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, document.body);
  }
}

class ArtistTemplate extends React.Component {
  render() {
    const { artist, closeHandler, open } = this.props;
    if (open === true) {
      return (
        <RenderTemplate>
          <div id="lightbox" className="lightbox">
            <div className="close">
              <a onClick={closeHandler}>
                <img src={close} />
              </a>
            </div>

            <div className="content">
              <div className="lightboxCols">
                <div className="leftCol">
                  <img
                    className="profileImg"
                    src={`${artist.image.data.attributes.formats.medium.url}`}
                  />
                  <div className="socialMedia">
                    {artist.facebook && artist.facebook !== null && (
                      <Link to={artist.facebook}>
                        <img src={facebookBlack} />
                      </Link>
                    )}
                    {artist.twitter && artist.twitter !== null && (
                      <Link to={artist.twitter}>
                        <img src={twitterBlack} />
                      </Link>
                    )}
                    {artist.youtube && artist.youtube !== null && (
                      <Link to={artist.youtube}>
                        <img src={youtubeBlack} />
                      </Link>
                    )}
                    {artist.instagram && artist.instagram !== null && (
                      <Link to={artist.instagram}>
                        <img src={instagramBlack} />
                      </Link>
                    )}
                  </div>
                </div>
                <div className="rightCol">
                  <h2>{artist.name}</h2>
                  <ReactMarkdown children={artist.description} />

                  <div className="info">
                    <div className="label">LOCATION: </div>
                    <div className="description">{artist.location}</div>
                  </div>
                  <div className="info">
                    <div className="label">WEBSITE: </div>
                    <div className="description">
                      <a href={artist.website}>{artist.website}</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="buttonRow">
                <button className="blueButton" onClick={closeHandler}>
                  CLOSE
                </button>
              </div>
            </div>
          </div>
        </RenderTemplate>
      );
    } else {
      return null;
    }
  }
}

class SpotlightTemplate extends React.Component {
  render() {
    const { spotlight, closeHandler, open } = this.props;
    if (open === true) {
      return (
        <RenderTemplate>
          <div id="lightbox" className="lightbox">
            <div className="close">
              <a onClick={closeHandler}>
                <img src={close} />
              </a>
            </div>

            <div className="content">
              <div className="lightboxCols">
                <div className="leftCol">
                  {spotlight.videoURL !== null && (
                    <>
                      <div className="container">
                        <iframe
                          className="responsive-iframe"
                          src={spotlight.videoURL}
                          title="YouTube video player"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                      <div className="tagline">{spotlight.videoTagline}</div>
                    </>
                  )}
                  {spotlight.videoURL === null &&
                    spotlight.image.data.attributes.formats && (
                      <>
                        <img
                          src={`${spotlight.image.data.attributes.formats.medium.url}`}
                        />
                        <div className="tagline">{spotlight.tagline}</div>
                      </>
                    )}
                </div>
                <div className="rightCol">
                  <h2>{spotlight.name}</h2>
                  <ReactMarkdown children={spotlight.description} />
                  <a className="learnMore black" href={spotlight.url}>
                    VISIT SITE
                  </a>
                </div>
              </div>
              <div className="buttonRow">
                <button className="blueButton" onClick={closeHandler}>
                  CLOSE
                </button>
              </div>
            </div>
          </div>
        </RenderTemplate>
      );
    } else {
      return null;
    }
  }
}

export { ArtistTemplate, SpotlightTemplate };
