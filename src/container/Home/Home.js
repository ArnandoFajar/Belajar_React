import React, { Component, Fragment } from "react";
import BlogPost from "../pages/BlogPost/BlogPost";
import "./Home.css";
import YoutubeComp from "../../component/YoutubeComp/YoutubeComp";
import LifeCycleComp from "../pages/LifeCycleComp/LifeCycleComp";
import Product from "../pages/Product/Product";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import YoutubeComPage from "../pages/YoutubeComp/YoutubeComp";

class Home extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <div>
            <h2>Component Global</h2>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <Link to="/">BlogPost</Link>
              <Link to="/product">Product</Link>
              <Link to="/life">LifeCycle</Link>
              <Link to="/youtube">Youtube</Link>
            </nav>
          </div>
          <Routes>
            <Route exact path="/" element={<BlogPost />} />
            <Route path="/product" element={<Product />} />
            <Route path="/life" element={<LifeCycleComp />} />
            <Route path="/youtube" element={<YoutubeComPage />} />
          </Routes>
        </Fragment>
      </Router>
    );
  }
}

export default Home;
