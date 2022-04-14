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
import Matches from './components/Matches';
import MatchProfile from './components/Matches/MatchProfile';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/signup" element={<ProfileCreator />} />
          <Route path="/explore" element={<Swiper />} />
          <Route path="/profile" element={(
            <>
              <h1>sample menu</h1>
              <Outlet />
            </>
          )}>
            <Route path="me" element={<h1>my profile --`&gt;` homework!</h1>} />
            <Route path="something" element={<h2>something</h2>} />
            <Route path=":matchId" element={<MatchProfile />} />
          </Route>
          <Route path="/matches" element={<Matches />} />
          <Route path="*" element={<h2>404, sad life :(</h2>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
