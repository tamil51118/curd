import { Link } from "react-router-dom"
import style from "./home.module.css"
import React from "react"
const HomeCurd=()=>{
    return(
        <section id={style.nav}>
            <Link to="/">CreateUser</Link>
            <Link to="/User">Users</Link>
        </section>
    )
}
export default HomeCurd