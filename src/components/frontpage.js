import React from 'react'
import {useNavigate} from "react-router-dom"
import "./frontpage.css"



const Frontpage  = (props) => {


   const navigate = useNavigate()

    const handleSubmit = (e) =>{
         e.preventDefault()
         const ejer= e.target[0].value;
         const kil= e.target[1].value;
        
        
         props.setEjercicio(ejer)
       
         props.setKilos(kil)
         props.set1Done(true)
        navigate("/component")
    }



  return (
    <div className='frontpage'>
       <div className="repRange">
          <h1>Automatic Gym Kilos</h1> 
          <form onSubmit={handleSubmit}>
             <input type="text" placeholder='Set Exercise'></input>    
             <input type="number" placeholder='Kilos' min="0" max="200" ></input>
             <button>Set Exercise</button>
          </form>
        </div>
    </div>
  )
}

export default Frontpage
