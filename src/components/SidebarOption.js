import React from "react";
import styled from "styled-components";
import { db } from "../firebase.js";
import { useDispatch } from "react-redux";
import { enterRoom } from "../features/appSlice.js";

const SidebarOption = ({ Icon, title, addChanellOption, id }) => {
  const dispatch = useDispatch();
  const addChannel = () => {
    const channelName = prompt("Please Enter Channel Name");
    if (channelName) {
      db.collection("rooms").add({
        name: channelName,
      });
    }
  };
  const selectChannel = () => {
    if (id) {
      dispatch(
        enterRoom({
          roomId: id,
        })
      );
    }
  };

  return (
    <SidebarOptionContainer
      onClick={addChanellOption ? addChannel : selectChannel}
    >
      {Icon && <Icon fontSize="small" style={{ padding: 10 }} />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <SidebarOptionChanel>
          <span>#</span>
          {title}
        </SidebarOptionChanel>
      )}
    </SidebarOptionContainer>
  );
};

export default SidebarOption;
const SidebarOptionContainer = styled.div`
  display: flex;
  font-size: 12px;
  align-items: center;
  padding-left: 2px;
  cursor: pointer;
  :hover {
    opacity: 0.9;
    background-color: #340e36;
  }
  > h3 {
    font-weight: 500;
  }
  > h3 > span {
    padding: 15px;
  }
`;

const SidebarOptionChanel = styled.h3`
  padding: 10px 0;
  font-weight: 300;
`;
