import React from 'react'
import { Globe, Smartphone, Search, ShoppingBag, Palette, Gauge } from 'lucide-react'
import { motion } from 'framer-motion'

const Services: React.FC = () => {
  const services = [
    {
      icon: Globe,
      title: 'Website Development',
      description: 'Custom websites tailored for Indian small businesses with modern design and functionality.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading'],
      color: 'from-blue-400 to-cyan-400',
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Design',
      description: 'Optimized for the mobile-first Indian market where most users browse on smartphones.',
      features: ['Touch Optimized', 'App-like Feel', 'PWA Ready'],
      color: 'from-purple-400 to-pink-400',
    },
    {
      icon: Search,
      title: 'Local SEO',
      description: 'Get found by customers in your city with powerful local search optimization.',
      features: ['Google My Business', 'Local Keywords', 'Map Integration'],
      color: 'from-green-400 to-emerald-400',
    },
    {
      icon: ShoppingBag,
      title: 'E-Commerce Solutions',
      description: 'Sell your products online with secure payment gateways and inventory management.',
      features: ['Payment Gateway', 'Inventory System', 'Order Tracking'],
      color: 'from-orange-400 to-red-400',
    },
    {
      icon: Palette,
      title: 'Brand Identity',
      description: 'Create a memorable brand with custom logos, colors, and visual identity.',
      features: ['Logo Design', 'Brand Guidelines', 'Competitor Analysis'],
      color: 'from-indigo-400 to-purple-400',
    },
    {
      icon: Gauge,
      title: 'Performance',
      description: 'Modern technologies and maintenance to keep your website running at peak performance.',
      features: ['Modern Technologies', 'Maintenance', 'Performance Monitoring'],
      color: 'from-teal-400 to-cyan-400',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="services" className="py-20 px-4 relative bg-gradient-to-b from-primary-50/20 via-white to-secondary-50/20">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-gray-900">Services That</span>{' '}
            <span className="gradient-text">Deliver Results</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From dental clinics to yoga studios, factories to local shops - we provide comprehensive digital solutions tailored for every Indian business.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative"
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl"
                style={{
                  backgroundImage: `linear-gradient(to right, ${service.color.split(' ')[1]}, ${service.color.split(' ')[3]})`,
                }}
              />
              <div className="relative glass-effect p-6 rounded-2xl h-full hover:shadow-2xl transition-shadow duration-300">
                <div className={`w-14 h-14 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-4`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
