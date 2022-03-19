import React from "react";
import TopPage from "/src/Components/TopPage/TopPage";
import Footer from "/src/Components/Footer/Footer";
import "./css/index.css";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <TopPage />
        <main>
          <h1>About</h1>
          <div className="about">
            <div className="leftCol">
              <div className="container">
                <iframe
                  className="responsive-iframe"
                  src="https://www.youtube.com/embed/byqA_CilT6c"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="rightCol">
              <p>
                <strong>
                  Past history will teach us that in times of great Turmoil and
                  Crisis, it is often the artists and musicians that inspire the
                  people to have hope.
                </strong>{" "}
                The last so-called plague on the Planet was during the 16th
                century, and was called the Black Plague.
              </p>

              <p>
                Remember what happened after that to turn society around? The
                Renaissance happened. It was the artists, musicians and creative
                people of all kinds, that inspired the people to find new ways
                of living and thinking on the planet.
              </p>

              <p>
                Artists have lost their livelihood as this pandemic has caused a
                near extinction of the performing arts since all the performing
                venues, museums, galleries etc. have been shut down.
              </p>
              <p>
                GLOBAL PEACE RHYTHMS will feature artists and musicians from all
                over the world who are using their talents and art both for
                positive social change in the world and are also encouraging and
                inspiring people to also take action to create a better world.
              </p>

              <h3>
                <span style={{ whiteSpace: "nowrap" }}>
                  The arts have always been the soul of a culture.
                </span>
                <br />
                When art dies... the culture dies.
              </h3>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    );
  }
}

export default About;
