import { Fragment, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { studentActions } from '../../store';

const StudentSort = () => {
  const [sort, setSort] = useState('first');
  const [order, setOrder] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(studentActions.sortStudents({ sort, order: order ? "asc" : "desc" }));
  }, [sort, dispatch, order]);

  const sortHandler = (e) => {
    setSort(e.target.value);
  };

  const orderHandler = (e) => {
    setOrder(e.target.checked);
  };

  return (
    <Fragment>
      <select onChange={sortHandler}>
        <option value='first'>Fornavn</option>
        <option value='last'>Etternavn</option>
        <option value='address'>Adresse</option>
        <option value='postal'>Poststed</option>
      </select>
      <input onChange={orderHandler} checked={order} type='checkbox'></input>
    </Fragment>
  );
};
export default StudentSort;
