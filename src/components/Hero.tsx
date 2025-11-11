import React from 'react'
import { ArrowRight, Sparkles, Zap, Code2, Palette } from 'lucide-react'
import { motion } from 'framer-motion'

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 px-4 overflow-hidden bg-gradient-to-b from-gray-50 via-white to-primary-50/20">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary-300/30 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-300/30 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent-300/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-50 border border-primary-200 rounded-full mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Sparkles className="w-4 h-4 text-primary-600" />
          <span className="text-sm font-medium text-primary-700">Digital Solutions Provider</span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="text-gray-900">Transform Your Business</span>
          <br />
          <span className="gradient-text">Into Digital Success</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          We craft stunning, modern websites that help Indian small businesses like factories, dental clinics, yoga studios, and local shops establish a powerful online presence.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <button href="#contact" className="group bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-full font-medium text-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 flex items-center space-x-2">
            <span>Start Your Journey</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button href="#services" className="glass-effect px-8 py-4 rounded-full font-medium text-lg text-gray-700 hover:bg-white hover:shadow-lg transition-all duration-200">
            Services
          </button>
        </motion.div>

        {/* Features */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {[
            { icon: Zap, label: 'Fast Delivery', value: '7 Days' },
            { icon: Code2, label: 'Modern Tech', value: 'React & Node' },
            { icon: Palette, label: 'Custom Design', value: '100% Unique' },
            { icon: Sparkles, label: 'SEO Ready', value: 'Top Rankings' },
          ].map((feature, index) => (
            <motion.div
              key={feature.label}
              className="glass-effect p-4 rounded-xl hover-lift"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <feature.icon className="w-8 h-8 text-primary-500 mx-auto mb-2" />
              <p className="text-sm text-gray-600">{feature.label}</p>
              <p className="font-semibold text-gray-900">{feature.value}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Decorative Vector Shapes */}
        {/* Top Right - Rotating Diamond */}
        <motion.div
          className="absolute top-32 right-20 hidden lg:block"
          animate={{
            y: [-15, 20, -15],
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-20 h-20 border-4 border-primary-400 rounded-lg transform rotate-45 opacity-30"></div>
        </motion.div>

        {/* Bottom Left - Floating Circle */}
        <motion.div
          className="absolute bottom-32 left-20 hidden lg:block"
          animate={{
            y: [15, -20, 15],
            x: [-10, 10, -10],
            rotate: [0, -15, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-16 h-16 bg-gradient-to-br from-secondary-400 to-accent-400 rounded-full opacity-30"></div>
        </motion.div>

        {/* Top Left - Hexagon */}
        <motion.div
          className="absolute top-48 left-32 hidden lg:block"
          animate={{
            y: [-20, 20, -20],
            rotate: [0, 120, 240, 360],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg width="60" height="60" viewBox="0 0 60 60" className="opacity-25">
            <polygon 
              points="30,5 52,17.5 52,42.5 30,55 8,42.5 8,17.5" 
              fill="none" 
              stroke="url(#hexGrad)" 
              strokeWidth="3"
            />
            <defs>
              <linearGradient id="hexGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1890ff" />
                <stop offset="100%" stopColor="#722ed1" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        {/* Right Side - Triangle */}
        <motion.div
          className="absolute top-64 right-32 hidden lg:block"
          animate={{
            y: [20, -25, 20],
            rotate: [0, 360],
            x: [-15, 15, -15],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg width="70" height="70" viewBox="0 0 70 70" className="opacity-30">
            <polygon 
              points="35,10 60,55 10,55" 
              fill="none" 
              stroke="#f97316" 
              strokeWidth="3"
            />
          </svg>
        </motion.div>

        {/* Bottom Right - Pentagon */}
        <motion.div
          className="absolute bottom-48 right-48 hidden lg:block"
          animate={{
            y: [-18, 18, -18],
            x: [18, -18, 18],
            rotate: [0, -360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg width="55" height="55" viewBox="0 0 55 55" className="opacity-25">
            <polygon 
              points="27.5,5 50,20 42,45 13,45 5,20" 
              fill="none" 
              stroke="#9254de" 
              strokeWidth="2.5"
            />
          </svg>
        </motion.div>

        {/* Left Side - Half Circle Arc */}
        <motion.div
          className="absolute bottom-64 left-48 hidden lg:block"
          animate={{
            y: [22, -22, 22],
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg width="80" height="80" viewBox="0 0 80 80" className="opacity-30">
            <path 
              d="M 10 40 Q 40 10, 70 40" 
              fill="none" 
              stroke="#40a9ff" 
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path 
              d="M 70 40 Q 40 70, 10 40" 
              fill="none" 
              stroke="#fb923c" 
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>

        {/* Top Center - Star */}
        <motion.div
          className="absolute top-20 left-1/3 hidden lg:block"
          animate={{
            y: [-25, 25, -25],
            rotate: [0, 360],
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg width="50" height="50" viewBox="0 0 50 50" className="opacity-25">
            <polygon 
              points="25,2 30,18 47,18 34,28 39,44 25,35 11,44 16,28 3,18 20,18" 
              fill="none" 
              stroke="#1890ff" 
              strokeWidth="2"
            />
          </svg>
        </motion.div>

        {/* Bottom Center - Infinity Symbol */}
        <motion.div
          className="absolute bottom-20 right-1/4 hidden lg:block"
          animate={{
            y: [15, -15, 15],
            x: [-12, 12, -12],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg width="90" height="45" viewBox="0 0 90 45" className="opacity-25">
            <path 
              d="M 15,22.5 Q 15,10 25,10 Q 35,10 35,22.5 Q 35,35 45,35 Q 55,35 55,22.5 Q 55,10 65,10 Q 75,10 75,22.5" 
              fill="none" 
              stroke="url(#infGrad)" 
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="infGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#722ed1" />
                <stop offset="100%" stopColor="#f97316" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        {/* Mobile Decorative Elements */}
        <motion.div
          className="absolute top-24 right-8 lg:hidden"
          animate={{
            y: [-10, 15, -10],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-12 h-12 border-3 border-primary-400 rounded-lg transform rotate-45 opacity-25"></div>
        </motion.div>

        <motion.div
          className="absolute bottom-24 left-8 lg:hidden"
          animate={{
            y: [12, -12, 12],
            rotate: [0, -360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg width="40" height="40" viewBox="0 0 40 40" className="opacity-25">
            <circle cx="20" cy="20" r="15" fill="none" stroke="#9254de" strokeWidth="2.5" />
          </svg>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
