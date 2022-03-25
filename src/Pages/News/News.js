import React from "react";
import ReactMarkdown from "react-markdown";
import TopPage from "/src/Components/TopPage/TopPage";
import Footer from "/src/Components/Footer/Footer";
import "./css/index.css";
const teaserLength = 1000;
class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = { news: [{ readMore: [] }] };
  }

  fetchData = async () => {
    let data = await fetch(
      `${process.env.API_URL}/api/news-articles?populate=*`,
      {
        method: "get",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return data;
  };

  componentDidMount() {
    let readMore = { readMore: [] };
    this.fetchData()
      .then((response) => response.json())
      .then((data) => {
        this.setState({ news: data.data });
      });
  }

  render() {
    return (
      <div>
        <TopPage />
        <main>
          <h1>News</h1>
          <div className="news">
            {this.state.news &&
              this.state.news.length > 0 &&
              this.state.news.map((article, index) => {
                {
                  article;
                }
                if (article.attributes && article.attributes.archived !== true)
                  return (
                    <article className="article" key={`article-${article.id}`}>
                      <article>
                        <h3>{article.attributes.title}</h3>
                        {((this.state.news[0].readMore &&
                          this.state.news[0].readMore.includes(article.id)) ||
                          article.attributes.description.length <=
                            teaserLength) && (
                          <ReactMarkdown
                            children={
                              this.state.news[index].attributes.description
                            }
                          />
                        )}
                        {article.attributes.description.length > teaserLength &&
                          !(
                            this.state.news[0].readMore &&
                            this.state.news[0].readMore.includes(article.id)
                          ) && (
                            <ReactMarkdown
                              children={
                                article.attributes.description.substr(
                                  0,
                                  teaserLength
                                ) + "..."
                              }
                            />
                          )}

                        {article.attributes.description.length > teaserLength &&
                          !(
                            this.state.news[0].readMore &&
                            this.state.news[0].readMore.includes(article.id)
                          ) && (
                            <div
                              class="readMore"
                              onClick={() => {
                                let readMore = this.state.news[0].readMore
                                  ? this.state.news[0].readMore
                                  : [];
                                this.setState({
                                  news: [
                                    {
                                      readMore: [article.id, ...readMore],
                                    },
                                    ...this.state.news,
                                  ],
                                });
                              }}
                            >
                              <button>READ MORE</button>
                            </div>
                          )}

                        {article.attributes.description.length > teaserLength &&
                          this.state.news[0].readMore &&
                          this.state.news[0].readMore.includes(article.id) && (
                            <div
                              class="readMore"
                              onClick={() =>
                                this.setState({
                                  news: [
                                    {
                                      readMore:
                                        this.state.news[0].readMore.filter(
                                          (val) => val !== article.id
                                        ),
                                    },
                                    ...this.state.news,
                                  ],
                                })
                              }
                            >
                              <button>READ LESS</button>
                            </div>
                          )}
                      </article>
                      <div className="media">
                        {article.attributes.videoURL !== null && (
                          <>
                            <div className="container">
                              <iframe
                                className="responsive-iframe"
                                src={article.attributes.videoURL}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                              ></iframe>
                            </div>
                            <div className="tagline">
                              {article.attributes.videoTagline}
                            </div>
                          </>
                        )}
                        {article.attributes.videoURL === null &&
                          article.attributes.image.data.attributes.formats && (
                            <>
                              <img
                                src={`${article.attributes.image.data.attributes.formats.medium.url}`}
                              />
                              <div className="tagline">
                                {article.attributes.imageTagline}
                              </div>
                            </>
                          )}
                      </div>
                    </article>
                  );
              })}
          </div>
        </main>

        <Footer />
      </div>
    );
  }
}

export default News;
