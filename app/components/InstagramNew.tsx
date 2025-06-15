'use client';
import { motion } from 'framer-motion';
import { FaInstagram } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const Instagram = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const instagramHandle = '@varanasi_mehndi_artist';
  const instagramUrl = 'https://instagram.com/varanasi_mehndi_artist';
  const followersCount = '12.5K';
  const postsCount = '847';

  // Load Instagram embed script
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const script = document.createElement('script');
      script.src = 'https://www.instagram.com/embed.js';
      script.async = true;
      document.body.appendChild(script);

      // Process embeds after script loads
      script.onload = () => {
        if (window.instgrm) {
          window.instgrm.Embeds.process();
        }
      };

      return () => {
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 to-rose-50" id="instagram">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Follow My Journey on Instagram
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 mb-8"
          >
            See my latest mehndi creations, behind-the-scenes content, and tutorials
          </motion.p>
          
          {/* Instagram Profile Section */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center justify-center mb-12"
          >
            <div className="bg-white rounded-2xl shadow-lg p-8 flex items-center space-x-6 max-w-lg">
              <div className="w-24 h-24 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 rounded-full p-1">
                <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                  <FaInstagram className="text-4xl text-gray-800" />
                </div>
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold text-gray-900">Anyshi Sharma</h3>
                <p className="text-gray-600 text-lg">{instagramHandle}</p>
                <div className="flex space-x-4 text-sm text-gray-500 mt-2">
                  <span><strong>{postsCount}</strong> posts</span>
                  <span><strong>{followersCount}</strong> followers</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">🎨 Professional Mehndi Artist | 📍 Varanasi</p>
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-4 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <FaInstagram className="mr-2" />
                  Follow
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Embedded Instagram Posts Grid */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* Instagram Post Embed 1 */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <blockquote 
              className="instagram-media" 
              data-instgrm-permalink="https://www.instagram.com/p/SAMPLE_POST_1/"
              data-instgrm-version="14"
              style={{
                background: '#FFF',
                border: '0',
                borderRadius: '3px',
                boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                margin: '1px',
                maxWidth: '540px',
                minWidth: '326px',
                padding: '0',
                width: '99.375%'
              }}
            >
              <div style={{ padding: '16px' }}>
                <div style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center'
                }}>
                  <div style={{
                    backgroundColor: '#F4F4F4',
                    borderRadius: '50%',
                    flexGrow: '0',
                    height: '40px',
                    marginRight: '14px',
                    width: '40px'
                  }}></div>
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: '1',
                    justifyContent: 'center'
                  }}>
                    <div style={{
                      backgroundColor: '#F4F4F4',
                      borderRadius: '4px',
                      flexGrow: '0',
                      height: '14px',
                      marginBottom: '6px',
                      width: '100px'
                    }}></div>
                  </div>
                </div>
                <div style={{ padding: '19% 0' }}></div>
                <div style={{
                  color: '#3897f0',
                  fontFamily: 'Arial,sans-serif',
                  fontSize: '14px',
                  fontStyle: 'normal',
                  fontWeight: '550',
                  lineHeight: '18px'
                }}>
                  View this post on Instagram
                </div>
              </div>
              <div style={{ padding: '12.5% 0' }}></div>
              <div style={{
                display: 'flex',
                flexDirection: 'row',
                marginBottom: '14px',
                alignItems: 'center'
              }}>
                <div>
                  <div style={{
                    backgroundColor: '#F4F4F4',
                    borderRadius: '50%',
                    height: '12.5px',
                    width: '12.5px',
                    transform: 'translateX(0px) translateY(7px)'
                  }}></div>
                </div>
              </div>
              <div style={{ marginLeft: '8px' }}>
                <div style={{
                  backgroundColor: '#F4F4F4',
                  borderRadius: '50%',
                  flexGrow: '0',
                  height: '20px',
                  width: '20px'
                }}></div>
              </div>
              <div style={{ marginLeft: 'auto' }}>
                <div style={{
                  width: '0px',
                  borderTop: '8px solid #F4F4F4',
                  borderRight: '8px solid transparent',
                  transform: 'translateY(16px)'
                }}></div>
              </div>
            </blockquote>
          </motion.div>

          {/* Placeholder for actual posts - Replace with real Instagram URLs */}
          <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="mb-4">
              <img 
                src="/images/gallery/470900825_18100528132470455_3060865980524860629_n_18344272141182736.jpg" 
                alt="Bridal Mehndi Design"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Beautiful Bridal Mehndi</h4>
            <p className="text-gray-600 text-sm">Intricate bridal henna design for the perfect wedding day ✨</p>
            <a 
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center mt-4 text-purple-600 hover:text-purple-700"
            >
              <FaInstagram className="mr-2" />
              View on Instagram
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="mb-4">
              <img 
                src="/images/gallery/473023963_18101714371470455_2403469310674589838_n_18036879659123478.jpg" 
                alt="Mehndi Process"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Mehndi Application Process</h4>
            <p className="text-gray-600 text-sm">Watch the magic happen as beautiful patterns come to life 🎨</p>
            <a 
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center mt-4 text-purple-600 hover:text-purple-700"
            >
              <FaInstagram className="mr-2" />
              View Reel
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="mb-4">
              <img 
                src="/images/gallery/491459505_18111624682470455_968561180821081072_n_18083355859598022.jpg" 
                alt="Traditional Patterns"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Traditional Rajasthani Art</h4>
            <p className="text-gray-600 text-sm">Rich cultural designs perfect for festive occasions 🌸</p>
            <a 
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center mt-4 text-purple-600 hover:text-purple-700"
            >
              <FaInstagram className="mr-2" />
              View on Instagram
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="mb-4">
              <img 
                src="/images/gallery/491462930_18111624673470455_6204459996827583468_n_17910643473015108.jpg" 
                alt="Arabic Mehndi"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Arabic Mehndi Tutorial</h4>
            <p className="text-gray-600 text-sm">Simple yet elegant designs perfect for beginners 💫</p>
            <a 
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center mt-4 text-purple-600 hover:text-purple-700"
            >
              <FaInstagram className="mr-2" />
              Watch Tutorial
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="mb-4">
              <img 
                src="/images/gallery/496967929_18113345059470455_6602100388414628641_n_18038982359537319.jpg" 
                alt="Finger Mehndi"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Delicate Finger Designs</h4>
            <p className="text-gray-600 text-sm">Beautiful finger mehndi perfect for any occasion ✋</p>
            <a 
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center mt-4 text-purple-600 hover:text-purple-700"
            >
              <FaInstagram className="mr-2" />
              View on Instagram
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="mb-4">
              <img 
                src="/images/gallery/497010452_18113342755470455_2907436923342994111_n_18041891657555275.jpg" 
                alt="Groom Mehndi"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Groom Special Design</h4>
            <p className="text-gray-600 text-sm">Special mehndi designs for the groom's big day 👨</p>
            <a 
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center mt-4 text-purple-600 hover:text-purple-700"
            >
              <FaInstagram className="mr-2" />
              View on Instagram
            </a>
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6">
            Follow me for daily mehndi inspiration, tutorials, and behind-the-scenes content!
          </p>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-lg font-semibold hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            <FaInstagram className="mr-3 text-xl" />
            Follow {instagramHandle}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Instagram;
