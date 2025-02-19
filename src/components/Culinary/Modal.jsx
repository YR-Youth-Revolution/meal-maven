import React from 'react';
import { motion } from 'framer-motion';
import './Modal.css'

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="modal-content"
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.5 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()} 
      >
        <button className="close-btn" onClick={onClose}>
          ×
        </button>
        {children}
      </motion.div>
    </motion.div>
  );
};

export default Modal;
