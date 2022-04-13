import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import App from './App';
import ProfileCreator from './components/ProfileCreator';
import Swiper from './components/Swiper';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/signup" element={<ProfileCreator />} />
        <Route path="/explore" element={<Swiper />} />
        <Route path="profile" element={<Outlet />}>
          <Route path="me" element={<h1>my profile --> homework!</h1>} />
          <Route path=":matchId" element={<h1>match profile</h1>} />
        </Route>
        <Route path="matches" element={<h1>matches</h1>} />
        <Route path="*" element={<h1>You shouldn't be here... 🙀</h1>} />
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
