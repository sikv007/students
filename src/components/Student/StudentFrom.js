import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { studentActions } from '../../store';
import Button from '../UI/Button';
import Input from '../UI/Input';
import classes from './StudentForm.module.scss';
import Card from '../UI/Card';

const StudentForm = (props) => {
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    phone: '',
    address: '',
    postal_code: '',
    city: '',
  });

  const dispatch = useDispatch();

  const firstNameHandler = (val) => {
    setForm((state) => {
      return { ...state, first_name: val };
    });
  };
  const lastNameHandler = (val) => {
    setForm((state) => {
      return { ...state, last_name: val };
    });
  };
  const phoneHandler = (val) => {
    setForm((state) => {
      return { ...state, phone: val };
    });
  };
  const addressHandler = (val) => {
    setForm((state) => {
      return { ...state, address: val };
    });
  };
  const postalCodeHandler = (val) => {
    setForm((state) => {
      return { ...state, postal_code: val };
    });
  };
  const cityHandler = (val) => {
    setForm((state) => {
      return { ...state, cityHandler: val };
    });
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    console.log(form);
    dispatch(studentActions.addStudent(form));
    props.onClick();
  };

  const cancelFormHandler = () => {
    props.onClick();
  };

  return (
    <Card>
      <form onSubmit={submitFormHandler} className={classes['student-form']}>
        <h2>Legg til student</h2>
        <Input id='firstName' label='Fornavn' onChange={firstNameHandler} />
        <Input id='lastName' label='Etternavn' onChange={lastNameHandler} />
        <Input id='phone' label='Telefon' onChange={phoneHandler} />
        <Input id='address' label='Adresse' onChange={addressHandler} />
        <Input id='postalCode' label='Poststed' onChange={postalCodeHandler} />
        <Input id='city' label='By' onChange={cityHandler} />
        <Button title='Legg til student' mode="cta" type='submit' />
        <Button title='Avbryt' type='button' onClick={cancelFormHandler} />
      </form>
    </Card>
  );
};
export default StudentForm;
