import React from "react";
import { Link } from "react-router-dom";
import "./MoviesPage.css";

const MoviesPage = () => {
  const movies = [
    { image: "https://tse2.mm.bing.net/th?id=OIP.TO19EUfUlgFoOe2fwx-pAwHaEK&pid=Api&P=0&h=180", name: "BIGIL" },
    { image: "https://tse4.mm.bing.net/th?id=OIP.imSk1lETn7aYdoVBDxvz9gHaEK&pid=Api&P=0&h=180", name: "THUNIVU" },
    { image: "https://tse3.mm.bing.net/th?id=OIP.NWPz8-XnpkLug0c9gD3PPwHaEH&pid=Api&P=0&h=180", name: "DON" },
    { image: "https://tse2.mm.bing.net/th?id=OIP.0vR7YupbjPWZhtvGQ9EMJwHaEK&pid=Api&P=0&h=180", name: "ADANGAMARU" },
    { image: "https://tse3.mm.bing.net/th?id=OIP.FeGTSN1GTckuhYJ2km21twHaEK&pid=Api&P=0&h=180", name: "CHENNAI EXPRESS" },
    { image: "https://tse1.mm.bing.net/th?id=OIP.NMrHFttXuJgeJPDrDaC0XwHaEK&pid=Api&P=0&h=180", name: "SEEMARAJA" },
    { image: "https://tse2.mm.bing.net/th?id=OIP.FWEBKHUEmCX9wXz75CLE0QHaEK&pid=Api&P=0&h=180", name: "MUMBAI EXPRESS" },
    { image: "https://tse4.mm.bing.net/th?id=OIP._ttTScY8nhhpRyufEl6fbQHaEK&pid=Api&P=0&h=180", name: "BHOOMI" },
  ];

  return (
    <div className="main-content">
      <h2>Movies</h2>
      <div className="movie-container">
        {movies.map((movie, index) => (
          <Link to={`/booking/${movie.name}`} key={index} className="movie-link">
            <div className="movie" style={{ backgroundImage: `url(${movie.image})` }}>
              <p className="movie-name">{movie.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MoviesPage;
