import usePersonnelCalls from "../services/usePersonnelCalls";

/* eslint-disable react/prop-types */
const PersonnelCard = ({
  personnel,
  setShowModal,
  showModal,
  setFormValues,
}) => {
  const { personnelDelete, getPersonnels } = usePersonnelCalls();

  const handleDelete = (id) => {
    personnelDelete(id);
    getPersonnels();
  };

  const handleUpdate = (data) => {
    setFormValues(data);
    setShowModal(!showModal);
  };

  return (
    <tr className="flex flex-row justify-between bg-gray-100 px-10 py-3  border-b-2 border-red-400">
      <td>{personnel._id.slice(0, 8)}</td>
      <td>{personnel.firstName}</td>
      <td>{personnel.lastName}</td>
      <td>{personnel.username}</td>
      <td>{personnel.email}</td>
      <td>{personnel.phoneNumber}</td>
      <td>{personnel.salary}</td>
      <td>{personnel.title}</td>
      <td>{personnel.departmentId.name}</td>
      <td>
        <button
          className="bg-red-500 p-3 text-white rounded-lg"
          onClick={() => handleDelete(personnel._id)}
        >
          Delete
        </button>
      </td>
      <td>
        <button
          onClick={() => handleUpdate(personnel)}
          className="bg-green-500 p-3 text-white rounded-lg"
        >
          Update
        </button>
      </td>
    </tr>
  );
};

export default PersonnelCard;
