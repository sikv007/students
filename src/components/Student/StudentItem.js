const StudentItem = (props) => {
  const { first_name, last_name } = props.student;

  return (
    <article>
      <h2>
        {first_name} {last_name}
      </h2>
    </article>
  );
};
export default StudentItem;
