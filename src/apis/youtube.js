import axios from 'axios';

const KEY = 'AIzaSyApNo1-U9c6GR8SI_JEt8CX7mf2ulgrrQU';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        key: KEY,
        part: 'snippet',
        maxResults: 5,
    },
});
