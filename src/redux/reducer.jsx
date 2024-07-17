import { createTracker, getTrackers } from "@/components/firebase";
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
export const addTrackersThunk = createAsyncThunk("tracker/addTracker", async () => {
  try {
    const trackers = await createTracker();
    return {
      success: true,
      data: trackers.then((d) => d.forEach((doc) => jobs.push({ id: arr.id, ...doc.data() }))),
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
        console.log("from the fufiled payload", action.payload);
        // action.load
        // state.trackers
      });
    builder.addCase(addTrackersThunk.fulfilled, (state, action) => {});
  },
});

export const { saveUser } = wholeStore.actions;
export default wholeStore.reducer;
