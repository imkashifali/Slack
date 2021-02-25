import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { useSelector } from "react-redux";
import { selectRoomId } from "../features/appSlice.js";
import ChatInput from "./ChatInput.js";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { db } from "../firebase.js";
import Message from "./Message";

const Chat = () => {
  const chatRef = useRef(null);
  const roomId = useSelector(selectRoomId);

  const [roomDetails] = useDocument(
    roomId && db.collection("rooms").doc(roomId)
  );
  const [roomMessage, loading] = useCollection(
    roomId &&
      db
        .collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
  );

  useEffect(() => {
    chatRef?.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [roomId, loading]);

  return (
    <ChatContainer>
      {roomDetails && roomMessage && (
        <>
          <Header>
            <HeaderLeft>
              <h4>
                <strong>#{roomDetails?.data().name}</strong>
              </h4>
              <StarBorderIcon />
            </HeaderLeft>
            <HeaderRight>
              <p>
                <HelpOutlineIcon />
                Details
              </p>
            </HeaderRight>
          </Header>

          <ChatMessage>
            {roomMessage?.docs.map((doc) => {
              const { message, timestamp, user, userImage } = doc.data();
              return (
                <Message
                  key={doc.id}
                  message={message}
                  timestamp={timestamp}
                  user={user}
                  userImage={userImage}
                />
              );
            })}
            <ChatBottom ref={chatRef} />
          </ChatMessage>
          <ChatInput
            chatRef={chatRef}
            channelName={roomDetails?.data().name}
            channelId={roomId}
          />
        </>
      )}
    </ChatContainer>
  );
};

export default Chat;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid lightgray;
`;

const ChatMessage = styled.div``;
const ChatBottom = styled.div``;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;

  > h4 {
    display: flex;
    text-transform: lowercase;
    margin-right: 10px;
  }

  > h4 > .MuiSvgIcon-root {
    margin-left: 10px;
    font-size: 18px;
  }
`;
const HeaderRight = styled.div`
  > p {
    display: flex;
    align-items: center;
    font-size: 14px;
  }
`;

const ChatContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
  margin-top: 60px;
`;
