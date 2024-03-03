import PropTypes from "prop-types";
import { useState } from "react";
import { ButtonAdd } from "./ButtonAdd";
import { ErrorMessage } from "./ErrorMesagge";
import { IoEye, IoEyeOff } from "react-icons/io5";

export const FormAddUser = ({ roles }) => {
  const articleStyles = "flex justify-between";
  const divStyles = "flex flex-col text-gray-200 gap-2 w-[47%]";
  const inputStyles =
    "bg-transparent border-b border-b-2 border-b-gray-400 focus:outline-none focus:border-b-gray-300";

  const ast = "text-red-500";

  // input states
  const [user, setUser] = useState({
    name: "",
    last_name: "",
    document_type: "CC",
    number_document: "",
    telephone: "",
    phone_number: "",
    email: "",
    address: "",
    birthdate: "",
    role_id: 1,
    password: "",
  });

  const [hasErrors, setHasErrors] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const modHasErrors = () => {
    setHasErrors(true);
    console.log(hasErrors);
  };

  const addErrors = (erros) => {
    setErrors(erros);
    console.log("errores en vista: ", erros);
  };

  const [ showPassword, setShowPassword ] = useState(false);

  const handleShowP = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="form w-full h-full">
      <form action="" onSubmit={(e) => e.preventDefault()} className="pb-4">
        <section className="personal flex flex-col gap-4 h-[32%]">
          <article>
            <span className="text-gray-200 text-lg">Datos Personales</span>
          </article>
          <article className={articleStyles}>
            <div className={divStyles}>
              <label htmlFor="name">Nombre <span className={ast}>*</span></label>
              <input
                type="text"
                className={inputStyles}
                placeholder="Nombres"
                name="name"
                value={user.name}
                onChange={handleChange}
              />
              <ErrorMessage message={errors.name} />
            </div>
            <div className={divStyles}>
              <label htmlFor="last_name">Apellidos <span className={ast}>*</span></label>
              <input
                type="text"
                className={inputStyles}
                placeholder="Apellidos"
                name="last_name"
                value={user.last_name}
                onChange={handleChange}
              />
              <ErrorMessage message={errors.last_name} />
            </div>
          </article>
          <article className={articleStyles}>
            <div className={divStyles}>
              <label htmlFor="document_type">Tipo De Documento <span className={ast}>*</span></label>
              <select
                name="document_type"
                id="document_type"
                className="bg-transparent focus:bg-gray-800 outline-none border-none"
                value={user.document_type}
                onChange={handleChange}
              >
                <option value="CC">Cedula De Ciudadania</option>
                <option value="TI">Tarjeta De Identidad</option>
                <option value="CE">Cedula De Extranjeria</option>
                <option value="PSP">Pasaporte</option>
              </select>
            </div>
            <div className={divStyles}>
              <label htmlFor="number_document">Numero De Documento <span className={ast}>*</span></label>
              <input
                type="text"
                className={inputStyles}
                placeholder="Numero De Documento"
                name="number_document"
                value={user.number_document}
                onChange={handleChange}
              />

              <ErrorMessage message={errors.number_document} />
            </div>
          </article>
        </section>
        <section className="personal flex flex-col gap-4 mt-3 h-[32%]">
          <article>
            <span className="text-gray-200 text-lg">Datos De Contacto</span>
          </article>
          <article className={articleStyles}>
            <div className={divStyles}>
              <label htmlFor="telephone">Telefono</label>
              <input
                type="text"
                className={inputStyles}
                placeholder="Telefono"
                name="telephone"
                value={user.telephone}
                onChange={handleChange}
              />
              <ErrorMessage message={errors.telephone} />
            </div>
            <div className={divStyles}>
              <label htmlFor="phone_number">Celular <span className={ast}>*</span></label>
              <input
                type="text"
                className={inputStyles}
                placeholder="Celular"
                name="phone_number"
                value={user.phone_number}
                onChange={handleChange}
              />

              <ErrorMessage message={errors.phone_number} />
            </div>
          </article>
          <article>
            <div className="w-full text-gray-300">
              <label htmlFor="email">Correo Electronico <span className={ast}>*</span></label>
              <input
                type="email"
                className={inputStyles}
                style={{
                  width: "100%",
                }}
                placeholder="AlguienExample@gmail.com"
                name="email"
                value={user.email}
                onChange={handleChange}
              />
              <ErrorMessage message={errors.email} />
            </div>
          </article>
        </section>
        <section className="personal flex flex-col gap-4 mt-3 h-[32%]">
          <article className={articleStyles}>
            <div className={divStyles}>
              <label htmlFor="address">Direccion <span className={ast}>*</span></label>
              <input
                type="text"
                className={inputStyles}
                placeholder="Direccion"
                name="address"
                value={user.address}
                onChange={handleChange}
              />
              <ErrorMessage message={errors.address} />
            </div>
            <div className={divStyles}>
              <label htmlFor="birthdate">Fecha De Nacimiento <span className={ast}>*</span></label>
              <input
                type="date"
                className={inputStyles}
                name="birthdate"
                value={user.birthdate}
                onChange={handleChange}
              />
              <ErrorMessage message={errors.birthdate} />
            </div>
          </article>
          <article className={articleStyles}>
            <div className={divStyles}>
              <label htmlFor="role_id">Rol <span className={ast}>*</span></label>
              <select
                name="role_id"
                id="role_id"
                className="bg-transparent focus:bg-gray-800 outline-none border-none"
                value={user.role_id}
                onChange={handleChange}
              >
                {roles.map((role) => (
                  <option key={role.id} value={role.id}>
                    {role.name}
                  </option>
                ))}
              </select>
            </div>
            <div className={divStyles}>
              <label htmlFor="password">Contraseña <span className={ast}>*</span></label>
              <div className="flex border-b-2 border-b-gray-300">
                <input
                  type={
                    showPassword ? "text" : "password"
                  }
                  className="bg-transparent border-b-gray-400 focus:outline-none focus:border-b-gray-300"
                  placeholder="Contraseña"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                />
                {
                  showPassword ? (
                    <span onClick={handleShowP}><IoEye /></span>
                  ) : (
                    <span onClick={handleShowP}><IoEyeOff /></span>
                  )
                }
              </div>
              <ErrorMessage message={errors.password} />
            </div>
          </article>
        </section>
        <section className="w-full flex justify-center items-center mt-7">
          <ButtonAdd
            user={user}
            table={"1"}
            onHasErrors={modHasErrors}
            onAddErrors={addErrors}
          />
        </section>
      </form>
    </div>
  );
};

FormAddUser.propTypes = {
  roles: PropTypes.array.isRequired,
};
