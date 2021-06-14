import React, { useEffect } from "react";
import "../PersonDetails/PersonDetails.css";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { get_persons } from "../../redux/actions/personActions";
const PersonDetails = (props) => {
  const personFound = props.persons.find(
    (person) => person.name == props.match.params.title
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_persons());
  }, []);
  return (
    <div className="bdy">
      <div class="card-container">
        <span class="pro">PRO</span>
        <img class="round" src={personFound && personFound.photo} alt="user" />
        <h3>{personFound && personFound.name}</h3>
        <h5>{personFound && personFound.email}</h5>
        <br />
        <h5>{personFound && personFound.age} ans</h5> <br />
        <p style={{ fontSize: "16px", marginBottom: "10px" }}>
          {personFound && personFound.profession}
        </p>
        <div class="buttons">
          <Link
            to={`/Edit/${personFound && personFound.name}`}
            style={{ textDecoration: "none" }}
          >
            <button class="primary ghost">Edit</button>{" "}
          </Link>
        </div>
        <div class="skills">
          <h6>favouriteFoods</h6>
          <ul>
            {personFound &&
              personFound.favouriteFoods.map((food) => <li>{food}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PersonDetails;
