import axios from "axios";

export const FETCH_GAMES = "fetch_games";
export const CREATE_GAME_ENTRY = "create_game_entry";
export const FETCH_GAME = "show_game";
export const DELETE_GAME_ENTRY = "delete_game_entry";
export const UPDATE_GAME_ENTRY = "update_game_entry";
export const RESET_GAME = "reset_game_fields";

const ROOT_URL = "http://localhost:8000";

export function fetchGames() {
  const request = axios.get(`${ROOT_URL}/games`);

  return {
    type: FETCH_GAMES,
    payload: request
  };
}

export function fetchGame(id) {
  const request = axios.get(`${ROOT_URL}/games/${id}`);

  return {
    type: FETCH_GAME,
    payload: request
  };
}

export function createGameEntry(values, callback) {
  const request = axios
    .post(`${ROOT_URL}/games`, values)
    .then(() => callback());

  return {
    type: CREATE_GAME_ENTRY,
    payload: request
  };
}

export function updateGameEntry(values, callback) {
  console.log("Fields for Updated Game: ", values);
  const request = axios.put(`${ROOT_URL}/games`, values).then(() => callback());

  return {
    type: UPDATE_GAME_ENTRY,
    payload: request
  };
}

export function deleteGameEntry(id, callback) {
  const request = axios
    .delete(`${ROOT_URL}/games/${id}`)
    .then(() => callback());

  return {
    type: DELETE_GAME_ENTRY,
    payload: id
  };
}

export function resetGame() {
  return {
    type: RESET_GAME
  };
}
