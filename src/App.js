import './App.css';
import Header from './components/Header';
// import Body from './Body';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

const AppLayout =()=>{
    return(
      <div className='parent-div'>
        <Header />
      <Outlet />
      <Footer />
      </div>
    )
  }
  
  export default AppLayout;
