import React, { useEffect, useState } from "react";
import Giphs from "./Giphs";
import { render, fireEvent, act } from "@testing-library/react";

export default function Giphy() {
  const APP_KEY = "deokzgUjxm6QHQdp3H3aca1LSZcCpucc";

  const [giphs, setGiphs] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("cow");

  useEffect(() => {
    const getGifs = async () => {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${APP_KEY}&q=${query}&limit=25&offset=0&rating=Y&lang=en`
      );
      const data = await response.json();
      setGiphs(data.data);
      console.log(data.data);
    };
    getGifs();
  }, [query]);

  const updateSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="test">
      <form className="form" onSubmit={getSearch}>
        <input
          data-testid="searchBar"
          type="text"
          placeholder="Search gif"
          value={search}
          onChange={updateSearch}
          className="textbar"
        />
        <button className="button" type="submit">
          Search
        </button>
      </form>
      <div>
        {giphs.map((giph) => (
          <Giphs
            data-testid="divWeWantToShow"
            id={giph.id}
            key={giph.title.key}
            title={giph.title}
            image={giph.images.downsized.url}
          />
        ))}
      </div>
    </div>
  );
}
