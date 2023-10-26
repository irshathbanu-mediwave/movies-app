import { Link } from "react-router-dom";

function Addmoviecard() {
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
