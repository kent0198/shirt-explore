import { useState, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { useSnapshot } from "valtio"
import config from "@config/config"
import state from "@store/index"
import { download } from "@asset/index"
import { downloadCanvasToImage, reader } from "@config/helpers"
import { EditorTabs, FilterTabs, DecalTypes } from "@config/contants"
import { fadeAnimation, slideAnimation } from "@motion/motion"
import Tab from "@comp/Tab/Tab"
import CustomButton from "@comp/Button/CustomButton"
import ColorPiker from "@comp/Picker/ColorPiker"
import FilePicker from "@comp/Picker/FilePicker"
import AIPicker from "@comp/Picker/AIPicker"

interface propsFilterTab {
  [key: string]: boolean;
}
interface DecalType {
  stateProperty: string;
  filterTab: string;
}

type DecalTypeKeys = keyof typeof DecalTypes;

const Customizer = () => {
  const snap = useSnapshot(state)
  const [file, setFile] = useState('')
  const [prompt, setPrompt] = useState<string>('');
  const [generatingImg, setGeneratingImg] = useState(false)
  const [activeEditorTab, setActiveEditorTab] = useState("")
  const [activeFilterTab, setActiveFilterTab] = useState<propsFilterTab>({
    logoShirt: true,
    stylishShirt: false
  })
  const generateTabContent = () => {
    switch (activeEditorTab) {
      case 'colorpicker':
        return <ColorPiker />
      case 'filepicker':
        return <FilePicker
          file={file}
          setFile={setFile}
          readFile={readFile}
        />
      case 'aipicker':
        return <AIPicker
          prompt={prompt}
          setPrompt={setPrompt}
          generatingImg={generatingImg}
          handleSubmit={handleSubmit}
        />
      default:
        return null;
    }
  }
  const handleSubmit = async (type: DecalTypeKeys) => {
    if (!prompt) return alert('Please enter a prompt')
    try {
      setGeneratingImg(true);
      const response = await fetch('http://127.0.0.1:3000/api/v1/dalle', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          prompt
        })
      })
      const data = await response.json();
      console.log('data',data)
      handleDecals(type, `data:image/png;base64,${data.photo}`)
    } catch (error) {
      alert(error)
    }finally{
      setGeneratingImg(false);
      setActiveEditorTab("");
    }
  }
  const handleDecals = (type: DecalTypeKeys, result: any) => {
    const decalType = DecalTypes[type]
    state[decalType.stateProperty] = result
    if (!activeFilterTab[decalType.filterTab]) {
      handleActiveFilterTab(decalType.filterTab)
    }
  }
  const handleActiveFilterTab = (tabName: string) => {
    switch (tabName) {
      case "logoShirt":
        state.isLogoTexture = !activeFilterTab[tabName];
        break;
      case "stylishShirt":
        state.isFullTexture = !activeFilterTab[tabName];
        break;
      default:
        state.isLogoTexture = true;
        state.isFullTexture = false;
        break;
    }
    setActiveFilterTab((prevState) => {
      return {
        ...prevState,
        [tabName]: !prevState[tabName]
      }
    })
  }
  const readFile = (type: any) => {
    reader(file)
      .then((result: any) => {
        handleDecals(type, result);
        setActiveEditorTab('')
      })
  }
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
                  {EditorTabs.map((tab) => (
                    <Tab
                      key={tab.name}
                      tab={tab}
                      handleClick={() => setActiveEditorTab(tab.name)}
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
                handleClick={() => state.intro = true}
                title="Go Back"
                customStyles="w-fit px-4 py-2.5 font-bold text-sm "
              />
            </motion.div>
            <motion.div className="absolute z-10 bottom-5 right-0 left-0 w-full flex justify-center items-center gap-4"
              {...slideAnimation('up')}
            >
              {FilterTabs.map((tab) => (
                <Tab
                  key={tab.name}
                  tab={tab}
                  isFilterTab
                  isActiveTab={activeFilterTab[tab.name]}
                  handleClick={() => handleActiveFilterTab(tab.name)}
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