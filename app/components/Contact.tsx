'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaInstagram, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Contact Us
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <p className="flex items-center text-gray-600">
                  <FaMapMarkerAlt className="text-rose-600 mr-3 text-xl" />
                  Varanasi, Uttar Pradesh
                </p>
                <a
                  href="https://wa.me/919621072569"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 hover:text-rose-600 transition-colors"
                >
                  <FaWhatsapp className="text-rose-600 mr-3 text-xl" />
                  +91 96210 72569
                </a>
                <a
                  href="https://www.instagram.com/varanasi_mehndi_artist/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 hover:text-rose-600 transition-colors"
                >
                  <FaInstagram className="text-rose-600 mr-3 text-xl" />
                  @varanasi_mehndi_artist
                </a>
              </div>

              <div className="mt-12">
                <h3 className="text-2xl font-semibold mb-6">Why Choose Us?</h3>
                <ul className="space-y-4 text-gray-600">
                  <li>✅ Rated among the best mehndi artists in Varanasi</li>
                  <li>✅ Use of natural, skin-safe henna</li>
                  <li>✅ Customized designs for every client</li>
                  <li>✅ On-time service with professional behavior</li>
                  <li>✅ Available for destination weddings</li>
                  <li>✅ 100% satisfaction guaranteed</li>
                </ul>
              </div>
            </div>

            <div className="relative h-[400px] md:h-full rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115408.23982822043!2d82.92106605!3d25.3207123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2db76febcf4d%3A0x68131710853ff0b5!2sVaranasi%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1629789012345!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
