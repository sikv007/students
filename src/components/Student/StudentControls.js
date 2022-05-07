import { useDispatch } from 'react-redux';
import { studentActions } from '../../store';
import Button from '../UI/Button';
import StudentSort from './StudentSort';

const StudentControls = () => {
  const dispatch = useDispatch();

  const emptyStudentsHandler = () => {
    dispatch(studentActions.emptyStudentList())
  };

  return (
    <div>
      <StudentSort />
      <Button title='Tøm listen' onClick={emptyStudentsHandler} />
    </div>
  );
};
export default StudentControls;
