import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { postmovies } from "../services/api";
import { useState } from "react";

function Addcard() {
  const navigate = useNavigate();
  const [movies, setMovies] = useState({
    title: "",
    year: 0,
  });

  async function handleAddcard(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const moviePayload = {
        title: movies.title,
        year: movies.year,
      };
      const response = await postmovies(moviePayload);

      console.log(response);
      navigate("/");
    } catch (error) {
      console.log("Errored");
      console.log(error);
    }
  }
  function onChanges(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setMovies({ ...movies, [name]: value });
    console.log(movies);
  }

  return (
    <>
      <Layout title="Addcard">
        <h1>AddForm</h1>
        <form onSubmit={(e) => handleAddcard(e)}>
          <label htmlFor="title">
            Title
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Title"
              onChange={(e) => onChanges(e)}
            />
          </label>

          <label htmlFor="year">
            Year
            <input
              type="number"
              id="year"
              name="year"
              placeholder="Year"
              onChange={(e) => onChanges(e)}
            />
          </label>
          <button type="submit">add movie</button>
        </form>
      </Layout>
    </>
  );
}

export default Addcard;
