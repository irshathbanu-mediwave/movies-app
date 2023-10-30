import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import "@picocss/pico";
import { Suspense, lazy } from "react";
import Home from "./pages/Home";
// import Addmoviecard from "./pages/New";
const Addcard = lazy(() => import("./pages/New"));
const Editcard = lazy(() => import("./pages/Edit"));

// import Editmoviecard from "./pages/Edit";

function App() {
  function Loading() {
    return <p>Loading ...</p>;
  }
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/Add" element={<Addcard />} />
          <Route path="/Edit" element={<Editcard />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
