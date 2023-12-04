import state from '@store/index';
import { easing } from 'maath';
import React, {ReactNode} from 'react'
import {useRef} from 'react'
import { useSnapshot } from 'valtio';
import * as THREE from 'three';
interface prop{
  children  : ReactNode;
}

const CameraRight:React.FC<prop>= ({children }) => {
  const group = useRef<THREE.Group>(new THREE.Group());
  const snap=useSnapshot(state)
 /*  easing.dampE() */
  return (
    <group ref={group}>
    {children }
    </group>
  )
}

export default CameraRight