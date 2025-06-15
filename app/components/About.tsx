'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (    <section id="about" className="py-12 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center"
        >
          <div className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-lg overflow-hidden order-2 md:order-1">
            <Image
              src="/images/gallery/501389757_18114858493470455_7956591901390520174_n_17871318327363629.jpg"
              alt="Anyshi Sharma - Mehndi Artist"
              fill
              className="object-cover"
            />
          </div>
          
          <div className="order-1 md:order-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              About Anyshi Sharma
            </h2>
            <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6">
              With years of professional experience and a strong artistic foundation, Anyshi Sharma has become a trusted name in the mehndi industry. Her designs are a perfect blend of traditional Indian patterns and contemporary elements – crafted with patience, skill, and love.
            </p>
            <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6">
              Whether it's a grand bridal event or a simple celebration, Anyshi ensures every client leaves with not just beautiful mehndi, but a memorable experience.
            </p><div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="text-rose-600">
                <span className="block text-2xl font-bold">2000+</span>
                <span className="text-sm">Happy Clients</span>
              </div>
              <div className="text-rose-600">
                <span className="block text-2xl font-bold">8 Years+</span>
                <span className="text-sm">Experience</span>
              </div>
              <div className="text-rose-600">
                <span className="block text-2xl font-bold">100%</span>
                <span className="text-sm">Satisfaction</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
