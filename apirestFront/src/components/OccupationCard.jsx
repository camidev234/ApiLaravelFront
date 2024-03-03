import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";

export const OccupationCard = ({ code, name, id }) => {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate(`/occupation/${id}`)
    };

  return (
    <section className="usercard w-[60%] m-auto flex flex-col gap-6 h-[90%]">
      <div className="card flex bg-gray-800 shadow-md rounded-lg p-4 mt-6 border border-1 border-gray-700">
        <article className="w-64 flex justify-center items-center text-lg text-white">
          Codigo: {code}
        </article>
        <article className="w-64 flex justify-center items-center text-lg text-white">
          <span>{name}</span>
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

OccupationCard.propTypes = {
  code: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
