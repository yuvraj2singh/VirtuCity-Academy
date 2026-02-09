import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HeartPulse, Activity, FileText, CheckCircle, Gift } from 'lucide-react'

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const services = [
    {
      icon: <HeartPulse className="w-12 h-12" />,
      title: 'Basic Life Support (BLS)',
      description: 'Now Launching! Equip yourself with essential life-saving skills designed for beginners and professionals alike, with no prior experience required.',
      features: [
        'Recognise a medical emergency',
        'Perform effective CPR',
        'Use an AED safely and confidently',
        'Act quickly when every second counts',
      ],
      badge: 'Now Launching',
      color: 'primary',
    },
    {
      icon: <Activity className="w-12 h-12" />,
      title: 'CPR Training',
      description: 'Master cardiopulmonary resuscitation techniques. Gain confidence to respond effectively in emergency situations.',
      features: [
        'Clear, practical instruction',
        'Hands-on learning experience',
        'Supportive learning environment',
        'Focus on real-life application',
      ],
      badge: 'Essential Skills',
      color: 'accent',
    },
    {
      icon: <Gift className="w-12 h-12" />,
      title: 'MumzCPR',
      description: 'Free BLS/CPR training sessions to support community wellbeing and emergency preparedness. Making life-saving knowledge accessible to all.',
      features: [
        'Completely FREE sessions',
        'Community-focused',
        'No experience required',
        'Accessible and empowering',
      ],
      badge: 'Free Training',
      color: 'secondary',
    },
  ]

  const upcomingServices = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'POSH Training',
      description: 'Prevention of Sexual Harassment workplace training',
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Essay Writing',
      description: 'For IELTS/OET preparation',
    },
  ]

  return (
    <section id="services" className="py-20 bg-linear-to-br from-gray-50 to-blue-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Our Training Programmes</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Practical, learner-centred training experiences designed to build confidence, 
            capability, and real-world skills that truly matter.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              {/* Badge */}
              <div className="bg-primary px-4 py-2 text-white text-sm font-semibold text-center">
                {service.badge}
              </div>

              <div className="p-8">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-2xl text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href="#contact"
                  className="block text-center btn-outline w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary"
                >
                  {index === 2 ? 'Join Free Sessions' : 'Enroll Now'}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Upcoming Services */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Coming Soon
          </h3>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {upcomingServices.map((service, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                  {service.icon}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">{service.title}</h4>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">
              Why Choose VirtuCity Academy?
            </h4>
            <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
              Whether you are an individual, organisation, or community group, we welcome 
              you to learn skills that truly matter through clear, practical, and engaging sessions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-primary/10 px-6 py-3 rounded-lg">
                <span className="text-primary font-semibold">✓ Experienced Trainers</span>
              </div>
              <div className="bg-primary/10 px-6 py-3 rounded-lg">
                <span className="text-primary font-semibold">✓ Practical Sessions</span>
              </div>
              <div className="bg-primary/10 px-6 py-3 rounded-lg">
                <span className="text-primary font-semibold">✓ Supportive Environment</span>
              </div>
              <div className="bg-primary/10 px-6 py-3 rounded-lg">
                <span className="text-primary font-semibold">✓ Real Impact</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services