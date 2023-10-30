import { Link } from "react-router-dom";
import { IMovie, IShowError } from "../components/types";
import "@picocss/pico";
import { useEffect, useState } from "react";
import { deletemovies, getmovies } from "../services/api";
import Layout from "../components/Layout";
interface Ihome {
  handledit: (movie: IMovie) => void;
}
const Home: React.FC<Ihome> = ({ handledit }) => {
  const [isloading, setisloading] = useState(false);
  const [refresh, setrefresh] = useState(false);
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [showmodal, setshowmodal] = useState(false);
  const [showmodalmsg, setshowmodalmsg] = useState<IShowError>({
    action: "",
    msg: "",
  });

  const toggleModal = () => {
    setshowmodal((prevshowModal) => !prevshowModal);
  };
  useEffect(() => {
    console.log("first called");
    async function getMoviesfromApi() {
      setisloading(true);
      try {
        const response = await getmovies();
        setMovies(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setisloading(false);
      }
    }
    getMoviesfromApi();
  }, [refresh]);
  async function handledelete(id: number) {
    toggleModal();
    try {
      await deletemovies(id);
      setshowmodalmsg({
        action: "Sucessfully deleted movie card",
        msg: "deleted",
      });
    } catch (error) {
      if (error instanceof Error) {
        console.error("error deleting movie", error);
        setshowmodalmsg({
          action: "failed",
          msg: error.message,
        });
      } else {
        console.error("An unkown error occured ;", error);
        setshowmodalmsg({
          action: "failed",
          msg: "an unknown error occured",
        });
      }
    }
  }
  return (
    <>
      <Layout title="Home">
        <h1>Home</h1>
        <div className="container">
          <Link to="/Add" role="button" className="secondary">
            +
          </Link>
          <button
            disabled={isloading}
            onClick={() => setrefresh((prev) => !prev)}
          >
            refresh list
          </button>
          {isloading ? (
            <p>Loading movies!</p>
          ) : (
            <div className="grid">
              {movies.map((m) => (
                <article key={m.id}>
                  <h1>{m.title}</h1>
                  <h3>{m.year}</h3>

                  <div className="grid">
                    <Link to={`/Edit/${m.id}`}>
                      <button onClick={() => handledit(m)}>Edit</button>
                    </Link>
                    <button onClick={() => handledelete(m.id)}>delete</button>
                    {showmodal && (
                      <dialog open>
                        <article>
                          <a
                            href="#close"
                            aria-label="Close"
                            className="close"
                            data-target="modal-example"
                            onClick={toggleModal}
                          ></a>
                          <h3>{showmodalmsg.action}</h3>
                          <p>{showmodalmsg.msg}</p>
                        </article>
                      </dialog>
                    )}
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </Layout>
    </>
  );
};

export default Home;

// function Home() {
//   return (
//     <>
//       <div className="containers">
//         <h1>Movies</h1>
//         <div className="movies-card">
//           <div className="card">
//             <h3>Dada</h3>
//             <p>Year: 2020</p>
//             <div className="icons">
//               <div className="pencil-icon">
//                 <FontAwesomeIcon className="pencil;" icon={faPencil} />
//               </div>
//               <div className="edit-icon">
//                 <FontAwesomeIcon className="edit" icon={faEdit} />
//               </div>
//             </div>
//             <div className="delete-btn-div">
//               <button className="delete-btn">Delete</button>
//             </div>
//           </div>

//           <div className="card">
//             <h3>Dada</h3>
//             <p>Year: 2020</p>
//             <div className="icons">
//               <div className="pencil-icon">
//                 <FontAwesomeIcon className="pencil;" icon={faPencil} />
//               </div>
//               <div className="edit-icon">
//                 <FontAwesomeIcon className="edit" icon={faEdit} />
//               </div>
//             </div>
//             <div className="delete-btn-div">
//               <button className="delete-btn">Delete</button>
//             </div>
//           </div>
//           <div className="card">
//             <h3>Dada</h3>
//             <p>Year: 2020</p>
//             <div className="icons">
//               <div className="pencil-icon">
//                 <FontAwesomeIcon className="pencil;" icon={faPencil} />
//               </div>
//               <div className="edit-icon">
//                 <FontAwesomeIcon className="edit" icon={faEdit} />
//               </div>
//             </div>
//             <div className="delete-btn-div">
//               <button className="delete-btn">Delete</button>
//             </div>
//           </div>
//           {/* end of the card element */}
//         </div>

//         <div className="add-btns">
//           <Link to={"/Add"} role="button" className="add-btn">
//             Add card
//           </Link>
//         </div>
//       </div>
//     </>
//   );
// }
// export default Home;
