import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
import "./frontpage.css"



const Frontpage  = (props) => {


   const navigate = useNavigate()
   const [err, setErr] = useState(null)

    const handleSubmit = async (e) =>{


         e.preventDefault()
         const ejer= e.target[0].value;
         const kil= e.target[1].value;

        if(ejer !== "" && kil !== ""){
          props.setEjercicio(ejer)
          props.setKilos(kil)
          props.set1Done(true)
          navigate("/component")
        } else{
          if(ejer=== ""){
            setErr("Type exercise name!")
          }else if (kil === "")
          setErr("Type starting kilos!")
        }
}



  return (
    <div className='frontpage'>
       <div className="repRange">
          <h1>Automatic Gym Kilos</h1> 
          <form onSubmit={handleSubmit}>
             <input type="text" placeholder='Set Exercise'></input>    
             <input type="number" placeholder='Kilos' min="0" max="200" ></input>
             {err && <p>{err}</p>}
             <button>Set Exercise</button>
          </form>
        </div>
    </div>
  )
}

export default Frontpage
