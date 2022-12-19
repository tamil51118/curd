import { useEffect, useState } from "react"
import style from "./home.module.css"
import axios from "axios"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
const Edit=()=>{
    let [name,Setname]=useState("")
    let [salary,Setsalary]=useState("")
    let [Company,Setcompany]=useState("")

    let {abc}=useParams()
    console.log(abc);
   let navigate=useNavigate()
    useEffect(()=>{
        axios.get(`http://localhost:3000/data/${abc}`)
        .then((response)=>{
            console.log(response.data);
            Setname(response.data.name)
            Setsalary(response.data.salary)
            Setcompany(response.data.Company)
        })
    },[])

    

    let formHandle=()=>{
        let payload={name,salary,Company}
        axios.put(`http://localhost:3000/data/${abc}`,payload)
        .then(()=>{
            console.log("Data has been updATED")
        })
        navigate("/user")
    }
    return(
        
          <div id={style.container}>
            <form>
                <label >Name:</label>
                <input type="text " value={name} onChange={(e)=>{Setname(e.target.value)}}/>
                <label >Salary</label>
                <input type="number"  value={salary} onChange={(e)=>{Setsalary(e.target.value)}}/>
                <label >Company</label>
                <input type="text" value={Company} onChange={(e)=>{Setcompany(e.target.value)}} />
                <button onClick={formHandle}>Sumbit</button>


            </form>
        </div>
        
    )
}
export default Edit