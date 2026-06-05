import React from 'react'
import { Globe, Facebook, Twitter, Linkedin, Instagram, Heart } from 'lucide-react'
import { motion } from 'framer-motion'

const Footer: React.FC = () => {
  const footerLinks = {
    'Specialties': [
      'Custom Software Development',
      'Web Application Development',
      'Mobile Application Development',
      'AI-Powered Software Solutions',
      'Business Automation Tools'
    ],
    'Company': [
      'Home',
      'Services',
      'About',
      'Why Website?',
      'Contact',
      'Privacy Policy',
      'Terms & Conditions'
    ],
    'Contact': [
      '+91-95879-99947',
      'info.takailabs@gmail.com',
      '240 NEW ATISH MARKET, NEAR MANSAROVAR, Mansarovar, Jaipur, Jaipur - 302020, Rajasthan',
      'Mon-Sun, 10AM-6PM'
    ]
  }

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-primary-900 text-white pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <motion.div
              className="flex items-center space-x-2 mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-lg blur-md opacity-75"></div>
                <img
  src="/logo_new2.png"
  alt="Takai Labs"
  className="h-36 w-auto"
/>
              </div>
            </motion.div>
            <motion.p
              className="text-gray-300 text-sm mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Takai Labs builds custom software, web and mobile applications, and AI-powered digital products for ambitious businesses.
            </motion.p>
            <motion.div
              className="flex space-x-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors duration-200"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * (categoryIndex + 1) }}
            >
              <h3 className="font-semibold text-white mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => {
                  const href =
                    link === 'Home' ? '#home' :
                    link === 'Services' ? '#services' :
                    link === 'About' ? '#about' :
                    link === 'Why Website?' ? '#why-website' :
                    link === 'Contact' ? '#contact' :
                    link === 'Privacy Policy' ? '/privacy-policy' :
                    link === 'Terms & Conditions' ? '/terms' :
                    '#services'
                  return (
                    <li key={link}>
                      <a
                        href={href}
                        className="text-gray-300 hover:text-primary-400 text-sm transition-colors duration-200"
                      >
                        {link}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div
          className="border-t border-gray-700 pt-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
              <p className="text-gray-300 text-sm">
                Get the latest tips and insights for growing your business online.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-400 transition-colors"
              />
              <button className="px-6 py-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg font-medium hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-gray-300 text-sm text-center md:text-left">
            © 2025 TAKAI LABS PRIVATE LIMITED. All rights reserved.
          </p>
          <p className="text-gray-300 text-sm flex items-center">
            Made with <Heart className="w-4 h-4 mx-1 text-red-500 fill-current" /> in India
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
