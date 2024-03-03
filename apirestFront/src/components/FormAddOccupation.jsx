import { useState } from "react";
import { AddOcButton } from "./AddOcButton";
import { ErrorMessage } from "./ErrorMesagge";

export const FormAddOccupation = () => {
  const articleStyles = "flex flex-col gap-6";
  const divStyles = "flex flex-col text-gray-200 gap-2 w-full";
  const inputStyles =
    "bg-transparent border-b border-b-2 border-b-gray-400 focus:outline-none focus:border-b-gray-300 resize-none";

  const textarea =
    "bg-transparent border-2 rounded-lg p-1 border-gray-500 focus:outline-none focus:border-gray-300 resize-none";

  const [occupation, setOccupation] = useState({
    occupation_code: "",
    occupation_name: "",
    description: "",
  });

  const [ errors, setErrors ] = useState({});

  const addErrors = (error) => {
    setErrors(error)
  };

  const handleChange = (e) => {
    setOccupation({ ...occupation, [e.target.name]: e.target.value });
  };

  return (
    <div className="form w-full h-full">
      <form action="" onSubmit={(e) => e.preventDefault()} className="pb-4">
        <section className="personal flex flex-col gap-4 h-[32%] w-full">
          <article className={articleStyles}>
            <div className={divStyles}>
              <label htmlFor="">Codigo </label>
              <input
                type="text"
                placeholder="Codigo"
                className={inputStyles}
                name="occupation_code"
                onChange={handleChange}
              />
              <ErrorMessage message={errors.occupation_code}/>
            </div>
            <div className={divStyles}>
              <label htmlFor="">Ocupacion </label>
              <input
                type="text"
                placeholder="Ocupacion"
                className={inputStyles}
                name="occupation_name"
                onChange={handleChange}
              />
              <ErrorMessage message={errors.occupation_name}/>
            </div>
            <div className={divStyles}>
              <label htmlFor="">Descripcion </label>
              <textarea
                name="description"
                id=""
                cols="30"
                rows="10"
                className={textarea}
                onChange={handleChange}
              ></textarea>
              <ErrorMessage message={errors.description}/>
            </div>
          </article>
        </section>
        <section className="w-full flex justify-center items-center mt-7"><AddOcButton onAddErrors={addErrors} occupation={occupation}/></section>
      </form>
    </div>
  );
};
