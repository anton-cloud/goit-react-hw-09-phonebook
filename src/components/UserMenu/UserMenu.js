import { useSelector, useDispatch } from "react-redux";
import { authSelectors, authOperations } from "../../redux/auth";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import s from "./UserMenu.module.css";

export default function UserMenu() {
  const userMail = useSelector(authSelectors.getMail);
  const dispatch = useDispatch();

  return (
    <Toolbar className={s.menu}>
      <p>{userMail}</p>
      <Button
        type="button"
        variant="contained"
        component="button"
        onClick={() => {
          dispatch(authOperations.logOut());
        }}
      >
        Logout
      </Button>
    </Toolbar>
  );
}
