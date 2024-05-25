import { useState } from "react";
import FormulariTasques from "./FormulariTasques";
import Tasca from "./Tasca";

function LlistatTasques() {
    const [tasques, setTasques] = useState([]);
    const [nextId, setNextId] = useState(0);

    const afegirTasca = (tasca) => {
      const tasquesActuals = [...tasques, tasca]; 
      setTasques(tasquesActuals); 
      setNextId(nextId + 1);
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
          <FormulariTasques afegirTasca={afegirTasca} idTasca={nextId} />
          <ul>
          {tasques.map((tasca) =>(
              <Tasca key={tasca.id} id={tasca.id} titol={tasca.titol} completada={tasca.completada} eliminarTasca={eliminarTasca} completarTasca={completarTasca}></Tasca>
            ))}
          </ul>
        </div>
      </div>
    );
}

export default LlistatTasques;