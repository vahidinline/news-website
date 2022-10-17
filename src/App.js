import './App.css';
import Login from './pages/Login';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainView from './pages/MainView';
import ProfileView from './pages/ProfileView';
import StoryView from './pages/StoryView';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

function App() {
  const { user } = useSelector((state) => state.token);
  console.log(user);

  const ProtectedRoute = ({ userLoggedin, redirectPath = '/' }) => {
    if (user.value === '' || user.value === null) {
      return <Navigate to={redirectPath} replace />;
    } else {
      return <Outlet />;
    }
  };
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<ProtectedRoute user={user} />}>
          <Route path="/main" element={<MainView />} />
          <Route path="/profile" element={<ProfileView />} />
          <Route path="/story/:id" element={<StoryView />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
