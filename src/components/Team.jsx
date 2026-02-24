import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Linkedin, Mail } from 'lucide-react'

const Team = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const team = [
    {
      name: 'Rashmi Jain',
      role: 'Owner & Manager',
      image:
        'rashmiJain.png',
      description:
        'Visionary leader driving excellence in medical education and training.',
    },
    {
      name: 'Nazma',
      role: 'BLS/CPR Instructor & Course Coordinator',
      image:
        'Nazma.jpeg',
      description:
        'Certified instructor with extensive hands-on training experience.',
    },
    {
      name: 'Dr. Saurabh Jain',
      role: 'Course Consultant',
      image:
        'saurabhJain.jpeg',
      description:
        'Specialized consultant for advanced medical training programs.',
    },
    {
      name: 'Dr. Antima Rathore',
      role: 'Course Consultant',
      image:
        'antimaRathore.jpeg',
      description:
        'Medical expert ensuring curriculum meets highest standards.',
    },
    {
      name: 'Ratan Rathore',
      role: 'Digital Content Creator',
      image:
        'Ratan.jpeg',
      description:
        'Creative mind behind our engaging educational content and social media.',
    },
    {
      name: 'Yuvraj Singh',
      role: 'Technical Developer',
      image:
        'yuvrajSingh.jpeg',
      description:
        'Expert in building modern web solutions and digital infrastructure.',
    },
  ]

  return (
    <section id="team" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="section-title">Meet Our Expert Team</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            A dedicated group of healthcare professionals, educators, and experts
            committed to delivering exceptional training experiences.
          </p>
        </motion.div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-5 sm:p-6 md:p-8 text-center w-full max-w-sm mx-auto"
            >
              {/* Circular Image */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 mx-auto mb-4 sm:mb-5 md:mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full rounded-full object-cover border-3 sm:border-4 border-white shadow-md"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-1 sm:mb-2 leading-tight">
                {member.name}
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-[#6366f1] font-semibold mb-3 sm:mb-4 leading-snug">
                {member.role}
              </p>

              <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed mb-4 sm:mb-5 md:mb-6">
                {member.description}
              </p>

              {/* Social Links */}
              <div className="flex justify-center gap-3 sm:gap-4">
                <a
                  href="#"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-colors duration-300 hover:bg-[#6366f1] hover:text-white"
                  style={{
                    backgroundColor: '#e0e7ff',
                    color: '#6366f1',
                  }}
                  aria-label="LinkedIn"
                >
                  <Linkedin size={16} className="sm:w-[18px] sm:h-[18px]" />
                </a>

                <a
                  href="#contact"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-colors duration-300 hover:bg-[#6366f1] hover:text-white"
                  style={{
                    backgroundColor: '#e0e7ff',
                    color: '#6366f1',
                  }}
                  aria-label="Email"
                >
                  <Mail size={16} className="sm:w-[18px] sm:h-[18px]" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team