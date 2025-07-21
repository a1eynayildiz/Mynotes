import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import './App.css';
import Header from './components/Header';
import NotesListPage from './pages/NotesListPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes> {/* Route'ları artık Routes içine alıyoruz */}
          <Route path="/" element={<NotesListPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
