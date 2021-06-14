import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_persons } from "../../redux/actions/personActions";
import PersonCard from "../PersonCard/PersonCard";

const PersonList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_persons());
  }, []);
  const persons = useSelector((state) => state.persons);
  return (
    <div style={{ display: "flex", flexWrap: "wrap", marginLeft: "150px" }}>
      {persons &&
        persons.map((person, i) => <PersonCard person={person} key={i} />)}
    </div>
  );
};

export default PersonList;
