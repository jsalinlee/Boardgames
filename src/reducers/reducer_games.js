import _ from "lodash";
import { FETCH_GAMES, FETCH_GAME, DELETE_GAME_ENTRY } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_GAMES:
      return _.mapKeys(action.payload.data, "id");
    case FETCH_GAME:
      return { ...state, [action.payload.data.id]: action.payload.data };
    case DELETE_GAME_ENTRY:
      return _.omit(state, action.payload);
    default:
      return state;
  }
}
