import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Award, Users, BookOpen } from 'lucide-react'

const Hero = () => {
  const stats = [
    { icon: <Award className="w-5 h-5 sm:w-6 sm:h-6" />, value: '100+', label: 'Lives Impacted' },
    { icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />, value: 'Expert', label: 'Qualified Trainers' },
    { icon: <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />, value: 'Free', label: 'Save Lives Initiative' },
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 sm:pt-24 pb-12 sm:pb-0 bg-gradient-to-br from-blue-50 via-white to-teal-50">
      {/* Background Decoration - Static, no animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-48 h-48 sm:w-72 sm:h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 sm:w-96 sm:h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="inline-block mb-3 sm:mb-4 px-3 py-1.5 sm:px-4 sm:py-2 bg-primary/10 rounded-full">
              <span className="text-primary font-semibold text-xs sm:text-sm">
                🎓 Quality Education & Training Services
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Learn. Excel.{' '}
              <span className="text-primary">Thrive.</span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              Building confidence, capability, and real-world skills through practical, 
              learner-centred training experiences. Now launching Basic Life Support (BLS) 
              and CPR courses in Delhi NCR.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12">
              <a
                href="#services"
                className="btn-primary inline-flex items-center justify-center group"
              >
                Explore Courses
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </a>
              <a
                href="#contact"
                className="btn-outline inline-flex items-center justify-center"
              >
                <span className="hidden sm:inline">Contact for Free Sessions</span>
                <span className="sm:hidden">Free Sessions</span>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-1 sm:mb-2 text-primary">
                    {stat.icon}
                  </div>
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="relative mt-8 lg:mt-0"
          >
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
                alt="Medical Training"
                className="rounded-xl sm:rounded-2xl shadow-2xl w-full"
                loading="eager"
              />
              {/* Floating Card */}
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl shadow-xl">
                <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <Award className="text-primary" size={20} />
                  </div>
                  <div>
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">Free</div>
                    <div className="text-xs sm:text-sm text-gray-600">BLS Sessions</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero