import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStudents, deleteStudent } from 'actions'
import { addToast } from 'actions/toasts';
import FilterStudents from './FilterStudents';

class ListStudents extends Component {

  componentDidMount() {
    this.props.getStudents();
  }

  removeStudent = (e) => {
    this.props.deleteStudent(e);
    this.props.addToast({ message: 'student removed successfully', type: 'info' });
  }

  renderList = () => {
    return this.props.studentList.filter(e => !e.isFiltered).map(e => {
      return (
        <tr key={e.studentId}>
          <th scope="row">{e.studentId}</th>
          <td>{e.firstName}</td>
          <td>{e.lastName}</td>
          <td>{e.class}</td>
          <td><button className="btn btn-danger" onClick={() => this.removeStudent(e)}>delete</button></td>
        </tr>
      )
    });
  }

  render() {
    if (this.props.studentList.length === 0) {
      return <div>No Students Added Yet</div>
    }

    return (
      <>
        <FilterStudents />
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Class</th>
              <th scope="col">Remove</th>
            </tr>
          </thead>
          <tbody>
            {this.renderList()}
          </tbody>
        </table>
      </>
    );
  }
}

const mapStateToProps = ({ studentList }) => ({ studentList })

export default connect(mapStateToProps, { getStudents, deleteStudent, addToast })(ListStudents);