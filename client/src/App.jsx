import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom'
import RegisterPage from "./Pages/Auth/RegisterPage";
import IndexPage from "./Pages/IndexPage";
import LoginPage from "./Pages/Auth/LoginPage";
import PersonalPage from "./Pages/PersonalPage/PersonalPage";
import NotFound from "./Pages/404/NotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<IndexPage />} />
        <Route path={'/registration'} element={<RegisterPage />} />
        <Route path={'/login'} element={<LoginPage />} />
        <Route path={'/personal_page'} element={<PersonalPage />} />
        <Route path={'/404'} element={<NotFound />}/>
        <Route path={'*'} element={<Navigate to={'/posts'}/> }/>
      </Routes>
    </div>
  );
}

export default App;
