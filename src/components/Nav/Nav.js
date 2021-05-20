import { NavLink } from "react-router-dom"

const Nav = () => {
  return (
    <ul>
      <li><NavLink to="/" exact>Home</NavLink></li>
      <li><NavLink to="/auth">Auth</NavLink></li>
    </ul>
  );
}
 
export default Nav;