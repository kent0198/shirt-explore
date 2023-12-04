import { easing } from 'maath'
import { useSnapshot } from 'valtio'
import { useFrame } from '@react-three/fiber'
import { Decal, useGLTF, useTexture } from '@react-three/drei'
import state from '@store/index'
import { GLTF } from 'three-stdlib'
type GLTFResult = GLTF & {
    nodes: any,
    materials: any
  }
const Shirt = () => {
    const snap = useSnapshot(state);
    const {nodes,materials,...rest}=useGLTF('../assets/shirt_baked.glb') as GLTFResult
    const logoTexture=useTexture(snap.logoDecal)
    const fullTexture=useTexture(snap.fullDecal)
    return (
        <group>
            <mesh
                castShadow
                geometry={nodes.T_Shirt_male.geometry}
                material={materials.lambert1}
                material-roughness={1}
                dispose={null}
            >
             
            </mesh>
        </group>
    )
}

export default Shirt