import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import StudentItem from './StudentItem';

const StudentList = () => {
  const students = useSelector((state) => state.students);

  return (
    <Fragment>
      {students.map((student, i) => (
        <StudentItem student={student} key={i} />
      ))}
    </Fragment>
  );
};
export default StudentList;
