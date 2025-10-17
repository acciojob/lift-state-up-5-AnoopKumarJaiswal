
import React, { useState } from "react";
import './../styles/App.css';
import Child from "./Child";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <div>
        {isLoggedIn ? "You are logged in!":<Child  isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn}/>}
    </div>
  )
}

export default App
