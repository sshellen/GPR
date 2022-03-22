import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./css/index.css";
const Sidebar = () => {
  const [data, setData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    let form = e.target;

    let formData = new FormData(form);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(
        Array.prototype.slice
          .call(form.getElementsByClassName("emailInput"))
          .map((input) => (input.value = ""))
      )
      .catch((error) => console.log(error));
  };

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
                <img src={`${data.image.data.attributes.formats.medium.url}`} />
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
            <form name="subscribeSidebar" onSubmit={(e) => handleSubmit(e)}>
              <label htmlFor="newsletterSidebar">
                Sign up for our newsletter
              </label>
              <input type="hidden" name="form-name" value="subscribeSidebar" />
              <input
                type="text"
                placeholder="Email"
                className="emailInput"
                id="newsletterSidebar"
                name="newsletterSidebar"
              />
              <button className="sidebar blueButton" type="submit">
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
