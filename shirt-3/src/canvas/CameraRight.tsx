import state from '@store/index';
import { easing } from 'maath';
import React, { ReactNode } from 'react'
import { useRef } from 'react'
import { useSnapshot } from 'valtio';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
interface prop {
  children: ReactNode;
}

const CameraRight: React.FC<prop> = ({ children }) => {
  const group = useRef<THREE.Group>(new THREE.Group());
  const snap = useSnapshot(state)
  useFrame((state: any, delta: any) => {
    const isBreakpoint = window.innerWidth <= 1260;
    const isMobile = window.innerWidth <= 600;
    // set the initial position of the model
    let targetPosition:[number,number,number] = [-0.3, -0.1, 2];
    if (snap.intro) {
      if (isBreakpoint) targetPosition = [0, 0, 2];
      if (isMobile) targetPosition = [0, 0.2, 2.5];
    } else {
      if (isMobile) targetPosition = [0, 0, 2.5]
      else targetPosition = [0, 0, 2];
    }
    // set model camera position
    easing.damp3(state.camera.position, targetPosition, 0.25, delta)
    // set the model rotation smoothly
    easing.dampE(
      group.current.rotation,
      [state.pointer.y / 10, -state.pointer.x / 5, 0],
      0.25,
      delta
    )
  })
  return (
    <group ref={group}>
      {children}
    </group>
  )
}

export default CameraRight