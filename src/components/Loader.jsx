import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Loader = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const duration = 900 // total duration in ms
    const intervalTime = 20
    const increment = (100 / duration) * intervalTime

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment
        if (next >= 100) {
          clearInterval(interval)
          return 100
        }
        return next
      })
    }, intervalTime)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-100 flex items-center justify-center bg-white"
    >
      <div className="text-center max-w-md w-full px-8">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="mb-8"
        >
          <img
            src="/logo.png"
            alt="VirtuCity Academy"
            className="h-20 w-20 mx-auto object-contain"
          />
        </motion.div>

        {/* Company Name */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#111827] mb-2">
          VirtuCity Academy
        </h2>
        <p className="text-[#6366f1] font-medium mb-8">
          Learn. Excel. Thrive.
        </p>

        {/* Progress Bar */}
        <div className="w-full bg-[#e5e7eb] rounded-full h-2 overflow-hidden">
          <div
            className="h-full transition-all duration-100 ease-linear"
            style={{
              width: `${Math.min(progress, 100)}%`,
              background: 'linear-gradient(90deg, #6366f1, #22d3ee)',
            }}
          />
        </div>

        {/* Percentage */}
        <p className="mt-4 text-[#6b7280] text-sm font-medium">
          {Math.floor(progress)}%
        </p>
      </div>
    </motion.div>
  )
}

export default Loader
