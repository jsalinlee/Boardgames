import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import promise from "redux-promise";

import "./index.css";
// import registerServiceWorker from "./registerServiceWorker";

import reducers from "./reducers";
import GamesIndex from "./components/games_index";
import NewGame from "./components/new_game";
import ShowGame from "./components/show_game";
import EditGame from "./components/edit_game";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/games/new" component={NewGame} />
          <Route path="/games/update/:id" component={EditGame} />
          <Route path="/games/:id" component={ShowGame} />
          <Route path="/" component={GamesIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
// registerServiceWorker();
