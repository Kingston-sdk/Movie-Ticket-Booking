import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  
  return (
    <div className="mov">
      <nav className="Navbar">
        <div>
          <p>MOVIE BOOKING SYSTEM</p>
        </div>
        <div>
          <ul className="navbar-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/movies">Movies</Link></li>
            <li><Link to="/booking">Booking</Link></li>
            <li><Link to="/payment">Payment</Link></li>
          </ul>
        </div>
        <div className="navbar-button">
          <input
            className="form-control"
            type="search"
            placeholder="Search"
          />
          <button className="btn btn-primary" type="submit">
            Search
          </button>
        </div>
      </nav>
      <div className="mo-container">
        
      </div>
    </div>
  );
};

export default Dashboard;
