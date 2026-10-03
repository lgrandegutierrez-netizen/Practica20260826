// Importa el componente BotonInline desde su ubicación
import { BotonInline } from './components/BotonInline/BotonInline';
// Importa el componente BotonClasico desde su ubicación
import { BotonClasico } from './components/BotonClasico/BotonClasico';
// Importa el componente BotonClasico desde su ubicación
import {Tarjeta} from './components/Tarjeta/Tarjeta';
// Importa el componente CajaStyled desde su ubicación
import { CajaStyled } from './components/CajaStyled/CajaStyled';
// Importa el componente AlertaTailwind desde su ubicación
import { AlertaTailwind } from './components/AlertaTailwind/AlertaTailwind';

function App() {
  return (
    <div>
      <h1>Practica 20260826</h1>
      {/* Renderiza el componente BotonInline aquí */}
      <BotonInline />
      {/* Renderiza el componente BotonClasico aquí */}
      <BotonClasico />
       {/* Renderiza el componente Tarjeta aquí */}
       <Tarjeta />
       {/* Renderiza el componente CajaStyled aquí */}
       <CajaStyled />
      {/* Renderiza el componente AlertaTailwind aquí */}
      <AlertaTailwind />
    </div>
  );
}

export default App;