import './App.css';
import Login from './pages/Login';
import { Routes, Route } from 'react-router-dom';

import MainView from './pages/MainView';
import ProfileView from './pages/ProfileView';
import { useState } from 'react';
import StoryView from './pages/StoryView';

function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<MainView setIsAuth={setIsAuth} />} />
        <Route
          path="/profile"
          element={<ProfileView setIsAuth={setIsAuth} />}
        />
        <Route path="/story/:id" element={<StoryView />} />
      </Routes>
    </div>
  );
}

export default App;
