import { Language, NotificationsNone, Settings } from "@material-ui/icons";
import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-wrapper">
        <div className="left">
          <span className="logo">Annii-Admin</span>
        </div>
        <div className="right">
          <div className="icon-container">
            <NotificationsNone />
            <span className="icon-badge">2</span>
          </div>
          <div className="icon-container">
            <Language />
            <span className="icon-badge">2</span>
          </div>
          <div className="icon-container">
            <Settings />
            <span className="icon-badge">2</span>
          </div>
          <img
            className="avatar"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdW5YFgr3J9k4X_l3dZ9FPHOllgLoJtjX-Kg&usqp=CAU"
            alt="profile-pic"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
