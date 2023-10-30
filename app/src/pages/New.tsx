import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import nav from "../components/Nav";
import { useState } from "react";
import {getmovies,deletemovies } from "../services/api";

function Addmoviecard() {
  const navigate = useNavigate();
  const [movies, setMovies] = useState({
    title: "",
    year: 0,
  });
  async function handleaddMovies(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try{
      const Moviepayload={
        title:movie.title,
        year
      }
    }
  }
  return (
    <>
      <div className="add-card">
        <h2> Add Movie-card</h2>
        <form>
          <label htmlFor="title">Enter the movie name:</label>
          <input type="text" required placeholder="Enter the movie name" />
          <label>Enter the movie year:</label>
          <input type="text" required placeholder="Enter the year" />
        </form>
      </div>
      <div className="add-btn">
        <button className="contrast">
          <Link to={"/Edit"}>Edit</Link>
        </button>
      </div>
    </>
  );
}
export default Addmoviecard;
