'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-rose-50">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/gallery/502621268_18115298422470455_3471767078940836466_n_17935142340018980.jpg"
          alt="Mehndi Art Background"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to <span className="text-rose-600">Varanasi Mehndi Artist</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Transform your special moments with stunning mehndi designs that speak tradition and elegance.
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <a
              href="#contact"
              className="bg-rose-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-rose-700 transition-colors duration-300"
            >
              Book Now
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
