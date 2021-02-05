import React from "react";
import "./ProfileSection.css";
import Nav from "../Nav.js";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice.js";
import { auth } from "../firebase";
const ProfileSection = () => {
  const user = useSelector(selectUser);
  return (
    <div className="profileSecreen">
      <Nav />
      <div className="profileSecreen__body">
        <h1>Edit Profile</h1>
        <div className="profileSecreen__info">
          <img
            src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
            alt=""
          />
          <div className="profileSecreen__details">
            <h2> {user.email}</h2>
            <div className="profileSecreen__Palns">
              <h3>Plans</h3>
              <button
                onClick={() => auth.signOut()}
                className="profileSecreen__SignOut"
              >
                SignOut
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
