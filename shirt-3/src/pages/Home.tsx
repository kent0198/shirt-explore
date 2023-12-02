import {motion, AnimatePresence} from 'framer-motion'
import {useSnapshot} from 'valtio'
import state from '@store/index'
import { logothree } from '@asset/index'

const Home = () => {
    const snap=useSnapshot(state)
  return (
    <AnimatePresence>
        {
          snap.intro && 
          (<motion.section className=''>
              <motion.header>
                <img src={logothree} alt="logo" className='w-8 h-8 object-contain' />
              </motion.header>
          </motion.section>
        )}
    </AnimatePresence>
  )
}

export default Home