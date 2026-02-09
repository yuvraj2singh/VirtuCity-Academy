import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Target, Heart, TrendingUp, Shield } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const values = [
    {
      icon: <Target className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      title: 'Excellence',
      description: 'Strong values centred on education, excellence, and growth.',
    },
    {
      icon: <Heart className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      title: 'Community Focus',
      description: 'Making life-saving knowledge accessible, practical, and empowering.',
    },
    {
      icon: <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      title: 'Practical Learning',
      description: 'Hands-on training with real-life application and clear guidance.',
    },
    {
      icon: <Shield className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      title: 'Confidence Building',
      description: 'Focus on confidence, competence, and meaningful impact.',
    },
  ]

  const services = [
    'Professional and vocational training',
    'Health, safety, and life-skills education',
    'Community-focused learning initiatives',
    'Practical, learner-centred training experiences',
  ]

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="section-title">About VirtuCity Academy</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Committed to delivering high-quality education and professional training designed 
            to build confidence, capability, and real-world skills.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center mb-8 sm:mb-12 md:mb-16">
          <div>
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80"
              alt="Training Session"
              className="rounded-xl sm:rounded-2xl shadow-xl w-full"
              loading="lazy"
            />
          </div>

          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              What We Do
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
              VirtuCity Academy provides programmes that focus on practical learning, 
              clear guidance, and meaningful outcomes for individuals, organisations, 
              and communities.
            </p>
            
            <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
              {services.map((service, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3 shrink-0"></div>
                  <p className="text-sm sm:text-base text-gray-700">{service}</p>
                </div>
              ))}
            </div>

            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
              Our approach combines expert instruction, hands-on learning, and a strong 
              focus on real-life application.
            </p>

            <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
              <div className="bg-primary/10 px-3 py-2 sm:px-4 sm:py-2.5 md:px-6 md:py-3 rounded-lg">
                <span className="text-primary font-semibold text-xs sm:text-sm md:text-base">Experienced Trainers</span>
              </div>
              <div className="bg-primary/10 px-3 py-2 sm:px-4 sm:py-2.5 md:px-6 md:py-3 rounded-lg">
                <span className="text-primary font-semibold text-xs sm:text-sm md:text-base">Supportive Environment</span>
              </div>
              <div className="bg-primary/10 px-3 py-2 sm:px-4 sm:py-2.5 md:px-6 md:py-3 rounded-lg">
                <span className="text-primary font-semibold text-xs sm:text-sm md:text-base">Engaging Sessions</span>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="text-center p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-primary/10 rounded-full text-primary mb-3 sm:mb-4">
                {value.icon}
              </div>
              <h4 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-1.5 sm:mb-2">{value.title}</h4>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About