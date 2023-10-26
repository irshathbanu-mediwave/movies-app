import { Link } from "react-router-dom";
function nav() {
  return (
    <>
      <nav>
        <ul>
          <div className="Home">
            <Link to="/"> Home </Link>
          </div>
          <div className="Add">
            <Link to="/Add"> Add</Link>
          </div>
          <div className="Edit">
            <Link to="/Edit"> Edit</Link>
          </div>
        </ul>
      </nav>
    </>
  );
}
export default nav;
