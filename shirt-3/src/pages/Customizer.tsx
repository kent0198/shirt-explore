import { useState, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { useSnapshot } from "valtio"
import config from "@config/config"
import state from "@store/index"
import { download } from "@asset/index"
import { downloadCanvasToImage, reader } from "@config/helpers"
import { EditorTabs,FilterTabs, DecalTypes } from "@config/contants"
import { fadeAnimation,slideAnimation } from "@motion/motion"
import Tab from "@comp/Tab/Tab"
import CustomButton from "@comp/Button/CustomButton"
import ColorPiker from "@comp/Picker/ColorPiker"
import FilePicker from "@comp/Picker/FilePicker"
import AIPicker from "@comp/Picker/AIPicker"

interface propsFilterTab{
  logoShirt:boolean,
  stylishShirt:boolean,
}
const Customizer = () => {
  const snap=useSnapshot(state)
  const [file, setFile]=useState('')
  const [promot, setPromot] = useState('')
  const [generatingImg, setGeneratingImg] = useState(false)
  const [activeEditorTab,setActiveEditorTab]=useState("")
  const [activeFilterTab, setActiveFilterTab] = useState<propsFilterTab>({
    logoShirt:true,
    stylishShirt:false
  })

  const generateTabContent=()=>{
    switch(activeEditorTab){
      case 'colorpicker':
          return <ColorPiker/>
      case 'filepicker':
          return <FilePicker/>
      case 'aipicker':
          return  <AIPicker/>
      default:
          return null;
    }
  }
  console.log(activeEditorTab)
  return (
    <AnimatePresence>
      {
        !snap.intro && (
          <>
            <motion.div 
            className="absolute top-0 left-0 z-10"
            key='custom'
            {...slideAnimation('left')}
            > 
              <div className="flex items-center min-h-screen">
                <div className="w-16 border-[2px] rounded-lg flex flex-col justify-center items-center ml-1 py-3 gap-4 ">
                  {EditorTabs.map((tab)=>(
                    <Tab
                     key={tab.name}
                     tab={tab}
                     handleClick={()=>setActiveEditorTab(tab.name)}
                    />
                  ))}
                </div>
                  {generateTabContent()}
              </div>
            </motion.div>
            <motion.div
              className="absolute z-10 top-5 right-5"
              {...fadeAnimation}
            > 
              <CustomButton
                type="filled"
                handleClick={()=>state.intro=true}
                title="Go Back"
                customStyles="w-fit px-4 py-2.5 font-bold text-sm "
              />
            </motion.div>
            <motion.div className="absolute z-10 bottom-5 right-0 left-0 w-full flex justify-center items-center gap-4" 
              {...slideAnimation('up')}
            >
              {FilterTabs.map((tab)=>(
                <Tab
                  key={tab.name}
                  tab={tab}
                  isFilterTab
                  isActiveTab=""
                  handleClick={()=>{}}
                />
              ))}
            </motion.div>
          </>
        )
      }
    </AnimatePresence>
  )
}

export default Customizer