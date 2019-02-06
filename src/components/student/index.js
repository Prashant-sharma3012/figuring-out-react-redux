import ListStudents from './ListStudents';
import AddStudent from './AddStudent';
import UpdateStudent from './UpdateStudent';
import { Route } from 'react-router-dom';
import React, { Component } from 'react';

class Student extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={ListStudents} />
        <Route path="/add" exact component={AddStudent} />
        <Route path="/update" exact component={UpdateStudent} />
      </div>
    );
  }
}

export default Student;