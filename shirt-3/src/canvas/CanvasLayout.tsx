import {Canvas} from '@react-three/fiber'
import {Environment,Center} from '@react-three/drei'
import Shirt from './Shirt'
import BackDrop from './BackDrop'
import CameraRight from './CameraRight'

const CanvasLayout = () => {
  return (
    <Canvas>
        <ambientLight intensity={0.5}/>
        <Environment preset='city'/>
        <Center>
           <Shirt/>
        </Center>
    </Canvas>
  )
}

export default CanvasLayout