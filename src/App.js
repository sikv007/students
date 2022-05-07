import { Fragment } from 'react';
import StudentList from './components/Student/StudentList';
import StudentControls from './components/Student/StudentControls';

const App = () => {
  return (
    <Fragment>
      <StudentControls />
      <StudentList />
    </Fragment>
  );
};
export default App;
