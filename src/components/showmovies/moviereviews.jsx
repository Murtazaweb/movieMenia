import React, { Component } from 'react';
import axios from 'axios';
import './noreviews';

class movieReviews extends Component {
    constructor(props) {
        super(props)

        this.state = {
            reviewResults: []
        }
        //this.filterData = [];
        this.imgadress = 'https://image.tmdb.org/t/p/w500';
        //const imgUrl = this.imageadress;
    }
    componentDidMount() {
        let movieIDD = this.props.singlemovieID;

        axios.get(`https://api.themoviedb.org/3/movie/${movieIDD}/reviews?api_key=4035721c92357ccbd41d6dd017e5820a&language=en-US&page=1`)
            .then(response => {
                let resultArr = response.data.results;
                console.log('all reviews here', resultArr);
                this.setState({ reviewResults: resultArr });

            })
            .catch(function (error) {

            })

    }
    render() {
        return (
            <div>
                <table className="table">
                    <thead className="thead-light">

                        <tr>
                            <th>Author</th>
                            <th>Content</th>
                            <th>More</th>

                        </tr>

                    </thead>
                    <tbody>


                        {this.state.reviewResults.map(d => (
                            <tr>
                                <td>{d.author}</td>
                                <td id='content'>{d.content}</td>
                                <td>Full Review</td>

                            </tr>
                        ))}

                    </tbody>
                </table>

            </div>
        );
    }
}

export default movieReviews;