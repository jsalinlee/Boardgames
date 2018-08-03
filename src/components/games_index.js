import _ from "lodash";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchGames } from "../actions";

class GamesIndex extends Component {
  componentDidMount() {
    this.props.fetchGames();
  }

  renderGames() {
    return _.map(this.props.games, (game) => {
      return (
        <li className="list-group-item d-flex align-items-center" key={game.id}>
          <div className="game_label">{game.name}</div> &nbsp;&nbsp;&nbsp;&nbsp;{
            game.rating
          }{" "}
          out of 10
          <div className="ml-auto">
            <Link className="btn btn-secondary" to={`/games/${game.id}`}>
              More Info
            </Link>
          </div>
        </li>
      );
    });
  }

  render() {
    // console.log("this.props: ", this.props);
    return (
      <div>
        <div className="d-flex align-items-center justify-content-between">
          <h1>Games be here!</h1>
          <Link className="btn btn-primary" to="/games/new">
            Add a Game
          </Link>
        </div>
        <ul className="list-group">{this.renderGames()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { games: state.games };
}

export default connect(
  mapStateToProps,
  { fetchGames }
)(GamesIndex);
