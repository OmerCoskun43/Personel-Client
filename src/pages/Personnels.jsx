/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import usePersonnelCalls from "../services/usePersonnelCalls";
import { useSelector } from "react-redux";
import PersonnelCard from "../components/PersonnelCard";
import UpdateModal from "../components/UpdateModal";
const Personnels = () => {
  const { getPersonnels } = usePersonnelCalls();
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

  const [showModal, setShowModal] = useState(false);

  const { personnels } = useSelector((state) => state.personnel);

  useEffect(() => {
    getPersonnels();
  }, []);
  return (
    <div className="relative bg-indigo-200 pt-5 h-[160vh] ">
      <h1 className="md:text-3xl  mb-4 md:mb-5 ps-10">Personnels</h1>

      <table
        className="mx-auto w-[95%] mb-5  "
        style={{ border: "1px solid black", borderCollapse: "collapse" }}
      >
        <thead
          style={{ border: "1px solid black", borderCollapse: "collapse" }}
          className="bg-gray-300 border px-10 py-3 font-bold  border-red-300 flex gap-5 justify-between items-center mx-auto"
        >
          <tr>Id</tr>
          <tr>First Name</tr>
          <tr>Last Name</tr>
          <tr>UserName</tr>
          <tr>Email</tr>
          <tr>Phone Number</tr>
          <tr>Salary</tr>
          <tr>Title</tr>
          <tr>Department</tr>
          <tr className="bg-red-500 p-3 text-white rounded-lg">Delete</tr>
          <tr className="bg-green-500 p-3 text-white rounded-lg">Update</tr>
        </thead>{" "}
        <tbody>
          {personnels?.map((personnel) => (
            <PersonnelCard
              key={personnel._id}
              personnel={personnel}
              setShowModal={setShowModal}
              showModal={showModal}
              formValues={formValues}
              setFormValues={setFormValues}
            />
          ))}
        </tbody>
      </table>
      {showModal && (
        <UpdateModal
          setShowModal={setShowModal}
          showModal={showModal}
          formValues={formValues}
          setFormValues={setFormValues}
        />
      )}
    </div>
  );
};

export default Personnels;
