import {createSlice, Dispatch} from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {RootState} from "./store";
import {fetchFromAPI} from "../api/API";
import {regionCodeType, videosItemType} from "../types/typesItems";




export const videosSlice = createSlice({
    name: 'suggestedVideos',
    initialState: {
        videos: [] as videosItemType[],
        regionCode: 'RU' as regionCodeType,
        searchTerm: '' as string
    },
    reducers: {
        getVideos: (state, action: PayloadAction<videosItemType[]>) => {
            return { ...state,
            videos: action.payload}
        },
        getRegionCode: (state, action: PayloadAction<regionCodeType>) => {
            return {...state, regionCode: action.payload}
        },
        getSearchTerm: (state, action: PayloadAction<string>) => {
            return {...state, searchTerm: action.payload}
        }
    },
})

export const { getVideos, getRegionCode, getSearchTerm } = videosSlice.actions

export const getSuggestedVideos = (searchSelected: string) => async (dispatch: Dispatch) =>{
    let response = await fetchFromAPI.getSuggestedVideos(searchSelected)
    console.log(response)
    dispatch(getVideos(response.items))
}
export const getSearchVideos = (search: string, regionCode: regionCodeType) => async (dispatch: Dispatch) =>{
    let response = await fetchFromAPI.getSearchVideos(search, regionCode)
    console.log(response)
    dispatch(getVideos(response.items))
}

export default videosSlice.reducer