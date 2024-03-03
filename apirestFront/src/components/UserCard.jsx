import PropTypes from "prop-types";
import { FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const UserCard = ({ id, name, last_name, role }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/user/${id}`);
  };

  return (
    <section className="usercard w-[70%] m-auto flex flex-col gap-6 h-[90%]">
      <div className="card flex bg-gray-800 shadow-md rounded-lg p-4 mt-6 border border-1 border-gray-700">
        <article className="w-64 flex justify-center items-center text-lg text-white">
          Nombre: {name}
        </article>
        <article className="w-64 flex justify-center items-center text-lg text-white">
          Apellidos: {last_name}
        </article>
        <article className="w-64 flex justify-center items-center text-lg text-white">
          Rol: {role}
        </article>
        <article className="w-64 flex justify-center items-center text-lg text-white">
          <button
            className="flex justify-center items-center gap-2 bg-blue-800 p-2 rounded-md hover:bg-blue-700"
            onClick={handleClick}
          >
            <FaEye /> Ver mas
          </button>
        </article>
      </div>
    </section>
  );
};

UserCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  // isloading: PropTypes.bool.isRequired,
};
