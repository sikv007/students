import { useDispatch } from 'react-redux';
import { studentActions } from '../../store';
import Button from '../UI/Button';
import StudentDetails from './StudentDetails';
import Modal from '../UI/Modal';
import { useState } from 'react';
import StudentImage from './StudentImage';
import Card from '../UI/Card';

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
          <StudentDetails student={props.student} onClick={toggleDetailsHandler} />
        </Modal>
      )}
      <Card className='student-item'>
          <div className='student-item__image'>
            <StudentImage alt={first_name} />
          </div>
          <div className='student-item__text'>
            <h3>
              {first_name} {last_name}
            </h3>
            <p>
              <strong>Adresse: </strong>
              {address}
            </p>
            <p>
              <strong>Poststed: </strong>
              {postal_code}
            </p>
          </div>
          <div className='student-item__actions'>
            <Button
              title='Se Detaljer'
              mode='cta'
              small={true}
              onClick={toggleDetailsHandler}
            ></Button>
            <Button title='Slett' small={true} onClick={removeStudentHandler} />
          </div>
      </Card>
    </>
  );
};
export default StudentItem;
