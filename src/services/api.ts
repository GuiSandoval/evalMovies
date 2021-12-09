import axios from 'axios'

export const apiOMDB = axios.create({
    baseURL: 'http://www.omdbapi.com/?apikey=719787b6',
})

export const api = axios.create({
    baseURL: 'http://localhost:3333',
});