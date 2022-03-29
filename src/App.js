import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import { AppContext } from './context';
import './App.css';

function App() {
  const [userState, setUserState] = useState();
  const [matches, setMatches] = useState();

  return (
    <AppContext.Provider value={{
      userState,
      matches,
      setUserState,
      setMatches
    }}>
      <div className="App">
        <Navbar />
        <Outlet />
      </div>
    </AppContext.Provider>
  );
}

export default App;
