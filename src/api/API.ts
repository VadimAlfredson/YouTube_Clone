import axios from "axios";
import {YouTube_Clone_Key} from "../keys";
export const instance = axios.create(
    {
        baseURL: 'https://youtube-v31.p.rapidapi.com',
        headers: {
            'X-RapidAPI-Key': YouTube_Clone_Key,
            'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        }
    }
)

export const fetchFromAPI = {
    getSuggestedVideos: (selectedCategory: string) => {
        let options = {params: {maxResults: '50', q: `${selectedCategory}`, part: 'snippet'}}
        return instance.get(`search?`, options)
            .then(response => {
                return response.data
            })
    },
    getSearchVideos: (search: string, regionCode: string) => {
        let options = {params: {maxResults: '50', regionCode: regionCode, q: `${search}`, part: 'snippet'}}
        return instance.get(`search?`, options)
            .then(response => {
                return response.data
            })
    },
    getChannelDetails: (id: string) => {
        let options = {params: {part: 'snippet,statistics', id: `${id}`},}
        return instance.get('channels', options)
            .then(response => {
                return response.data
            })
    },
    getVideosOfChannel: (id: string) => {
        let options = {params: {maxResults: '50', part: 'snippet,id', order: 'date'}}
        return instance.get(`search?channelId=${id}`, options)
            .then(response => {
                return response.data
            })
    },
    getVideoDetails: (videoID: string) => {
        let options = {params: {part: 'contentDetails,snippet,statistics', id: `${videoID}`}}
        return instance.get(`videos`, options)
            .then(response => {
                return response.data
            })
    },
    getRelatedVideos: (relatedToVideoId?: string) => {
        let options = {
            params: {
                relatedToVideoId: relatedToVideoId,
                part: 'id,snippet',
                type: 'video',
                maxResults: '50'
            }
        }
        return instance.get(`search`, options)
            .then(response => {
                return response.data
            })
    },
    getCommentsVideo: (id: string) => {
        let options = {params: {part: 'snippet', videoId: `${id}`, maxResults: '100'}}
        return instance.get('commentThreads', options)
            .then(response => {
                return response.data})
    }
}