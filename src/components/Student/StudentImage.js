import image from '../../assets/img/profile.png';
import classes from './StudentImage.module.scss';

const StudentImage = (props) => {
  return (
    <img src={image} className={classes['student-image']} alt={props.alt}></img>
  );
};
export default StudentImage;
