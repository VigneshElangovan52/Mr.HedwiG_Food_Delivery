import './App.css';
import Header from './components/Header';
// import Body from './Body';
import { Outlet } from 'react-router-dom';
import UserContext from './utils/UserContext';
import { useEffect, useState } from 'react';

const AppLayout =()=>{

  const [user,setUser] = useState("");

  useEffect(()=>{
    const response = {
      name : "Vignesh"
    }
    setUser(response.name);
  },[]);

    return (
      <UserContext.Provider value={{ loggedInBy: user, setUser}}>
        <div className="bg-slate-200">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    );
  }
  
  export default AppLayout;
