import React, {  useState } from 'react'
import "./App.css"
import { useNavigate } from 'react-router-dom'
import logo from "./components/logo.png"



const Component = (props) => {
   
    const navigate = useNavigate()
    const [set2, set2Done] = useState(false)
    const [set3, set3Done] = useState(false)
    const [set4, set4Done] = useState(false)
    const [finished, setFinished] = useState(false)
    const [rep, setRep] = useState(0)
    const [kilos4, setKilos4] = useState(0)
    const [kilos2, setKilos2] = useState(0)
    const [kilos3, setKilos3] = useState(0)
    const [err, setErr] = useState(false)

    const minRR = 10;
    const maxRR = 12;




    const sets = [
      {
        id: 0,
        name: "Set 1",
        kilos: props.kilos,
        reps: rep,
        done: props.set1,
      },
      {
        id: 1,
        name: "Set 2",
        kilos: kilos2,
        reps: rep,
        done: set2,
      },
      {
        id: 2,
        name: "Set 3",
        kilos: kilos3,
        reps: rep,
        done: set3, 
      },
      {
        id: 3,
        name: "Set 4",
        kilos: kilos4,
        reps: rep,
        done: set4, 
      },

    ]

    const setNextSet = () => {

    if(rep !== 0){
      if(rep >= 10 && props.set1===true){
        setKilos2(Number(props.kilos)+2)
        props.setKilos(Number(props.kilos)+2)
        set2Done(true)
        props.set1Done(false)
        setRep(0)
    }else if(rep < 10 && props.set1===true){
      setKilos2(Number(props.kilos)-2)
      props.setKilos(Number(props.kilos)-2)
      set2Done(true)
      props.set1Done(false)
      setRep(0)
    }else if(rep >= 10 && set2===true){
      setKilos3(Number(props.kilos)+2)
      props.setKilos(Number(props.kilos)+2) 
      set2Done(false)
      props.set1Done(false)
      set3Done(true)
      setRep(0)
    }else if(rep < 10 && set2 === true){
      setKilos3(Number(props.kilos)-2)
      props.setKilos(Number(props.kilos)-2)
      set2Done(false)
      props.set1Done(false)
      set3Done(true)
      setRep(0)
    }else if(rep < 10 && set3 === true){
      setKilos4(Number(props.kilos)-2)
      props.setKilos(Number(props.kilos)-2)
      set2Done(false)
      props.set1Done(false)
      set3Done(false)
      set4Done(true)
      setRep(0)
    }
    else if(rep >= 10 && set3===true){
      setKilos4(Number(props.kilos)+2)
      props.setKilos(Number(props.kilos)+2) 
      set2Done(false)
      props.set1Done(false)
      set3Done(false)
      set4Done(true)
      setRep(0)
    }else if (rep >= 10 && set4 === true){  
      set4Done(false)
      props.setKilos(Number(props.kilos)+2)
      setFinished(true)
      setRep(0)   
    }else if(rep < 10 && set4 === true){
      props.setKilos(Number(props.kilos)-2)
      set4Done(false)
      setFinished(true)
      setRep(0)
    }
      
    setErr(false)

    }else if (rep === 0){
       setErr(true)
    }
}

   const moveBack = () =>{
      setFinished(false)
      navigate("/")
      props.ejercicio = "";
   }

  return (
    <div className='component'>     
      {
      finished &&
        <div className="repPRange">
          <h1>CONGRATULATIONS!</h1>
          <p>You have completed your exercise.</p>
          <p id='completed'>Your last kilos at {props.ejercicio} was: {props.kilos}kg</p>
          <button onClick={moveBack}>Back</button>
        </div>
      }
      <div className='column'> 
       {
        sets.map(set => {
          return(
          <div>
            { set.done &&
            <div key={set.id} className="sets">
              <div className='set'>
                <h1>{props.ejercicio}</h1>
                <p>Rep. Range: {minRR}-{maxRR}</p>
                <div className='stats'>
                  <h2>{set.name}</h2>
                  <h2 id='kilos'>- {set.kilos}kg</h2>
                </div>
                <input type="number" placeholder='Reps' min={1} max={maxRR} onChange={e => setRep(e.target.value)}></input>
                {/* <p>{set.descanso}</p> */}
                {err && <p id='error'>Please type Reps to continue!</p>}
                <button onClick={()=> setNextSet()}>Update</button> 
              </div>
             </div>
            }
          </div>
          ) 
        })
       }      
      </div>

      <img src={logo} width={70} alt=''></img> 
      
    </div>
  )
}

export default Component
