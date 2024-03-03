import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { findOccupationById } from "../services/occupationService";
import { IoArrowBackCircleSharp } from "react-icons/io5";

export const ShowOccupation = ({ id }) => {
  const [occupation, setOccupation] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const getOccupation = async () => {
        setIsLoading(true);
        const response = await findOccupationById(id);
        setOccupation(response.data.occupation);
        setIsLoading(false);
      };
      getOccupation();
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  const handleClick = () => {
    navigate('/occupations');
  };

  return isLoading ? (
    <section className="bg-zinc-800 p-4 rounded-xl animate-pulse w-[30%] h-[92%] flex flex-col gap-4">
      <div className="bg-zinc-700 animate-pulse rounded-2xl p-4 w-full h-28"></div>
      <div className="bg-zinc-700 animate-pulse rounded-2xl p-4 w-full h-10"></div>
      <div className="bg-zinc-700 animate-pulse rounded-2xl p-4 w-full h-10"></div>
      <div className="bg-zinc-700 animate-pulse rounded-2xl p-4 w-full h-10"></div>
      <div className="bg-zinc-700 animate-pulse rounded-2xl p-4 w-full h-10"></div>
      <div className="bg-zinc-700 animate-pulse rounded-2xl p-4 w-full h-10"></div>
      <div className="bg-zinc-700 animate-pulse rounded-2xl p-4 w-full h-10"></div>
      <div className="bg-zinc-700 animate-pulse rounded-2xl p-4 w-full h-10"></div>
    </section>
  ) : (
    <section className="user bg-gray-800 w-[30%] h-[92%] p-4 rounded-xl shadow-md flex flex-col gap-4 text-white">
      <article className="p4 w-full h-[15%] flex justify-center items-center text-2xl">
        <h2>Informacion De La Ocupacion</h2>
      </article>
      <article className="names flex flex-col h-[70%] gap-1 ">
        <span>
          <strong>Codigo: </strong> {occupation.occupation_code}
        </span>
        <span>
          <strong>Ocupacion:</strong> {occupation.occupation_name}
        </span>
        <span>
          <strong>Descripcion:</strong> {occupation.description}
        </span>
      </article>
      <article className="flex justify-center items-center">
        <button
          className="flex justify-center items-center gap-1 rounded-md bg-blue-600 p-2"
          onClick={handleClick}
        >
          <IoArrowBackCircleSharp /> Volver
        </button>
      </article>
    </section>
  );
};

ShowOccupation.propTypes = {
  id: PropTypes.number.isRequired,
};
