import axios from "axios";

const baseURL = 'https://youtube-v31.p.rapidapi.com'

const options = {
    params: {maxResults: '50'},
    headers: {
        'X-RapidAPI-Key': '3d7fac84c7msh458a3d74182349ap1aab07jsnfa60a8ada758',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchFromAPI = async (url: string) => {
    const response = await axios.get(`${baseURL}/${url}`, options);
    console.log(response.data)
    return response.data
}