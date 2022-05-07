import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { studentActions } from '../../store';
import Button from '../UI/Button';

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

  const firstNameHandler = (e) => {
    setForm((state) => {
      return { ...state, first_name: e.target.value };
    });
  };
  const lastNameHandler = (e) => {
    setForm((state) => {
      return { ...state, last_name: e.target.value };
    });
  };
  const phoneHandler = (e) => {
    setForm((state) => {
      return { ...state, phone: e.target.value };
    });
  };
  const addressHandler = (e) => {
    setForm((state) => {
      return { ...state, address: e.target.value };
    });
  };
  const postalCodeHandler = (e) => {
    setForm((state) => {
      return { ...state, postal_code: e.target.value };
    });
  };
  const cityHandler = (e) => {
    setForm((state) => {
      return { ...state, cityHandler: e.target.value };
    });
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    dispatch(studentActions.addStudent(form));
    props.onClick();
  };

  const cancelFormHandler = () => {
    props.onClick();
  };

  return (
    <form onSubmit={submitFormHandler}>
      <div className='form-controller'>
        <label htmlFor='firstName'>Fornavn</label>
        <input onChange={firstNameHandler} type='text' id='firstName' />
      </div>
      <div className='form-controller'>
        <label htmlFor='lastName'>Etternavn</label>
        <input onChange={lastNameHandler} type='text' id='lastName' />
      </div>
      <div className='form-controller'>
        <label htmlFor='phone'>Telefonnummer</label>
        <input onChange={phoneHandler} type='text' id='phone' />
      </div>
      <div className='form-controller'>
        <label htmlFor='address'>Adresse</label>
        <input onChange={addressHandler} type='text' id='address' />
      </div>
      <div className='form-controller'>
        <label htmlFor='postalCode'>Poststed</label>
        <input onChange={postalCodeHandler} type='text' id='postalCode' />
      </div>
      <div className='form-controller'>
        <label htmlFor='city'>By</label>
        <input onChange={cityHandler} type='text' id='city' />
      </div>
      <Button title='Legg til student' type='submit' />
      <Button title='Avbryt' type='button' onClick={cancelFormHandler} />
    </form>
  );
};
export default StudentForm;