import React, { Component } from 'react';

import API from '../../util/api';

import Nav from '../nav/index';
import Row from '../row/index';
import Column from '../column/index';
import Card from '../card';
import Footer from '../footer/index';
import Container from '../container';

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

    submitFunc(event) {
        event.preventDefault();
    }

    render() {
        const results = this.state.results;

        return (
            <div>
                <Nav submitFunc={this.submitFunc} />

                <Container>
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
                </Container>

                <Footer />
            </div>
        )
    }
}

export default Main;