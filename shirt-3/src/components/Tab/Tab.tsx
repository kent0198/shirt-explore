import state from '@store/index'
import React from 'react'
import { useSnapshot } from 'valtio'

interface props{
  tab?:{name:string, icon:string},
  isFilterTab?:boolean,
  isActiveTab?:any,
  handleClick?:()=>void,
}

const Tab:React.FC<props> = ({
  tab, isActiveTab, isFilterTab, handleClick
}) => {

  const snap=useSnapshot(state)
  const activeStyles=isFilterTab && isActiveTab
  ? {backgroundColor : snap.color, opacity:0.5}
  : {backgroundColor:"transparent", opacity:1}
  return (
    <div
      key={tab?.name}
      className={`w-14 h-14 flex justify-center items-center cursor-pointer select-none ${isFilterTab ? 'rounded-full glassmorphism': 'rounded-4'}`}
      style={activeStyles}
    >
      <img src={tab?.icon}/>
    </div>
  )
}

export default Tab