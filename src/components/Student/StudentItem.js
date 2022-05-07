import { useDispatch } from 'react-redux';
import { studentActions } from '../../store';
import Button from '../UI/Button';

const StudentItem = (props) => {
  const { first_name, last_name } = props.student;

  const dispatch = useDispatch();

  const removeStudentHandler = () => {
    dispatch(studentActions.removeStudent(props.id));
  };

  return (
    <article>
      <h3>
        {first_name} {last_name}
      </h3>
      <Button title='Slett' onClick={removeStudentHandler} />
    </article>
  );
};
export default StudentItem;
