import React from 'react'
import { Star, Quote } from 'lucide-react'
import { motion } from 'framer-motion'

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Dr. Rajesh Kumar',
      role: 'Dentist, SmileCare Clinic',
      location: 'Mumbai',
      content: 'Two Pixel transformed our clinic\'s online presence. Patient bookings increased by 300% within 3 months. The website is beautiful and easy to manage.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=100&h=100&fit=crop',
    },
    {
      id: 2,
      name: 'Priya Sharma',
      role: 'Yoga Instructor',
      location: 'Bangalore',
      content: 'The booking system they created for my yoga studio is amazing. My students love how easy it is to book classes online. Highly recommend their services!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=100&h=100&fit=crop',
    },
    {
      id: 3,
      name: 'Amit Patel',
      role: 'Factory Owner',
      location: 'Ahmedabad',
      content: 'Professional team that understands business needs. Our B2B inquiries have doubled since launching the new website. Excellent support and maintenance.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    },
    {
      id: 4,
      name: 'Sunita Verma',
      role: 'Boutique Owner',
      location: 'Delhi',
      content: 'The e-commerce website they built helped me reach customers across India. Sales increased by 400% in the first year. Worth every penny!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop',
    },
    {
      id: 5,
      name: 'Karthik Nair',
      role: 'Restaurant Owner',
      location: 'Kochi',
      content: 'Online ordering system works flawlessly. The team was patient with our requirements and delivered beyond expectations. Great work!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    },
    {
      id: 6,
      name: 'Meera Reddy',
      role: 'Pharmacy Owner',
      location: 'Hyderabad',
      content: 'Two Pixel created a perfect solution for our online pharmacy. The prescription upload feature and delivery tracking have made our customers very happy.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop',
    },
  ]

  return (
    <section id="testimonials" className="py-20 px-4 bg-gradient-to-b from-primary-50/30 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-20 right-10 w-64 h-64 bg-secondary-200/30 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-64 h-64 bg-primary-200/30 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
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
            <span className="text-gray-900">Client</span>{' '}
            <span className="gradient-text">Success Stories</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients across India have to say.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="glass-effect p-6 rounded-2xl hover:shadow-xl transition-all duration-300 h-full">
                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-primary-200 mb-4" />
                
                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>

                {/* Author */}
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-xs text-primary-600">{testimonial.location}</p>
                  </div>
                </div>

                {/* Decorative element */}
                <motion.div
                  className="absolute top-4 right-4 w-8 h-8 border-2 border-primary-200 rounded-lg transform rotate-45 opacity-30"
                  animate={{
                    rotate: [45, 90, 45],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <button className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-3 rounded-full font-medium hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200">
            Join 500+ Happy Clients
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
