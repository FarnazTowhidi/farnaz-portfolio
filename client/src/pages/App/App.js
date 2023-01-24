

//react toolkit
import { Routes, Route} from "react-router-dom";
//pages
import HomePage from "../HomePage/HomePage";
import PortfolioPage from '../PortfolioPage/PortfolioPage';
import CheatSheetPage from "../CheatSheetPage/CheatSheetPage";
import CheatSheetReactPage from "./CheatSheetReactPage/CheatSheetReactPage";
import NavBar from '../../components/NavBar/NavBar';
//Stlyesheets
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import '../../scss/custom.scss';


function App() {
  return (
    <main className="App">
      <NavBar />
      <Routes>
        <Route
          path="/portfolio" 
          element={<PortfolioPage />} />
      </Routes>
      <Routes>
        <Route
          path="/home" 
          element={<HomePage />} />
      </Routes>
      
      <Routes>
        <Route
          path="/cheatsheet"
          element={<CheatSheetPage />}  />
      </Routes>

      <Routes>
        <Route
          path="/cheatsheetreact"
          element={<CheatSheetReactPage />}  />
      </Routes>

      <Routes>
        <Route
          path="/" 
          element={<HomePage />} />
      </Routes>
    </main>
  );
}

export default App;
