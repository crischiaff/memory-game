import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import Level from './pages/level';
import Leaderboard from './pages/leaderboard';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/level",
    element: <Level/>,
  },
  {
    path: "/leaderboard",
    element: <Leaderboard/>,
  },
]);

function App() {
  return (
    <><div className="App">
      <RouterProvider router={router} />
    </div>
    <div className="Footer">
      created by Cristiano Schiaffella
    </div>
    </>
  );
}

export default App;
