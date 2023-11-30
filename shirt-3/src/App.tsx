import Home from "@page/Home"
import Customizer from "@page/Customizer"
import Canvas from "@comp/canvas/Canvas"
function App() {


  return (
    <main className="relative w-full h-screen overflow-hiddenm transition-all ease-in">
            <Home/>
            <Canvas/>
            <Customizer/>
    </main>
  )
}

export default App
