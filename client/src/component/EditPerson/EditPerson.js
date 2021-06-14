import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "../AddPerson/AddPerson.css";
import { Link } from "react-router-dom";
import { edit_person, get_persons } from "../../redux/actions/personActions";
const EditPerson = (props) => {
  const pFound = props.persons.find(
    (person) => person.name == props.match.params.name
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_persons());
  }, []);
  console.log(pFound && pFound.name);
  const [name, setName] = useState(pFound && pFound.name);
  const [email, setEmail] = useState(pFound && pFound.email);
  const [tel, setTel] = useState(pFound && pFound.tel);
  const [profession, setProfession] = useState(pFound && pFound.profession);
  const [photo, setPhoto] = useState(pFound && pFound.photo);
  const [age, setAge] = useState(pFound && pFound.age);

  const toggle = () => {
    setEmail(pFound && pFound.email);
    setTel(pFound && pFound.tel);
    setName(pFound && pFound.name);
    setAge(pFound && pFound.age);
    setPhoto(pFound && pFound.photo);
    setProfession(pFound && pFound.profession);
    setTel(pFound && pFound.tel);
  };
  console.log(pFound && pFound._id);
  const edit = () => {
    dispatch(
      edit_person(pFound && pFound._id, {
        name,
        email,
        tel,
        profession,
        photo,
        photo,
        age,
      })
    );
    toggle();
  };
  return (
    <div>
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
            <p>edit person</p>
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
                value="Edit"
                style={{ background: "#ff181845" }}
                onClick={edit}
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
    </div>
  );
};

export default EditPerson;
