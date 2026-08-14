// Criando uma props. Criamos uma propiedade atraves da interface
interface homeProps{
  titulo: string;
  texto: string;
}
//Não podemos alterar o valor das props.
//props será um objetos do tipo homeProps
function Home(props: homeProps) {
  return (
    <div>
      <h1>Componente Home</h1>
      <h2>{props.titulo}</h2>
      <p>{props.texto}</p>
    </div>
  )
}

export default Home