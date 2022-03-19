import React from "react";
import ReactMarkdown from "react-markdown";
import qs from "qs";
import moment from "moment";
import TopPage from "/src/components/TopPage/TopPage";
import Footer from "/src/components/Footer/Footer";
import leftPaddle from "/svg/leftArrow.svg";
import rightPaddle from "/svg/rightArrow.svg";
import "./css/index.css";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = { events: [], curMonth: 0, showMonth: false, month: 2 };
  }

  fetchData = async (url) => {
    let data = await fetch(url, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return data;
  };

  viewEvents = (type) => {
    if (type === "all") {
      this.viewAllEvents.classList.add("selected");
      this.viewMonthlyEvents.classList.remove("selected");
      this.setState({ showMonth: false }, () => {
        this.showAllEvents();
      });
    } else {
      this.viewMonthlyEvents.classList.add("selected");
      this.viewAllEvents.classList.remove("selected");
      this.setState({ showMonth: true }, () => {
        this.leftPaddle = document.getElementById("leftPaddle");
        this.getDates();
      });
    }
  };

  changeDate = (direction) => {
    if (direction === "increment") {
      this.setState({ month: this.state.month + 1 }, () => {
        this.getDates(this.state.month);
      });
      this.leftPaddle.style.fill = "#011526";
    } else {
      if (this.state.curMonth <= this.state.month - 1) {
        this.setState({ month: this.state.month - 1 }, () => {
          if (this.state.curMonth === this.state.month) {
            this.leftPaddle.style.fill = "#ccc";
          }
          this.getDates(this.state.month);
        });
      }
    }
  };

  showAllEvents = () => {
    this.fetchData(`${process.env.API_URL}/api/events?populate=*`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ curMonth: moment().month() });
        this.setState({ events: data.data });
      });
  };

  getDates = () => {
    const firstDayOfTheMonth = moment()
      .month(this.state.month)
      .startOf("month")
      .format("YYYY-MM-DD");
    const lastDayOfTheMonth = moment()
      .month(this.state.month)
      .endOf("month")
      .format("YYYY-MM-DD");

    const query = qs.stringify({
      filters: {
        $and: [
          {
            date: {
              $gte: firstDayOfTheMonth,
            },
          },
          {
            date: {
              $lte: lastDayOfTheMonth,
            },
          },
        ],
      },
    });
    const request = `${process.env.API_URL}/api/events?${query}&populate=*`;

    this.fetchData(request)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ events: data.data });
      });
  };

  componentDidMount() {
    this.viewAllEvents = document.getElementById("viewAllEvents");
    this.viewMonthlyEvents = document.getElementById("viewMonthlyEvents");
    this.showAllEvents();
  }

  render() {
    return (
      <div>
        <TopPage />
        <main>
          <h1>Events</h1>

          <div className="events">
            <div className="buttonBar">
              <button
                id="viewAllEvents"
                className="navOption selected"
                onClick={() => this.viewEvents("all")}
              >
                VIEW ALL EVENTS
              </button>
              <button
                id="viewMonthlyEvents"
                className="navOption"
                onClick={() => this.viewEvents("monthly")}
              >
                VIEW EVENTS BY MONTH
              </button>
            </div>
            {this.state.showMonth === true && (
              <div className="monthPicker">
                <div className="leftPaddle">
                  <a onClick={() => this.changeDate("decrement")}>
                    <svg
                      width="16"
                      height="34"
                      viewBox="0 0 24 42"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        id="leftPaddle"
                        d="M0 21L24 0.215393L24 41.7846L0 21Z"
                        fill="#CCCCCC"
                      />
                    </svg>
                  </a>
                </div>
                <div className="month">{months[this.state.month]}</div>
                <div className="rightPaddle">
                  <a onClick={() => this.changeDate("increment")}>
                    <svg
                      width="16"
                      height="34"
                      viewBox="0 0 24 42"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        id="rightPaddle"
                        d="M24 21L0 0.215393L0 41.7846L24 21Z"
                        fill="#011526"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            )}
            {this.state.events &&
              this.state.events.length > 0 &&
              this.state.events.map((event) => (
                <article className="event" key={`event${event.id}`}>
                  <article>
                    <h3>{event.attributes.name}</h3>
                    <div className="date">
                      {moment(event.attributes.date)
                        .utc()
                        .format("MM/DD/YYYY,  h:mm a")}
                    </div>
                    <ReactMarkdown children={event.attributes.description} />
                  </article>
                  {event.attributes.image && (
                    <div className="media">
                      <img
                        src={`${process.env.API_URL}${event.attributes.image.data.attributes.formats.medium.url}`}
                      />
                    </div>
                  )}
                </article>
              ))}
            {this.state.events && this.state.events.length === 0 && (
              <h3 className="noResults">There are no events at this time.</h3>
            )}
          </div>
        </main>

        <Footer />
      </div>
    );
  }
}

export default Events;
