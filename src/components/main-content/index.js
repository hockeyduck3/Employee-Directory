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
        allResultsSorted: [],
        results: [],
        sorted: false
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

        const allResultsSorted = this.state.allResultsSorted;

        let filtered;

        let arrayToUse;

        if (!this.state.sorted) {
            arrayToUse = allResults;
        } else {
            arrayToUse = allResultsSorted;
        }

        setTimeout(() => {
                // This will allow the user to search by phone number or dob
                if (value.match(/[0-9]/gi)) {
                    filtered = arrayToUse.filter(employee => 
                        employee.phone.includes(value) || employee.dob.date.includes(value)
                    );
                } 
                
                // Or the user can search by name instead
                else {
                    // eslint-disable-next-line no-redeclare
                    filtered = arrayToUse.filter(employee => 
                        employee.name.first.toLowerCase().includes(value.toLowerCase()) || employee.name.last.toLowerCase().includes(value.toLowerCase())
                    );
                }
                


                if (value !== '' && filtered.length !== 0) {
                    this.setState({results: filtered});
                } else {
                    if (!this.state.sorted) {
                        this.setState({results: this.state.allResults});
                    } else {
                        this.setState({results: this.state.allResultsSorted});
                    }

                }
        }, 300)
    }

    dropdownFunc = (event) => {
        const dropdownName = document.getElementById('dropdownMenuButton');

        const dropdownValue = event.target.innerText;

        if (dropdownValue === 'By Name') {
            // Found this solution here: https://stackoverflow.com/questions/53821428/cannot-sort-array-of-objects-in-react
            const sorted = [...this.state.results].sort((a, b) => {
                if (a.name.first < b.name.first) return -1;
                return 0;
            });

            this.setState({
                allResultsSorted: sorted, 
                results: sorted, 
                sorted: true
            });

            dropdownName.innerText = dropdownValue;
        }

        if (dropdownValue === 'By Default') {
            this.setState({
                results: this.state.allResults,
                sorted: false
            });

            dropdownName.innerText = 'Sort';
        }
    }

    render() {
        const results = this.state.results;

        return (
            <div className='content'>
                <Nav 
                    submitFunc={this.submitFunc}
                    dropdownFunc={this.dropdownFunc}
                />

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
                                        DOB={employees.dob.date}
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