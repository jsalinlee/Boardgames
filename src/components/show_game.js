import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchGame, deleteGameEntry } from "../actions";

class ShowGame extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchGame(id);
  }

  render() {
    const { game } = this.props;
    if (!game) {
      return <div>Setting up the board...</div>;
    }

    return (
      <div className="show_game">
        <div className="d-flex justify-content-between">
          <h2>{game.name}</h2>
          <Link className="btn btn-primary" to="/">
            Back to Library
          </Link>
        </div>
        <h4>Description: {game.desc}</h4>
        <h4>Rating: {game.rating}/10</h4>
        <h4>
          No. of Players: {game.minPlayers} - {game.maxPlayers}
        </h4>
        <div className="d-flex justify-content-between">
          <Link className="btn btn-primary" to={`/games/update/${game.id}`}>
            {" "}
            Update Info{" "}
          </Link>
          <button
            className="btn btn-danger"
            onClick={this.onDeleteClick.bind(this)}
          >
            {" "}
            Delete Game{" "}
          </button>
        </div>
      </div>
    );
  }

  onDeleteClick() {
    const { id } = this.props.match.params;
    this.props.deleteGameEntry(id, () => {
      this.props.history.push("/");
    });
  }
}

function mapStateToProps({ games }, ownProps) {
  return { game: games[ownProps.match.params.id] };
}

export default connect(
  mapStateToProps,
  { fetchGame, deleteGameEntry }
)(ShowGame);
