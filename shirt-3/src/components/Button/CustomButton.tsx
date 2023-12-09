import React from 'react'
import state from '@store/index'
import { useSnapshot } from 'valtio'
interface ItypeButton {
    type?: string,
    title?: string,
    handleClick: () => void,
    customStyles?: string,
}

const CustomButton: React.FC<ItypeButton> = ({
    type, title, handleClick, customStyles
}) => {
    const snap=useSnapshot(state)
    const generateStyle=(type?:string)=>{
        if(type==='filled'){
            return {
                backgroundColor:snap.color,
                color:'#fff'
            }
        }else if(type==='outline'){
            return {
                borderWidth: '1px',
                borderColor:snap.color,
                color:snap.color    
            }
        }
    }
    return (
        <button
            className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
            style={generateStyle(type)}
            onClick={handleClick}
        >
          {title}
        </button>
    )
}

export default CustomButton