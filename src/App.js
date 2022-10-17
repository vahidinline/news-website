import './App.css';
import Login from './pages/Login';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainView from './pages/MainView';
import ProfileView from './pages/ProfileView';
import StoryView from './pages/StoryView';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
const ProtectedRoute = ({ user, redirectPath = '/' }) => {
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};
function App() {
  const { value } = useSelector((state) => state.token.user);

  const [user, setUser] = React.useState(null);
  useEffect(() => {
    setUser(value);
  }, [value]);

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
