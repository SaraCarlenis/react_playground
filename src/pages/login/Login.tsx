import { useState } from "react";
import Home from "../home/Home";
import Contador from "../contador/Contador";

function Login() {
    const [isLogged, setIsLogged] = useState<boolean>(false);

    return (
        <div>
            {/* Equivalente ao if simples */}
            {isLogged && <Contador />}

            {/* Equivalente o if/else */}
            {isLogged ? (
                <>
                    <Home
                        titulo="Usuário Autenticado"
                        texto="Sara, Seja Bem-Vinda!"
                    />
                    <button onClick={() => setIsLogged(false)}>Logout</button>
                </>
            ) : (
                <>
                    <h1>Login</h1>
                    <button onClick={() => setIsLogged(true)}>Entrar</button>
                </>
            )}
        </div>
    );
}

export default Login;
