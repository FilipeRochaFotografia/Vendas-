import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, hoverLift } from '../../utils/animations';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const Card: React.FC<CardProps> = ({ children, className = '', delay = 0 }) => {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={hoverLift}
      className={`relative p-8 rounded-[2.5rem] bg-white border border-teal-100/50 shadow-glass backdrop-blur-sm overflow-hidden group ${className}`}
    >
      {/* Decorative top gradient line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-200 via-teal-500 to-teal-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        {children}
      </div>

      {/* Background ambient glow */}
      <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-teal-100 rounded-full blur-3xl opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
    </motion.div>
  );
};

export default Card;