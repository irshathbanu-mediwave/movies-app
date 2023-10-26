import { Link } from "react-router-dom";

function Editmoviecard() {
  return (
    <>
      <div className="container">
        <div className="edit-card">
          <h3> Edit card</h3>
          <form>
            <label>Enter the movie name:</label>
            <input type="text" className="input-text"/>
            <label>Enter the movie year:</label>
            <input type="text" className="input-text"/>
          </form>
        </div>
        <div className="add-btn">
          <button className="contrast">Update</button>
        </div>
        <div className="add-btn">
          <button className="contrast">
            <Link to="/">Cancel</Link>
          </button>
        </div>
      </div>
    </>
  );
}
export default Editmoviecard;
