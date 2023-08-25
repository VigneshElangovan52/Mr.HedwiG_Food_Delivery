import './App.css';
import Header from './Header';
// import Body from './Body';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const AppLayout =()=>{
    return(
      <div>
        <Header />
      <Outlet />
      <Footer />
      </div>
    )
  }
  
  export default AppLayout;
