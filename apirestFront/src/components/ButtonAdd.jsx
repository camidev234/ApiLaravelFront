import PropTypes from "prop-types";
import { useState } from "react";
import { LoadingSpinner } from "./LoadingSpinner";
import { insertUser } from "../services/userService";
import { useNavigate } from "react-router-dom";

export const ButtonAdd = ({ table, user, onHasErrors, onAddErrors }) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setIsLoading(true);
    const insert = async () => {
      try {
        const response = await insertUser(user);
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
        onHasErrors();
      }
    };

    table == "1" ? insert() : null;
  };

  return (
    <button
      className="bg-blue-600 w-full h-10 rounded-lg text-white hover:bg-blue-700"
      onClick={handleClick}
    >
      {isLoading ? <LoadingSpinner /> : "Crear Usuario"}
    </button>
  );
};

ButtonAdd.propTypes = {
  table: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
  onHasErrors: PropTypes.func.isRequired,
  onAddErrors: PropTypes.func.isRequired
};
