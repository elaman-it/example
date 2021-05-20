import { useSelector } from "react-redux";

const Home = () => {
  const auth = useSelector(state => state.auth);

  return (
    <div>
      {auth.token}
      {auth.id}
      <h1>Home</h1>
    </div>
  );
}
 
export default Home;