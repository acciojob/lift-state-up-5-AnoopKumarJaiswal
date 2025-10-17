import React  from "react"
const ChildComponent = ({isLoggedIn , setIsLoggedIn}) =>{
   return (
    <div>
       <form>
          <label htmlFor="user">Usename:</label>
          <input id="user" type="text" />

          <label htmlFor="pass">Password:</label>
          <input id="pass" type="password" />

          <button onClick={() =>{
            setIsLoggedIn(true)
          }}>Login</button>
       </form>
    </div>
   )
}
export default ChildComponent