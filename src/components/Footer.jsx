import React from 'react'
import { Heart, Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Our Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ]

  const services = [
    'BLS Training',
    'CPR Certification',
  ]

  return (
    <footer className="bg-gray-900 text-white pt-10 sm:pt-12 md:pt-16 pb-6 sm:pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-10 md:mb-12">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
              <img
                src="/logo.png"
                alt="VirtuCity Academy"
                className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
              />
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold">VirtuCity Academy</h3>
                <p className="text-xs sm:text-sm text-gray-400">Learn. Excel. Thrive.</p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4 leading-relaxed">
              Empowering healthcare professionals with life-saving skills through 
              world-class training programs in Delhi NCR.
            </p>
            <div className="flex space-x-2 sm:space-x-3">
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={16} className="sm:w-[18px] sm:h-[18px]" />
              </a>
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={16} className="sm:w-[18px] sm:h-[18px]" />
              </a>
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} className="sm:w-[18px] sm:h-[18px]" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm sm:text-base md:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm text-gray-400 hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm sm:text-base md:text-lg font-semibold mb-3 sm:mb-4">Our Services</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {services.map((service, index) => (
                <li key={index} className="text-xs sm:text-sm text-gray-400">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm sm:text-base md:text-lg font-semibold mb-3 sm:mb-4">Contact Us</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start space-x-2 sm:space-x-3 text-gray-400">
                <MapPin size={16} className="sm:w-5 sm:h-5 shrink-0 mt-0.5 sm:mt-1" />
                <span className="text-xs sm:text-sm">JalVayu Vihar, Greater Noida, Delhi NCR</span>
              </li>
              <li className="flex items-center space-x-2 sm:space-x-3 text-gray-400">
                <Phone size={16} className="sm:w-5 sm:h-5 shrink-0" />
                <a href="tel:+918076123541" className="text-xs sm:text-sm hover:text-primary transition-colors break-all">
                  +91 80761235411
                </a>
              </li>
              <li className="flex items-start space-x-2 sm:space-x-3 text-gray-400">
                <Mail size={16} className="sm:w-5 sm:h-5 shrink-0 mt-0.5" />
                <a href="mailto:info@virtucityacademy.com" className="text-xs sm:text-sm hover:text-primary transition-colors break-all">
                  info@virtucityacademy.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0">
          <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
            © {new Date().getFullYear()} VirtuCity Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer