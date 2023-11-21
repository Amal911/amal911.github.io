import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

import { Route, Routes} from 'react-router-dom';

import { Home } from "./pages/Home.jsx";
import { ProjectsPage } from './pages/Projects.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
    <Routes>
      <Route path="/" element ={<Home />} exact/>
      <Route path='/projects' element={<ProjectsPage />} exact/>
    </Routes>
    </Router>
   
  </React.StrictMode>
);

