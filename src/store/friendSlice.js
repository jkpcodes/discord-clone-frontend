import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  friends: [],
  pendingInvitations: [],
  sentInvitations: [],
  onlineFriends: [],
};

const friendSlice = createSlice({
  name: "friend",
  initialState,
  reducers: {
    setPendingInvitations: (state, action) => {
      state.pendingInvitations = action.payload;
    },
    addPendingInvitation: (state, action) => {
      state.pendingInvitations = [...state.pendingInvitations, action.payload];
    },
    acceptInvitation: (state, action) => {
      state.friends = [...state.friends, action.payload];
      state.pendingInvitations = state.pendingInvitations.filter(
        (invitation) => invitation.id !== action.payload
      );
    },
    rejectInvitation: (state, action) => {
      state.pendingInvitations = state.pendingInvitations.filter(
        (invitation) => invitation.id !== action.payload
      );
    },
    setSentInvitations: (state, action) => {
      state.sentInvitations = action.payload;
    },
    addSentInvitation: (state, action) => {
      state.sentInvitations = [...state.sentInvitations, action.payload];
    },
    cancelSentInvitation: (state, action) => {
      state.sentInvitations = state.sentInvitations.filter(
        (invitation) => invitation.id !== action.payload
      );
    },
    setFriends: (state, action) => {
      state.friends = action.payload;
    },
    setOnlineFriends: (state, action) => {
      state.onlineFriends = action.payload;
    },
    addOnlineFriend: (state, action) => {
      // Only add if the friend is not already in the list
      if (!state.onlineFriends.includes(action.payload)) {
        state.onlineFriends = [...state.onlineFriends, action.payload];
      }
    },
    removeOnlineFriend: (state, action) => {
      state.onlineFriends = state.onlineFriends.filter(
        (friendId) => friendId !== action.payload
      );
    },
  },
});

export const {
  setPendingInvitations,
  addPendingInvitation,
  acceptInvitation,
  rejectInvitation,
  setFriends,
  setSentInvitations,
  addSentInvitation,
  cancelSentInvitation,
  setOnlineFriends,
  addOnlineFriend,
  removeOnlineFriend,
} = friendSlice.actions;
export default friendSlice.reducer;
