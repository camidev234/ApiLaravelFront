import PropTypes from "prop-types";

export const FormAddUser = ({ roles }) => {
  const articleStyles = "flex justify-between";
  const divStyles = "flex flex-col text-gray-200 gap-2 w-[47%]";
  const insputStyles =
    "bg-transparent border-b border-b-2 border-b-gray-400 focus:outline-none focus:border-b-gray-300";

  return (
    <div className="form w-full h-full">
      <form action="" onSubmit={(e) => e.preventDefault()} className="pb-4">
        <section className="personal flex flex-col gap-4 h-[32%]">
          <article>
            <span className="text-gray-200 text-lg">Datos Personales</span>
          </article>
          <article className={articleStyles}>
            <div className={divStyles}>
              <label htmlFor="">Nombre</label>
              <input type="text" className={insputStyles} placeholder="Nombres"/>
            </div>
            <div className={divStyles}>
              <label htmlFor="">Apellidos</label>
              <input type="text" className={insputStyles} placeholder="Apellidos"/>
            </div>
          </article>
          <article className={articleStyles}>
          <div className={divStyles}>
              <label htmlFor="">Tipo De Documento</label>
              <select name="" id="" className="bg-transparent focus:bg-gray-800 outline-none border-none">
                <option value="CC">Cedula De Ciudadania</option>
                <option value="TI">Tarjeta De Identidad</option>
                <option value="CE">Cedula De Extranjeria</option>
                <option value="PSP">Pasaporte</option>
              </select>
            </div>
            <div className={divStyles}>
              <label htmlFor="">Numero De Documento</label>
              <input type="text" className={insputStyles} placeholder="Numero De Documento"/>
            </div>
          </article>
        </section>
        <section className="personal flex flex-col gap-4 mt-3 h-[32%]">
          <article>
            <span className="text-gray-200 text-lg">Datos De Contacto</span>
          </article>
          <article className={articleStyles}>
            <div className={divStyles}>
              <label htmlFor="">Telefono</label>
              <input type="text" className={insputStyles} placeholder="Telefono"/>
            </div>
            <div className={divStyles}>
              <label htmlFor="">Celular</label>
              <input type="text" className={insputStyles} placeholder="Celular"/>
            </div>
          </article>
          <article>
            <div className={divStyles}>
              <label htmlFor="">Correo Electronico</label>
              <input type="email" className={insputStyles} placeholder="AlguienExample@gmail.com"/>
            </div>
          </article>
        </section>
        <section className="personal flex flex-col gap-4 mt-3 h-[32%]">
          <article className={articleStyles}>
            <div className={divStyles}>
              <label htmlFor="">Direccion</label>
              <input type="text" className={insputStyles} placeholder="Direccion"/>
            </div>
            <div className={divStyles}>
              <label htmlFor="">Fecha De Nacimiento</label>
              <input type="date" className={insputStyles}/>
            </div>
          </article>
          <article className={articleStyles}>
          <div className={divStyles}>
              <label htmlFor="">Rol</label>
              <select name="" id="" className="bg-transparent focus:bg-gray-800 outline-none border-none">
                {
                    roles.map((role) => {
                        return (
                            <option value={role.id} key={role.id}>{role.name}</option>
                        )
                    })
                }
              </select>
            </div>
            <div className={divStyles}>
              <label htmlFor="">Numero De Documento</label>
              <input type="text" className={insputStyles} placeholder="Numero De Documento"/>
            </div>
          </article>
        </section>
        <section className="w-full flex justify-center items-center mt-7">
            <button className="bg-blue-600 w-full pt-1 pb-1 rounded-lg text-white hover:bg-blue-700">Crear Usuario</button>
        </section>
      </form>
    </div>
  );
};

FormAddUser.propTypes = {
  roles: PropTypes.array.isRequired,
};
