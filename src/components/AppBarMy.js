import { useSelector } from "react-redux";
import { authSelectors } from "../redux/auth";

import UserMenu from "./UserMenu/UserMenu";
import AuthMenu from "./AuthMenu/AuthMenu";
import ExtraMenu from "./ExtraMenu/ExtraMenu";

import AppBar from "@material-ui/core/AppBar";

export default function AppBarMy() {
  const isAuth = useSelector(authSelectors.getIsAuthenticated);
  return (
    <header>
      <AppBar position="fixed">
        {isAuth ? <UserMenu /> : <AuthMenu />}
        {isAuth && <ExtraMenu />}
      </AppBar>
    </header>
  );
}
