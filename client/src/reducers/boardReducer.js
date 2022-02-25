import { BOARD_SAVE, BOARD_REMOVE, BOARD_READ, BOARD_LIST } from "../actions/types";

export const boards = (state = {}, action) =>{
  switch (action.type) {
    case BOARD_SAVE:
      return { ...state, loginSuccess: action.payload };
    case BOARD_REMOVE:
      return { ...state };
    case BOARD_READ:
      return { ...state, userData: action.payload };
    case BOARD_LIST:
      return { ...state, register: action.payload };
    default:
      return state;
  }
}
export default users;
