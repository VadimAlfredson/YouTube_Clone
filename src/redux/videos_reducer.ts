import {createSlice, Dispatch} from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {RootState} from "./store";
import {fetchFromAPI} from "../api/API";
import {regionCodeType, videosItemType} from "../types/typesItems";




export const videosSlice = createSlice({
    name: 'suggestedVideos',
    initialState: {
        videos: [] as videosItemType[],
        regionCode: 'RU' as regionCodeType
    },
    reducers: {
        getVideos: (state, action: PayloadAction<videosItemType[]>) => {
            return { ...state,
            videos: action.payload}
        },
        getRegionCode: (state, action: PayloadAction<regionCodeType>) => {
            debugger
            return {...state, regionCode: action.payload}
        }
    },
})

export const { getVideos, getRegionCode } = videosSlice.actions

export const getSuggestedVideos = (searchSelected: string, regionCode?: regionCodeType) => async (dispatch: Dispatch) =>{
    debugger
    let response = await fetchFromAPI.getVideos(searchSelected, regionCode)
    console.log(response)
    dispatch(getVideos(response.items))
}

export default videosSlice.reducer