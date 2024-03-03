import { useEffect, useState } from "react";
import { LoadingSpinner } from "./LoadingSpinner";
import { getRoles } from "../services/RoleService";
import { BsXLg } from "react-icons/bs";
import { FormAddUser } from "./FormAddUser";
import PropTypes from 'prop-types';

export const ModalUser = ({ onSetModal }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    try {
      const getAllRoles = async () => {
        const responseRoles = await getRoles();
        console.log(responseRoles);
        setRoles(responseRoles.data.roles);
        setIsLoading(false);
      };

      getAllRoles();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleClick = () => {
    onSetModal();
  }

  return (
    <section className="modaluser bg-gray-800 w-[36%] h-[99%] shadow-lg rounded-lg border border-1 border-gray-600 overflow-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
      {isLoading ? (
        <section className="h-full w-full">
          <LoadingSpinner />
        </section>
      ) : (
        <section className="modalConten w-full h-full p-4 flex flex-col gap-3">
          <article className="flex w-full justify-between items-center h-[10%] sticky top-0 bg-gray-800">
            <span className="text-lg text-white">Agregar Usuario</span>
            <span>
              <button className="flex justify-center items-center" onClick={handleClick}>
                <BsXLg className="text-white" />
              </button>
            </span>
          </article>
          <article className="select w-full h-[90%]">
            <FormAddUser roles={roles}/>
          </article>
        </section>
      )}
    </section>
  );
};

ModalUser.propTypes = {
    onSetModal: PropTypes.func.isRequired
}
