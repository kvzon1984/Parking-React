import AgregarVehiculoForm from "../helpers/VehiculoForm"
import { useContext } from "react"
import { VehiculoContext } from "../context/VehiculoContext"



const AgregarVehiculo = () => {
    const { listaVehiculo } = useContext(VehiculoContext)
    return (
        <>
            <div className="column is-6 is-offset-3">
                <h1 className="column is-6 is-offset-3 is-size-3">Agregando Vehiculo</h1>
                <AgregarVehiculoForm />
            </div>
        </>
    )
}

export default AgregarVehiculo

