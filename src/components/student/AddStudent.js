import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import { validate as studentValidator } from './validator/student.validator';
import { connect } from 'react-redux';
import { addStudent } from 'actions'
import Notification from 'components/shared/Notification';

class AddStudent extends Component {

  renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <span className="text-danger">{error}</span>
      )
    }
  }

  renderInput = ({ input, label, meta }) => {
    return (
      <div>
        <label className="mr-2">{label}</label>
        <input className="form-control" {...input} />
        <div>{this.renderError(meta)}</div>
      </div>
    );
  }

  onSubmit = (formValues) => {
    this.props.addStudent(formValues);
  }

  render() {
    return (
      <div className="card">
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <div>
            <Field name="studentId" component={this.renderInput} label="Student Id" />
            <Field name="firstName" component={this.renderInput} label="First Name" />
            <Field name="lastName" component={this.renderInput} label="Last Name" />
            <Field name="class" component={this.renderInput} label="Class" />
            <Field name="city" component={this.renderInput} label="City" />
            <Field name="state" component={this.renderInput} label="State" />
            <Field name="country" component={this.renderInput} label="Country" />
            <button className="btn btn-success">Save</button>
          </div>
        </form>
      </div>
    );
  }
}

const validate = (formValues) => studentValidator(formValues);

export default connect(null, { addStudent })(reduxForm({
  form: 'studentForm',
  validate
})(AddStudent))