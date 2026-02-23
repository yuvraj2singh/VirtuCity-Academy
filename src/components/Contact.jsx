import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin, Send, Facebook, Instagram, Linkedin } from 'lucide-react'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'Phone',
      content: '+91 80761235411',
      link: 'tel:+918076123541',
    },
    {
      icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'Email',
      content: 'info.virtucity@gmail.com',
      link: 'mailto:info.virtucity@gmail.com',
    },
    {
      icon: <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'Location',
      content: 'JalVayu Vihar, Greater Noida, Delhi NCR',
      link: 'https://maps.google.com',
    },
  ]

  return (
    <section
      id="contact"
      className="overflow-x-hidden py-12 sm:py-16 md:py-20 bg-linear-to-br from-gray-50 to-blue-50"
    >
      <div className="container-custom">
        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Ready to start your training journey? Contact us today for course
            details, schedules, and enrollment information.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              Let's Start a Conversation
            </h3>

            <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              Whether you're looking to enroll in a course, have questions about
              our programs, or want to discuss corporate training options, we're
              here to help.
            </p>

            <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  initial={{ opacity: 0, y: 20 }}
                  target = {info.title=='Location' ? '_blank' : ''}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 bg-white rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#6366f1]/10 rounded-full flex items-center justify-center shrink-0 text-[#6366f1]">
                    {info.icon}
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">
                      {info.title}
                    </h4>
                    <p className="text-gray-600 text-xs sm:text-sm wrap-break-word">
                      {info.content}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">
                Follow Us
              </h4>
              <div className="flex space-x-3 sm:space-x-4">
                {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center text-[#6366f1] hover:bg-[#6366f1] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-5 sm:p-6 md:p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {['name', 'email', 'phone'].map((field) => (
                <div key={field}>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2 capitalize">
                    {field}
                  </label>
                  <input
                    type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2.5 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6366f1] focus:border-transparent transition-all"
                  />
                </div>
              ))}
              
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2.5 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6366f1] focus:border-transparent resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-primary flex items-center justify-center"
              >
                Send Message
                <Send className="ml-2" size={16} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact