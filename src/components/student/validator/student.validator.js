import * as joi from 'joi';

const studentSchema = joi.object().keys({
  studentId: joi.number().label("Student ID"),
  firstName: joi.string().alphanum().min(3).max(30).required().label("First Name"),
  lastName: joi.string().alphanum().min(3).max(30).required().label("Last Name"),
  class: joi.string().alphanum().min(3).max(30).required().label("Class"),
  city: joi.string().alphanum().min(3).max(30).required().label("City"),
  state: joi.string().alphanum().min(2).max(30).required().label("State"),
  country: joi.string().alphanum().min(3).max(30).required().label("Country"),
})

export const validate = (student) => {
  let res = joi.validate(student, studentSchema, { abortEarly: false });
  let errors = res.error && res.error.details.length > 0 ? buildError(res.error.details) : {};

  return errors;
}

const buildError = (errorDetails) => {
  let error = {}
  errorDetails.map(err => error[err.path[0]] = err.message);

  return error;
}