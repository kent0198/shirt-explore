import { useState, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { useSnapshot } from "valtio"
import config from "@config/config"
import state from "@store/index"
import { download } from "@asset/index"
import { downloadCanvasToImage, reader } from "@config/helpers"
import { EditorTabs,FilterTabs, DecalTypes } from "@config/contants"
import { fadeAnimation,slideAnimation } from "@motion/motion"

const Customizer = () => {
  return (
    <AnimatePresence>

    </AnimatePresence>
  )
}

export default Customizer