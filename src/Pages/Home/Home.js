import React from "react";
import { Link } from "react-router-dom";
import qs from "qs";
import TopPage from "/src/Components/TopPage/TopPage";
import Sidebar from "/src/Components/Sidebar/Sidebar";
import Footer from "/src/Components/Footer/Footer";
import HomeEventsAndNews from "/src/Components/HomeEventsAndNews/HomeEventsAndNews";
import ArtistTiles from "/src/Components/ArtistTiles/ArtistTiles";
import "./css/index.css";
import bannerImg from "/img/homeBanner.png";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { artists: [] };
  }

  fetchData = async () => {
    const query = qs.stringify({
      filters: {
        featured: {
          $eq: true,
        },
      },
    });
    const request = `${process.env.API_URL}/api/artists?${query}&populate=*`;

    let data = await fetch(request, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return data;
  };

  componentDidMount() {
    this.fetchData()
      .then((response) => response.json())
      .then((data) => {
        this.setState({ artists: data.data });
      });
  }

  render() {
    return (
      <div>
        <TopPage />
        <div className="homeBanner">
          <div className="bannerContent">
            <div className="slogan">Create a Better World Through Music</div>
            <p className="tagline">
              Global Peace Rhythms features artists who are making positive
              changes on earth.
            </p>
            <button
              className="blueButton"
              onClick={() => this.props.history.push("./about")}
            >
              LEARN MORE
            </button>
          </div>
          <img src={bannerImg} />
        </div>
        <main>
          <h1>Featured Artists</h1>
          <div className="featuredArtists">
            {this.state.artists && this.state.artists.length > 0 && (
              <ArtistTiles artists={this.state.artists} />
            )}

            <Sidebar />
          </div>
          <HomeEventsAndNews />
        </main>

        <Footer />
      </div>
    );
  }
}

export default Home;
