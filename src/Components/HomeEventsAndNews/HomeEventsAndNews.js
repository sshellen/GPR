import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import "./css/index.css";
const HomeEventsAndNews = () => {
  const [news, setNews] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    let data = fetch(
      `${process.env.API_URL}/api/news-articles?sort[0]=date%3Aasc&populate=*`,
      {
        method: "get",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        try {
          setNews(data.data);
        } catch (e) {
          console.log("error: ", e);
        }
      });
    return () => {
      setNews([]);
    };
  }, []);

  useEffect(() => {
    let data = fetch(
      `${process.env.API_URL}/api/events?sort[0]=date%3Aasc&populate=*`,
      {
        method: "get",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        try {
          setEvents(data.data);
        } catch (e) {
          console.log("error: ", e);
        }
      });
    return () => {
      setEvents([]);
    };
  }, []);

  const getMostRecentEvent = () => {};

  return (
    <section className="eventsNews">
      <h1>Events &amp; News</h1>
      <div className="eventsNewsCols">
        {events.length > 0 && (
          <div className="eventsCol recentEventCol">
            <div className="recentEventThumb">
              <img
                src={`${events[0].attributes.image.data.attributes.formats.medium.url}`}
              />
            </div>
            <div className="title">{events[0].attributes.name}</div>
            <div className="date">
              {" "}
              {moment(events[0].attributes.date)
                .utc()
                .format("MM/DD/YYYY,  h:mm a")}
            </div>
            <div className="teaser">
              {events[0].attributes.description.substr(0, 100) + " ..."}
            </div>
            <Link className="learnMore black">LEARN MORE</Link>
          </div>
        )}
        <div className="eventsCol middleCol">
          <h2>
            <Link>Events</Link>
          </h2>
          {events &&
            events.map((event, index) => {
              if (index < 3) {
                let teaser =
                  event.attributes.description.substr(0, 100) + " ...";
                return (
                  <div className="eventNewsCol" key={event.id}>
                    <div className="title">{event.attributes.name}</div>
                    <div className="date">
                      {moment(event.attributes.date)
                        .utc()
                        .format("MM/DD/YYYY,  h:mm a")}
                    </div>
                    <div className="teaser">{teaser}</div>
                    <Link className="learnMore black">LEARN MORE</Link>
                  </div>
                );
              }
            })}
        </div>
        <div className="eventsCol">
          <h2>
            <Link>News</Link>
          </h2>
          {news &&
            news.map((article, index) => {
              if (index < 3) {
                let teaser =
                  article.attributes.description.substr(0, 100) + " ...";
                return (
                  <div className="eventNewsCol" key={article.id}>
                    <div className="title">{article.attributes.title}</div>

                    <div className="teaser">{teaser}</div>
                    <Link className="learnMore black">LEARN MORE</Link>
                  </div>
                );
              }
            })}
        </div>
      </div>
    </section>
  );
};

export default HomeEventsAndNews;
