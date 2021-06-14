import React from "react";
import "../PersonCard/PersonCard.css";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { delete_person } from "../../redux/actions/personActions";
const PersonCard = ({
  person: { _id, name, email, photo, profession, tel, favouriteFoods, age },
}) => {
  const dispatch = useDispatch();
  const deletee = () => {
    dispatch(delete_person(_id));
  };
  return (
    <div>
      <div class="cont">
        <div class="card-wrapper">
          <div class="card profile-two">
            <Link to={`/person/${name}`} style={{ textDecoration: "none" }}>
              <div class="card-image profile-img--two">
                <img
                  src={photo}
                  alt="profile two"
                  style={{ height: "100%", width: "100%" }}
                />
              </div>{" "}
            </Link>

            <ul class="social-icons">
              <li>
                <a href="">
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i class="fab fa-dribbble"></i>
                </a>
              </li>
            </ul>

            <div
              class="details jane"
              style={{ display: "flex", justifyContent: "space-around" }}
            >
              {" "}
              <div class="buttons" style={{ alignSelf: "center" }}>
                <button
                  class="primary ghost"
                  style={{ cursor: "pointer" }}
                  onClick={() => deletee()}
                >
                  Delete
                </button>{" "}
              </div>
              <h2>
                {name}
                <br />
                <span class="job-title">{profession}</span>{" "}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonCard;
