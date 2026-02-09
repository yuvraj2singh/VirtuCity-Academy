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
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
      description:
        'Visionary leader driving excellence in medical education and training.',
    },
    {
      name: 'Nazma',
      role: 'BLS/CPR Instructor & Course Coordinator',
      image:
        'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80',
      description:
        'Certified instructor with extensive hands-on training experience.',
    },
    {
      name: 'Dr. Saurabh Jain',
      role: 'Course Consultant',
      image:
        'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&q=80',
      description:
        'Specialized consultant for advanced medical training programs.',
    },
    {
      name: 'Dr. Antima Rathore',
      role: 'Course Consultant',
      image:
        'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=400&q=80',
      description:
        'Medical expert ensuring curriculum meets highest standards.',
    },
    {
      name: 'Ratan Rathore',
      role: 'Digital Content Creator',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      description:
        'Creative mind behind our engaging educational content and social media.',
    },
  ]

  return (
    <section id="team" className="py-20 bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Meet Our Expert Team</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            A dedicated group of healthcare professionals, educators, and experts
            committed to delivering exceptional training experiences.
          </p>
        </motion.div>

        {/* Team Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-linear-to-br from-gray-50 to-blue-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 text-center"
            >
              {/* Circular Image */}
              <div className="relative w-28 h-28 mx-auto mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full rounded-full object-cover border-4 border-white shadow-md"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-1">
                {member.name}
              </h3>
              <p className="text-[#6366f1] font-semibold mb-4">
                {member.role}
              </p>

              <p className="text-gray-600 leading-relaxed mb-6">
                {member.description}
              </p>

              {/* Social Links */}
              <div className="flex justify-center gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
                  style={{
                    backgroundColor: '#e0e7ff',
                    color: '#6366f1',
                  }}
                >
                  <Linkedin size={18} />
                </a>

                <a
                  href="#contact"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
                  style={{
                    backgroundColor: '#e0e7ff',
                    color: '#6366f1',
                  }}
                >
                  <Mail size={18} />
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
