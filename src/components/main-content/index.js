import React, { Component } from 'react';

import API from '../../util/api';

import Nav from '../nav/index';
import Row from '../row/index';
import Column from '../column/index';
import Card from '../card';
import Container from '../container';

class Main extends Component {
    state = {
        allResults: [],
        results: []
    }

    componentDidMount() {
        API.findPeople().then(res => {
            this.setState({
                allResults: res.data.results,
                results: res.data.results
            });

            console.log(this.state.results);
        });
    }

    submitFunc = (event) => {
        const value = event.target.value;

        const allResults = this.state.allResults;

        setTimeout(() => {
            
            const filtered = allResults.filter(employee => 
                employee.name.first.toLowerCase().includes(value.toLowerCase()) || employee.name.last.toLowerCase().includes(value.toLowerCase())
            );


            if (value !== '' && filtered.length !== 0) {
                this.setState({results: filtered});
            } else {
                this.setState({results: this.state.allResults});
            }

        }, 500)
    }

    render() {
        const results = this.state.results;

        return (
            <div className='content'>
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
            </div>
        )
    }
}

export default Main;