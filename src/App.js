
import './App.css';
import { Route, BrowserRouter as Router , Routes} from 'react-router-dom';

import { Home } from "./pages/Home.jsx";
import { ProjectsPage } from './pages/Projects.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element ={<Home />} exact/>
      <Route path='/projects' element={<ProjectsPage />} />
    </Routes>
  );
}

export default App;
