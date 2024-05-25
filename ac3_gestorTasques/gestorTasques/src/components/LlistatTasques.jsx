import { useState } from "react";
import FormulariTasques from "./FormulariTasques";
import Tasca from "./Tasca";

function LlistatTasques() {
  const [tasques, setTasques] = useState([]);

  const afegirTasca = (tasca) => {
    const tasquesActuals = [...tasques, tasca]; 
    setTasques(tasquesActuals); 
  };

  const eliminarTasca = (id) => {
    const tasquesRestants = tasques.filter((tasca) => tasca.id !== id);
    setTasques(tasquesRestants);
  };

  const completarTasca = (id) => {
    const tasquesActuals = tasques.map((tasca) => {
      if (tasca.id === id) {
        return { ...tasca, completada: !tasca.completada };
      }
      return tasca;
    });
    setTasques(tasquesActuals);
  };

  return (
    <div className='containerTarea'>
      <h1>Mis tareas</h1>
      <div className='contentTarea'>
        <FormulariTasques afegirTasca={afegirTasca} />
        <ul>
          {tasques.map((tasca) => (
            <Tasca key={tasca.id} id={tasca.id} content={tasca.content} completada={tasca.completada} eliminarTasca={eliminarTasca} completarTasca={completarTasca} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default LlistatTasques;