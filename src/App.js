
import './App.css';
import { Route, BrowserRouter as Router , Routes} from 'react-router-dom';

import { Home } from "./pages/Home.jsx";
import { Projects } from './pages/Projects.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element ={<Home />} exact/>
      <Route path='/projects' element={<Projects />} />
    </Routes>
  );
}

export default App;
