import './App.css';
import Login from './pages/Login';
import { Routes, Route } from 'react-router-dom';

import MainView from './pages/MainView';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainView />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
