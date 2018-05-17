import React, { Component } from 'react';

class List extends Component {
    constructor(props){
        super(props)
        this.state = {
          day : ["SUN","MON","TUE","WED","THU","FRI","SAT"]
        }
    } 
  render() {
    const content = []
    const birthday = new Date(this.props.person.birthday.raw)
    const day = this.props.day
    const person = this.props.person
    if (this.state.day[birthday.getDay()] === day) {
      content.push(
        <div className="has-text-centered person-box">
          <img src={person.photo} alt="golf"/>
          {person.name}
        </div>
      )
    }
    return (
          <div>{content}</div>
        );
    }
}
export default List;