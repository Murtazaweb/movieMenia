import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


import Reviews from './moviereviews';
import NoReviews from './noreviews';

class singleMovie extends Component {
    constructor(props) {
        super(props)

        this.state = {
            movieID: 0,
            movieTitle: '',
            moviePoster: '',
            movieOverview: '',
            movieRuntime: 0,
            movieReleaseDate: '',
            movieVote: 0,
            movieSpokenLanguage: [],
            movieProduction: [],
            movieGenres: [],
            reviewComponent: false
        }
        //this.filterData = [];
        this.imgadress = 'https://image.tmdb.org/t/p/w500';
        //const imgUrl = this.imageadress;
    }

    componentDidMount() {
        let movie_id = this.props.match.params.id;
        //console.log(movie_id);
        axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=4035721c92357ccbd41d6dd017e5820a`)
            .then(response => {
                //let movieInfo = response.data;
                this.setState({
                    movieID: response.data.id,
                    movieTitle: response.data.title,
                    moviePoster: response.data.poster_path,
                    movieOverview: response.data.overview,
                    movieRuntime: response.data.runtime,
                    movieReleaseDate: response.data.release_date,
                    movieVote: response.data.vote_average,
                    movieSpokenLanguage: response.data.spoken_languages,
                    movieProduction: response.data.production_companies,
                    movieGenres: response.data.genres
                })


            })
            .catch(function (error) {
                console.log(error);
            })
    }

    /* checkClick = () => {
         
 
     }*/

    finalcheck = () => {
        this.setState({ reviewComponent: true })

    }

    render() {
        return (

            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-xs-6 text-right">
                        <img src={this.imgadress + this.state.moviePoster} style={{ height: '400px' }} />
                    </div>
                    <div className="col-md-6 col-xs-6">
                        <p>{this.state.movieReleaseDate}</p>
                        <h1>{this.state.movieTitle}</h1>
                        <pre>{this.state.movieOverview}</pre>
                        <h4>Genres</h4>
                        {this.state.movieGenres.map(mykey => (
                            <button className="btn btn-primary"><span className="badge">{mykey.name}</span></button>
                        ))}
                        <p>{this.state.movieRuntime} </p>
                        <h4>Companies</h4>
                        {this.state.movieProduction.map(mykeyy => (
                            <button className="btn btn-success"><span className="badge">{mykeyy.name}</span></button>
                        ))}
                        <h4>SpokenLanguages</h4>
                        {this.state.movieSpokenLanguage.map(mykeyy1 => (
                            <button className="btn btn-warning"><span className="badge">{mykeyy1.name}</span></button>
                        ))}
                        <button onClick={this.finalcheck}>Show Reviews</button>
                        {this.state.reviewComponent ? <Reviews singlemovieID={this.state.movieID} /> : <NoReviews />}

                    </div>
                </div>
            </div>

        );
    }
}

export default singleMovie;