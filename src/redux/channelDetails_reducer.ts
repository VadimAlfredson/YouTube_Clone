import {createSlice, Dispatch} from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {fetchFromAPI} from "../api/API";
import {channelDetailsType, videosItemType} from "../types/typesItems";




export const detailsSlice = createSlice({
    name: 'suggestedVideos',
    initialState: {
        channelDetails: {} as channelDetailsType,
        videosOfChannel: [] as videosItemType[]
    },
    reducers: {
        getDetailsAC: (state, action: PayloadAction<channelDetailsType>) => {
            return { ...state,
                channelDetails: action.payload}
        },
        getVideosOfChannelAC: (state, action: PayloadAction<videosItemType[]>) => {
            return { ...state,
                videosOfChannel: action.payload
            }
        }
    },
})

export const { getDetailsAC, getVideosOfChannelAC } = detailsSlice.actions

export const getDetailsOfChannelTC = (id: string) => async (dispatch: Dispatch) =>{
    let response = await fetchFromAPI.getChannelDetails(id)
    console.log(response)
    dispatch(getDetailsAC(response.items[0]))
}

export const getVideosOfChannelTC = (id: string) => async (dispatch: Dispatch) => {
    let response = await fetchFromAPI.getVideosOfChannel(id)
    console.log(response)
    dispatch(getVideosOfChannelAC(response.items))
}

export default detailsSlice.reducer