import React, { Component } from 'react';
import { filterStudent } from 'actions';
import { connect } from 'react-redux';

class FilterStudents extends Component {

  onChange = (event) => {
    this.props.filterStudent(event.target.value);
  }

  render() {
    return (
      <div>
        <input className="form-control" type="text" onChange={this.onChange} />
      </div>
    );
  }
}

export default connect(null, { filterStudent })(FilterStudents);