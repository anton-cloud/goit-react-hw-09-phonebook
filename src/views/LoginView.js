import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../redux/auth";
// styles
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default function LoginView() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = useCallback((event) => {
    const { name, value } = event.target;
    switch (name) {
      case "email":
        return setEmail(value);

      case "password":
        return setPassword(value);
      default:
        return null;
    }
  }, []);

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <h1 className="title">Login Page</h1>
      <form onSubmit={handleSubmit} autoComplete="off">
        <TextField
          type="email"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleChange}
          variant="standard"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email"
          autoComplete="off"
          autoFocus
        />

        <TextField
          type="password"
          name="password"
          placeholder="Create password"
          value={password}
          onChange={handleChange}
          variant="standard"
          margin="normal"
          required
          fullWidth
          label="Password"
          id="password"
          autoComplete="off"
        />

        <Button
          variant="outlined"
          color="primary"
          type="submit"
          className="form-field"
        >
          Login
        </Button>
      </form>
    </div>
  );
}
