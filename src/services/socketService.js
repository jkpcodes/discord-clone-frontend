import { io } from "socket.io-client";
import store from "../store";
import {
  setPendingInvitations,
  setSentInvitations,
  setFriends,
  setOnlineFriends,
  addOnlineFriend,
  removeOnlineFriend,
} from "../store/friendSlice";

let socket = null;

export const getSocket = () => socket;

export const connectWithSocketServer = (userDetails) => {
  // If socket already exists and is connected, don't create a new connection
  if (socket?.connected) {
    return;
  }

  // If socket exists but is disconnected, disconnect it first
  if (socket) {
    socket.disconnect();
  }

  const { token } = userDetails;

  socket = io("http://localhost:3000", {
    auth: {
      token,
    },
  });

  socket.on("connect", () => {
    // On connect
  });

  socket.on("friend:invitations", (data) => {
    const pendingInvitations = data;
    store.dispatch(setPendingInvitations(pendingInvitations));
  });

  socket.on("friend:sentInvitations", (data) => {
    const sentInvitations = data;
    store.dispatch(setSentInvitations(sentInvitations));
  });

  socket.on("friend:friendsList", (data) => {
    const friends = data;
    store.dispatch(setFriends(friends));
  });

  socket.on("friend:onlineFriends", (data) => {
    const friends = data;
    store.dispatch(setOnlineFriends(friends));
  });

  socket.on("friend:onlineFriendID", (data) => {
    const friendID = data;
    store.dispatch(addOnlineFriend(friendID));
  });

  socket.on("friend:offlineFriendID", (data) => {
    const friendID = data;
    console.log("Offline friend ID", friendID);
    store.dispatch(removeOnlineFriend(friendID));
  });
};

export const disconnectSocket = () => {
  if (socket) {
    socket.disconnect();
    socket = null;
  }
};
