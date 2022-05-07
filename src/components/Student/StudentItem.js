import { useDispatch } from 'react-redux';
import { studentActions } from '../../store';
import Button from '../UI/Button';
import StudentDetails from './StudentDetails';
import Modal from '../UI/Modal';
import { useState } from 'react';
import StudentImage from './StudentImage';
import classes from './StudentItem.module.scss';

const StudentItem = (props) => {
  const { first_name, last_name, postal_code, address } = props.student;
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const dispatch = useDispatch();

  const removeStudentHandler = () => {
    dispatch(studentActions.removeStudent(props.id));
  };

  const toggleDetailsHandler = () => {
    setModalIsVisible((state) => !state);
  };

  return (
    <>
      {modalIsVisible && (
        <Modal onClick={toggleDetailsHandler}>
          <StudentDetails student={props.student} />
        </Modal>
      )}
      <article className={classes['student-item']}>
        <div className={classes['student-item__image']}>
          <StudentImage alt={first_name} />
        </div>
        <div className={classes['student-item__text']}>
          <h3>
            {first_name} {last_name}
          </h3>
          <p>{address}</p>
          <p>{postal_code}</p>
          <Button title='Se Detaljer' onClick={toggleDetailsHandler}></Button>
          <Button title='Slett' onClick={removeStudentHandler} />
        </div>
      </article>
    </>
  );
};
export default StudentItem;
