import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add_person } from "../../redux/actions/personActions";
import { Link } from "react-router-dom";
import "../AddPerson/AddPerson.css";
const AddPerson = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [profession, setProfession] = useState("");
  const [photo, setPhoto] = useState("");
  const [age, setAge] = useState("");

  const dispatch = useDispatch();

  const add = () => {
    dispatch(add_person({ name, email, tel, profession, photo, photo, age }));
  };
  return (
    <div
      className="bd"
      style={{
        background: "linear-gradient(45deg, #fc466b, #3f5efb)",
        minHeight: "100vh",
      }}
    >
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&display=swap"
        rel="stylesheet"
      />

      <div class="container">
        <form>
          <p>Add new person</p>
          <input
            type="email"
            placeholder="Email"
            style={{ width: "200px" }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            type="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="tel"
            placeholder="Tel"
            value={tel}
            onChange={(e) => setTel(e.target.value)}
          />
          <br />
          <input
            type="photo"
            placeholder="URL photo"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
          />
          <br />
          <input
            type="age"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <input
            type="profession"
            placeholder="profession"
            value={profession}
            onChange={(e) => setProfession(e.target.value)}
          />
          <br />
          <Link to="/">
            {" "}
            <input
              type="button"
              value="Add"
              style={{ background: "#ff181845" }}
              onClick={add}
            />{" "}
          </Link>
        </form>

        <div class="drops">
          <div class="drop drop-1"></div>
          <div class="drop drop-2"></div>
          <div class="drop drop-3"></div>
          <div class="drop drop-4"></div>
          <div class="drop drop-5"></div>
        </div>
      </div>
    </div>
  );
};

export default AddPerson;
