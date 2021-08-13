import { Suspense, lazy, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import { useDispatch } from "react-redux";

import routes from "./routes";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

import { authOperations } from "./redux/auth";
import AppBarMy from "./components/AppBarMy";

import s from "./App.module.css";

const HomeView = lazy(() =>
  import("./views/HomeView" /* webpackChunkName: "home-page" */)
);
const RegisterView = lazy(() =>
  import("./views/RegisterView" /* webpackChunkName: "register-page" */)
);
const LoginView = lazy(
  () => import("./views/LoginView") /* webpackChunkName: "login-page" */
);
const ContactsView = lazy(() =>
  import("./views/ContactsView" /* webpackChunkName: "contacts-page */)
);
const NotFoundView = lazy(() =>
  import("./views/NotFoundView" /* webpackChunkName: "not-found-page */)
);

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <div>
      <AppBarMy />
      <div className={s.container}>
        <Suspense fallback={<h2>Loading ...</h2>}>
          <Switch>
            <Route exact path={routes.home}>
              <HomeView />
            </Route>

            <PublicRoute
              path={routes.register}
              redirectTo={routes.home}
              restricted
            >
              <RegisterView />
            </PublicRoute>

            <PublicRoute
              path={routes.login}
              redirectTo={routes.contacts}
              restricted
            >
              <LoginView />
            </PublicRoute>

            <PrivateRoute path={routes.contacts} redirectTo={routes.login}>
              <ContactsView />
            </PrivateRoute>

            <Route>
              <NotFoundView />
            </Route>
          </Switch>
        </Suspense>
      </div>
    </div>
  );
}
