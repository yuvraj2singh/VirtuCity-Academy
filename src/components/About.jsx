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
      icon: <Target className="w-8 h-8" />,
      title: 'Excellence',
      description: 'Strong values centred on education, excellence, and growth.',
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Community Focus',
      description: 'Making life-saving knowledge accessible, practical, and empowering.',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Practical Learning',
      description: 'Hands-on training with real-life application and clear guidance.',
    },
    {
      icon: <Shield className="w-8 h-8" />,
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
    <section id="about" className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">About VirtuCity Academy</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Committed to delivering high-quality education and professional training designed 
            to build confidence, capability, and real-world skills.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80"
              alt="Training Session"
              className="rounded-2xl shadow-xl w-full"
              loading="lazy"
            />
          </div>

          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              What We Do
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              VirtuCity Academy provides programmes that focus on practical learning, 
              clear guidance, and meaningful outcomes for individuals, organisations, 
              and communities.
            </p>
            
            <div className="space-y-3 mb-6">
              {services.map((service, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 shrink-0"></div>
                  <p className="text-gray-700">{service}</p>
                </div>
              ))}
            </div>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Our approach combines expert instruction, hands-on learning, and a strong 
              focus on real-life application.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="bg-primary/10 px-6 py-3 rounded-lg">
                <span className="text-primary font-semibold">Experienced Trainers</span>
              </div>
              <div className="bg-primary/10 px-6 py-3 rounded-lg">
                <span className="text-primary font-semibold">Supportive Environment</span>
              </div>
              <div className="bg-primary/10 px-6 py-3 rounded-lg">
                <span className="text-primary font-semibold">Engaging Sessions</span>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-linear-to-br from-primary/5 to-accent/5 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full text-primary mb-4">
                {value.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h4>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About