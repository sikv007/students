import StudentImage from './StudentImage';
import Card from '../UI/Card';
import Button from '../UI/Button';

const StudentDetails = (props) => {
  const { first_name, last_name, phone, address, postal_code, city } =
    props.student;

  const clickHandler = () => {
    props.onClick();
  };

  return (
    <Card className='student-details'>
      <div className='student-details__image'>
        <StudentImage alt={first_name} />
      </div>
      <div className='student-details__text'>
        <h2>
          {first_name} {last_name}
        </h2>
        <p>
          <strong>Telefon: </strong>
          {phone}
        </p>
        <p>
          <strong>Adresse: </strong>
          {address}
        </p>
        <p>
          <strong>Poststed: </strong>
          {postal_code}
        </p>
        <p>
          <strong>By: </strong>
          {city}
        </p>
        <div className='student-details__text__actions'>
          <Button title='Lukk' mode='cta' onClick={clickHandler} />
        </div>
      </div>
    </Card>
  );
};
export default StudentDetails;
