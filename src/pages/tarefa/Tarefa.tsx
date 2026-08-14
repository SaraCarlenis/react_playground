import { useEffect, useState } from "react";


function Tarefa() {
    const [completed, setCompleted] = useState<boolean>(false)
    const [tarefa, setTarefa] = useState<string>(" ")

    useEffect(() => {
        if (completed) {
            setTarefa("Parabens! Você concluiu a tarefa!");
        }else{
            setTarefa('');
        }
    }, [completed]);

    return (
        <div>
            <h1>Componente Tarefa</h1>
            <h3>{tarefa}</h3>
            <p>conclua a tarefa</p>
            <button onClick={() => completed ? setCompleted(false) : setCompleted(true)}>Concluir tarefa</button>
        </div>
    );
}

export default Tarefa;
