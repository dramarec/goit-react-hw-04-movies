import { actorsInfo } from '../api/data';
import React, { Component } from 'react';

export default class Cast extends Component {
    componentDidMount() {
        actorsInfo(680304).then(console.log);
    }
    render() {
        return <div></div>;
    }
}
