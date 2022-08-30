import { configureStore } from "@reduxjs/toolkit";
import TrackingReducer from './tracking';

const store = configureStore({
    reducer: {
        trackingDetail: TrackingReducer
    }
});

export default store;