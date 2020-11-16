import React, { Component } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
//import showMovies from '../showmovies/singlemovie'
import './topmovies.css'

class topMovies extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fullmovieList: []

            //DesiM: ''
        }
        this.filterData = [];
        this.genreArr = [];
        this.imgadress = 'https://image.tmdb.org/t/p/w500';
        //const imgUrl = this.imageadress;
    }

    componentDidMount() {
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=4035721c92357ccbd41d6dd017e5820a&language=en-US&page=1')
            .then(response => {
                let allmoviesInfo = response.data.results;
                console.log('all movies here', allmoviesInfo);
                this.setState({ fullmovieList: allmoviesInfo });
                this.filterData = response.data.results;

            })
            .catch(function (error) {

            })
        axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=4035721c92357ccbd41d6dd017e5820a&language=en-US')
            .then(response => {
                let genreInfo = response.data.genres;
                console.log('all movies genre ids here', genreInfo);
                this.genreArr = response.data.genres;

            })
            .catch(function (error) {

            })

    }

    filterByTitle = e => {
        console.log(e.target.value);
        console.log('inside filterRecords', this.filterData);

        let finalArray = this.filterData.filter((y) => {
            console.log(y);
            let searchVal = y.title.toLowerCase();
            return searchVal.indexOf(e.target.value) !== -1;
        })
        console.log('yes', finalArray);
        this.setState({ fullmovieList: finalArray });
    }

    mainFilter = e => {
        //  console.log('firing event on this', e.target.value);

        if (e.target.value === 'popularity.asc') {
            console.log('Popularty Ascending');
            axios.get('https://api.themoviedb.org/3/discover/movie?api_key=4035721c92357ccbd41d6dd017e5820a&language=en-US&sort_by=popularity.asc&include_adult=false&include_video=false&page=1')
                .then(response => {
                    let allmoviesInfo1 = response.data.results;
                    console.log('//////////////////////////////');
                    console.log('all movies here desc', allmoviesInfo1);
                    this.setState({ fullmovieList: allmoviesInfo1 });
                    // this.filterData = response.data.results;
                    console.log('//////////////////////////////');

                })
                .catch(function (error) {

                })


        }
        else if (e.target.value === 'popularity.desc') {
            console.log('Popularty Desceding');
            axios.get('https://api.themoviedb.org/3/discover/movie?api_key=4035721c92357ccbd41d6dd017e5820a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1')
                .then(response => {
                    let allmoviesInfo2 = response.data.results;
                    console.log('all movies here', allmoviesInfo2);
                    this.setState({ fullmovieList: allmoviesInfo2 });
                    // this.filterData = response.data.results;

                })
                .catch(function (error) {

                })


        }
        else if (e.target.value == 'revenue.asc') {
            console.log('RA');
            axios.get('https://api.themoviedb.org/3/discover/movie?api_key=4035721c92357ccbd41d6dd017e5820a&language=en-US&sort_by=revenue.asc&include_adult=false&include_video=false&page=1')
                .then(response => {
                    let allmoviesInfo3 = response.data.results;
                    console.log('all movies here', allmoviesInfo3);
                    this.setState({ fullmovieList: allmoviesInfo3 });
                    // this.filterData = response.data.results;

                })
                .catch(function (error) {

                })

        }
        else if (e.target.value == 'revenue.desc') {
            console.log('RD');
            axios.get('https://api.themoviedb.org/3/discover/movie?api_key=4035721c92357ccbd41d6dd017e5820a&language=en-US&sort_by=revenue.desc&include_adult=false&include_video=false&page=1')
                .then(response => {
                    let allmoviesInfo4 = response.data.results;
                    console.log('all movies here', allmoviesInfo4);
                    this.setState({ fullmovieList: allmoviesInfo4 });
                    // this.filterData = response.data.results;

                })
                .catch(function (error) {

                })

        }
        else if (e.target.value == 'original_title.asc') {
            console.log('OTA');
            axios.get('https://api.themoviedb.org/3/discover/movie?api_key=4035721c92357ccbd41d6dd017e5820a&language=en-US&sort_by=original_title.asc&include_adult=false&include_video=false&page=1')
                .then(response => {
                    let allmoviesInfo5 = response.data.results;
                    console.log('all movies here', allmoviesInfo5);
                    this.setState({ fullmovieList: allmoviesInfo5 });
                    // this.filterData = response.data.results;

                })
                .catch(function (error) {

                })

        }
        else if (e.target.value == 'original_title.desc') {
            console.log('OTD');
            axios.get('https://api.themoviedb.org/3/discover/movie?api_key=4035721c92357ccbd41d6dd017e5820a&language=en-US&sort_by=original_title.desc&include_adult=false&include_video=false&page=1')
                .then(response => {
                    let allmoviesInfo6 = response.data.results;
                    console.log('all movies here', allmoviesInfo6);
                    this.setState({ fullmovieList: allmoviesInfo6 });
                    // this.filterData = response.data.results;

                })
                .catch(function (error) {

                })

        }
        else if (e.target.value == 'vote_average.asc') {
            console.log('VT');
            axios.get('https://api.themoviedb.org/3/discover/movie?api_key=4035721c92357ccbd41d6dd017e5820a&language=en-US&sort_by=vote_average.asc&include_adult=false&include_video=false&page=1')
                .then(response => {
                    let allmoviesInfo7 = response.data.results;
                    console.log('all movies here', allmoviesInfo7);
                    this.setState({ fullmovieList: allmoviesInfo7 });
                    // this.filterData = response.data.results;

                })
                .catch(function (error) {

                })

        }
        else if (e.target.value == 'vote_average.desc') {
            console.log('Popularty Desceding');
            axios.get('https://api.themoviedb.org/3/discover/movie?api_key=4035721c92357ccbd41d6dd017e5820a&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1')
                .then(response => {
                    let allmoviesInfo8 = response.data.results;
                    console.log('all movies here', allmoviesInfo8);
                    this.setState({ fullmovieList: allmoviesInfo8 });
                    // this.filterData = response.data.results;

                })
                .catch(function (error) {

                })

        }
        else { console.log('all') }
        /*switch(status) {
            case 'active':
                //background green
                break;
            case 'onhold':
                //background yellow
                break;
            case 'inactive':
                //background red
                break;
            default:
                //background grey
                break;
        }*/
    }

    GenreFilter = () => {
        console.log('inside Genre Filters');
        function getCheckedValues() {
            return Array.from(document.querySelectorAll('input[type="checkbox"]'))
                .filter((checkbox) => checkbox.checked)
                .map((checkbox) => checkbox.value);
        }

        let resultEl = getCheckedValues();
        console.log('yes', resultEl);
        //console.log('yessss', resultEl.split(''));
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=4035721c92357ccbd41d6dd017e5820a&language=en-US&with_genres=${resultEl}&include_adult=false&include_video=false&page=1`)
            .then(response => {
                let allmoviesInfo10 = response.data.results;
                console.log('all movies here', allmoviesInfo10);
                console.log('Total Results found', response.data.total_results);
                this.setState({ fullmovieList: allmoviesInfo10 });
                // this.filterData = response.data.results;

            })
            .catch(function (error) {

            })


    }

    showCheckboxes = () => {
        var expanded = false;
        var checkboxes = document.getElementById("checkboxes");
        if (!expanded) {
            checkboxes.style.display = "block";
            expanded = true;
        } else {
            checkboxes.style.display = "none";
            expanded = false;
        }


    }
    render() {
        return (

            <div className="container">
                <h2>Search Filters</h2>
                <hr></hr>
                <h4>Search By Movie Genre</h4>
                <div className="multiselect">
                    <div className="selectBox" onClick={this.showCheckboxes}>
                        <select>
                            <option>Select an option </option>
                        </select>
                        <div className="overSelect"></div>
                    </div>
                    <div id="checkboxes">

                        {this.genreArr.map(myG => (
                            <label for="one"> <input type="checkbox" name="type" value={myG.id} onChange={this.GenreFilter} />{myG.name}</label>
                        ))}
                    </div>
                </div>



                <hr></hr>

                <div class="btn-group">
                    <h4>Search By Movie Title</h4>
                    <input type="search" onChange={this.filterByTitle} />
                    <hr></hr>
                    <h4>Search by others</h4>
                    <div className="dropdown">
                        <select onChange={this.mainFilter}>
                            <option value='All'>All </option>
                            <option value='popularity.asc'>Popularity Ascending </option>
                            <option value='popularity.desc'>Popularity Descending</option>
                            <option value='revenue.asc' >Revenue Ascending</option>
                            <option value='revenue.desc'>Revenue Descending</option>
                            <option value='original_title.asc'>Title Ascending</option>
                            <option value='original_title.desc'>Title Descending</option>
                            <option value='vote_average.asc'>AverageVote Ascedning</option>
                            <option value='vote_average.desc'>AverageVOte Desceding</option>
                        </select>
                    </div>
                </div>
                <hr>
                </hr>
                <hr>
                </hr>
                <div className="row">
                    {this.state.fullmovieList.map(mykey => (

                        <div className="column">
                            <div className="card" style={{ width: '200px' }}>
                                <img className="card-img-top" src={this.imgadress + mykey.poster_path} style={{ width: '100%' }} />
                                <div className="card-body">
                                    <h4 className="card-title">{mykey.title}</h4>
                                    <p className="card-text">{mykey.vote_average}</p>
                                    <p className="card-text">{mykey.release_date}</p>
                                    <Link className="btn btn-warning" to={"/onlymovie/" + mykey.id}>clickME</Link>
                                </div>

                            </div>

                        </div>
                    ))}
                </div>
            </div>

        );
    }
}

export default topMovies;