import React from 'react'
import { Users, Award, Clock, Heart } from 'lucide-react'
import { motion } from 'framer-motion'

const About: React.FC = () => {

  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-secondary-50/20 via-primary-50/30 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              <span className="text-gray-900">Empowering</span>{' '}
              <span className="gradient-text">Indian Businesses</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We understand the unique challenges faced by small businesses in India. From the bustling factories of Gujarat to the serene yoga studios of Kerala, we want to help businesses across the nation establish their digital footprint.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our team combines cutting-edge technology with deep cultural understanding to create websites that resonate with your local audience while maintaining global standards.
            </p>
          </motion.div>

          {/* Right visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              {/* Abstract shapes */}
              <motion.div
                className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full opacity-20 blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-accent-400 to-primary-400 rounded-full opacity-20 blur-2xl"
                animate={{
                  scale: [1.2, 1, 1.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Main visual */}
              <div className="relative bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    className="glass-effect p-4 rounded-xl"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg mb-2"></div>
                    <p className="font-semibold text-gray-900">Factory Owner</p>
                    <p className="text-sm text-gray-600">Manufacturing Website</p>
                  </motion.div>
                  <motion.div
                    className="glass-effect p-4 rounded-xl"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg mb-2"></div>
                    <p className="font-semibold text-gray-900">Dentist</p>
                    <p className="text-sm text-gray-600">Clinic Management</p>
                  </motion.div>
                  <motion.div
                    className="glass-effect p-4 rounded-xl"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-400 rounded-lg mb-2"></div>
                    <p className="font-semibold text-gray-900">Yoga Studio</p>
                    <p className="text-sm text-gray-600">Class Booking System</p>
                  </motion.div>
                  <motion.div
                    className="glass-effect p-4 rounded-xl"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-400 rounded-lg mb-2"></div>
                    <p className="font-semibold text-gray-900">Local Shop</p>
                    <p className="text-sm text-gray-600">Online Store</p>
                  </motion.div>
                </div>

                {/* Decorative elements */}
                <motion.div
                  className="absolute top-4 right-4"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <div className="w-8 h-8 border-2 border-primary-400 rounded-lg transform rotate-45 opacity-50"></div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
