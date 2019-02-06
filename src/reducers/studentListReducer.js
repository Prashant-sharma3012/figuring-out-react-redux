import { GET_STUDENTS, ADD_STUDENTS, EDIT_STUDENTS, DELETE_STUDENTS, FILTER_STUDENTS } from 'actions/constants';

export const studentListReducer = (studentList = [], action) => {
  switch (action.type) {
    case GET_STUDENTS:
      return [...action.payload];

    case ADD_STUDENTS:
      return [...studentList, action.payload];

    case EDIT_STUDENTS:
      return studentList.map(student => {
        if (student.studentId === action.payload.studentId) {
          return action.payload;
        }
        return student;
      });

    case DELETE_STUDENTS:
      return studentList.filter(student => student.studentId !== action.payload.studentId);

    case FILTER_STUDENTS:
      return studentList.map(student => {
        let found = Object.values(student).join('').search(action.payload);
        found === -1 ? student.isFiltered = true : student.isFiltered = false;
        return student;
      });

    default:
      return studentList;
  }
}