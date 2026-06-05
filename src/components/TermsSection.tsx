import React from 'react'
import { motion } from 'framer-motion'
import {
  FileText,
  BadgeCheck,
  Wallet,
  ShieldAlert,
  Gavel,
  Building2,
  Phone,
  Mail,
  MapPin
} from 'lucide-react'

const TermsSection: React.FC = () => {
  const cards = [
    { icon: BadgeCheck, title: 'Scope of Services', text: 'Our work covers custom software, web applications, mobile apps, AI solutions, and business automation projects defined in the agreed scope.' },
    { icon: Wallet, title: 'Payment & Delivery', text: 'Pricing, milestones, and delivery expectations are set out in the proposal or contract we share with you before work begins.' },
    { icon: ShieldAlert, title: 'Liability', text: 'We aim for reliable delivery and clear ownership of work, while our responsibility remains limited by the agreed contract and applicable law.' },
  ]

  return (
    <section id="terms-and-conditions" className="py-20 px-4 bg-gradient-to-b from-gray-50 via-secondary-50/20 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="glass-effect rounded-3xl p-8 md:p-10 border border-secondary-100 shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                <span className="text-gray-900">Terms &</span>{' '}
                <span className="gradient-text">Conditions</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl">These terms define how we work together on software, automation, and digital products in a transparent, practical, and dependable way.</p>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-secondary-50 px-4 py-2 text-sm text-secondary-700 border border-secondary-100"><FileText className="w-4 h-4" /> Business-ready terms for software delivery</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {cards.map((card, index) => (
              <motion.article
                key={card.title}
                className="rounded-2xl border border-secondary-100 bg-white/85 p-6 hover-lift"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-r from-secondary-500 to-accent-500 text-white flex items-center justify-center mb-4 shadow-lg"><card.icon className="w-5 h-5" /></div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-sm text-gray-600">{card.text}</p>
              </motion.article>
            ))}
          </div>

          <motion.div
            className="rounded-3xl border border-secondary-100 bg-gradient-to-r from-secondary-50 to-primary-50 p-6 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-start gap-3"><Gavel className="w-5 h-5 text-secondary-700 mt-1" /><p className="text-sm text-gray-700">Any dispute is governed by Indian law, and the project relationship remains subject to the final written agreement between the parties.</p></div>
            <div className="rounded-full bg-white/80 border border-secondary-100 px-4 py-2 text-sm text-secondary-700 font-semibold">TAKAI LABS PRIVATE LIMITED</div>
          </motion.div>

          <motion.div
            className="mt-6 rounded-3xl border border-secondary-100 bg-white/85 p-6 shadow-sm hover-lift"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Company Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
              <div className="rounded-2xl border border-secondary-100 bg-secondary-50/70 p-4 flex gap-3 items-start">
  <Building2 className="w-5 h-5 text-secondary-600 mt-1 flex-shrink-0" />
  <div>
    <span className="text-gray-500 block mb-1">Company Name</span>
    <strong>TAKAI LABS PRIVATE LIMITED</strong>
  </div>
</div>
             <div className="rounded-2xl border border-secondary-100 bg-secondary-50/70 p-4 flex gap-3 items-start">
  <Phone className="w-5 h-5 text-secondary-600 mt-1 flex-shrink-0" />
  <div>
    <span className="text-gray-500 block mb-1">Phone</span>
    <strong>+91-95879-99947</strong>
  </div>
</div>
              <div className="rounded-2xl border border-secondary-100 bg-secondary-50/70 p-4 flex gap-3 items-start">
  <Mail className="w-5 h-5 text-secondary-600 mt-1 flex-shrink-0" />
  <div>
    <span className="text-gray-500 block mb-1">Email</span>
    <a
      className="text-primary-700 hover:text-primary-800 font-semibold"
      href="mailto:info.takailabs@gmail.com"
    >
      info.takailabs@gmail.com
    </a>
  </div>
</div>
              <div className="rounded-2xl border border-secondary-100 bg-secondary-50/70 p-4 md:col-span-2 flex gap-3 items-start">
  <MapPin className="w-5 h-5 text-secondary-600 mt-1 flex-shrink-0" />
  <div>
    <span className="text-gray-500 block mb-1">Office Address</span>
    <strong>
      240 NEW ATISH MARKET, NEAR MANSAROVAR,
      Mansarovar, Jaipur, Jaipur - 302020, Rajasthan
    </strong>
  </div>
</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default TermsSection
