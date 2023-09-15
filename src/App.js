import './App.css';
import Header from './components/Header';
// import Body from './Body';
import { Outlet } from 'react-router-dom';

const AppLayout =()=>{
    return(
      <div className='bg-slate-200'>
        <Header />
      <Outlet />
      </div>
    )
  }
  
  export default AppLayout;
