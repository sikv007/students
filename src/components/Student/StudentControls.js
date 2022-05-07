import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { studentActions } from '../../store';
import Button from '../UI/Button';
import StudentSort from './StudentSort';
import Modal from '../UI/Modal';
import StudentForm from './StudentFrom';
import Card from '../UI/Card';
import Container from '../UI/Container';


const StudentControls = () => {
  const dispatch = useDispatch();
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const emptyStudentsHandler = () => {
    dispatch(studentActions.emptyStudentList());
  };

  const addStudentHandler = () => {
    setModalIsVisible((state) => !state);
  };

  return (
    <>
      {modalIsVisible && (
        <Modal onClick={addStudentHandler}>
          <StudentForm onClick={addStudentHandler} />
        </Modal>
      )}
      <Container>
        <Card className="student-controls">
          <StudentSort />
          <section>
            <Button
              title='Legg til student'
              mode='cta'
              onClick={addStudentHandler}
            />
            <Button title='Tøm listen' onClick={emptyStudentsHandler} />
          </section>
        </Card>
      </Container>
    </>
  );
};
export default StudentControls;
