import axios from 'axios'

export const apiOMDB = axios.create({
    baseURL: 'http://www.omdbapi.com/?apikey=719787b6',
})