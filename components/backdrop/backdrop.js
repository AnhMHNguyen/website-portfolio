import { BackdropContainer } from './backdrop.style'
import { AnimatePresence } from 'framer-motion';

const Backdrop = ({ children, onClose }) => {
  return (
    <BackdropContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity:0 }}
      onClick={onClose}
    >
      { children }
    </BackdropContainer>
  );
}

export default Backdrop