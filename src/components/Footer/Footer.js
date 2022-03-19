import React from "react";
import { Link } from "react-router-dom";
import "./css/index.css";
import facebook from "/img/facebookWhite.png";
import twitter from "/img/twitterWhite.png";
import youtube from "/img/youTubeWhite.png";
import instagram from "/img/instagramWhite.png";

const Footer = () => {
  return (
    <>
      <footer className="desktop">
        <div className="top">
          <div>
            <h3>Company</h3>
            <ul>
              <li>
                <Link>About</Link>
              </li>
              <li>
                <Link>Contact Us</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>Music</h3>
            <ul>
              <li>
                <Link>Artists</Link>
              </li>
              <li>
                <Link>Events</Link>
              </li>
              <li>
                <Link>News</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>Resources</h3>
            <div className="multiColList">
              <ul>
                <li>
                  <Link>Global Peace Media</Link>
                </li>
                <li>
                  <Link>Farming and Sustainability</Link>
                </li>
                <li>
                  <Link>Free Education</Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link>Drug Abuse Awareness</Link>
                </li>
                <li>
                  <Link>Free Music Progams</Link>
                </li>
                <li>
                  <Link>World Hunger</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="CTAs">
            <div className="newsLetter">
              <label htmlFor="">Sign up for our newsletter</label>
              <input type="text" placeholder="Email" />
              <button className="blueHalfButton">SUBSCRIBE</button>
            </div>
          </div>
        </div>
        <div className="socialMedia">
          <Link>
            <img src={facebook} />
          </Link>
          <Link>
            <img src={twitter} />
          </Link>
          <Link>
            <img src={youtube} />
          </Link>
          <Link>
            <img src={instagram} />
          </Link>
        </div>
        <div className="copyright">&copy; 2022 Global Peace Rhythms</div>
      </footer>
      <footer className="tablet">
        <div className="top">
          <div>
            <h3>Company</h3>
            <ul>
              <li>
                <Link>About</Link>
              </li>
              <li>
                <Link>Contact Us</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>Music</h3>
            <ul>
              <li>
                <Link>Artists</Link>
              </li>
              <li>
                <Link>Events</Link>
              </li>
              <li>
                <Link>News</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3>Resources</h3>
            <ul>
              <li>
                <Link>Global Peace Media</Link>
              </li>
              <li>
                <Link>Farming and Sustainability</Link>
              </li>
              <li>
                <Link>Free Education</Link>
              </li>

              <li>
                <Link>Drug Abuse Awareness</Link>
              </li>
              <li>
                <Link>Free Music Progams</Link>
              </li>
              <li>
                <Link>World Hunger</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="bottom">
          <div className="newsLetter">
            <label htmlFor="footerEmail">Sign up for our newsletter</label>
            <input id="footerEmail" type="text" placeholder="Email" />
            <button className="blueHalfButton">SUBSCRIBE</button>
          </div>
        </div>
        <div className="socialMedia">
          <Link>
            <img src={facebook} />
          </Link>
          <Link>
            <img src={twitter} />
          </Link>
          <Link>
            <img src={youtube} />
          </Link>
          <Link>
            <img src={instagram} />
          </Link>
        </div>

        <div className="copyright">&copy; 2022 Global Peace Rhythms</div>
      </footer>
      <footer className="mobile">
        <div className="top">
          <div>
            <h3>Company</h3>
            <ul>
              <li>
                <Link>About</Link>
              </li>
              <li>
                <Link>Contact Us</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>Music</h3>
            <ul>
              <li>
                <Link>Artists</Link>
              </li>
              <li>
                <Link>Events</Link>
              </li>
              <li>
                <Link>News</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="bottom">
          <div>
            <h3>Resources</h3>

            <ul>
              <li>
                <Link>Global Peace Media</Link>
              </li>
              <li>
                <Link>Farming and Sustainability</Link>
              </li>
              <li>
                <Link>Free Education</Link>
              </li>

              <li>
                <Link>Drug Abuse Awareness</Link>
              </li>
              <li>
                <Link>Free Music Progams</Link>
              </li>
              <li>
                <Link>World Hunger</Link>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <div className="newsLetter">
            <label htmlFor="">Sign up for our newsletter</label>
            <input type="text" placeholder="Email" />
            <button className="blueHalfButton">SUBSCRIBE</button>
          </div>
        </div>
        <div className="socialMedia">
          <Link>
            <img src={facebook} />
          </Link>
          <Link>
            <img src={twitter} />
          </Link>
          <Link>
            <img src={youtube} />
          </Link>
          <Link>
            <img src={instagram} />
          </Link>
        </div>

        <div className="copyright">&copy; 2022 Global Peace Rhythms</div>
      </footer>
    </>
  );
};

export default Footer;
