import { BrowserRouter, Route, Routes } from "react-router-dom"
import React from "react"
import HomeCurd from "./Components/HomeCurd"
import CreateUser from "./Components/CreateUser"
import User from "./Components/User"
import Edit from "./Components/Edit"
const App=()=>{
    return(
        <div>
          
           <BrowserRouter>
           <HomeCurd/>
           <Routes>
           
            <Route element={<CreateUser/>} path="/"></Route>
            <Route element={<User/>} path="/User"></Route>
            <Route element={<Edit/>} path="/edit/:abc"></Route>
           </Routes>
           </BrowserRouter>
           
        </div>
    )
}
export default App