

//react toolkit
import { Routes, Route} from "react-router-dom";
//pages

import HomePage from "../HomePage/HomePage";
import PortfolioPage from '../PortfolioPage/PortfolioPage';
import CheatSheetPage from "../CheatSheet/CheatSheetPage/CheatSheetPage";

import GitPage from "../CheatSheet/GitPage/GitPage";
import InstallfestPage from "../CheatSheet/InstallfestPage/InstallfestPage";
import BashPage from "../CheatSheet/BashPage/BashPage";
import ToolsPage from "../CheatSheet/ToolsPage/ToolsPage";

import MongoPage from "../CheatSheet/MongoPage/MongoPage";
import ExpressPage from "../CheatSheet/ExpressPage/ExpressPage";
import ReactPage from "../CheatSheet/ReactPage/ReactPage";
import DeployPage from "../CheatSheet/DeployPage/DeployPage";
import FrameworkPage from "../CheatSheet/FrameworkPage/FrameworkPage";
import JSMVCPage from "../CheatSheet/JSMVCPage/JSMVCPage";
import JavascriptPage from "../CheatSheet/JavascriptPage/JavascriptPage";

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
          path="/" 
          element={<HomePage />} />
      </Routes>

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
          path="/bash"
          element={<BashPage />}  />
      </Routes>

      <Routes>
        <Route
          path="/mongo"
          element={<MongoPage />}  />
      </Routes>

      <Routes>
        <Route
          path="/express"
          element={<ExpressPage />}  />
      </Routes>

      <Routes>
        <Route
          path="/react"
          element={<ReactPage />}  />
      </Routes>

      <Routes>
        <Route
          path="/node"
          element={<ReactPage />}  />
      </Routes>
          
      <Routes>
        <Route
          path="/deploy"
          element={<DeployPage />}  />
      </Routes>

      <Routes>
        <Route
          path="/git"
          element={<GitPage />}  />
      </Routes>

      <Routes>
        <Route
          path="/Installfest" 
          element={<InstallfestPage />} />
      </Routes>

      <Routes>
        <Route
          path="/tools" 
          element={<ToolsPage />} />
      </Routes>

      <Routes>
        <Route
          path="/framework" 
          element={<FrameworkPage />} />
      </Routes>

      <Routes>
        <Route
          path="/js" 
          element={<JSMVCPage />} />
      </Routes>
      
      <Routes>
        <Route
          path="/javascript" 
          element={<JavascriptPage />} />
      </Routes>
      


    </main>
  );
}

export default App;
