import { GET_PERSONS } from "../constants/actionsTypes";

const initState = {
  persons: [],
};
const PersonReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_PERSONS:
      return {
        ...state,
        persons: action.payload.users,
      };

    default:
      return state;
  }
};

export default PersonReducer;
