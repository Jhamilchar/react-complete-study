

export const ShowIncrement = ({ increment }) => {

  console.log("Me volvi a dibujar :C");

  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        increment( 5 );
      }}
    >

      Incrementar
    </button>
  )
}
