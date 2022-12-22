
import './App.css';
//react toolkit
import { Routes, Route} from "react-router-dom";
//pages
import PortfolioPage from '../PortfolioPage/PortfolioPage';
import ResumePage from '../ResumePage/ResumePage';
import NavBar from '../../components/NavBar/NavBar';
//Stlyesheets
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <main className="App">
      <NavBar />
      <Routes>
        <Route
          path="/portfolio" 
          element={<PortfolioPage />} />
      </Routes>
    </main>
  );
}

export default App;
