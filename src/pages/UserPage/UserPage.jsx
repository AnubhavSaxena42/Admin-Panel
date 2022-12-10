import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import React from "react";
import "./UserPage.css";
import { Link } from "react-router-dom";

const UserPage = () => {
  return (
    <div className="user">
      <div className="user-title-container">
        <h1 className="user-title">Ren Chon</h1>
        <Link to="/new-user">
          <button className="user-add-btn">Create</button>
        </Link>
      </div>
      <div className="user-container">
        <div className="user-details">
          <div className="user-details-top">
            <img
              src="https://pbs.twimg.com/profile_images/488746592376074241/PLIW5eob_400x400.png"
              alt=""
              className="user-image"
            />
            <div className="user-details-top-info">
              <span className="user-details-name">Ren Chon</span>
              <span className="user-details-title">War Criminal</span>
            </div>
          </div>
          <div className="user-details-bottom">
            <span className="user-bottom-title">Account Details</span>
            <div className="user-details-bottom-info">
              <PermIdentity className="user-details-bottom-icon" />
              <span className="user-details-bottom-data">@renchon</span>
            </div>
            <div className="user-details-bottom-info">
              <CalendarToday className="user-details-bottom-icon" />
              <span className="user-details-bottom-data">28/08/1999</span>
            </div>
            <span className="user-bottom-title">Contact Details</span>
            <div className="user-details-bottom-info">
              <PhoneAndroid className="user-details-bottom-icon" />
              <span className="user-details-bottom-data">9599243067</span>
            </div>
            <div className="user-details-bottom-info">
              <MailOutline className="user-details-bottom-icon" />
              <span className="user-details-bottom-data">renchon@zaamo.co</span>
            </div>
            <div className="user-details-bottom-info">
              <LocationSearching className="user-details-bottom-icon" />
              <span className="user-details-bottom-data">
                Salt Lake City, Kolkata
              </span>
            </div>
          </div>
        </div>
        <div className="user-update">
          <span className="user-update-title">Edit</span>
          <form className="user-update-form">
            <div className="user-update-left">
              <div className="user-update-item">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="renchon"
                  className="user-update-input"
                />
              </div>
              <div className="user-update-item">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Ren Chon"
                  className="user-update-input"
                />
              </div>
              <div className="user-update-item">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="renchon@zaamo.co"
                  className="user-update-input"
                />
              </div>
              <div className="user-update-item">
                <label>Phone Number</label>
                <input
                  type="text"
                  placeholder="9599243067"
                  className="user-update-input"
                />
              </div>
              <div className="user-update-item">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="Salt Lake City, Kolkata"
                  className="user-update-input"
                />
              </div>
            </div>
            <div className="user-update-right">
              <div className="user-update-upload">
                <img
                  src="https://pbs.twimg.com/profile_images/488746592376074241/PLIW5eob_400x400.png"
                  alt=""
                  className="user-update-image"
                />
                <label htmlFor="file">
                  <Publish />
                </label>
                <input id="file" type="file" style={{ display: "none" }} />
              </div>
              <button className="user-update-btn">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
