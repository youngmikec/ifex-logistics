import React, {createContext} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { authRoutes } from './routes';
import ProtectedRoutes, { UnProtectedRoutes } from './routes/protected-route';

let trackingData = {message: 'welcome'};
const TrackingContext = createContext(trackingData);

function App() {
  
  const getRoutes = (routes) => 
    routes.map((route, indx) => {
      const Component = route.component;
      return <Route path={route.path} key={indx} element={
      <UnProtectedRoutes>
        {/* <TrackingContext.Provider value={trackingData}> */}
          {Component}
        {/* </TrackingContext.Provider> */}
      </UnProtectedRoutes>
    } />
    });
  
  const getProtectedRoutes = (routes) =>
    routes.map((route, indx) => {
      const Component = route.component;
      return <Route path={route.path} key={indx} element={<ProtectedRoutes>{Component}</ProtectedRoutes>} />
    })

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
