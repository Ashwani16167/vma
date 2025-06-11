'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaPhone, FaWhatsapp } from 'react-icons/fa';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const phoneNumber = '+919621072569';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-rose-600">
            Anyshi Sharma
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/#about">About</NavLink>
            <NavLink href="/#services">Services</NavLink>
            <NavLink href="/#gallery">Gallery</NavLink>
            <NavLink href="/#testimonials">Testimonials</NavLink>
            <NavLink href="/#contact">Contact</NavLink>
            
            {/* Contact Buttons */}
            <a
              href={`tel:${phoneNumber}`}
              className="flex items-center px-4 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors"
            >
              <FaPhone className="mr-2" />
              Call Now
            </a>
            <a
              href={`https://wa.me/${phoneNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
            >
              <FaWhatsapp className="mr-2" />
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-rose-600 transition-colors"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`md:hidden ${
          isMobileMenuOpen ? 'block' : 'hidden'
        } bg-white shadow-lg`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isMobileMenuOpen ? 1 : 0, y: 0 }}
        transition={{ duration: 0.2 }}
      >
        <div className="px-4 pt-2 pb-4 space-y-3">
          <MobileNavLink href="/#about" onClick={toggleMobileMenu}>
            About
          </MobileNavLink>
          <MobileNavLink href="/#services" onClick={toggleMobileMenu}>
            Services
          </MobileNavLink>
          <MobileNavLink href="/#gallery" onClick={toggleMobileMenu}>
            Gallery
          </MobileNavLink>
          <MobileNavLink href="/#testimonials" onClick={toggleMobileMenu}>
            Testimonials
          </MobileNavLink>
          <MobileNavLink href="/#contact" onClick={toggleMobileMenu}>
            Contact
          </MobileNavLink>
          
          {/* Mobile Contact Buttons */}
          <div className="flex flex-col space-y-2 pt-2">
            <a
              href={`tel:${phoneNumber}`}
              className="flex items-center justify-center px-4 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors"
            >
              <FaPhone className="mr-2" />
              Call Now
            </a>
            <a
              href={`https://wa.me/${phoneNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
            >
              <FaWhatsapp className="mr-2" />
              WhatsApp
            </a>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    className="text-gray-700 hover:text-rose-600 transition-colors duration-200"
  >
    {children}
  </Link>
);

const MobileNavLink = ({
  href,
  children,
  onClick
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}) => (
  <Link
    href={href}
    className="block text-gray-700 hover:text-rose-600 transition-colors duration-200 py-2"
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Navigation;
