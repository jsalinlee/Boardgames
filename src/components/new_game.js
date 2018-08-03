import React, { Component } from "react";
import { Link } from "react-router-dom";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import { createGameEntry, resetGame } from "../actions";
import GameForm from "./game_form";

class NewGame extends Component {
  componentWillMount() {
    this.props.resetGame();
  }

  onSubmit(values) {
    this.props.createGameEntry(values, () => {
      this.props.history.push("/");
    });
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <GameForm />
          <div className="buttons">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <Link to="/" className="btn btn-danger">
              Cancel
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: "NewGameForm"
})(
  connect(
    null,
    { createGameEntry, resetGame }
  )(NewGame)
);
