import { FETCH_GAME, RESET_GAME } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_GAME:
      return action.payload.data;
    case RESET_GAME:
      return {};
    default:
      return state;
  }
}
