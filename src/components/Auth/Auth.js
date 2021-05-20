const Auth = () => {
  const submitCallback = (event) => {
    event.preventDefault();
  }

  return (
    <div>
      <h1>Welcome</h1>
      <form onSubmit={submitCallback}>
        <input type="email" name="email" placeholder="Email" required />
        <input type="password" name="password" placeholder="Password" required />
        <button>Sign in</button>
        <button>Sign up</button>
      </form>
    </div>
  );
}
 
export default Auth;