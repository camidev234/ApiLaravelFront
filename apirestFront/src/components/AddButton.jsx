import { useState } from "react";
import { IoAdd } from "react-icons/io5";
import { ModalUser } from "./ModalUser";
import { Modal } from "./Modal";
import { ModalOccupation } from "./ModalOccupation";

export const AddButton = () => {
  const currentPath = window.location.pathname;
  const [ modalShow, setModalShow ] = useState(false);

  const handleClick = () => {
    setModalShow(true);
  };

  const closeModal = () => {
    setModalShow(false);
  }

  return (
    <section className="fixed bottom-5 right-10 m-4">
      <button className="bg-blue-600 p-5 text-white rounded-full hover:bg-blue-700" onClick={handleClick}>
        <IoAdd className="text-2xl"/>
      </button>
      {
        modalShow && currentPath == '/users' ? (
          <div>
            <Modal>
              <ModalUser onSetModal={closeModal}/>
            </Modal>
          </div>
        ) : (
          <div>
            {
              modalShow && currentPath == '/occupations' ? (
                <Modal>
                  <ModalOccupation onSetModal={closeModal}/>
                </Modal>
              ) : null
            }
          </div>
        )
      }
    </section>
  );
};
