import { Fragment } from 'react';
import StudentList from './components/Student/StudentList';
import StudentControls from './components/Student/StudentControls';
import Header from './components/Layout/Header';

const App = () => {
  return (
    <Fragment>
      <Header />
      <main className='main'>
        <StudentControls />
        <StudentList />
      </main>
    </Fragment>
  );
};
export default App;
