import axios from 'axios';
var {ClientIDUnsplash} = require('../Components/Keys');


export default axios.create({
    baseURL : 'https://api.unsplash.com/',
    headers : {
        Authorization: `Client-ID ${ClientIDUnsplash}`
    }
});