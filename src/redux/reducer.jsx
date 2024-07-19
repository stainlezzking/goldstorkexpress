import { getTrackers } from "@/components/firebase";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getTrackersThunk = createAsyncThunk("tracker/getTracker", async (value) => {
  try {
    const arr = [];
    await getTrackers().then((d) =>
      d.forEach((doc) => {
        arr.push({ id: doc.id, ...doc.data() });
      })
    );
    return {
      isLoading: false,
      success: true,
      error: null,
      data: arr,
    };
  } catch (e) {
    console.log("an error caught in console");
    return {
      error: e.message,
      success: false,
      isLoading: false,
      data: [],
    };
  }
});

const defaultState = {
  auth: {
    user: null,
    isLoading: true,
  },
  trackers: {
    isLoading: true,
    error: null,
    data: [],
  },
};
const wholeStore = createSlice({
  name: "admin",
  initialState: { ...defaultState },
  reducers: {
    saveUser: (state, action) => {
      state.auth = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTrackersThunk.pending, (state) => {
        state.trackers = { ...defaultState.trackers };
      })
      .addCase(getTrackersThunk.fulfilled, (state, action) => {
        state.trackers = action.payload;
      });
    // builder.addCase(addTrackersThunk.fulfilled, (state, action) => {});
  },
});

export const { saveUser } = wholeStore.actions;
export default wholeStore.reducer;
