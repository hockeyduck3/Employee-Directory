import React, { Component } from 'react';

import API from '../../util/api';

import Row from '../row/index';
import Column from '../column/index';
import Card from '../card';

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
            <Row>
            {
                results.map((employees, i) => (
                    <Column key={i}>
                        <Card
                            image={employees.picture.large}
                            firstName={employees.name.first}
                            lastName={employees.name.last}
                            age={employees.dob.age}
                            phoneNum={employees.phone}
                            email={employees.email}
                        />
                    </Column>
                ))
            }
            </Row>
        )
    }
}

export default Main;