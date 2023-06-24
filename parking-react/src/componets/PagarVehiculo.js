import { useParams } from 'react-router-dom'
import { useContext } from "react"
import { VehiculoContext } from "../context/VehiculoContext"

const PagarVehiculo = () => {
    const { patente } = useParams()
    const { listaVehiculo } = useContext(VehiculoContext)
    console.log(patente, listaVehiculo);
    
    const vehiculo = listaVehiculo.filter(lista => lista.patente === patente)
    console.log(vehiculo[0].patente, 'Hola');
    
    return (
        <>
            <div className="column is-6 is-offset-3">
                <h1 className="column is-6 is-offset-3 is-size-3">Pagar Vehiculo</h1>
                {JSON.stringify(vehiculo,null,1)}
            </div>
        </>
    )
}

export default PagarVehiculo