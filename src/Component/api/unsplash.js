import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID f0957c86799cd31c162d328e5f14dfce76471dde4f362763bce7c14a4bdd1cba'
    }
})