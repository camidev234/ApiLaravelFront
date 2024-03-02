import { NavLink } from "react-router-dom"
import '../assets/css/link.css'

export const BarNav = () => {

    const linkStyles = " p-2 rounded-lg text-white hover:bg-green-500 cursor-pointer"
    return (
        <section className="h-[12vh] flex justify-center items-center">
            <nav className="nav w-[80%] h-full flex justify-center">
                <ul className="flex gap-11 items-center">
                    <li><NavLink className={linkStyles} activeClassName="active-link" to="/">Inicio</NavLink></li>
                    <li><NavLink className={linkStyles} activeClassName="active-link" to="/usuarios">Usuarios</NavLink></li>
                    <li><NavLink className={linkStyles} activeClassName="active-link" to="/requisiciones">Requisiciones</NavLink></li>
                    <li><NavLink className={linkStyles} activeClassName="active-link" to="/ocupaciones">Ocupaciones</NavLink></li>
                    <li><NavLink className={linkStyles} activeClassName="active-link" to="/cargos">Cargos</NavLink></li>
                    <li><NavLink className={linkStyles} activeClassName="active-link" to="/vacantes">Vacantes</NavLink></li>
                </ul>
            </nav>
        </section>
    )
}