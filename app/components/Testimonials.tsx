'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Riya S.',
    text: 'Anyshi did my bridal mehndi and it was absolutely breathtaking. Everyone complimented the design and the deep color. She\'s truly the best mehndi artist in Varanasi!',
  },
  {
    name: 'Simran D.',
    text: 'We booked Anyshi for a destination wedding in Goa. Not only was she professional, but she was incredibly talented. Highly recommended!',
  },
  {
    name: 'Priya M.',
    text: 'Amazing experience! The designs were unique and the color was perfect. Anyshi has a great eye for detail and makes sure you\'re completely satisfied.',
  },
];

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="testimonials" className="py-20 bg-rose-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Client Testimonials
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-lg"
              >
                <FaQuoteLeft className="text-rose-400 text-3xl mb-4" />
                <p className="text-gray-600 mb-4 italic">
                  {testimonial.text}
                </p>
                <p className="text-gray-900 font-semibold">
                  - {testimonial.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
