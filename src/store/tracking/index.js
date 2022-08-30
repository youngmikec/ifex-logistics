import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: {}
}

export const TrackingSlice = createSlice({
    name: "trackingDetail",
    initialState,
    reducers: {
        AddTrackingDetail: (state, action) => {
            state.value = action.payload;
        },
        RemoveTrackingDetail: (state, action) => state.value = {}
    }
});

export const { AddTrackingDetail, RemoveTrackingDetail } = TrackingSlice.actions;
export default TrackingSlice.reducer;