import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { studentActions } from '../../store';

const StudentSort = () => {
  const [sort, setSort] = useState('a-å');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(studentActions.sortStudents(sort));
  }, [sort, dispatch]);

  const sortHandler = (e) => {
    setSort(e.target.value);
  };

  return (
    <select onChange={sortHandler}>
      <option value='first_asc'>Fornavn (A-Å)</option>
      <option value='last_desc'>Fornavn (Å-A)</option>
      <option value='last_asc'>Etternavn (Å-A)</option>
      <option value='last_desc'>Etternavn (Å-A)</option>
    </select>
  );
};
export default StudentSort;
