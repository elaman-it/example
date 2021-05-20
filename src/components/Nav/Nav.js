import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom"

const Nav = () => {
  const isAuthenticated = useSelector(state => state.auth.token !== null);

  return (
    <ul>
      <li><NavLink to="/" exact>Home</NavLink></li>
      { !isAuthenticated ? <li><NavLink to="/auth">Auth</NavLink></li> : null }
      { isAuthenticated ? <li><NavLink to="/logout">Logout</NavLink></li> : null }
    </ul>
  );
}
 
export default Nav;