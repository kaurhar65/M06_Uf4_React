import { useState } from "react";

function FormulariTasques(props) {
  const [textTasca, setTextTasca] = useState("");

  const canviTextTasca = (e) => {
    setTextTasca(e.target.value);
    console.log("value is: ", e.target.value);
  };

  const enviarForm = (e) => {
    e.preventDefault();
    const tascaNova = {
      titol: textTasca,
      completada: false,
    };
    props.afegirTasca(tascaNova);
    setTextTasca('');
  };

  return (
    <>
      <form onSubmit={enviarForm}>
        <input type="text" value ={textTasca} onChange={canviTextTasca}></input>
        <button>Enviar</button>
      </form>
    </>
  );
}

export default FormulariTasques;
