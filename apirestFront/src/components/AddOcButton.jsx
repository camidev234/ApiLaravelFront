import { useState } from "react";
import { LoadingSpinner } from "./LoadingSpinner";
import { insertOccupation } from "../services/occupationService";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

export const AddOcButton = ({ onAddErrors, occupation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setIsLoading(true);
    const insert = async () => {
      try {
        const response = await insertOccupation(occupation)
        setIsLoading(false);
        if (response.status === 200 || response.status === 201) {
          const currentPath = window.location.pathname;
          navigate("/temp", { replace: true });
          setTimeout(() => {
            navigate(currentPath, { replace: true });
          }, 0);
        }

        return response;
      } catch (error) {
        onAddErrors(error);
        setIsLoading(false);
      }
    };

    insert()
  };

  return (
    <button
      className="bg-blue-600 w-full h-10 rounded-lg text-white hover:bg-blue-700"
      onClick={handleClick}
    >
      {isLoading ? <LoadingSpinner /> : "Crear Ocupacion"}
    </button>
  );
};

AddOcButton.propTypes = {
    onAddErrors: PropTypes.func.isRequired,
    occupation: PropTypes.object.isRequired
};
