import {useEffect} from 'react'
import Home from "@page/Home"
import Customizer from "@page/Customizer"
import CanvasLayout from "src/canvas/CanvasLayout"

function App() {

  return (
    <main className="relative w-full h-screen overflow-hiddenm transition-all ease-in">
            <Home/>
            <CanvasLayout/>
            <Customizer/>
          
    </main>
  )
}

export default App
