import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import Loader from "./Components/Loader";
import "../css/index.css";
const { BrowserRouter, Route, Switch } = require("react-router-dom");
const Home = lazy(() => import("./Pages/Home/Home"));
const About = lazy(() => import("./Pages/About/About"));
const Contact = lazy(() => import("./Pages/Contact/Contact"));
const News = lazy(() => import("./Pages/News/News"));
const Events = lazy(() => import("./Pages/Events/Events"));
const ViewArtists = lazy(() => import("./Pages/Artists/ViewArtists"));
const Contribute = lazy(() => import("./Pages/Artists/Contribute"));
const PageNotFound = lazy(() => import("./Pages/PageNotFound/PageNotFound"));
const Routes = (
  <BrowserRouter>
    <Suspense fallback=<Loader />>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/news" component={News} />
        <Route path="/events" component={Events} />
        <Route path="/contribute" component={Contribute} />
        <Route path="/viewartists" component={ViewArtists} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </Suspense>
  </BrowserRouter>
);

ReactDOM.render(Routes, document.getElementById("app"));
