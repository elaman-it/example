import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../store/actions/auth";

const Auth = () => {
  const dispatch = useDispatch();
  const error = useSelector(state => state.auth.error);
  const [method, setMethod] = useState("signin");

  const submitCallback = (event) => {
    event.preventDefault();

    const data = new FormData(event.target);

    dispatch(auth(method, data.get('email'), data.get('password')));
  }

  return (
    <div>
      <h1>Welcome</h1>
      <form onSubmit={submitCallback}>
        <input type="email" name="email" placeholder="Email" required />
        <input type="password" name="password" placeholder="Password" required />
        <button onClick={() => setMethod("signin")}>Sign in</button>
        <button onClick={() => setMethod("signup")}>Sign up</button>
      </form>
    </div>
  );
}
 
export default Auth;