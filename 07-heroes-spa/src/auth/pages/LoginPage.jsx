import { useRef } from "react";
import { useNavigate } from "react-router-dom"
import { HeroPage } from "../../heroes/pages/HeroPage";

export const LoginPage = () => {

  const navigate = useNavigate();

  const onLogin = () => {
    navigate("/",{
      replace: true
    });
  }

  const email = useRef()
  const password = useRef()
  const getEmail = localStorage.getItem('emailData')
  const getPassword = localStorage.getItem('passwordData')
  const handleSubmit= () =>{
    if (email.current.value=='jhamil@gmail.com'&&password.current.value=='12345') {
      localStorage.setItem('emailData', 'jhamil@gmail.com')
      localStorage.setItem('passwordData', '12345')
    }
  }


  return (
    <>
    {
        getEmail&&getPassword?
        <HeroPage/ >:
      <form onSubmit={handleSubmit}>
        <div
          className="container mt-5"
        >
            <h1>Login</h1>

              <input placeholder="User" type="text" ref={email} />
              <input placeholder="Pass" type="password" ref={password}/>

            <button
              // className="btn btn-primary"
              // onClick={ onLogin }
              >
              Login
            </button>
        </div>
      </form>
      }
    </>

  )
}
