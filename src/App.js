import './App.css';
import Login from './pages/Login';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';

import MainView from './pages/MainView';
import ProfileView from './pages/ProfileView';
import StoryView from './pages/StoryView';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<MainView />} />
        <Route path="/profile" element={<ProfileView />} />
        <Route path="/story/:id" element={<StoryView />} />
      </Routes>
    </div>
  );
}

export default App;
