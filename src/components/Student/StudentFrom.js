import Button from '../UI/Button';

const StudentForm = (props) => {
  const submitFormHandler = (e) => {
    e.preventDefault();
    props.onClick();
  };

  const cancelFormHandler = () => {
    props.onClick();
  };

  return (
    <form onClick={submitFormHandler}>
      <div className='form-controller'>
        <label htmlFor='firstName'>Fornavn</label>
        <input type='text' id='firstName' />
      </div>
      <div className='form-controller'>
        <label htmlFor='firstName'>Etternavn</label>
        <input type='text' id='lastName' />
      </div>
      <div className='form-controller'>
        <label htmlFor='phone'>Telefonnummer</label>
        <input type='text' id='phone' />
      </div>
      <div className='form-controller'>
        <label htmlFor='address'>Telefonnummer</label>
        <input type='text' id='address' />
      </div>
      <div className='form-controller'>
        <label htmlFor='postalCode'>Poststed</label>
        <input type='text' id='postalCode' />
      </div>
      <div className='form-controller'>
        <label htmlFor='city'>By</label>
        <input type='text' id='city' />
      </div>
      <Button title='Legg til student' type='submit' />
      <Button title='Avbryt' type='button' onClick={cancelFormHandler} />
    </form>
  );
};
export default StudentForm;
