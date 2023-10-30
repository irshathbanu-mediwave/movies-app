import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import "@picocss/pico";
import { Suspense, lazy, useState } from "react";
import Home from "./pages/Home";
// import Addmoviecard from "./pages/New";
const AddForm = lazy(() => import("./pages/New"));
const Editcard = lazy(() => import("./pages/Edit"));
import { IMovie } from "./components/types";
// import Editmoviecard from "./pages/Edit";

function App() {
  const [movies, setMovies] = useState<IMovie>({
    id: 0,
    title: "",
    year: 0,
  });
  function Loading() {
    return <p>Loading ...</p>;
  }
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home handledit={(m) => setMovies(m)} />} />

          <Route path="/Add" element={<AddForm />} />
          <Route path="/Edit/:id" element={<Editcard movies={movies} />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
