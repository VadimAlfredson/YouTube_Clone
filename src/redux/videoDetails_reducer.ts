import {createSlice, Dispatch} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import {RootState} from "./store";
import {fetchFromAPI} from "../api/API";
import {commentType, videoDetailsType, videosItemType} from "../types/typesItems";


export const videoSlice = createSlice({
    name: 'suggestedVideos',
    initialState: {
        videoDetails: {} as videoDetailsType,
        relatedVideos: [] as videosItemType[],
        comments: [] as commentType[]
    },
    reducers: {
        getVideoDetailsAC: (state, action: PayloadAction<videoDetailsType>) => {
            return {
                ...state,
                videoDetails: action.payload
            }
        },
        getRelatedVideosAC: (state, action: PayloadAction<videosItemType[]>) => {
            return {...state, relatedVideos: action.payload}
        },
        getCommentsAC: (state, action: PayloadAction<commentType[]>) => {
            return {...state, comments: action.payload}
        },
    }
})

export const {getVideoDetailsAC, getRelatedVideosAC, getCommentsAC} = videoSlice.actions

export const getVideoDetailsTC = (videoID: string) => async (dispatch: Dispatch) => {
    let response = await fetchFromAPI.getVideoDetails(videoID)
    console.log(response)
    debugger
    dispatch(getVideoDetailsAC(response.items[0]))
}

export const getRelatedVideosTC = (relatedToVideoId: string) => async (dispatch: Dispatch) => {
    let response = await fetchFromAPI.getRelatedVideos(relatedToVideoId)
    dispatch(getRelatedVideosAC(response.items))
}

export const getCommentsVideoTC = (videoId: string) => async (dispatch: Dispatch) => {
    let response = await fetchFromAPI.getCommentsVideo(videoId)
    dispatch(getCommentsAC(response.items))
}

export default videoSlice.reducer