import React from 'react'
import { motion } from 'framer-motion'

const FloatingShapes: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
      {/* Enhanced Floating circles with more motion */}
      <motion.div
        className="absolute top-[10%] left-[5%] w-32 h-32 bg-primary-200/10 rounded-full blur-2xl"
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -40, 30, 0],
          scale: [1, 1.2, 0.9, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute top-[60%] right-[10%] w-48 h-48 bg-secondary-200/10 rounded-full blur-3xl"
        animate={{
          x: [0, -60, 40, 0],
          y: [0, 50, -30, 0],
          scale: [1.1, 0.9, 1.3, 1.1],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute bottom-[20%] left-[15%] w-36 h-36 bg-accent-200/10 rounded-full blur-2xl"
        animate={{
          x: [0, 60, -40, 0],
          y: [0, -30, 40, 0],
          scale: [1, 1.3, 0.95, 1],
          rotate: [0, 90, 180, 270, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Enhanced Floating geometric shapes with complex motion */}
      <motion.div
        className="absolute top-[30%] right-[20%] w-20 h-20 border-2 border-primary-300/20 rounded-lg"
        animate={{
          rotate: [0, 180, 360],
          scale: [1, 1.2, 0.95, 1],
          x: [0, 25, -25, 0],
          y: [0, -30, 20, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute top-[70%] left-[30%] w-16 h-16 border-2 border-secondary-300/20 rounded-lg transform rotate-45"
        animate={{
          rotate: [45, 225, 405],
          scale: [1.1, 0.9, 1.2, 1.1],
          x: [0, -35, 35, 0],
          y: [0, 25, -25, 0],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute top-[15%] left-[50%] w-24 h-24 border-2 border-accent-300/15 rounded-full"
        animate={{
          scale: [1, 1.4, 0.9, 1],
          opacity: [0.3, 0.7, 0.2, 0.3],
          x: [0, 30, -30, 0],
          y: [0, -20, 20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Enhanced Gradient orbs with fluid motion */}
      <motion.div
        className="absolute top-[45%] left-[70%]"
        animate={{
          x: [0, -45, 35, 0],
          y: [0, 40, -30, 0],
          scale: [1, 1.15, 0.95, 1],
          rotate: [0, 120, 240, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-40 h-40 bg-gradient-to-br from-primary-300/10 to-secondary-300/10 rounded-full blur-3xl"></div>
      </motion.div>

      <motion.div
        className="absolute bottom-[30%] right-[40%]"
        animate={{
          x: [0, 50, -35, 0],
          y: [0, -50, 35, 0],
          scale: [1, 0.9, 1.2, 1],
          rotate: [0, -90, -180, -270, -360],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-32 h-32 bg-gradient-to-tr from-accent-300/10 to-primary-300/10 rounded-full blur-2xl"></div>
      </motion.div>

      {/* Enhanced Dots pattern with movement */}
      <motion.svg
        className="absolute top-[80%] right-[5%] w-24 h-24 text-primary-200/10"
        animate={{
          opacity: [0.1, 0.4, 0.1],
          rotate: [0, 45, 0],
          x: [0, 15, -15, 0],
          y: [0, -20, 10, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="currentColor" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </motion.svg>

      {/* Enhanced Triangle with complex path */}
      <motion.div
        className="absolute bottom-[10%] left-[80%]"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.3, 0.9, 1],
          x: [0, -25, 25, 0],
          y: [0, 20, -20, 0],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[35px] border-b-primary-300/10"></div>
      </motion.div>
      
      {/* New Abstract Vector Shapes */}
      {/* Hexagon with motion */}
      <motion.svg
        className="absolute top-[40%] left-[8%] w-28 h-28 opacity-15"
        animate={{
          rotate: [0, 180, 360],
          scale: [1, 1.25, 1],
          x: [0, 35, -25, 0],
          y: [0, -30, 30, 0],
        }}
        transition={{
          duration: 19,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <polygon 
          points="50,10 90,30 90,70 50,90 10,70 10,30" 
          fill="none" 
          stroke="#722ed1" 
          strokeWidth="2"
        />
      </motion.svg>

      {/* Pentagon */}
      <motion.svg
        className="absolute bottom-[45%] right-[15%] w-24 h-24 opacity-20"
        animate={{
          rotate: [0, -360],
          scale: [1, 0.85, 1.2, 1],
          x: [0, 40, -30, 0],
          y: [0, 30, -40, 0],
        }}
        transition={{
          duration: 23,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <polygon 
          points="50,5 95,40 75,90 25,90 5,40" 
          fill="none" 
          stroke="#f97316" 
          strokeWidth="2"
        />
      </motion.svg>

      {/* Curved abstract shape */}
      <motion.svg
        className="absolute top-[55%] right-[35%] w-32 h-32 opacity-18"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.15, 0.9, 1],
          x: [0, -40, 25, 0],
          y: [0, 35, -25, 0],
        }}
        transition={{
          duration: 21,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <path 
          d="M 20 50 Q 50 20, 80 50 T 140 50" 
          fill="none" 
          stroke="#40a9ff" 
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path 
          d="M 20 70 Q 50 100, 80 70 T 140 70" 
          fill="none" 
          stroke="#9254de" 
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </motion.svg>

      {/* Star shape */}
      <motion.svg
        className="absolute top-[25%] right-[55%] w-20 h-20 opacity-15"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.35, 0.95, 1],
          x: [0, 30, -30, 0],
          y: [0, -25, 25, 0],
          opacity: [0.15, 0.3, 0.1, 0.15],
        }}
        transition={{
          duration: 17,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <polygon 
          points="50,5 60,35 90,35 65,55 75,85 50,65 25,85 35,55 10,35 40,35" 
          fill="none" 
          stroke="#1890ff" 
          strokeWidth="2"
        />
      </motion.svg>

      {/* Octagon */}
      <motion.svg
        className="absolute bottom-[55%] left-[45%] w-26 h-26 opacity-18"
        animate={{
          rotate: [0, -360],
          scale: [1, 1.2, 0.9, 1],
          x: [0, -35, 35, 0],
          y: [0, 30, -30, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <polygon 
          points="30,10 70,10 90,30 90,70 70,90 30,90 10,70 10,30" 
          fill="none" 
          stroke="#fb923c" 
          strokeWidth="2"
        />
      </motion.svg>

      {/* Spiral-like curves */}
      <motion.svg
        className="absolute top-[85%] left-[25%] w-36 h-36 opacity-12"
        animate={{
          rotate: [0, 180, 360],
          scale: [1, 1.1, 1],
          x: [0, 25, -25, 0],
          y: [0, -20, 20, 0],
        }}
        transition={{
          duration: 27,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <path 
          d="M 30 68 Q 60 30, 90 68" 
          fill="none" 
          stroke="#722ed1" 
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path 
          d="M 90 68 Q 120 106, 150 68" 
          fill="none" 
          stroke="#1890ff" 
          strokeWidth="2"
          strokeLinecap="round"
        />
      </motion.svg>

      {/* Enhanced Wave pattern with vertical motion */}
      <motion.svg
        className="absolute bottom-0 left-0 w-full h-32 text-primary-100/5"
        animate={{
          x: [0, -100, 0],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <path
          d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          fill="currentColor"
        />
      </motion.svg>

      {/* Additional floating abstract shapes */}
      {/* Cross shape */}
      <motion.svg
        className="absolute top-[20%] right-[75%] w-16 h-16 opacity-15"
        animate={{
          rotate: [0, 90, 180, 270, 360],
          scale: [1, 1.3, 1],
          x: [0, 20, -20, 0],
          y: [0, -25, 15, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <rect x="32" y="10" width="6" height="80" fill="none" stroke="#40a9ff" strokeWidth="2" rx="3" />
        <rect x="10" y="32" width="80" height="6" fill="none" stroke="#40a9ff" strokeWidth="2" rx="3" />
      </motion.svg>

      {/* Diamond cluster */}
      <motion.div
        className="absolute bottom-[65%] right-[8%]"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.15, 0.9, 1],
          x: [0, -30, 20, 0],
          y: [0, 25, -20, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <svg width="50" height="50" viewBox="0 0 50 50" className="opacity-20">
          <rect x="15" y="15" width="20" height="20" fill="none" stroke="#9254de" strokeWidth="2" transform="rotate(45 25 25)" />
          <rect x="20" y="20" width="10" height="10" fill="none" stroke="#f97316" strokeWidth="1.5" transform="rotate(45 25 25)" />
        </svg>
      </motion.div>

      {/* Concentric circles */}
      <motion.svg
        className="absolute top-[50%] left-[60%] w-32 h-32 opacity-12"
        animate={{
          rotate: [0, 180, 360],
          scale: [1, 1.2, 0.85, 1],
          x: [0, 35, -30, 0],
          y: [0, -30, 25, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <circle cx="64" cy="64" r="15" fill="none" stroke="#1890ff" strokeWidth="2" />
        <circle cx="64" cy="64" r="30" fill="none" stroke="#722ed1" strokeWidth="1.5" />
        <circle cx="64" cy="64" r="45" fill="none" stroke="#f97316" strokeWidth="1" />
      </motion.svg>
    </div>
  )
}

export default FloatingShapes
