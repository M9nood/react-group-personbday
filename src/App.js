import React, { Component } from 'react';
import axios from 'axios';
import List from './components/List';
import './App.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      persons: []
    }
  }
  componentDidMount() {
    axios.get(`http://uinames.com/api/?ext&amount=25`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }
  render() {
    const day = ["SUN","MON","TUE","WED","THU","FRI","SAT"]
    const content = []
    for (var i = 0; i < 7; i++) {
      content.push(
        <div className="column">
          <div className="card">
            <div className="card-content">
              <p className="subtitle has-text-centered" >
              {day[i]}
              </p>
                {this.state.persons.map((person,index) =>
                <div key={index} >    
                    <List person={person} day={day[i]} />
                </div>  
                )
              }  
            </div>
          </div>
        </div>
      ) 
    }
    return (
      <div className="App container">
        <div className="columns is-gapless">
          {content}
        </div>  
      </div>
    );
  }
}

export default App;
