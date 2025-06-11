'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const services = [
  {
    title: 'Bridal Mehndi',
    description: 'Intricate full-hand and full-leg designs for your big day.',
    image: '/images/gallery/502743851_18115309228470455_4862077146710808511_n_17971264538908271.jpg',
  },
  {
    title: 'Engagement & Pre-Wedding',
    description: 'Beautiful designs to mark your special occasion.',
    image: '/images/gallery/503033517_18115298431470455_3308539128820121699_n_17889803904257405.jpg',
  },
  {
    title: 'Festive Mehndi',
    description: 'Celebrate festivals like Karva Chauth, Teej, and more with stunning designs.',
    image: '/images/gallery/503180039_18115300042470455_796544400341621524_n_18030713369677171.jpg',
  },
  {
    title: 'Baby Shower & Godh Bharai',
    description: 'Special designs for the mom-to-be.',
    image: '/images/gallery/498294000_18113864545470455_5065615624419456552_n_18083870950736217.jpg',
  },
  {
    title: 'Corporate & Cultural Events',
    description: 'Group bookings and event services available.',
    image: '/images/gallery/501128342_18114858502470455_9201617054042242095_n_17922582654091881.jpg',
  },
  {
    title: 'Minimalist Designs',
    description: 'Modern, elegant touches for contemporary preferences.',
    image: '/images/gallery/502728597_18115300033470455_8230937525650597186_n_17856717657439009.jpg',
  },
];

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" className="py-20 bg-rose-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Our Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative h-64">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
