import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IMovie } from "../components/types";
import Layout from "../components/Layout";
import { putmovies } from "../services/api";

interface IEditForm {
  movies: IMovie;
}
const Editcard: React.FC<IEditForm> = ({ movies }) => {
  const { id } = useParams();
  const [editValues, seteditValue] = useState({
    title: movies.title,
    year: movies.year,
  });

  useEffect(() => {
    console.log("Getting info of ", id);
  }, [id]);
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    seteditValue({ ...editValues, [name]: value });
  }
  async function handleEditcard() {
    try {
      const response = await putmovies(editValues, movies.id);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <Layout title={`EditMovie${movies.title}`}>
        <main className="container">
          <form>
            <label htmlFor="title">
              Title
              <input
                type="text"
                id="title"
                name="title"
                value={editValues.title}
                placeholder="Title"
                onChange={(e) => handleChange(e)}
              />
            </label>

            <label htmlFor="year">
              Year
              <input
                type="number"
                id="year"
                name="year"
                value={editValues.year}
                placeholder="Year"
                onChange={(e) => handleChange(e)}
              />
            </label>
            <div className="grid">
              <Link to="/">
                <button onClick={() => handleEditcard()}>add</button>
              </Link>
              <Link to="/">
                <button>Cancel</button>
              </Link>
            </div>
          </form>
        </main>
      </Layout>
    </>
  );
};

export default Editcard;

// import { Link } from "react-router-dom";

// function Editcard() {
//   return (
//     <>
//       <div className="container">
//         <div className="edit-card">
//           <h3> Edit card</h3>
//           <form>
//             <label>Enter the movie name:</label>
//             <input type="text" className="input-text"/>
//             <label>Enter the movie year:</label>
//             <input type="text" className="input-text"/>
//           </form>
//         </div>
//         <div className="add-btn">
//           <button className="contrast">Update</button>
//         </div>
//         <div className="add-btn">
//           <button className="contrast">
//             <Link to="/">Cancel</Link>
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }
// export default Editcard;
