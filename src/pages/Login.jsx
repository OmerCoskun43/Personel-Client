import { useState } from "react";
import useAuthCalls from "../services/useAuthCalls";
// import { useSelector } from "react-redux";

const Login = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  // const { user, token } = useSelector((state) => state.auth);
  // console.log("user :>> ", user);
  // console.log("token :>> ", token);

  const { login } = useAuthCalls();

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formValues);
  };

  return (
    <div className="h-screen bg-indigo-200 pt-5 ">
      <h1 className="md:text-3xl font-bold text-center">LOGIN</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 bg-indigo-500 w-[350px] md:w-[450px] rounded-xl p-5 mx-auto mt-5 h-[50%] justify-center  "
      >
        <label className="text-white font-bold" htmlFor="email">
          Email
        </label>
        <input
          className="w-[300px] md:w-[400px] p-2 rounded-xl"
          type="email"
          id="email"
          value={formValues.email}
          placeholder="Email"
          name="email"
          onChange={handleChange}
        />
        <label htmlFor="password" className="text-white font-bold">
          Password
        </label>
        <input
          className="w-[300px] md:w-[400px] p-2 rounded-xl"
          type="password"
          id="password"
          name="password"
          value={formValues.password}
          placeholder="Password"
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-blue-300 mt-3 text-white font-bold  w-[100px] block mx-auto p-2 rounded-xl hover:bg-blue-500 "
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
