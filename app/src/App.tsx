import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import "@picocss/pico";
import Home from "./pages/Home";
import Addmoviecard from "./pages/New";

import Editmoviecard from "./pages/Edit";

function App() {
  
  return (
    <>
    
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Add" element={<Addmoviecard/>}/>
            <Route path="/Edit" element={<Editmoviecard/>}/>
          </Routes>
        </BrowserRouter>
    
    </>
  );
}

export default App;
