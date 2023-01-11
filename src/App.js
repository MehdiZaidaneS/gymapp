import "./App.css"
import "./components/frontpage.css"
import Component from "./Component"
import { Routes, Route, HashRouter} from "react-router-dom"
import { useState } from 'react'
import Frontpage from "./components/frontpage"

function App() {


  const [ejercicio, setEjercicio] = useState(null)
  const [kilos, setKilos] = useState(0)
  const [set1, set1Done] = useState(false)


  return (   

   <HashRouter>
     <Routes>
       <Route path="/">
         <Route index element={<Frontpage  setEjercicio={setEjercicio}  setKilos={setKilos} set1Done={set1Done}  ejercicio={ejercicio}/>} />
         <Route exact path="/component" element={<Component ejercicio={ejercicio} kilos={kilos} set1={set1} setKilos={setKilos} set1Done={set1Done}/>}/>
       </Route>
     </Routes>
   </HashRouter>
  
  );
}

export default App;
