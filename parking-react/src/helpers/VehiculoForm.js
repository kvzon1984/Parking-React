import { useState , useContext} from 'react';
import Button from './Button';
import Input from './Input';
import { VehiculoContext } from '../context/VehiculoContext';
import Swal from 'sweetalert2'

const date = new Date();
const dateStr =
    ("00" + date.getDate()).slice(-2) + "/" +
    ("00" + (date.getMonth() + 1)).slice(-2) + "/" +
    date.getFullYear() + " " +
    ("00" + date.getHours()).slice(-2) + ":" +
    ("00" + date.getMinutes()).slice(-2) + ":" +
    ("00" + date.getSeconds()).slice(-2);

const initialValue = {
    patente: '',
    horaEntrada: '',
    horaSalida: '',
    pagado: false,
    monto: 0
}



export default function AgregarVehiculoForm() {

    const [form, setForm] = useState(initialValue)
    const [error, setError] = useState('')

    const { listaVehiculo, setListaVehiculo } = useContext(VehiculoContext)

    const handleChange = (e) => {

        setForm({
            patente: e.target.value,
            horaEntrada: dateStr,
            horaSalida: '',
            pagado: false,
            monto: 0
        })
    }

    const handleClick = (e) => {
        e.preventDefault()
        console.log(form.patente.length);
        const existe = listaVehiculo.some(lista => lista.patente === form.patente)
        if (form.patente.length === 0 || form.patente.length !== 6) {
            console.log('es dos');
            Swal.fire(
                'Error',
                'Campo requerido o debe tener 6 caracteres',
                'error')
            setForm({
                patente: '',
                horaEntrada: '',
                horaSalida: '',
                pagado: false,
                monto: 0
            })
            setError('')
        } else if (!existe) {
            setListaVehiculo([
                ...listaVehiculo,
                form
            ])
            setForm({
                patente: '',
                horaEntrada: '',
                horaSalida: '',
                pagado: false,
                monto: 0
            })
            setError('')
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Vehiculo guardado de forma correcta',
                showConfirmButton: false,
                timer: 3000
            })
        } else {
            Swal.fire(
                'Error',
                'Patente ya existe',
                'error'
            )
            setForm({
                patente: '',
                horaEntrada: '',
                horaSalida: '',
                pagado: false,
                monto: 0
            })
            setError('')
        }
    }

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})



    return (
        <>
            <Input name='patente' placeholder='Patente' handleChange={handleChange} value={form.patente} />
            <Button className={"button is-success is-medium is-fullwidth"} handleClick={handleClick} >Agregar</Button>
        </>
    )
}
