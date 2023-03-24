import {createSlice, Dispatch} from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {fetchFromAPI} from "../api/API";
import {channelDetailsType} from "../types/typesItems";




export const detailsSlice = createSlice({
    name: 'suggestedVideos',
    initialState: {
        channelDetails: {} as channelDetailsType
    },
    reducers: {
        getDetails: (state, action: PayloadAction<channelDetailsType>) => {
            return { ...state,
                channelDetails: action.payload}
        },
    },
})

export const { getDetails  } = detailsSlice.actions

export const getChannelDetails = (id: string) => async (dispatch: Dispatch) =>{
    let response = await fetchFromAPI.getChannelDetails(id)
    console.log(response)
    dispatch(getDetails(response.items[0]))
}

export default detailsSlice.reducer