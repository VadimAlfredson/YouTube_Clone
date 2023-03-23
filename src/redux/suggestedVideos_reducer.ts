import {createSlice, Dispatch} from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {RootState} from "./store";
import {fetchFromAPI} from "../api/API";
import {videosItem} from "../types/typesItems";




export const counterSlice = createSlice({
    name: 'videos',
    initialState: {
        videos: [] as videosItem[]
    },
    reducers: {
        getVideos: (state, action: PayloadAction<videosItem[]>) => {
            return { ...state,
            videos: action.payload}
        },
    },
})

export const { getVideos  } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const getSuggestedVideos = (searchSelected: string) => async (dispatch: Dispatch) =>{
    let response = await fetchFromAPI.getVideos(searchSelected)
    console.log(response)
    dispatch(getVideos(response.data))
}

export default counterSlice.reducer