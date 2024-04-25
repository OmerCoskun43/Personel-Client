/* eslint-disable no-unused-vars */
import { useSelector } from "react-redux";

const Home = () => {
  const { user } = useSelector((state) => state.auth);
  // console.log("user", user);
  return (
    <div className="bg-indigo-200  h-screen ">
      <h1 className="text-3xl font-bold text-pink-500 ">Home</h1>
    </div>
  );
};

export default Home;
