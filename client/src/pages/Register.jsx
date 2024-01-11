import React from 'react'
import { Link } from 'react-router-dom'
function Register() {
  return (
    <div>
          <div className ="auth">
      <h1>Register</h1>
      <form>
        <input required ="text" placeholder ="name"/>
         <input required type ="text" placeholder ="username"/>
         <input required type ="password" placeholder ="password"/>
         <button>Login</button>
         <p> Error!</p>
         <span>Do have a account? <Link to="/Login">Login</Link></span>
      </form>
      
    </div>
    </div>
  )
}

export default Register
