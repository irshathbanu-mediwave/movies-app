
import Layout from "../components/Layout";
import { postmovies } from "../services/api";
import { IShowError } from "../components/types";
import { useState } from "react";

function Addcard() {
  // const navigate = useNavigate();
  const [movies, setMovies] = useState({
    title: "",
    year: 0,
  });
  const [showmodal, setshowmodal] = useState(false);
  const [showmodalmsg, setshowmodalmsg] = useState<IShowError>({
    action: "",
    msg: "",
  });
  const togglemodal = () => {
    setshowmodal((p) => !p);
  };
  function close() {
    togglemodal();
  }

  async function handleAddcard(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    togglemodal();
    try {
      const movieload = {
        title: movies.title,
        year: movies.year,
      };
      const response = await postmovies(movieload);
      console.log(response);
      setshowmodalmsg({
        action: "Successfully add card ",
        msg: "added",
      });
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error adding movie:", error);
        setshowmodalmsg({
          action: "Failed",
          msg: error.message,
        });
      }

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
        <h1>AddMoviescard</h1>
        <form onSubmit={(e) => handleAddcard(e)}>
          <label htmlFor="title">
            Title
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Enter the title"
              onChange={(e) => onChanges(e)}
              required
            />
          </label>

          <label htmlFor="year">
            Year
            <input
              type="number"
              id="year"
              name="year"
              placeholder="Enter the  year"
              onChange={(e) => onChanges(e)}
              required
            />
          </label>

          <button type="submit">add movie</button>
          {showmodal && (
            <dialog open>
              <article>
                <a
                  href="/"
                  aria-label="close"
                  className="close"
                  data-target="example"
                  onClick={close}
                ></a>
                <h4>{showmodalmsg.action}</h4>
                <p> {showmodalmsg.msg}</p>
              </article>
            </dialog>
          )}
        </form>
      </Layout>
    </>
  );
}

export default Addcard;
