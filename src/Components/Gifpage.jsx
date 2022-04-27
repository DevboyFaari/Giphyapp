import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function Gifpage() {
  const APP_KEY = "deokzgUjxm6QHQdp3H3aca1LSZcCpucc";
  const { id } = useParams();
  const [prod, setProd] = useState("");

  useEffect(() => {
    const getProd = async () => {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/${id}?api_key=${APP_KEY}`
      );
      const data = await response.json();
      setProd(data.data);
      console.log(data);
    };
    getProd();
  }, [id]);
  if (!prod) {
    return null;
  }
  return (
    <div>
      <a href={prod.source} download>
        <img src={prod.images.downsized.url} className="dip" alt="images" />
      </a>
      <h4 className="lens">{prod.title}</h4>
      <p>Rating: {prod.rating}</p>
      <p>Type: {prod.type}</p>
      <p>Source: {prod.source}</p>
      <NavLink to={"/"}>
        <button className="back">Back</button>
      </NavLink>
    </div>
  );
}
