
const Container = (props) => {
  const className = `container ${props.className}`
  return <div className={className}>{props.children}</div>;
};
export default Container;
