import { createContext, useState } from "react";

export const VehiculoContext = createContext()

const INITIAL_STATE = [
        {
            patente: 'WL9925',
            horaEntrada: '09:00 27/02/2023',
            horaSalida: '10:00 27/02/2023',
            pagado: false,
            monto: 500
        },
        {
            patente: 'CS9985',
            horaEntrada: '09:00 27/02/2023',
            horaSalida: '10:00 27/02/2023',
            pagado: false,
            monto: 1500
        },
    ]

export const VehiculoProvider = ({ children }) => {

    const [ listaVehiculo, setListaVehiculo] = useState(INITIAL_STATE)

    return (
        <>
            <VehiculoContext.Provider value={{ listaVehiculo, setListaVehiculo }}>
                {children}
            </VehiculoContext.Provider>
        </>
    )
}