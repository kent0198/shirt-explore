import React from 'react'
import CustomButton from '@comp/Button/CustomButton'

interface props{
  prompt:string,
  setPrompt:any,
  generatingImg:boolean,
  handleSubmit:any,
}
const AIPicker:React.FC<props> = ({
  prompt,setPrompt,generatingImg,handleSubmit
}) => {
  return (
    <div className='absolute left-full ml-3 glassmorphism  p-3 w-[195px] h-[220px] rounded-md flex flex-col gap-4'>
        <textarea
          placeholder='Ask AI...'
          rows={4}
          value={prompt}
          onChange={(e)=>setPrompt(e.target.value)}
          className='w-full bg-transparent text-sm border border-gray-300 p-2 outline-none flex-1'
        />
        <div className='flex flex-wrap gap-3'>
          {generatingImg ? (
            <CustomButton
              type='outline'
              title='Asking AI...'
              customStyles='text-xs'
            />
          ):(
            <>
            <CustomButton
              type='outline'
              title='AI Logo'
              handleClick={()=>handleSubmit('logo')}
              customStyles='text-xs'
            />
            <CustomButton
              type='filled'
              title='AI full'
              handleClick={()=>handleSubmit('full')}
              customStyles='text-xs'
            />
            </>
          )}
        </div>
    </div>
  )
}

export default AIPicker