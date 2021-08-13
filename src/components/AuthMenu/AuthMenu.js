import routes from "../../routes";
import { NavLink } from "react-router-dom";
import Toolbar from "@material-ui/core/Toolbar";
import s from "./AuthMenu.module.css";

const AuthMenu = () => (
  <Toolbar className={s.menu}>
    <NavLink to={routes.register} className="" activeClassName="">
      Register
    </NavLink>
    <NavLink to={routes.login} className="" activeClassName="">
      Login
    </NavLink>
  </Toolbar>
);
export default AuthMenu;
