

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
import HtmlPage from "../CheatSheet/HtmlPage/HtmlPage";
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
        <Route path="/" element={<HomePage />} />   
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/cheatsheet" element={<CheatSheetPage />}  />    
        <Route path="/bash" element={<BashPage />}  />
        <Route path="/mongo" element={<MongoPage />}  />
        <Route path="/express" element={<ExpressPage />}  />
        <Route path="/react" element={<ReactPage />}  />
        <Route path="/node" element={<ReactPage />}  />
        <Route path="/deploy" element={<DeployPage />}  />
        <Route path="/git" element={<GitPage />}  />
        <Route path="/Installfest" element={<InstallfestPage />} />
        <Route path="/tools" element={<ToolsPage />} />
        <Route path="/framework" element={<FrameworkPage />} />
        <Route path="/js" element={<JSMVCPage />} />
        <Route path="/javascript" element={<JavascriptPage />} />
        <Route path="/html" element={<HtmlPage />} />
      </Routes>
    </main>
  );
}

export default App;
