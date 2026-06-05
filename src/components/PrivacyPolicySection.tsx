import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Eye, Lock, Cookie, Globe } from 'lucide-react'

const PrivacyPolicySection: React.FC = () => {
  const points = [
    { icon: Eye, title: 'Information We Collect', text: 'Contact details, business context, and project notes you share with us.' },
    { icon: Lock, title: 'How We Use It', text: 'To respond, deliver services, and improve the experience you receive from Takai Labs.' },
    { icon: Cookie, title: 'Cookies & Analytics', text: 'We use basic analytics and cookies to understand usage and improve performance.' },
  ]

  return (
    <section id="privacy-policy" className="py-20 px-4 bg-gradient-to-b from-white via-primary-50/20 to-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="glass-effect rounded-3xl p-8 border border-primary-100 shadow-xl h-full">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              <span className="text-gray-900">Privacy</span>{' '}
              <span className="gradient-text">Policy</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6">We collect only the information needed to understand your requirements, communicate with you, and deliver dependable software solutions for custom software, web apps, mobile apps, AI solutions, and business automation.</p>
            <div className="grid gap-4">
              {points.map((item, index) => (
                <motion.article
                  key={item.title}
                  className="rounded-2xl border border-primary-100 bg-white/80 p-4 sm:p-5 hover-lift"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 text-white flex items-center justify-center shadow-lg"><item.icon className="w-5 h-5" /></div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.text}</p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          <motion.aside
            className="rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 text-white shadow-[0_20px_40px_-18px_rgba(15,23,42,0.45)] h-full flex flex-col justify-between border border-primary-200/30"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-primary-100 mb-4"><Shield className="w-3.5 h-3.5" /> Security & Rights</div>
              <h3 className="text-2xl font-semibold mb-4">What you can expect</h3>
              <ul className="space-y-4 text-sm text-primary-50 list-disc pl-5">
  <li>Secure handling of client information and project requirements.</li>

  <li>Protection of source code, project assets, and confidential business data.</li>

  <li>Use of trusted cloud, hosting, and analytics providers where required.</li>

  <li>Data collected only for communication, project delivery, and support purposes.</li>

  <li>Transparent privacy practices with respect to user information.</li>

  <li>Request access, correction, or removal of your information when applicable.</li>
</ul>
            </div>
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/10 p-4 text-sm text-primary-100 hover-lift">
              <Globe className="w-4 h-4 mb-2" />
              We may work with trusted third-party tools for hosting, analytics, and form handling. Those providers operate under their own privacy terms and are chosen with care.
            </div>
          </motion.aside>
        </motion.div>
      </div>
    </section>
  )
}

export default PrivacyPolicySection
