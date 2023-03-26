import {createSlice, Dispatch} from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {RootState} from "./store";
import {fetchFromAPI} from "../api/API";
import {videoDetailsType, videosItemType} from "../types/typesItems";




export const videoSlice = createSlice({
    name: 'suggestedVideos',
    initialState: {
        videoDetails: {} as videoDetailsType,
        relatedVideos: [] as videosItemType[]
    },
    reducers: {
        getVideoDetailsAC: (state, action: PayloadAction<videoDetailsType>) => {
            return { ...state,
                videoDetails: action.payload}
        },
        getRelatedVideosAC: (state, action: PayloadAction<videosItemType[]>) => {
            return {...state, relatedVideos: action.payload}
        }
    },
})

export const { getVideoDetailsAC, getRelatedVideosAC  } = videoSlice.actions

export const getVideoDetailsTC = (videoID: string) => async (dispatch: Dispatch) =>{
    let response = await fetchFromAPI.getVideoDetails(videoID)
    console.log(response)
    debugger
    dispatch(getVideoDetailsAC(response.items[0]))
}

export const getRelatedVideosTC = (relatedToVideoId: string) => async (dispatch: Dispatch) => {
    let response = await fetchFromAPI.getRelatedVideos(relatedToVideoId)
    dispatch(getRelatedVideosAC(response.items))
}

export default videoSlice.reducer