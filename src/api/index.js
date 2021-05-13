import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '9e9ba2be13d6aa08dc3f80fa1d6cd712',
    }
})