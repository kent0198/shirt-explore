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

const Customizer = () => {
  const snap=useSnapshot(state)
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
                      
                    />
                  ))}
                </div>
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