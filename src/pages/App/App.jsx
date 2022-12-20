//react toolkit
import { Routes, Route} from "react-router-dom";

import './App.css';

function App() {
  return (
   <>
    <main className="App">  
      <Routes>
        <Route path="/portfolio" ></Route>
        <Route path="/resume" ></Route>
        <Route path="/contact"></Route>
      </Routes>
    </main>
   </>
  );
}

export default App;
