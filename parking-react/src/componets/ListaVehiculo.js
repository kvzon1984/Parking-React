import { useContext, useState } from "react"
import { VehiculoContext } from "../context/VehiculoContext"
import { NavLink } from "../helpers/Navlink"
import Input from "../helpers/Input"

const ListarVehiculo = () => {

    const { listaVehiculo } = useContext(VehiculoContext)
    const [search, setSearch] = useState ('');

    let vehiculos = []


    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    if (!search) {
        vehiculos = listaVehiculo
    } else {
        vehiculos = listaVehiculo.filter((vehiculo) =>
            vehiculo.patente.toLowerCase().includes(search.toLowerCase())
        )
    }



    return (
        <>
            <div className="column is-6 is-offset-3">
                <h1 className="column is-6 is-offset-3 is-size-3">Listar Vehiculo</h1>
            </div>

            <div className="column is-6 is-offset-3 pt-6">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Patente</th>
                            <th>Hora Entrada</th>
                            <th>Hora Salida</th>
                            <th>Pagado?</th>
                            <th></th>
                        </tr>
                        <tr>
                            <th><Input name='search' placeholder='Buscar Patente' handleChange={handleChange} value={ search } /></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {vehiculos.map(lista =>
                            <tr key={lista.patente}>
                                <td>{ lista.patente }</td>
                                <td>{ lista.horaEntrada }</td>
                                <td>{ lista.horaSalida }</td>
                                <td>{ lista.pagado ? 'SI':'NO' }</td>
                                <td><NavLink className="button is-primary" to={`/pagar/${lista.patente}`}>Pagar</NavLink></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ListarVehiculo