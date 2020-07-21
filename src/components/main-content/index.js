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
        sorted: false,
        nameDescend: false,
        ageDescend: false
    }

    componentDidMount() {
        // Ascending or Descending arrow
        const arrow = document.getElementById('arrow');

        arrow.style.display = 'none';

        API.findPeople().then(res => {
            this.setState({
                allResults: res.data.results,
                allResultsSorted: res.data.results,
                results: res.data.results
            });
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
                        employee.phone.includes(value) || employee.dob.date.includes(value) || employee.dob.age.toString().includes(value)
                    );
                } 
                
                // Or the user can search by name instead
                else {
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
        const dropdownValue = event.target.innerText.trim();

        const sortBtn = document.getElementById('sortBtn');

        const arrow = document.getElementById('arrow');

        if (dropdownValue !== 'By Default') {
            let sorted;

            // If the user is sorting by name
            if (dropdownValue === 'By Name') {
                // Found this solution here: https://stackoverflow.com/questions/53821428/cannot-sort-array-of-objects-in-react
                sorted = [...this.state.allResultsSorted].sort((a, b) => {
                    
                    // If the user chose to show the results in ascending orderr
                    if (!this.state.nameDescend) {

                        // Quick if statement to make sure the ascending or descending arrow is allows pointing in the right direction
                        if (arrow.classList.value === 'fas fa-angle-down') {
                            arrow.classList.replace('fa-angle-down', 'fa-angle-up')
                        }

                        this.setState({nameDescend: true});

                        if (a.name.first < b.name.first) return -1;
                    } 
                    
                    // Descending order
                    else {
                        arrow.classList.replace('fa-angle-up', 'fa-angle-down');
                        
                        this.setState({nameDescend: false});

                        if (a.name.first > b.name.first) return -1;
                    }
                    return 0;
                });
            }

            // If the user chose to sort by age
            else {
                sorted = [...this.state.allResultsSorted].sort((a, b) => {
                    if (!this.state.ageDescend) {
                        if (arrow.classList.value === 'fas fa-angle-down') {
                            arrow.classList.replace('fa-angle-down', 'fa-angle-up')
                        }

                        if (a.dob.age < b.dob.age) return -1;

                        this.setState({ageDescend: true})
                    } 
                    
                    else {
                        arrow.classList.replace('fa-angle-up', 'fa-angle-down');

                        if (a.dob.age > b.dob.age) return -1;

                        this.setState({ageDescend: false})
                    }
                    return 0;
                });
            }

            const searchVal = document.getElementById('searchBar');

            if (searchVal.value !== '') {
                searchVal.value = ''; 
            }

            this.setState({
                allResultsSorted: sorted, 
                results: sorted, 
                sorted: true
            });

            arrow.style.display = 'inline';

            sortBtn.innerText = dropdownValue;
        }

        // Or if the user chose default sorting
        else {
            document.getElementById('searchBar').value = ''; 

            arrow.style.display = 'none';

            this.setState({
                results: this.state.allResults,
                sorted: false,
                nameDescend: false,
                ageDescend: false
            });

            sortBtn.innerText = 'Sort';
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