import { useEffect, useState } from "react";
import { findUserById } from "../services/userService";
import PropTypes from "prop-types";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export const ShowUser = ({ id }) => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const getUser = async () => {
        setIsLoading(true);
        const responseUser = await findUserById(id);
        console.log(responseUser.data.user);
        setUser(responseUser.data.user);
        setIsLoading(false);
      };
      getUser();
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  const handleClick = () => {
    navigate("/users");
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
        <h2>Informacion Del usuario</h2>
      </article>
      <article className="names flex flex-col h-[70%] justify-evenly ">
        <span>
          <strong>Rol: </strong> {user.role}
        </span>
        <span>
          <strong>Nombres:</strong> {user.name}
        </span>
        <span>
          <strong>Apellidos:</strong> {user.last_name}
        </span>
        <span>
          <strong>Tipo de documento: </strong>
          {user.document_type == "CC" ? "Cedula de Ciudadania" : null}
        </span>
        <span>
          <strong>Numero de documento: </strong>
          {user.number_document}
        </span>
        <span>
          <strong>Telefono: </strong>
          {user.telephone}
        </span>
        <span>
          <strong>Celular: </strong>
          {user.phone_number}
        </span>
        <span>
          <strong>Direccion: </strong>
          {user.address}
        </span>
        <span>
          <strong>Fecha de nacimiento: </strong>
          {user.birthdate}
        </span>
        <span>
          <strong>Email: </strong>
          {user.email}
        </span>
        <span>
          <strong>Fecha de creacion: </strong>
          {user.created_at}
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

ShowUser.propTypes = {
  id: PropTypes.number.isRequired,
};
