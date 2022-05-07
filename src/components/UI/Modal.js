import ReactDOM from 'react-dom';

const Modal = (props) => {
  const clickHandler = () => {
    props.onClick();
  };

  const content = (
    <>
      <div onClick={clickHandler} className='overlay'></div>
      <div className='overlay-content'>{props.children}</div>
    </>
  );

  return (
    <>{ReactDOM.createPortal(content, document.querySelector('.modal'))}</>
  );
};

export default Modal;
