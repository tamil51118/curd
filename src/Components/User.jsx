import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import style from "./home.module.css"

const User=()=>{
    let[content,setcontent]=useState([])
    
    useEffect(()=>{
        axios.get("http://localhost:3000/data")
        .then((get)=>{
            setcontent(get.data)
        })
        
    }
   

    )
    let deleData=(x)=>{
        axios.delete(`http://localhost:3000/data/${x}`)
        window.location.assign("/user")

    }
    return(
        <div id={style.box}>
            {content.map((x)=>{
           return(
            <div id={style.usebox}>
                <table>
                    <tr>
                    <td>Employee:</td>
                    <td><h3> {x.id}</h3></td>
                    </tr>
                    <tr>
                        <td>EmployeeName:</td>
                        <td>  <h4>{x.name}</h4></td>
                    </tr>
                    <tr>
                        <td>EmployeeSalary:</td>
                        <td><h4>{x.salary}</h4></td>
                    </tr>
                    <tr>
                        <td>Company name:</td>
                        <td><h4>{x.Company}</h4></td>
                    </tr>
           <tr>
            <td>
                <div id={style.both}>
                    
               
                <span id={style.btn}>
                    <Link to={`/edit/${x.id}`}><i class="fa-sharp fa-solid fa-pen-to-square"></i></Link> </span>
                 <span id={style.del}> <Link onClick={()=>{deleData(x.id)}}><i class="fa-regular fa-trash-can"></i></Link></span>   
                 </div>  
            </td>
           </tr>
          
            
            </table>
            </div>
           )
            })}
        </div>
    )
}
export default User