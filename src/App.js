import './App.css';
import ShowNotesPage from './pages/Home';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';

function App() {
  return (<>
  <Router>
    <Routes>
          <Route exact path="/"  component={<ShowNotesPage/>} />
          <Route index element={<ShowNotesPage/>} />
    </Routes>
  </Router>
</>);
}

export default App;
