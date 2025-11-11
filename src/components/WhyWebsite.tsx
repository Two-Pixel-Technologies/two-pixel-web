import React from 'react'
import { TrendingUp, Globe2, Users, Clock, Smartphone, Shield, Target, Zap } from 'lucide-react'
import { motion } from 'framer-motion'

const WhyWebsite: React.FC = () => {
  const reasons = [
    {
      icon: Globe2,
      title: '24/7 Online Presence',
      description: 'Your business never sleeps. A website allows customers to find you, learn about your services, and contact you anytime, anywhere.',
      stat: '24/7',
      statLabel: 'Availability',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
    },
    {
      icon: TrendingUp,
      title: 'Build Trust & Credibility',
      description: 'In today\'s digital age, customers expect businesses to have a website. A professional online presence instantly establishes legitimacy and trust.',
      stat: '84%',
      statLabel: 'Trust Businesses with Websites',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
    },
    {
      icon: Users,
      title: 'Be Where Your Customers Are',
      description: 'With over 700 million internet users in India, being online means being visible where your customers are already looking.',
      stat: '700M+',
      statLabel: 'Indians Online',
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50',
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Access',
      description: '99% of Indian internet users access the web via smartphones. A mobile-optimized website ensures you\'re accessible to everyone.',
      stat: '99%',
      statLabel: 'Mobile Internet Users',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
    },
    {
      icon: Target,
      title: 'Complete Brand Control',
      description: 'Unlike social media profiles, your website is fully yours. Control your message, branding, and how customers experience your business.',
      stat: '100%',
      statLabel: 'Your Platform',
      color: 'from-indigo-500 to-blue-500',
      bgColor: 'bg-indigo-50',
    },
    {
      icon: Shield,
      title: 'Professional Image',
      description: 'Stand out from competitors. A modern, well-designed website shows you\'re serious about your business and care about customer experience.',
      stat: 'First',
      statLabel: 'Impression Matters',
      color: 'from-rose-500 to-pink-500',
      bgColor: 'bg-rose-50',
    },
  ]

  const benefits = [
    {
      title: 'Always Accessible',
      value: '24/7',
      description: 'Your business information available anytime',
      icon: Clock,
    },
    {
      title: 'First Impression',
      value: '75%',
      description: 'People judge credibility based on website design',
      icon: Target,
    },
    {
      title: 'Online Searches',
      value: '97%',
      description: 'Consumers search online before visiting a business',
      icon: Globe2,
    },
    {
      title: 'Digital Footprint',
      value: '100%',
      description: 'Complete control over your online presence',
      icon: Shield,
    },
  ]

  return (
    <section id="why-website" className="py-20 px-4 bg-gradient-to-b from-white via-primary-50/40 to-secondary-50/20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 -left-20 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 -right-20 w-96 h-96 bg-secondary-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
              <Globe2 className="w-4 h-4" />
              Why Your Business Needs a Website
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-primary-600 to-secondary-600 bg-clip-text text-transparent">
              The Digital Age is Here.
            </span>
            <br />
            <span className="text-gray-700">Is Your Business Ready?</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            In today's digital-first world, having a website isn't just an option—it's essential for 
            credibility, visibility, and establishing your professional online presence.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl mb-4 mx-auto">
                <benefit.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-2">
                {benefit.value}
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">{benefit.title}</h4>
              <p className="text-sm text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                {/* Decorative corner */}
                <div className={`absolute top-0 right-0 w-24 h-24 ${reason.bgColor} rounded-bl-full opacity-50 transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500`} />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6">
                    <motion.div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${reason.color} shadow-lg`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <reason.icon className="w-8 h-8 text-white" />
                    </motion.div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {reason.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {reason.description}
                  </p>

                  {/* Stat */}
                  <div className={`inline-flex items-center gap-2 ${reason.bgColor} px-4 py-2 rounded-full`}>
                    <span className={`text-2xl font-bold bg-gradient-to-r ${reason.color} bg-clip-text text-transparent`}>
                      {reason.stat}
                    </span>
                    <span className="text-sm text-gray-600">{reason.statLabel}</span>
                  </div>
                </div>

                {/* Hover effect line */}
                <motion.div
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${reason.color}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyWebsite

