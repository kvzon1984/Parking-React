import './App.css';
import 'bulma/css/bulma.css'
import { Route, Routes } from 'react-router-dom';
import Navbar from './componets/Navbar';
import AgregarVehiculo from './componets/AgregarVehiculo';
import ListarVehiculo from './componets/ListaVehiculo';
import PagarVehiculo from './componets/PagarVehiculo';
import { VehiculoProvider } from './context/VehiculoContext';


function App() {
  return (
    <VehiculoProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navbar/>} />
          <Route path="/agregar-vehiculos" element={<AgregarVehiculo/>} />
          <Route path="/listar-vehiculos" element={<ListarVehiculo />} />
          <Route path="/pagar/:patente" element={<PagarVehiculo/>}></Route>
        </Routes>
      </div>
    </VehiculoProvider>
  );
}

export default App;
