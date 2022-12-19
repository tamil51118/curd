import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import style from "./home.module.css"
const CreateUser=()=>{
    let[name,setname]=useState("")
    let[salary,setsalary]=useState("")
    let[Company,setcompany]=useState("")
    let nav=useNavigate()
 let getname=(e)=>{
    setname(e.target.value)

 }
 let getSalary=(e)=>{
    setsalary(e.target.value)

 }
 let getCompany=(e)=>{
    setcompany(e.target.value)

 }
 let store=(e)=>{
    e.preventDefault()
    let getting={name,salary,Company}
    axios.post("http://localhost:3000/data",getting)
    .then(()=>{
        console.log("data is added")
    }
    )
    .catch(()=>{
        console.log("please add the data")
    }
    )
    nav("/user")
}
 

    return(
        <div id={style.container}>
          <form >
            <label>Name : </label>
            <input type="text" required value={name} onChange={getname}/>
            <label >Salary : </label>
            <input type="number" required value={salary} onChange={getSalary}/>
            <label >Company :</label>
            <input type="text" required value={Company} onChange={getCompany}/>
            <button onClick={store}>Sumbit</button>
          </form>
        </div>
    )
}
export default CreateUser