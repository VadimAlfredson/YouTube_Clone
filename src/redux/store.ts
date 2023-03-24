import { configureStore } from '@reduxjs/toolkit'
import suggestedVideosReducer from "./suggestedVideos_reducer";
import channelDetailsReducer from "./channelDetails_reducer";
// ...

export const store = configureStore({
    reducer: {
        videos: suggestedVideosReducer,
        channelDetails: channelDetailsReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch