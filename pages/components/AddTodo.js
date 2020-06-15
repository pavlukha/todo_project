import React from "react";
import { connect } from "react-redux";

import { addTodo } from "../constants/actions";

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  updateInput = (input) => {
    this.setState({ input });
  };

  handleAddTodo = (event) => {
    event.preventDefault();
    this.props.addTodo(this.state.input);
    this.setState({ input: "" });
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <form onSubmit={this.handleAddTodo}>
          <input
            style={{
              width: "120px",
              height: "35px",
              marginRight: "15px",
              fontSize: "16px",
              backgroundColor: "#FFCE73",
              borderColor: "#666666",
              borderRadius: "6px",
            }}
            onChange={(e) => this.updateInput(e.target.value)}
            value={this.state.input}
            placeholder="Input your TODO"
          />
          <button
            type="submit"
            style={{
              backgroundColor: "#6549D7",
              color: "#F1F1F1",
              fontSize: "16px",
              width: "120px",
              height: "40px",
              borderColor: "#000099",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Add Todo
          </button>
        </form>
      </div>
    );
  }
}

export default connect(null, { addTodo })(AddTodo);
// export default AddTodo;
