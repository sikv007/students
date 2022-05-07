import image from '../../assets/img/profile.png';

const StudentImage = (props) => {
  return <img src={image} className='student-image' alt={props.alt}></img>;
};
export default StudentImage;
