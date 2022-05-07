import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { studentActions } from '../../store';

const StudentSort = () => {
  const [sort, setSort] = useState('first');
  const [order, setOrder] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      studentActions.sortStudents({ sort, order: order ? 'asc' : 'desc' })
    );
  }, [sort, dispatch, order]);

  const sortHandler = (e) => {
    setSort(e.target.value);
  };

  const setOrderDesc = () => {
    setOrder(true);
  };

  const setOrderAsc = () => {
    setOrder(false);
  };


  return (
    <section className='student-sort'>
      <label htmlFor="sort">Sorter</label>
      <select onChange={sortHandler} id="sort">
        <option value='first'>Fornavn</option>
        <option value='last'>Etternavn</option>
        <option value='address'>Adresse</option>
        <option value='postal'>Poststed</option>
      </select>
      <div>
        <i
          className={`bi bi-sort-up sort-order ${
            order ? 'sort-order--selected' : ''
          }`}
          onClick={setOrderDesc}
        ></i>
        <i
          className={`bi bi-sort-down sort-order ${
            !order ? 'sort-order--selected' : ''
          }`}
          onClick={setOrderAsc}
        ></i>
      </div>
    </section>
  );
};
export default StudentSort;
