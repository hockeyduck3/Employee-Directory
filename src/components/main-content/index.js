import React, { Component } from 'react';

import API from '../../util/api';

class Main extends Component {
    state = {
        results: []
    }

    componentDidMount() {
        API.findPeople().then(res => {
            this.setState({
                results: res.data.results
            });
        });
    }

    render() {
        return (
            <h1>Hello world</h1>
        )
    }
}

export default Main;