import axios from 'axios'
const ApiUrl = 'https://youtube-v31.p.rapidapi.com'

const options = {
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

export const FetchFromAPI = async (url) => {
    const { data } = await axios.get(`${ApiUrl}/${url}`, options)
    return data
}