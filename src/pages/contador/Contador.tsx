import { useState } from "react";
import Tarefa from "../tarefa/Tarefa";

function Contador() {
    const [valor, setValor] = useState<number>(0);

    function handleClick() {
        setValor(valor + 1);
    }

    return (
        <div>
            <h1>Componente Contador</h1>
            {valor === 0 ? (
                <p>Clique para inicializar</p>
            ) : (
                <p>O valor atual é: {valor}</p>
            )}
            <button onClick={handleClick}>Adicionar 1</button>
        </div>

    );
}

export default Contador;
