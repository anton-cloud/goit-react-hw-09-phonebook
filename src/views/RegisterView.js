import { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authOperations, authSelectors } from "../redux/auth";
// styles
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const error = useSelector(authSelectors.getError);

  const handleChange = useCallback((event) => {
    const { name, value } = event.target;
    switch (name) {
      case "name":
        return setName(value);
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return null;
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <h1 className="title">Register Page</h1>
      {error && (
        <>
          <h2>Error</h2>
          <p>{error}</p>
        </>
      )}

      <form onSubmit={handleSubmit} autoComplete="off">
        <TextField
          type="text"
          name="name"
          placeholder="Enter your name"
          value={name}
          onChange={handleChange}
          variant="standard"
          margin="normal"
          required
          fullWidth
          id="name"
          label="Name"
          autoComplete="off"
          autoFocus
        />
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
          Register
        </Button>
      </form>
    </div>
  );
}
