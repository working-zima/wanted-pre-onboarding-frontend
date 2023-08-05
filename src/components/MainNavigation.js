import { NavLink } from "react-router-dom";

import { getAuthToken } from "../utils/auth";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  const isAuth = getAuthToken();
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          {!!isAuth ? (
            <li>
              <NavLink to="/todo">Todo</NavLink>
            </li>
          ) : (
            <>
              <li>
                <NavLink to="/signin">Sign In</NavLink>
              </li>
              <li>
                <NavLink to="/signup">Sign Up</NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
