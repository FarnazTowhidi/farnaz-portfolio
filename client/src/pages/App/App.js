

//react toolkit
import { Routes, Route} from "react-router-dom";
//pages
import PortfolioPage from '../PortfolioPage/PortfolioPage';
import HomePage from "../HomePage/HomePage";
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
      <footer class="bg-dark text-center text-white">
        <div class="container p-4 pb-0">
          <section class="mb-4">     
          </section>
          
        </div>
        
      </footer>
    </main>
  );
}

export default App;
