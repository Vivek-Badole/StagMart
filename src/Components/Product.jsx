import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "./FormatPrice";

const Product = ({ id, name, image, price, category }) => {
  // console.log(image[0].url);
  return (
    <NavLink to={`/products/${id}`}>
      <div className="card">
        <figure>
          <img src={image[0].url} alt="images" />
          <figcaption className="caption">{category}</figcaption>
        </figure>
        <div className="card-data">
          <div className="card-data-flex">
            <h3>{name}</h3>
            <p className="card-data--price">{<FormatPrice price={price} />}</p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Product;
