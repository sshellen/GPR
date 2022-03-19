import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import Loader from "./components/Loader";
import "../css/index.css";
const { BrowserRouter, Route, Switch } = require("react-router-dom");
const Home = lazy(() => import("./pages/Home/Home"));
const About = lazy(() => import("./pages/About/About"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const News = lazy(() => import("./pages/News/News"));
const Events = lazy(() => import("./pages/Events/Events"));
const ViewArtists = lazy(() => import("./pages/Artists/ViewArtists"));
const Contribute = lazy(() => import("./pages/Artists/Contribute"));
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
      </Switch>
    </Suspense>
  </BrowserRouter>
);

ReactDOM.render(Routes, document.getElementById("app"));
