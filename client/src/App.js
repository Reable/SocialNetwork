import './App.css';
import { Routes, Route } from 'react-router-dom'
import RegisterPage from "./Pages/Auth/RegisterPage";
import IndexPage from "./Pages/IndexPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<IndexPage />} />
        <Route path={'/registration'} element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
