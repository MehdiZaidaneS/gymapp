import "./App.css"
import "./components/frontpage.css"
import Component from "./Component"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { useState } from 'react'
import Frontpage from "./components/frontpage"

function App() {


  const [ejercicio, setEjercicio] = useState(null)
  const [kilos, setKilos] = useState(null)
  const [set1, set1Done] = useState(false)


  return (

    <Router basename= "/gyampp">
       <Routes>  
         <Route path="/">
              <Route index element={<Frontpage  setEjercicio={setEjercicio}  setKilos={setKilos} set1Done={set1Done}/>}/> 
              <Route path="component" element={<Component ejercicio={ejercicio} kilos={kilos} set1={set1} setKilos={setKilos} set1Done={set1Done}/>}/>
            </Route> 
        </Routes>
    </Router>
  
  );
}

export default App;
