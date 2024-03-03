import PropTypes from "prop-types";
// import { useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";

export const OccupationCard = ({ isLoading, code, name, id }) => {
  const n = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//   const navigate = useNavigate();


  return (
    <section className="usercard w-[60%] m-auto flex flex-col gap-6 h-[90%]">
      {isLoading ? (
        n.map((n) => {
          return (
            <div
              className="bg-zinc-800 p-4 flex justify-around items-center rounded-lg animate-pulse"
              key={n}
            >
              <div className="name bg-zinc-700 animate-pulse rounded-2xl p-4 w-64"></div>
              <div className="last bg-zinc-700 animate-pulse rounded-2xl p-4 w-64"></div>
              <div className="role bg-zinc-700 animate-pulse rounded-lg p-4 w-64"></div>
            </div>
          );
        })
      ) : (
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
              //   onClick={handleClick}
            >
              <FaEye /> Ver mas
            </button>
          </article>
        </div>
      )}
    </section>
  );
};

OccupationCard.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  code: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};
