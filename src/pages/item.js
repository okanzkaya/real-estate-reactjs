import React from "react";
import { Navbar } from "../components/navbar/navbar";
import { Footer } from "../components/footer/footer";
import "./item.css";
import house1 from "../assets/images/house1.svg";
import dropdownIcon from "../assets/images/dropdown-icon.svg";

export function Item() {
  return (
    <React.Fragment>
      <Navbar />
      <ItemBody />
      <Footer />
    </React.Fragment>
  );
}

function ItemBody() {
  return (
    <div className="item-body">
      <h2>House 1, Lorem Ipsum Dolor St. Consectetur ave</h2>
      <img src={house1} />
      <div className="house-info">
        <p>$290,048</p>
        <div id="add-favorites">Add Favorites</div>
        <div id="apply">Apply</div>
      </div>
      <h1>Home Features:</h1>
      <h2>
        The house has 3 bedrooms, 2 bathrooms and 40m2 garden. Lorem ipsum dolor
        sit amet consectetur adispiscin ullamcorper.
      </h2>
      <h1>Detailed Info:</h1>
      <h2>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit
        ullamcorper faucibus pellentesque eros sed adipiscing lorem a. Quam mi
        metus lorem at mattis blandit suspendisse donec. Rhoncus amet aliquet
        nibh pellentesque tellus non cras senectus. Nibh id sit nisl, placerat.
      </h2>
      <a className="info">
        More Information
        <img src={dropdownIcon} />
      </a>
    </div>
  );
}
