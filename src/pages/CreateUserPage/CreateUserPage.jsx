import React from "react";
import "./CreateUserPage.css";
const CreateUserPage = () => {
  return (
    <div className="create-user">
      <div className="create-user-title">New User</div>
      <form className="create-user-form">
        <div className="create-user-item">
          <label>Username</label>
          <input type={"text"} placeholder="John" />
        </div>
        <div className="create-user-item">
          <label>Full Name</label>
          <input type={"text"} placeholder="John Smith" />
        </div>
        <div className="create-user-item">
          <label>Email</label>
          <input type={"email"} placeholder="john@gmail.com" />
        </div>
        <div className="create-user-item">
          <label>Password</label>
          <input type={"password"} placeholder="John" />
        </div>
        <div className="create-user-item">
          <label>Phone</label>
          <input type={"text"} placeholder="998784932" />
        </div>
        <div className="create-user-item">
          <label>Address</label>
          <input type={"text"} placeholder="Saket, New Delhi-110044" />
        </div>
        <div className="create-user-item">
          <div className="create-user-gender">
            <label>Gender</label>
            <input type={"radio"} name="gender" id="male" />
            <label for="male">Male</label>
            <input type={"radio"} name="gender" id="female" />
            <label for="female">Female</label>
            <input type={"radio"} name="gender" id="others" />
            <label for="others">Others</label>
          </div>
        </div>
        <div className="create-user-item">
          <label>Active</label>
          <select className="create-user-select" name="active" id="active">
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
      </form>
      <button className="create-user-btn">Create</button>
    </div>
  );
};

export default CreateUserPage;
