'use client';
import { motion } from 'framer-motion';
import { FaInstagram, FaPlay } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

const Instagram = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isClient, setIsClient] = useState(false);

  const instagramHandle = '@varanasi_mehndi_artist';
  const instagramUrl = 'https://instagram.com/varanasi_mehndi_artist';
  const followersCount = '12.5K';
  const postsCount = '847';  // Real Instagram post URLs from the account
  const instagramPosts = [
    'https://www.instagram.com/p/DItWzbDyvZd/',
    'https://www.instagram.com/p/DJtt_SXSlCc/',
    'https://www.instagram.com/p/DGd1NC9KZea/',
    'https://www.instagram.com/p/DJ0DsVBK1vD/',
    'https://www.instagram.com/p/DJ29JBZquQt/',
    'https://www.instagram.com/p/DKuIQAwyxs9/',
    'https://www.instagram.com/p/DKepvVnSpY8/',
    'https://www.instagram.com/p/DEUTAc7SdQU/'
  ];

  // Set client-side flag
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Load Instagram embed script
  useEffect(() => {
    if (isClient) {
      const script = document.createElement('script');
      script.src = 'https://www.instagram.com/embed.js';
      script.async = true;
      document.body.appendChild(script);

      // Process embeds after script loads
      script.onload = () => {
        if ((window as any).instgrm) {
          (window as any).instgrm.Embeds.process();
        }
      };

      return () => {
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    }
  }, [isClient]);

  // Re-process embeds when component updates
  useEffect(() => {
    if (isClient && (window as any).instgrm) {
      (window as any).instgrm.Embeds.process();
    }
  }, [inView, isClient]);

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
          </motion.h2>          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 mb-8"
          >
            See my latest mehndi creations and real posts from Instagram
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
                </a>              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Special Reels Highlight Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-purple-100 via-pink-100 to-purple-100 rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
              <FaPlay className="text-purple-600" />
              Watch My Mehndi Reels
              <FaPlay className="text-pink-600" />
            </h3>
            <p className="text-gray-700 mb-6">
              Click on any reel above to watch the complete mehndi application process and tutorials on Instagram
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md mx-auto">
              <div className="bg-white rounded-lg p-4 shadow-md">
                <FaPlay className="text-purple-500 mx-auto mb-2 text-xl" />
                <p className="text-sm font-semibold">Process Videos</p>
                <p className="text-xs text-gray-600">Step-by-step tutorials</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <FaInstagram className="text-pink-500 mx-auto mb-2 text-xl" />
                <p className="text-sm font-semibold">Time-lapse</p>
                <p className="text-xs text-gray-600">Quick design reveals</p>
              </div>
            </div>
          </div>
        </motion.div>        {/* Real Instagram Posts Grid */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 justify-items-center"
          suppressHydrationWarning
        >
          {!isClient ? (
            // Loading placeholders for SSR
            [...Array(8)].map((_, index) => (              <motion.div 
                key={index}
                variants={itemVariants}
                className="w-fit"
              >                <div className="bg-gray-100 rounded-xl shadow-lg animate-pulse" style={{
                  width: '400px',
                  height: '500px'
                }}>
                  <div className="p-4">
                    <div className="h-4 bg-gray-200 rounded mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                  </div>
                </div>
              </motion.div>
            ))          ) : (
            // Real Instagram posts for client-side
            instagramPosts.map((postUrl, index) => (              <motion.div 
                key={index}
                variants={itemVariants}
                className="w-fit"
              >
                <div 
                  className="instagram-card-wrapper"
                  style={{
                    width: '400px',
                    height: '500px',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    backgroundColor: '#fff',
                    position: 'relative'
                  }}
                >
                  <blockquote 
                    className="instagram-media"
                    data-instgrm-captioned
                    data-instgrm-permalink={postUrl}
                    data-instgrm-version="14"
                    style={{
                      background: 'transparent',
                      border: '0',
                      borderRadius: '0',
                      boxShadow: 'none',
                      margin: '0',
                      width: '100%',
                      height: '100%',
                      maxWidth: '100%',
                      minWidth: '100%',
                      maxHeight: '100%',
                      minHeight: '100%',
                      padding: '0',
                      overflow: 'hidden',
                      display: 'block',
                      position: 'absolute',
                      top: '0',
                      left: '0'
                    }}
                    suppressHydrationWarning
                  >
                  <div style={{ padding: '16px' }}>
                    <a 
                      href={postUrl}
                      style={{
                        background: '#FFFFFF',
                        lineHeight: '0',
                        padding: '0 0',
                        textAlign: 'center',
                        textDecoration: 'none',
                        width: '100%'
                      }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View this post on Instagram
                    </a>                  </div>
                </blockquote>
                </div>
              </motion.div>
            ))
          )}
        </motion.div>

        {/* Instagram Statistics */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Join Our Instagram Community</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">{postsCount}+</div>
                <p className="text-gray-600">Beautiful Designs</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600 mb-2">{followersCount}+</div>
                <p className="text-gray-600">Happy Followers</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
                <p className="text-gray-600">Satisfied Clients</p>
              </div>
            </div>
          </div>
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
