import './App.css';
import Header from './components/Header';
// import Body from './Body';
import { Outlet } from 'react-router-dom';

const AppLayout =()=>{
    return(
      <div className='parent-div'>
        <Header />
      <Outlet />
      </div>
    )
  }
  
  export default AppLayout;
