
import { Routes, BrowserRouter as Router,Route } from 'react-router-dom'; // Asegúrate de importar BrowserRouter correctamente
import Mapa from './pages/Mapa/Mapa';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Mapa}/>
      </Routes>
    </Router>
  );
}

export default App;
