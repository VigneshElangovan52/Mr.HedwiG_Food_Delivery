import './App.css';
import Header from './components/Header';
// import Body from './Body';
import { Outlet } from 'react-router-dom';
import UserContext from './utils/UserContext';
import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';

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
          <Provider store={appStore}>
          <Header />
          <Outlet />
          </Provider>
        </div>
      </UserContext.Provider>
    );
  }
  
  export default AppLayout;
