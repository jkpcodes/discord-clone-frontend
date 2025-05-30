import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentChat: null,
  messages: [],
  participants: [],
  typingStatus: {},
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setChatData: (state, action) => {
      state.currentChat = action.payload._id.toString();
      state.messages = action.payload.messages;
      state.participants = action.payload.participants;
    },
    setCurrentChat: (state, action) => {
      state.currentChat = action.payload;
    },
    setMessages: (state, action) => {
      state.messages = action.payload;
    },
    setParticipants: (state, action) => {
      state.participants = action.payload;
    },
    setTypingStatus: (state, action) => {
      state.typingStatus = action.payload;
    },
  },
});

export const {
  setChatData,
  setCurrentChat,
  setMessages,
  setParticipants,
  setTypingStatus,
} = chatSlice.actions;
export default chatSlice.reducer;
