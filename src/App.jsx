import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { authRoutes } from './routes';
import ProtectedRoutes, { UnProtectedRoutes } from './routes/protected-route';


function App() {
  
  const getRoutes = (routes) => 
    routes.map((route, indx) => {
      const Component = route.component;
      return <Route path={route.path} key={indx} element={
        <UnProtectedRoutes>
          {Component}
        </UnProtectedRoutes>
    } />
    });
  
  // const getProtectedRoutes = (routes) =>
  //   routes.map((route, indx) => {
  //     const Component = route.component;
  //     return <Route path={route.path} key={indx} element={<ProtectedRoutes>{Component}</ProtectedRoutes>} />
  // })

  return (
    <Router>
      <Routes>
          {getRoutes(authRoutes)}
        {/* {getProtectedRoutes(protectedRoutes)} */}
      </Routes>
    </Router>
  );
}

export default App;
