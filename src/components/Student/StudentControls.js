import { useDispatch } from 'react-redux';
import { studentActions } from '../../store';
import Button from '../UI/Button';

const StudentControls = () => {
  const dispatch = useDispatch();

  const emptyStudentsHandler = () => {
    dispatch(studentActions.emptyStudentList())
  };

  return (
    <div>
      <Button title='Tøm listen' onClick={emptyStudentsHandler} />
    </div>
  );
};
export default StudentControls;
