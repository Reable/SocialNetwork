import './App.css';
import {useState, useEffect} from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import NotFound from "./Pages/404/NotFound";
import {authUser, notAuthUser} from './Routes/index'
import {UserContext} from "./context/UserContext";
import axios from "axios";


function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState({});
  useEffect(() => {
    if(localStorage.getItem('jwt')){{
      setIsAuth(true)
    }}
  }, []);


  return (
    <UserContext.Provider value={{
      user,
      isAuth,
      setIsAuth
    }}>
      <div className="App">
        {isAuth
          ?
          <Routes>
            {authUser.map(elem =>
              <Route path={elem.path} element={elem.element}/>
            )}
            <Route path={'/404'} element={<NotFound />}/>
            <Route path={'/*'} element={<Navigate to={'/personal_page'}/> }/>
          </Routes>
          :
          <Routes>
            {notAuthUser.map(elem =>
              <Route path={elem.path} element={elem.element}/>
            )}
            <Route path={'/404'} element={<NotFound />}/>
            <Route path={'*'} element={<Navigate to={'/404'}/> }/>
          </Routes>
        }
      </div>
    </UserContext.Provider>
  );
}

export default App;
