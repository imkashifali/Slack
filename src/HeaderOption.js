import React from "react";
import "./HeaderOption.css";
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice.js";

const HeaderOption = ({ avatar, Icon, title, onClick }) => {
  const user = useSelector(selectUser);

  return (
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon className="headerOption__Icon" />}
      {avatar && (
        <Avatar className="headerOption__avatar" src={user?.email[0]}></Avatar>
      )}
      <h3 className="headerOption__Title">{title}</h3>
    </div>
  );
};

export default HeaderOption;
