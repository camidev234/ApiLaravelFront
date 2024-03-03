import PropTypes from "prop-types";
import { BsXLg } from "react-icons/bs";
import { FormAddOccupation } from "./FormAddOccupation";

export const ModalOccupation = ({ onSetModal }) => {
  const handleClick = () => {
    onSetModal();
  };
  return (
    <section className='modaluser bg-gray-800 w-[26%] h-[90%] shadow-lg rounded-lg border border-1 border-gray-600 overflow-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800'>
      <section className="modalConten w-full h-full p-4 flex flex-col gap-3">
        <article className="flex w-full justify-between items-center h-[10%] sticky top-0 bg-gray-800">
          <span className="text-lg text-white">Agregar Ocupacion</span>
          <span>
            <button
              className="flex justify-center items-center"
              onClick={handleClick}
            >
              <BsXLg className="text-white" />
            </button>
          </span>
        </article>
        <article className="select w-full h-[90%]"><FormAddOccupation/></article>
      </section>
    </section>
  );
};

ModalOccupation.propTypes = {
  onSetModal: PropTypes.func.isRequired,
};
