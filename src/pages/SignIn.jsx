/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import usePersonnelCalls from "../services/usePersonnelCalls";
import { useSelector } from "react-redux";
import useAuthCalls from "../services/useAuthCalls";

const SignIn = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    departmentId: "",
    username: "",
    firstName: "",
    lastName: "",
    description: "",
    phoneNumber: "",
    title: "",
    salary: "",
  });

  const { getDepartments } = usePersonnelCalls();
  const { register } = useAuthCalls();
  const { departments } = useSelector((state) => state.personnel);

  useEffect(() => {
    getDepartments();
  }, []);

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    register(formValues);
    console.log("formValues", formValues);
    setFormValues({
      email: "",
      password: "",
      departmentId: "",
      username: "",
      firstName: "",
      lastName: "",
      description: "",
      phoneNumber: "",
      title: "",
      salary: "",
    });
  };

  return (
    <div className="h-screen bg-indigo-200 pt-5 ">
      <h1 className="md:text-3xl font-bold text-center">REGISTER</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 bg-indigo-500 w-[350px] md:w-[450px] rounded-xl p-5 mx-auto mt-5  justify-center  "
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
          required
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
          required
        />
        <label className="text-white font-bold" htmlFor="departmentId">
          Department
        </label>
        <select
          className="w-[300px] md:w-[400px] p-2 rounded-xl"
          name="departmentId"
          id="departmentId"
          value={formValues.departmentId}
          onChange={handleChange}
          // required
        >
          {departments?.map((department) => {
            return (
              <option key={department._id} value={department._id}>
                {department.name}
              </option>
            );
          })}
        </select>

        <label className="text-white font-bold" htmlFor="username">
          Username
        </label>
        <input
          type="text"
          id="username"
          value={formValues.username}
          onChange={handleChange}
          name="username"
          className="w-[300px] md:w-[400px] p-2 rounded-xl"
          required
        />
        <label className="text-white font-bold" htmlFor="firstName">
          FirstName
        </label>
        <input
          type="text"
          id="firstName"
          value={formValues.firstName}
          onChange={handleChange}
          name="firstName"
          className="w-[300px] md:w-[400px] p-2 rounded-xl"
          required
        />
        <label className="text-white font-bold" htmlFor="lastName">
          LastName
        </label>
        <input
          type="text"
          id="lastName"
          value={formValues.lastName}
          onChange={handleChange}
          name="lastName"
          className="w-[300px] md:w-[400px] p-2 rounded-xl"
          required
        />

        <label className="text-white font-bold" htmlFor="title">
          Title
        </label>
        <input
          type="text"
          id="title"
          value={formValues.title}
          onChange={handleChange}
          name="title"
          className="w-[300px] md:w-[400px] p-2 rounded-xl"
          required
        />

        <label className="text-white font-bold" htmlFor="phoneNumber">
          PhoneNumber
        </label>
        <input
          type="text"
          id="phoneNumber"
          value={formValues.phoneNumber}
          onChange={handleChange}
          name="phoneNumber"
          className="w-[300px] md:w-[400px] p-2 rounded-xl"
          required
        />

        <label className="text-white font-bold" htmlFor="salary">
          Salary
        </label>
        <input
          type="number"
          id="salary"
          value={formValues.salary}
          onChange={handleChange}
          name="salary"
          className="w-[300px] md:w-[400px] p-2 rounded-xl"
          required
        />

        <label className="text-white font-bold" htmlFor="description">
          Description
        </label>
        <input
          type="text"
          id="description"
          value={formValues.description}
          onChange={handleChange}
          name="description"
          className="w-[300px] md:w-[400px] p-2 rounded-xl"
          required
        />

        <button
          type="submit"
          className="bg-blue-300 mt-3 text-white font-bold  w-[100px] block mx-auto p-2 rounded-xl hover:bg-blue-500 "
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default SignIn;
