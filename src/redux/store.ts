import { configureStore } from '@reduxjs/toolkit'
import suggestedVideosReducer from "./suggestedVideos_reducer";
import channelDetailsReducer from "./channelDetails_reducer";
import videoDetailsReducer from "./videoDetails_reducer";
// ...

export const store = configureStore({
    reducer: {
        videos: suggestedVideosReducer,
        channelDetails: channelDetailsReducer,
        videoDetails: videoDetailsReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch