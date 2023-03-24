import {createSlice, Dispatch} from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {RootState} from "./store";
import {fetchFromAPI} from "../api/API";
import {videosItemType} from "../types/typesItems";




export const videosSlice = createSlice({
    name: 'suggestedVideos',
    initialState: {
        videos: [] as videosItemType[]
    },
    reducers: {
        getVideos: (state, action: PayloadAction<videosItemType[]>) => {
            debugger
            return { ...state,
            videos: action.payload}
        },
    },
})

export const { getVideos  } = videosSlice.actions

export const getSuggestedVideos = (searchSelected: string) => async (dispatch: Dispatch) =>{
    let response = await fetchFromAPI.getVideos(searchSelected)
    console.log(response)
    debugger
    dispatch(getVideos(response.items))
}

export default videosSlice.reducer