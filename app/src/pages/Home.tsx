import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <div className="containers">
        <h1>Movies</h1>
        <div className="movies-card">
          <div className="card">
            <h3>Dada</h3>
            <p>Year: 2020</p>
            <div className="icons">
              <div className="pencil-icon">
                <FontAwesomeIcon className="pencil;" icon={faPencil} />
              </div>
              <div className="edit-icon">
                <FontAwesomeIcon className="edit" icon={faEdit} />
              </div>
            </div>
            <div className="delete-btn-div">
              <button className="delete-btn">Delete</button>
            </div>
          </div>

          <div className="card">
            <h3>Dada</h3>
            <p>Year: 2020</p>
            <div className="icons">
              <div className="pencil-icon">
                <FontAwesomeIcon className="pencil;" icon={faPencil} />
              </div>
              <div className="edit-icon">
                <FontAwesomeIcon className="edit" icon={faEdit} />
              </div>
            </div>
            <div className="delete-btn-div">
              <button className="delete-btn">Delete</button>
            </div>
          </div>
          <div className="card">
            <h3>Dada</h3>
            <p>Year: 2020</p>
            <div className="icons">
              <div className="pencil-icon">
                <FontAwesomeIcon className="pencil;" icon={faPencil} />
              </div>
              <div className="edit-icon">
                <FontAwesomeIcon className="edit" icon={faEdit} />
              </div>
            </div>
            <div className="delete-btn-div">
              <button className="delete-btn">Delete</button>
            </div>
          </div>
          {/* end of the card element */}
        </div>

        <div className="add-btns">
          <Link to={"/Add"} role="button" className="add-btn">
            Add card
          </Link>
        </div>
      </div>
    </>
  );
}
export default Home;
