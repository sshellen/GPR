import React from "react";
import { Link } from "react-router-dom";
import notFound from "/img/notFound.jpg";
import News from "../News/News";
import TopPage from "/src/Components/TopPage/TopPage";
import Footer from "/src/Components/Footer/Footer";
import "./css/styles.css";
const PageNotFound = () => {
  return (
    <div>
      <TopPage />
      <main className="notFound">
        <h1>Page not found.</h1>
        <Link to="">Go to home page</Link>

        <img src={notFound} />
      </main>

      <Footer />
    </div>
  );
};

export default PageNotFound;
