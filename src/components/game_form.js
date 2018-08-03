import React, { Component } from "react";
import { connect } from "react-redux";
import { Field } from "redux-form";

class GameForm extends Component {
  textField(field) {
    return (
      <div>
        <label>{field.label}</label>
        <div>
          <input
            className="form-control"
            type="text"
            value={field.value}
            {...field.input}
          />
        </div>
      </div>
    );
  }

  ratingField(field) {
    return (
      <div>
        <label>{field.label}</label>
        <div>
          <input
            className="form-control"
            type="number"
            min="0"
            max="10"
            step="1"
            {...field.input}
          />
        </div>
      </div>
    );
  }

  playerNumberField(field) {
    return (
      <div className="num_players">
        <label>{field.label}</label>
        <input
          className="form-control"
          name="minPlayers"
          type="number"
          min="1"
          step="1"
          {...field.input}
        />
      </div>
    );
  }

  render() {
    console.log("GameForm props:", this.props);

    const currentGame = this.props.id
      ? this.props
      : { name: "", desc: "", rating: 0, minPlayers: 0, maxPlayers: 0 };

    return (
      <div>
        <Field label="Name" name="name" component={this.textField} />
        <Field label="Description" name="desc" component={this.textField} />
        <Field label="Rating" name="rating" component={this.ratingField} />
        <div className="num_players">
          <Field
            label="No. of Players"
            name="minPlayers"
            component={this.playerNumberField}
          />
          <label>&nbsp;&nbsp;&nbsp;to</label>
          <Field name="maxPlayers" component={this.playerNumberField} />
        </div>
      </div>
    );
  }
}

function mapStateToProps({ game }) {
  return game;
}

export default connect(mapStateToProps)(GameForm);
