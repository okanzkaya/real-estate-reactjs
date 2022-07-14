import mainPagePic from "../../assets/images/main-page-pic.svg";
import magnify from "../../assets/images/magnify.svg";
import caption1 from "../../assets/images/caption-1.svg";
import caption2 from "../../assets/images/caption-2.svg";
import caption3 from "../../assets/images/caption-3.svg";
import { Footer } from "../footer/footer";
import "./body.css";
import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

export function Body() {
  return (
    <React.Fragment>
      <UpperBody />
      <Search />
      <BodyItems />
      <Footer />
    </React.Fragment>
  );
}

function UpperBody() {
  return (
    <div className="upper-body">
      <img src={mainPagePic}></img>
      <h1>
        FIND YOUR DREAM PLACE,
        <br />
        IN FEW SECONDS.
      </h1>
    </div>
  );
}

export function Search() {
  return (
    <div className="search-section">
      <h1>I am looking for:</h1>
      <ul>
        <li>Rental</li>
        <li>Lease</li>
        <li id="selected">For Sale</li>
      </ul>
      <div className="search">
        <img id="magnifying-glass" src={magnify}></img>
        <input></input>
      </div>
    </div>
  );
}

function BodyItems() {
  return (
    <div className="body-items">
      <div className="body-item">
        <img src={caption1} />
        <h1>Stick with your location</h1>
        <h2>
          Demo Real Estate finds best deal according to <br />
          your current location.
        </h2>
        <Link to="/sale">
          <button>Find a home</button>
        </Link>
      </div>
      <div className="body-item">
        <img src={caption3} />
        <h1>Get the best deal</h1>
        <h2>
          Demo Real Estate helps you to
          <br /> find the best deal for your budget.
        </h2>
        <button>Get Offer</button>
      </div>
      <div className="body-item">
        <img src={caption2} />
        <h1>Your Security is our priority</h1>
        <h2>
          Demo Real Estate cares about your security, we make sure that we
          provide a security.
        </h2>
        <button>Privacy Policy</button>
      </div>
    </div>
  );
}
