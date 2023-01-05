import React, { useState } from 'react'
import "./App.css"



const Component = () => {
   
 
    const minRR= 8;
    const maxRR= 10;
    
    const [ejercicio, setEjercicio] = useState(null)
    const [lastEjercicio, setLastEjercicio] = useState(null)
    
    const [set1, set1Done] = useState(false)
    const [set2, set2Done] = useState(false)
    const [set3, set3Done] = useState(false)
    const [set4, set4Done] = useState(false)
    
    const [kilos, setKilos] = useState(0)
    const [rep, setRep] = useState(0)
   
    const [kilos4, setKilos4] = useState(0)
    const [kilos1, setKilos1] = useState(0)
    const [kilos2, setKilos2] = useState(0)
    const [kilos3, setKilos3] = useState(0)




    const sets = [
      {
        id: 0,
        name: "Set 1",
        kilos: kilos1,
        reps: rep,
        done: set1,
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
    

    

    const handleSubmit = (e) =>{
        e.preventDefault()
        const ejer= e.target[0].value;
        const kil= e.target[1].value;
        
        setKilos1(kil)
        setEjercicio(ejer)
        setLastEjercicio(ejer)
        setKilos(kil)
        set1Done(true)
    }

    const setNextSet = () => {
      if(rep >= 10 && set1===true){
          setKilos2(Number(kilos)+2)
          setKilos(Number(kilos)+2)
          set2Done(true)
          set1Done(false)
      }else if(rep < 10 && set1===true){
        setKilos2(Number(kilos)-2)
        setKilos(Number(kilos)-2)
        set2Done(true)
        set1Done(false)
      }else if(rep >= 10 && set2===true){
        setKilos3(Number(kilos)+2)
        setKilos(Number(kilos)+2) 
        set2Done(false)
        set1Done(false)
        set3Done(true)

      }else if(rep < 10 && set2 === true){
        setKilos3(Number(kilos)-2)
        setKilos(Number(kilos)-2)
        set2Done(false)
        set1Done(false)
        set3Done(true)
      }
      else if(rep < 10 && set3 === true){
        setKilos4(Number(kilos)-2)
        setKilos(Number(kilos)-2)
        set2Done(false)
        set1Done(false)
        set3Done(false)
        set4Done(true)
      }
      else if(rep >= 10 && set2===true){
        setKilos4(Number(kilos)+2)
        setKilos(Number(kilos)+2) 
        set2Done(false)
        set1Done(false)
        set3Done(false)
        set4Done(true)
      }else if (rep >= 10 && set4 === true){
            setEjercicio(null)
            set4Done(false)
            setKilos(Number(kilos)+2)
          
      }else if(rep < 10 && set4 === true){
        setEjercicio(null)
        setKilos(Number(kilos)-2)
        set4Done(false)

      }



   }

  return (
    <div>

       <div className="repRange">
         <h1>Rep Range</h1>
         <p>Minimun Rep: {minRR}</p>
         <p>Maximum Rep: {maxRR}</p>
         <p>Last kilos at {lastEjercicio}: {kilos}kg</p>
       </div>
    
      { !ejercicio &&
         <div className="repRange"> 
           <form onSubmit={handleSubmit}>
             <input type="text" placeholder='Nombre del ejercicio'></input>    
             <input type="number" placeholder='Kilos' min="0" max="200" ></input>
             <button>Set Ejercicio</button>
           </form>
         </div>
      }
       
       { ejercicio &&
       <div className='column'>
       {
        sets.map(set => {
          return(
          <div key={set.id} className="sets">
            { set.done &&
              <div>
                <h1>{ejercicio}</h1>
                <p>{set.name}</p>
                <p>Kilos: {set.kilos}</p>
                <input type="number" placeholder='Repeticiones' min={0} max={maxRR} onChange={e => setRep(e.target.value)}></input>
                <p>{set.descanso}</p>
                <button onClick={()=> setNextSet()}>Actualizar</button> 
             </div>
            }
          </div>
          ) 
        })
       }      
      </div>
     }
</div>
  )
}

export default Component
