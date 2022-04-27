import React from "react";
import "./giphs.css";
import "tachyons";
import { NavLink } from "react-router-dom";

export default function Giphs({ title, image, id }) {
  console.log(id);
  return (
    <div className="move">
      <NavLink to={"/" + id}>
        <img
          src={image}
          data-testid="thingWeWantToShow"
          className="image grow"
          alt=""
        />
      </NavLink>
      <h4 className="text-color">{title}</h4>
    </div>
  );
}
