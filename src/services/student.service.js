import axios from 'axios';

let instance;

class StudentService {

  student = axios.create({
    baseURL: 'http://localhost:8000'
  });

  getAllStudents = () => {
    return this.student.get('/students');
  }

  updateStudent = (updatedStudent) => {
    return this.student.put(`/student/${updatedStudent.studentId}`, updatedStudent);
  }

  addStudent = (student) => {
    return this.student.post('/student', student);
  }

  deleteStudent = ({ studentId }) => {
    return this.student.delete(`/student/${studentId}`);
  }

  getStudentByID = ({ studentId }) => {
    return this.student.get(`/student/${studentId}`);
  }
}

const studentService = () => instance ? instance : new StudentService();

export default studentService()