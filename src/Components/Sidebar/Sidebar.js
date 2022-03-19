import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./css/index.css";
const Sidebar = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    let data = fetch(`${process.env.API_URL}/api/spotlights?populate=*`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        try {
          setData(data.data[0].attributes);
        } catch (e) {
          console.log("error: ", e);
        }
      });
    return () => {
      setData([]);
    };
  }, []);

  return (
    <aside className="sideBar">
      <div className="navOption">
        <Link to={"/viewartists"}>VIEW ALL ARTISTS</Link>
      </div>
      <div className="navOption">
        <Link to={"/contribute"}>CONTRIBUTE AS AN ARTIST</Link>
      </div>
      {data && data.image && (
        <div className="content">
          <h2>In The Spotlight</h2>
          <div className="media">
            {data.videoURL !== null && (
              <>
                <div className="container">
                  <iframe
                    className="responsive-iframe"
                    src={data.videoURL}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="tagline">{data.videoTagline}</div>
              </>
            )}
            {data.videoURL === null && data.image.data.attributes.formats && (
              <>
                <img
                  src={`${process.env.API_URL}${data.image.data.attributes.formats.medium.url}`}
                />
                <div className="tagline">{data.imageTagline}</div>
              </>
            )}
          </div>
          <div className="title">{data.name}</div>
          <p>{data.description}</p>
          <Link className="learnMore white" to={data.url}>
            LEARN MORE
          </Link>

          <hr className="whiteSeparator" />
          <h3>Stay up to do date with Global Peace Rhythms.</h3>
          <div className="newsLetter">
            <label htmlFor="newsletterSidebar">
              Sign up for our newsletter
            </label>
            <input type="text" placeholder="Email" id="newsletterSidebar" />
            <button className="sidebar blueButton">SUBSCRIBE</button>
          </div>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
