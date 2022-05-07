import image from '../../assets/img/profile.png';

const StudentImage = (props) => {
  return <img src={image} alt={props.alt}></img>;
};
export default StudentImage;
