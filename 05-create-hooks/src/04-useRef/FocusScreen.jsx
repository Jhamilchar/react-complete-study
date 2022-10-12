import { useRef } from "react";


//Sirve para hacer enfoque de un input


export const FocusScreen = () => {

  const inputRef = useRef();

  const onClick = () => {
    //document.querySelector("input").select();
    //console.log(inputRef);ç
    inputRef.current.select();
  }

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />

      <input
      ref={ inputRef }
        type="text"
        placeholder="Ingrese su nombre"
        className="form-control"
      />

      <button
        className="btn btn-primary mt-2"
        onClick={ onClick }>
        Set focus
      </button>

    </>
  )
}
