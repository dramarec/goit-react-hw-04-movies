import React, { Component } from 'react';
import { reviewsPageMovies } from '../api/data';

export default class Reviews extends Component {
    componentDidMount() {
        reviewsPageMovies(680304).then(console.log);
    }
    render() {
        return <div></div>;
    }
}
