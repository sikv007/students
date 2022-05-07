import { useSelector } from 'react-redux';
import Container from '../UI/Container';
import StudentItem from './StudentItem';

const StudentList = () => {
  const students = useSelector((state) => state.students);

  return (
    <Container className="grid">
      {students.map((student, i) => (
        <StudentItem student={student} key={i} id={i} />
      ))}
    </Container>
  );
};
export default StudentList;
