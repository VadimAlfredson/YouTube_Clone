import axios from "axios";

export const instance = axios.create(
    {
        baseURL: 'https://youtube-v31.p.rapidapi.com',
        headers: {
            'X-RapidAPI-Key': '3d7fac84c7msh458a3d74182349ap1aab07jsnfa60a8ada758',
            'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        }
    }
)

/*
const baseURL = 'https://youtube-v31.p.rapidapi.com'

const options = {
    params: {maxResults: '50'},
    headers: {
        'X-RapidAPI-Key': '3d7fac84c7msh458a3d74182349ap1aab07jsnfa60a8ada758',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};
*/

/*export const fetchFromAPI = async (url: string) => {
    const response = await axios.get(`${baseURL}/${url}`, options);
    console.log(response.data)
    return response.data
}*/

export const fetchFromAPI = {
    getVideos: (search: string) => {
        let options = { params: {maxResults: '50'}}
        return instance.get(`search?part=snippet&q=${search}`, options)
            .then(response => {
                return response.data
            })
    },
    getChannelDetails: (id: string) => {
        let options = { params: {part: 'snippet,statistics', id: `${id}`},}
        return instance.get('https://youtube-v31.p.rapidapi.com/channels', options)
            .then(response => {
                return response.data
            })
    },
    getVideosOfChannel: (id: string) => {
        let options = { params: {maxResults: '50', part: 'snippet,id', order: 'date'}}
        return instance.get(`search?channelId=${id}`, options)
            .then(response => {
                return response.data
            })
    },
    getVideoDetails: (videoID: string) => {
        let options = { params: {part: 'contentDetails,snippet,statistics', id: `${videoID}`}}
        return instance.get(`videos`, options)
            .then(response => {
                return response.data
            })
    }
}