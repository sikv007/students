import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { studentActions } from '../../store';
import Button from '../UI/Button';
import StudentSort from './StudentSort';
import Modal from '../UI/Modal';
import StudentForm from './StudentFrom';

const StudentControls = () => {
  const dispatch = useDispatch();
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const emptyStudentsHandler = () => {
    dispatch(studentActions.emptyStudentList());
  };

  const addStudentHandler = () => setModalIsVisible((state) => !state);

  return (
    <div>
      {modalIsVisible && <Modal onClick={addStudentHandler}><StudentForm onClick={addStudentHandler} /></Modal>}
      <StudentSort />
      <Button title='Legg til student' onClick={addStudentHandler} />
      <Button title='Tøm listen' onClick={emptyStudentsHandler} />
    </div>
  );
};
export default StudentControls;
