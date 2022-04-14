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
import Matches from './components/Matches';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/signup" element={<ProfileCreator />} />
          { /* TODO: Add path to /explore */}
          <Route path="/profile" element={<Outlet />}>
            <Route path="me" element={<h1>my profile --`&gt;` homework!</h1>} />
            { /* TODO: add match profile path (:matchId) */}
          </Route>
          <Route path="matches" element={<Matches />} />
          { /* TODO: Add a fallback route */}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
