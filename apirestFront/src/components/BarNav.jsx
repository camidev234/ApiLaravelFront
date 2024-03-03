import { NavLink } from "react-router-dom"


export const BarNav = () => {

    const linkStyles = " p-2 text-white hover:border-b-2 border-b-blue-500 cursor-pointer"

    return (
        <section className="h-[12vh] flex justify-center items-center">
            <nav className="nav w-[80%] h-full flex justify-center">
                <ul className="flex gap-11 items-center">
                    <li><NavLink className={linkStyles} to="/">Inicio</NavLink></li>
                    <li><NavLink className={linkStyles} to="/users">Usuarios</NavLink></li>
                    <li><NavLink className={linkStyles} to="/requisiciones">Requisiciones</NavLink></li>
                    <li><NavLink className={linkStyles} to="/occupations">Ocupaciones</NavLink></li>
                    <li><NavLink className={linkStyles} to="/cargos">Cargos</NavLink></li>
                    <li><NavLink className={linkStyles} to="/vacantes">Vacantes</NavLink></li>
                </ul>
            </nav>
        </section>
    )
}