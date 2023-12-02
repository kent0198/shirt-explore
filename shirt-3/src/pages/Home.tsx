import {motion, AnimatePresence} from 'framer-motion'
import {useSnapshot} from 'valtio'
import state from '@store/index'
import { logothree } from '@asset/index'
import { slideAnimation } from '@motion/motion'
const Home = () => {
    const snap=useSnapshot(state)
  return (
    <AnimatePresence>
        {
          snap.intro && 
          (<motion.section className='w-fit xl:h-full flex xl:justify-between justify-start items-start flex-col xl-py-8 sm:p-8 p-6 max-xl:gap-7 absolute z-10' {...slideAnimation('left')}>
              <motion.header {...slideAnimation('down')}>
                <img src={logothree} alt="logo" className='w-8 h-8 object-contain' />
              </motion.header>
              <motion.div className='flex-1 xl:justify-normal justify-start flex flex-col gap-10'>
                
              </motion.div>
          </motion.section>
        )}

    </AnimatePresence>
  )
}

export default Home