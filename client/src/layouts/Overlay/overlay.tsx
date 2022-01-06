import React from 'react';
import ReactDOM from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';

const Overlay: React.FC = ({ children }) => {
  return ReactDOM.createPortal(
    <AnimatePresence>
      <motion.div
        key="overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { ease: 'easeInOut' } }}
        className="fixed h-full w-full top-0 left-0 bg-black bg-opacity-30"
      >
        {children}
      </motion.div>
    </AnimatePresence>,
    document.getElementById('overlay') as HTMLDivElement,
  );
};

export default Overlay;
