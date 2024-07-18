import { getTrackers } from "@/components/firebase";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getTrackersThunk = createAsyncThunk("tracker/getTracker", async () => {
  try {
    const arr = [];
    const trackers = await getTrackers().then((d) => d.forEach((doc) => arr.push({ id: arr.id, ...doc.data() })));
    return {
      isLoading: false,
      success: true,
      data: arr,
    };
  } catch (e) {
    return {
      error: e.message,
      success: false,
      isLoading: false,
    };
  }
});

const wholeStore = createSlice({
  name: "admin",
  initialState: {
    auth: {
      user: null,
      isLoading: true,
    },
    trackers: {
      isLoading: true,
      error: null,
      data: [],
    },
  },
  reducers: {
    saveUser: (state, action) => {
      state.auth = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTrackersThunk.pending, (state, action) => {
        console.log("fetching trackers");
      })
      .addCase(getTrackersThunk.fulfilled, (state, action) => {
        state.trackers = action.payload;
        // action.load
        // state.trackers
      });
    // builder.addCase(addTrackersThunk.fulfilled, (state, action) => {});
  },
});

export const { saveUser } = wholeStore.actions;
export default wholeStore.reducer;
