import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

class FormDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false, login: "", password: "" };
  }

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  updateInput = (e) => {
    this.setState({
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  signIn = () => {
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <Button variant="contained" color="primary" onClick={this.handleClick}>
          Sign in
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClick}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Sign in to website</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To log in to this website, please enter your login and password.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="login"
              label="Username"
              type="text"
              fullWidth
              onChange={this.updateInput}
            />
            <TextField
              autoFocus
              margin="dense"
              id="password"
              label="Password"
              type="password"
              fullWidth
              onChange={this.updateInput}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClick} color="primary">
              Cancel
            </Button>
            <Button onClick={this.signIn} color="primary">
              Sign in
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default FormDialog;
