import { NavLink } from "../helpers/Navlink"


const Navbar = () => {
    return (
        <>
            <div className="container p-6">
                <div className="columns is-centered m-6">
                    <div className="column is-half is-offset-one-quarter">
                        <NavLink className="button is-primary p-6" to="/agregar-vehiculos">Agregar Vehiculo</NavLink>
                    </div>
                    <div className="column is-half is-offset-one-quarter">
                        <NavLink className="button is-primary p-6" to="/listar-vehiculos">Listar Vehiculo</NavLink>
                    </div>
                </div>
                <div className="columns is-centered">
                    <div className="column is-half is-offset-one-quarter">
                        <NavLink className="button is-primary p-6" to="/pagar-vehiculos">Pargar Servicio</NavLink>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Navbar