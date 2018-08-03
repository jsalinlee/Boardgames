import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import GamesReducer from "./reducer_games";
import GameFieldsReducer from "./reducer_game-fields";

const rootReducer = combineReducers({
  games: GamesReducer,
  game: GameFieldsReducer,
  form: formReducer
});

export default rootReducer;
