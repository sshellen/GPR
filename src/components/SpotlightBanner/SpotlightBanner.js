import React from "react";
import { Link } from "react-router-dom";
import { SpotlightTemplate } from "./src/components/LightboxTemplates/LightboxTemplates";
import "./css/index.css";
import spotlightBG from "/img/spotlightBG.png";
class SpotlightBanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spotlight: [], openState: false };
  }

  fetchData = async (url) => {
    const request = url;
    let data = await fetch(request, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return data;
  };

  closeHandler = () => {
    this.setState({ openState: false });
  };

  componentDidMount() {
    this.fetchData(`${process.env.API_URL}/api/spotlights?populate=*`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ spotlight: [data.data[0].attributes] });
      });
  }

  render() {
    return (
      <>
        <div className="spotlightBanner">
          {this.state.spotlight &&
            this.state.spotlight.length > 0 &&
            this.state.spotlight.map((data) => (
              <div className="bannerContent" key={`spotlight${data.id}`}>
                <div className="leftCol">
                  <div className="slogan">In the Spotlight</div>
                  <p className="tagline">{data.name}</p>
                  <button
                    className="blueButton"
                    onClick={() => this.setState({ openState: true })}
                  >
                    LEARN MORE
                  </button>
                </div>
                <div className="rightCol">
                  <img
                    src={`${process.env.API_URL}${data.logo.data.attributes.formats.thumbnail.url}`}
                  />
                  <div className="tagline">
                    <a href={data.url}>{data.tagline}</a>
                  </div>
                </div>
              </div>
            ))}

          <img src={spotlightBG} />
        </div>
        <SpotlightTemplate
          open={this.state.openState}
          spotlight={this.state.spotlight[0]}
          closeHandler={this.closeHandler}
        />
      </>
    );
  }
}

export default SpotlightBanner;
