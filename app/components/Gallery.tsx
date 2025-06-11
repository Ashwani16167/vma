'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const galleryImages = [
  '/images/gallery/470900825_18100528132470455_3060865980524860629_n_18344272141182736.jpg',
  '/images/gallery/473023963_18101714371470455_2403469310674589838_n_18036879659123478.jpg',
  '/images/gallery/491459505_18111624682470455_968561180821081072_n_18083355859598022.jpg',
  '/images/gallery/491462930_18111624673470455_6204459996827583468_n_17910643473015108.jpg',
  '/images/gallery/496967929_18113345059470455_6602100388414628641_n_18038982359537319.jpg',
  '/images/gallery/497010452_18113342755470455_2907436923342994111_n_18041891657555275.jpg',
  '/images/gallery/497544467_18113342764470455_4009163775650334659_n_18314140789228859.jpg',
  '/images/gallery/498294000_18113864545470455_5065615624419456552_n_18083870950736217.jpg',
  '/images/gallery/501128342_18114858502470455_9201617054042242095_n_17922582654091881.jpg',
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Our Gallery
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative aspect-square cursor-pointer overflow-hidden rounded-lg"
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={image}
                  alt="Mehndi Design"
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
          >
            <motion.div
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
              className="relative max-w-4xl max-h-[90vh] aspect-auto"
            >
              <Image
                src={selectedImage}
                alt="Mehndi Design"
                fill
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
