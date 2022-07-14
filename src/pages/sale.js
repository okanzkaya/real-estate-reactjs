import React, { useEffect, useState } from "react";
import { Navbar } from "../components/navbar/navbar";
import magnify from "../assets/images/magnify.svg";
import dropdownIcon from "../assets/images/dropdown-icon.svg";
import house1 from "../assets/images/house1.svg";
import house2 from "../assets/images/house2.svg";
import house3 from "../assets/images/house3.svg";
import house4 from "../assets/images/house4.svg";
import illustration from "../assets/images/illustration.svg";
import "./sale.css";
import { Footer } from "../components/footer/footer";
import { BrowserRouter, Route, Link } from "react-router-dom";

/* const sortAscending = () => {
    db = db.sort(function (a, b) {
        return b.price - a.price
    })
} */

export function Sale() {
  return (
    <React.Fragment>
      <Navbar />
      <Search />
      <SaleBody />
      <Mail />
      <Footer />
    </React.Fragment>
  );
}

function Search() {
  return (
    <div className="search-section">
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

function SaleBody() {
  const [db, setDb] = useState([
    { img: house1, price: 46000 },
    { img: house2, price: 58000 },
    { img: house3, price: 82000 },
    { img: house4, price: 32000 },
  ]);
  const sortDescending = () => {
    setDb([
      ...db.sort(function(a, b) {
        return b.price - a.price;
      }),
    ]);
  };
  const sortAscending = () => {
    setDb([
      ...db.sort(function(a, b) {
        return a.price - b.price;
      }),
    ]);
  };
  return (
    <React.Fragment>
      <div className="sort">
        <p>Sort By</p>
        <div className="dropdown">
          <img id="dropdown-btn" src={dropdownIcon} />
          <div className="dropdown-content">
            <a href="#" onClick={sortAscending}>
              Price Ascending
            </a>
            <a onClick={sortDescending} href="#">
              Price Descending
            </a>
          </div>
        </div>
      </div>
      <div className="sale-body-item">
        <img src={db[0].img} />
        <div className="house-text">
          <div className="house-text-item">
            <h1>For Sale</h1>
            <p>${db[0].price}</p>
          </div>
          <div className="house-text-item">
            <h1>Adress</h1>
            <p>Lorem Ipsum St.</p>
          </div>
          <div className="house-text-item">
            <p>3 bedrooms,</p>
            <p>2 bathrooms,</p>
            <p>40m2 garden</p>
          </div>
        </div>
        <Link to="/item">
          <button>More Information</button>
        </Link>
      </div>
      <div className="sale-body-item">
        <img src={db[1].img} />
        <div className="house-text">
          <div className="house-text-item">
            <h1>For Sale</h1>
            <p>${db[1].price}</p>
          </div>
          <div className="house-text-item">
            <h1>Adress</h1>
            <p>Lorem Ipsum St.</p>
          </div>
          <div className="house-text-item">
            <p>3 bedrooms,</p>
            <p>2 bathrooms,</p>
            <p>40m2 garden</p>
          </div>
        </div>
        <button>More Information</button>
      </div>
      <div className="sale-body-item">
        <img src={db[2].img} />
        <div className="house-text">
          <div className="house-text-item">
            <h1>For Sale</h1>
            <p>${db[2].price}</p>
          </div>
          <div className="house-text-item">
            <h1>Adress</h1>
            <p>Lorem Ipsum St.</p>
          </div>
          <div className="house-text-item">
            <p>3 bedrooms,</p>
            <p>2 bathrooms,</p>
            <p>40m2 garden</p>
          </div>
        </div>
        <button>More Information</button>
      </div>
      <div className="sale-body-item">
        <img src={db[3].img} />
        <div className="house-text">
          <div className="house-text-item">
            <h1>For Sale</h1>
            <p>${db[3].price}</p>
          </div>
          <div className="house-text-item">
            <h1>Adress</h1>
            <p>Lorem Ipsum St.</p>
          </div>
          <div className="house-text-item">
            <p>3 bedrooms,</p>
            <p>2 bathrooms,</p>
            <p>40m2 garden</p>
          </div>
        </div>
        <button>More Information</button>
      </div>
    </React.Fragment>
  );
}

function Mail() {
  return (
    <div className="mail">
      <div className="mail-item">
        <img src={illustration} />
      </div>
      <div className="mail-item">
        <h1>
          Share your e-mail address with us, <br />
          get the best deal.
        </h1>
        <div className="search">
          <input placeholder="johndoe@mail.com" id="mail-input"></input>
        </div>
        <button>Submit</button>
      </div>
    </div>
  );
}
