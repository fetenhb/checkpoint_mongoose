import axios from "axios";
import { GET_PERSONS } from "../constants/actionsTypes";
//get
export const get_persons = () => (dispatch) => {
  axios
    .get("http://localhost:5000/api/persons/")

    .then((res) => dispatch({ type: GET_PERSONS, payload: res.data }))
    .catch((err) => console.log(err));
};

//post
export const add_person = (newPerson) => (dispatch) => {
  axios
    .post("http://localhost:5000/api/persons/addPerson", newPerson)
    .then((res) => dispatch(get_persons()))
    .catch((err) => console.log(err));
};
//edite

export const edit_person = (idPerson, editedPerson) => (dispatch) => {
  axios
    .put(
      "http://localhost:5000/api/persons/updatePerson/" + idPerson,
      editedPerson
    )
    .then((res) => dispatch(get_persons()))
    .catch((err) => console.log(err));
};

//delete

export const delete_person = (idPerson) => (dispatch) => {
  axios
    .delete("http://localhost:5000/api/persons/deletePerson/" + idPerson)
    .then((res) => dispatch(get_persons()))
    .catch((err) => console.log(err));
};
