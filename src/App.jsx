
import { Routes, BrowserRouter as Router,Route } from 'react-router-dom'; // Asegúrate de importar BrowserRouter correctamente
import Mapa from './pages/Mapa/Mapa';
import Mapa2 from './pages/Mapa2/Mapa2'
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Mapa}/>
        <Route path="/mapa2" Component={Mapa2}/>
      </Routes>
    </Router>
  );
}

export default App;
