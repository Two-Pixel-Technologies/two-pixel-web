import React, { useState } from 'react'
import { ExternalLink, Eye } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'Healthcare', 'Manufacturing', 'Retail', 'Services']

  const projects = [
    {
      id: 1,
      title: 'SmileCare Dental Clinic',
      category: 'Healthcare',
      description: 'Modern dental clinic website with online appointment booking',
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=500&h=300&fit=crop',
      tags: ['React', 'Booking System', 'SEO'],
      color: 'from-blue-400 to-cyan-400',
    },
    {
      id: 2,
      title: 'Gujarat Steel Works',
      category: 'Manufacturing',
      description: 'Industrial website showcasing products and capabilities',
      image: 'https://images.unsplash.com/photo-1565008507742-5b16b1d2e1a7?w=500&h=300&fit=crop',
      tags: ['Corporate', 'Product Catalog', 'Multi-language'],
      color: 'from-gray-600 to-gray-800',
    },
    {
      id: 3,
      title: 'Namaste Yoga Studio',
      category: 'Services',
      description: 'Peaceful yoga studio site with class schedules and bookings',
      image: 'https://images.unsplash.com/photo-1545389336-cf090694435e?w=500&h=300&fit=crop',
      tags: ['Wellness', 'Scheduling', 'Payment Integration'],
      color: 'from-purple-400 to-pink-400',
    },
    {
      id: 4,
      title: 'Spice Bazaar Online',
      category: 'Retail',
      description: 'E-commerce platform for traditional Indian spices',
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=500&h=300&fit=crop',
      tags: ['E-commerce', 'Payment Gateway', 'Inventory'],
      color: 'from-orange-400 to-red-400',
    },
    {
      id: 5,
      title: 'MediCare Pharmacy',
      category: 'Healthcare',
      description: 'Online pharmacy with prescription upload and home delivery',
      image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=500&h=300&fit=crop',
      tags: ['Healthcare', 'E-commerce', 'Delivery Tracking'],
      color: 'from-green-400 to-emerald-400',
    },
    {
      id: 6,
      title: 'Fashion Boutique',
      category: 'Retail',
      description: 'Trendy clothing store with virtual try-on feature',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=300&fit=crop',
      tags: ['Fashion', 'AR Feature', 'Social Commerce'],
      color: 'from-pink-400 to-purple-400',
    },
  ]

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory)

  return (
    <section id="portfolio" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-gray-900">Our</span>{' '}
            <span className="gradient-text">Success Stories</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore how we've transformed businesses across India with our digital solutions
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg'
                  : 'glass-effect text-gray-700 hover:bg-white hover:shadow-md'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative overflow-hidden rounded-2xl glass-effect hover:shadow-2xl transition-all duration-300">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
                    
                    {/* Overlay Icons */}
                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="bg-white/90 p-3 rounded-full hover:bg-white transition-colors">
                        <Eye className="w-5 h-5 text-gray-700" />
                      </button>
                      <button className="bg-white/90 p-3 rounded-full hover:bg-white transition-colors">
                        <ExternalLink className="w-5 h-5 text-gray-700" />
                      </button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <span className="text-sm font-medium text-primary-600">{project.category}</span>
                    <h3 className="text-xl font-bold text-gray-900 mt-2 mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Decorative element */}
                <motion.div
                  className="absolute -z-10 inset-0 rounded-2xl"
                  style={{
                    background: `linear-gradient(135deg, ${project.color.split(' ')[1]}, ${project.color.split(' ')[3]})`,
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 0.2, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Portfolio
