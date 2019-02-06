import { GET_STUDENTS, ADD_STUDENTS, EDIT_STUDENTS, DELETE_STUDENTS, FILTER_STUDENTS, ADD_TOASTS } from './constants';
import studentService from 'services/student.service.js'
import { merge } from 'lodash';

export const getStudents = () => async dispatch => {
  let res = await studentService.getAllStudents();
  // Add a new prop to res object that will be used for filtering
  let students = res.data.map(student => merge(student, { isFiltered: false }))
  dispatch({
    type: GET_STUDENTS,
    payload: students
  })
}

export const addStudent = student => async dispatch => {
  await studentService.addStudent(student);

  dispatch({
    type: ADD_STUDENTS,
    payload: student
  });
}

export const updateStudent = () => {
  return {
    type: EDIT_STUDENTS,
    payload: {}
  }
}

export const deleteStudent = student => async dispatch => {
  await studentService.deleteStudent(student);

  dispatch({
    type: DELETE_STUDENTS,
    payload: student
  });
}

export const filterStudent = searchString => {
  return {
    type: FILTER_STUDENTS,
    payload: searchString
  }
}