import React, { Component } from "react";
import { Link } from "react-router-dom";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import { fetchGame, updateGameEntry } from "../actions";
import GameForm from "./game_form";

class EditGame extends Component {
  componentWillMount() {
    const { id } = this.props.match.params;
    this.props.fetchGame(id);
  }

  render() {
    const { handleSubmit } = this.props;
    console.log(this.props);

    // Default game object is necessary for Link URL back to specific game description
    const currentGame = this.props.game ? this.props.game : { id: 0 };

    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <GameForm />
          <div className="buttons">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <Link to={`/games/${currentGame.id}`} className="btn btn-danger">
              Cancel
            </Link>
          </div>
        </form>
      </div>
    );
  }

  onSubmit(values) {
    console.log("Updated values: ");
    console.log(values);

    // this.props.editGameEntry(values, () => {
    this.props.history.push(`/games/${this.props.game.id}`);
    // });
  }
}

function mapStateToProps(state, ownProps) {
  const game = state.games[ownProps.match.params.id];
  if (game) {
    return {
      game: game,
      initialValues: {
        name: game.name,
        desc: game.desc,
        rating: game.rating,
        minPlayers: game.minPlayers,
        maxPlayers: game.maxPlayers
      }
    };
  } else {
    return { game: game };
  }
}

export default connect(
  mapStateToProps,
  { fetchGame, updateGameEntry }
)(
  reduxForm({
    form: "UpdateGameForm"
  })(EditGame)
);
