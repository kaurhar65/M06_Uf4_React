import { MdDeleteForever } from "react-icons/md";

function Tasca(props) {
    const eliminar = () => {
        props.eliminarTasca(props.id);
    };
    
    const completar = () => {
        props.completarTasca(props.id);
    };

    const estadoTasca = props.completada ? "tascaCompletada" : "noCompletada";

    return (
        <li>
            <div className={estadoTasca} onClick={completar}>{props.titol}</div>
            <div>
                <button onClick={eliminar}><MdDeleteForever /></button>
                
            </div>
        </li>
    );
}

export default Tasca;