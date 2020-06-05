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

  handleAddTodo = () => {
    this.props.addTodo(this.state.input);
    this.setState({ input: "" });
  };

  render() {
    return (
      <div>
        {/* <form onSubmit={this.handleAddTodo}> */}
        <input
          onChange={(e) => this.updateInput(e.target.value)}
          value={this.state.input}
        />
        <button className="add-todo" onClick={this.handleAddTodo}>
          Add Todo
        </button>
        {/* <button type="submit">Add Todo</button> */}
        {/* </form> */}
      </div>
    );
  }
}

export default connect(null, { addTodo })(AddTodo);
// export default AddTodo;
