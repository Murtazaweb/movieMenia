import React, { Component } from 'react';
import apiCalling from '../../Services/apicalls';
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

        apiCalling.getReviewsList(movieIDD)
            .then(data => {
                this.setState({ reviewResults: data.results });
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
                            <tr key={d.id}>
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