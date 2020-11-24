import axios from 'axios';
const apiKey = '4035721c92357ccbd41d6dd017e5820a';

export default {
    getPopularMovies: () => {
        const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
        return axios.get(url).then(info => info.data)
    },
    getpopAsc: () => {
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.asc&include_adult=false&include_video=false&page=1`;
        return axios.get(url).then(info => info.data)
    },
    getpopDsc: () => {
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;
        return axios.get(url).then(info => info.data)
    },
    getRevenueAsc: () => {
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=revenue.asc&include_adult=false&include_video=false&page=1`;
        return axios.get(url).then(info => info.data)
    },
    getRevenueDsc: () => {
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=revenue.desc&include_adult=false&include_video=false&page=1`;
        return axios.get(url).then(info => info.data)
    },
    gettitleAsc: () => {
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=original_title.asc&include_adult=false&include_video=false&page=1`;
        return axios.get(url).then(info => info.data)
    },
    gettitleDsc: () => {
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=original_title.desc&include_adult=false&include_video=false&page=1`;
        return axios.get(url).then(info => info.data)
    },
    getvoteAsc: () => {
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=vote_average.asc&include_adult=false&include_video=false&page=1`;
        return axios.get(url).then(info => info.data)
    },
    getvoteDsc: () => {
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1`;
        return axios.get(url).then(info => info.data)
    },
    getGenreList: () => {
        const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`;
        return axios.get(url).then(info => info.data)
    },
    getGenreFilter: (genre) => {
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&with_genres=${genre}&include_adult=false&include_video=false&page=1`;
        return axios.get(url).then(info => info.data)
    },
    getMovieDetails: (movieID) => {
        const url = `https://api.themoviedb.org/3/movie/${movieID}?api_key=${apiKey}`;
        return axios.get(url).then(info => info.data)
    },
    getReviewsList: (movie_ID) => {
        const url = `https://api.themoviedb.org/3/movie/${movie_ID}/reviews?api_key=${apiKey}&language=en-US&page=1`;
        return axios.get(url).then(info => info.data)
    }


}
