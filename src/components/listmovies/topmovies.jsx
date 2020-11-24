import React, { Component } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
//import showMovies from '../showmovies/singlemovie'
import apicall from '../../Services/apicalls';
import styles from './topmovies.module.css';
//import './topmovies.css'

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

        apicall.getPopularMovies()
            .then(data => {
                this.setState({
                    fullmovieList: data.results
                })
                this.filterData = data.results;
            })
            .catch(function (error) {

            })
        /* axios.get('https://api.themoviedb.org/3/movie/popular?api_key=4035721c92357ccbd41d6dd017e5820a&language=en-US&page=1')
             .then(response => {
                 let allmoviesInfo = response.data.results;
                 console.log('all movies here', allmoviesInfo);
                 this.setState({ fullmovieList: allmoviesInfo });
                 this.filterData = response.data.results;
 
             })
             .catch(function (error) {
 
             })*/
        apicall.getGenreList()
            .then(data => {
                this.genreArr = data.genres;
            })
            .catch(function (error) {

            })

    }

    filterByTitle = e => {
        //console.log(e.target.value);
        //console.log('inside filterRecords', this.filterData);

        let finalArray = this.filterData.filter((y) => {
            // console.log(y);
            let searchVal = y.title.toLowerCase();
            return searchVal.indexOf(e.target.value) !== -1;
        })
        //console.log('yes', finalArray);
        this.setState({ fullmovieList: finalArray });
    }

    mainFilter = e => {
        //  console.log('firing event on this', e.target.value);

        if (e.target.value === 'popularity.asc') {
            console.log('Popularty Ascending');
            apicall.getpopAsc()
                .then(data => {
                    this.setState({
                        fullmovieList: data.results
                    })
                })
                .catch(function (error) {

                })
        }
        else if (e.target.value === 'popularity.desc') {
            console.log('Popularty Desceding');
            apicall.getpopDsc()
                .then(data => {
                    this.setState({
                        fullmovieList: data.results
                    })
                })
                .catch(function (error) {

                })


        }
        else if (e.target.value == 'revenue.asc') {
            console.log('RA');
            apicall.getRevenueAsc()
                .then(data => {
                    this.setState({
                        fullmovieList: data.results
                    })
                })
                .catch(function (error) {

                })

        }
        else if (e.target.value == 'revenue.desc') {
            console.log('RD');
            apicall.getRevenueDsc()
                .then(data => {
                    this.setState({
                        fullmovieList: data.results
                    })
                })
                .catch(function (error) {

                })

        }
        else if (e.target.value == 'original_title.asc') {
            console.log('OTA');
            apicall.gettitleAsc()
                .then(data => {
                    this.setState({
                        fullmovieList: data.results
                    })
                })
                .catch(function (error) {

                })

        }
        else if (e.target.value == 'original_title.desc') {
            console.log('OTD');
            apicall.gettitleDsc()
                .then(data => {
                    this.setState({
                        fullmovieList: data.results
                    })
                })
                .catch(function (error) {

                })

        }
        else if (e.target.value == 'vote_average.asc') {
            console.log('VT');
            apicall.getvoteAsc()
                .then(data => {
                    this.setState({
                        fullmovieList: data.results
                    })
                })
                .catch(function (error) {

                })

        }
        else if (e.target.value == 'vote_average.desc') {
            console.log('Popularty Desceding');
            apicall.getvoteDsc()
                .then(data => {
                    this.setState({
                        fullmovieList: data.results
                    })
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
        //console.log('Total Results found', response.data.total_results);
        // this.filterData = response.data.results;
        apicall.getGenreFilter(resultEl)
            .then(data => {
                this.setState({
                    fullmovieList: data.results
                })
            })
            .catch(function (error) {

            })


    }

    showCheckboxes = () => {
        var expanded = false;
        var checkboxes = document.getElementById(styles.checkboxes);
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

            <div className={styles.container}>
                <h2>Search Filters</h2>
                <hr></hr>
                <h4>Search By Movie Genre</h4>
                <div className={styles.multiselect}>
                    <div className={styles.selectBox} onClick={this.showCheckboxes}>
                        <select>
                            <option>Select an option </option>
                        </select>
                        <div className={styles.overSelect}></div>
                    </div>
                    <div id={styles.checkboxes}>

                        {this.genreArr.map(myG => (
                            <label for="one" key={myG.id}> <input type="checkbox" name="type" value={myG.id} onChange={this.GenreFilter} />{myG.name}</label>
                        ))}
                    </div>
                </div>



                <hr></hr>

                <div className="btn-group">
                    <h4>Search By Movie Title</h4>
                    <input type="search" onChange={this.filterByTitle} />
                    <hr></hr>
                    <h4>Search by others</h4>
                    <div className={styles.dropdown}>
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
                <div className={styles.row}>
                    {this.state.fullmovieList.map(mykey => (

                        <div className={styles.column} key={mykey.id}>
                            <div className={styles.card} style={{ width: '200px' }}>
                                <img className="card-img-top" src={this.imgadress + mykey.poster_path} style={{ width: '100%' }} />
                                <div className="card-body">
                                    <h4 className="card-title">{mykey.title}</h4>
                                    <p className="card-text">{mykey.vote_average}</p>
                                    <p className="card - text">{mykey.release_date}</p>
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