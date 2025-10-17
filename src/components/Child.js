import React  from "react"
const Child = ({isLoggedIn , setIsLoggedIn}) =>{
   return (
    <div>
        UserName:<input type="text" />
        Password:<input type="password" />
        <button onClick={() =>{
            setIsLoggedIn(true)
        }}>Login</button>
    </div>
   )
}
export default Child