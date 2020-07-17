import React, { Component } from 'react';

import API from '../../util/api';

import Row from '../row/index';
import Column from '../column/index';

class Main extends Component {
    state = {
        results: []
    }

    componentDidMount() {
        API.findPeople().then(res => {
            this.setState({
                results: res.data.results
            });

            console.log(this.state.results);
        });
    }

    render() {
        const results = this.state.results;

        return (
            <div>
                {
                    results.map((employees, i) => (
                        <Row key={i}>
                            <Column>
                                <p>{employees.name.first}</p>
                            </Column>
                        </Row>
                    ))
                }
            </div>
        )
    }
}

export default Main;