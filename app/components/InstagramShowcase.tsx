'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { FaInstagram, FaPlay, FaHeart, FaComment, FaShare, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import Image from 'next/image';

const InstagramShowcase = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedMedia, setSelectedMedia] = useState<number | null>(null);  const [currentIndex, setCurrentIndex] = useState(0);

  const instagramHandle = '@varanasi_mehndi_artist';
  const instagramUrl = 'https://instagram.com/varanasi_mehndi_artist';
  const followersCount = '11.1K';
  const postsCount = '277';  // Real Instagram media from your account - each image used only ONCE
  const instagramMedia = [
    {
      id: 1,
      type: 'video',
      src: '/images/instagram/AQONWSI4qG5I5D5H84RAH63kNV9mSkN39ZsbMfKiSlEZyROGPW5YkBiBxxkV10cjMUQ4CxvIZUwpt981xNC4wHDyHvmAdoKHWMBNM_18283792303245047.mp4',
      thumbnail: '/images/instagram/470900825_18100528132470455_3060865980524860629_n_18344272141182736.jpg',
      caption: 'Watch the magic unfold! Creating intricate patterns with precision and passion 🎨 #MehndiReel #ArtInMotion #VaranasiMehndi',
      likes: 2103,
      comments: 156,
      date: 'December 2024'
    },
    {
      id: 2,
      type: 'image',
      src: '/images/instagram/473023963_18101714371470455_2403469310674589838_n_18036879659123478.jpg',
      caption: 'Traditional Arabic patterns that never go out of style 🌸 Elegant and timeless designs for every occasion #ArabicMehndi #TraditionalArt',
      likes: 892,
      comments: 67,
      date: 'January 2025'
    },
    {
      id: 3,
      type: 'video',
      src: '/images/instagram/AQP7taHPR3YTWTY6UeTrvlA9iuvsGQP3hZfsmv55CHbdyAkS9aly8TDk_dDZcI8G13Rt9Z_rOj9hIV_1iDz89YbKYRWgHq00fQdL8_18018315161430168.mp4',
      thumbnail: '/images/instagram/profile.jpg',
      caption: 'Step-by-step Arabic mehndi tutorial! Learn this beautiful design with me 💫 #MehndiTutorial #LearnWithMe #ArabicDesign',
      likes: 1856,
      comments: 234,
      date: 'January 2025'
    },
    {
      id: 4,
      type: 'image',
      src: '/images/instagram/491459505_18111624682470455_968561180821081072_n_18083355859598022.jpg',
      caption: 'Delicate floral patterns for festival celebrations 🌺 Perfect for adding elegance to your festive look #FloralMehndi #FestivalSpecial',
      likes: 743,
      comments: 34,
      date: 'April 2025'
    },
    {
      id: 5,
      type: 'image',
      src: '/images/instagram/491462930_18111624673470455_6204459996827583468_n_17910643473015108.jpg',
      caption: 'Geometric precision meets artistic flow ⚡ Modern designs with traditional touch #GeometricMehndi #ModernArt #Precision',
      likes: 934,
      comments: 78,
      date: 'April 2025'
    },
    {
      id: 6,
      type: 'image',
      src: '/images/instagram/496967929_18113345059470455_6602100388414628641_n_18038982359537319.jpg',
      caption: 'Intricate mandala patterns with traditional touch ✨ Each line tells a story of heritage and artistry #MandalaMehndi #TraditionalArt #HeritageCraft',
      likes: 1245,
      comments: 98,
      date: 'May 2025'
    },
    {
      id: 7,
      type: 'image',
      src: '/images/instagram/497010452_18113342755470455_2907436923342994111_n_18041891657555275.jpg',
      caption: 'Bridal finger details that make all the difference 💍 Every finger tells a unique story #BridalFingers #DetailedWork #WeddingMehndi',
      likes: 1123,
      comments: 91,
      date: 'May 2025'
    },
    {
      id: 8,
      type: 'image',
      src: '/images/instagram/497544467_18113342764470455_4009163775650334659_n_18314140789228859.jpg',
      caption: 'Elegant finger art with contemporary flair 💎 Modern minimalism meets traditional beauty #FingerArt #ContemporaryMehndi #ModernDesign',
      likes: 876,
      comments: 67,
      date: 'May 2025'
    },
    {
      id: 9,
      type: 'image',
      src: '/images/instagram/498294000_18113864545470455_5065615624419456552_n_18083870950736217.jpg',
      caption: 'Contemporary fusion design for modern brides 🌟 Blending tradition with contemporary style #FusionMehndi #ModernBride #Contemporary',
      likes: 987,
      comments: 56,
      date: 'May 2025'
    },
    {
      id: 10,
      type: 'image',
      src: '/images/instagram/501128342_18114858502470455_9201617054042242095_n_17922582654091881.jpg',
      caption: 'Bridal masterpiece in progress 👰✨ Every stroke carefully crafted for your special day #BridalMehndi #WeddingArt #BridalBeauty',
      likes: 1534,
      comments: 134,
      date: 'May 2025'
    },
    {
      id: 11,
      type: 'image',
      src: '/images/instagram/501389757_18114858493470455_7956591901390520174_n_17871318327363629.jpg',
      caption: 'Elegant mandala patterns for special occasions 🌸 Each circle tells a story of perfection #MandalaMehndi #ElegantDesign #SpecialOccasion',
      likes: 1156,
      comments: 78,
      date: 'May 2025'
    },
    {
      id: 12,
      type: 'image',
      src: '/images/instagram/502621268_18115298422470455_3471767078940836466_n_17935142340018980.jpg',
      caption: 'Stunning contemporary design blend 🌟 Perfect fusion of modern and traditional elements #ContemporaryMehndi #FusionArt #ModernTradition',
      likes: 1045,
      comments: 89,
      date: 'June 2025'
    },
    {
      id: 13,
      type: 'image',
      src: '/images/instagram/502728597_18115300033470455_8230937525650597186_n_17856717657439009.jpg',
      caption: 'Stunning back hand design for special celebrations 🌟 Intricate details that captivate #BackHandMehndi #DetailedWork #ArtisticDesign',
      likes: 876,
      comments: 54,
      date: 'June 2025'
    },
    {
      id: 14,
      type: 'image',
      src: '/images/instagram/502743851_18115309228470455_4862077146710808511_n_17971264538908271.jpg',
      caption: 'Delicate finger patterns that steal the show 💎 Minimalist elegance at its finest #FingerMehndi #MinimalistDesign #ElegantArt',
      likes: 654,
      comments: 43,
      date: 'June 2025'
    },
    {
      id: 15,
      type: 'image',
      src: '/images/instagram/503033517_18115298431470455_3308539128820121699_n_17889803904257405.jpg',
      caption: 'Intricate mandala artistry at its finest ✨ Precision and beauty in every circle #MandalaArt #PrecisionWork #MehndiMasterpiece',
      likes: 1378,
      comments: 112,
      date: 'June 2025'
    },
    {
      id: 16,
      type: 'image',
      src: '/images/instagram/503180039_18115300042470455_796544400341621524_n_18030713369677171.jpg',
      caption: 'Perfect festive look complete! Ready to celebrate in style 🎉 #FestiveMehndi #CelebrationReady #MehndiArt',
      likes: 1203,
      comments: 87,
      date: 'June 2025'
    }
  ];

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

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setSelectedMedia(instagramMedia[index].id);
  };

  const closeModal = () => {
    setSelectedMedia(null);
  };

  const nextMedia = () => {
    const nextIndex = (currentIndex + 1) % instagramMedia.length;
    setCurrentIndex(nextIndex);
    setSelectedMedia(instagramMedia[nextIndex].id);
  };

  const prevMedia = () => {
    const prevIndex = (currentIndex - 1 + instagramMedia.length) % instagramMedia.length;
    setCurrentIndex(prevIndex);
    setSelectedMedia(instagramMedia[prevIndex].id);
  };

  return (    <section className="py-12 sm:py-20 bg-gradient-to-br from-pink-50 via-white to-rose-50" id="instagram">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >          <motion.h2 
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Follow My Journey on Instagram
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-600 mb-8 px-4 sm:px-0"
          >
            See my latest mehndi creations, tutorials, and behind-the-scenes moments
          </motion.p>
          
          {/* Enhanced Instagram Profile Section */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center justify-center mb-16"
          >            <div className="bg-white rounded-3xl shadow-xl p-4 sm:p-8 flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-8 max-w-2xl border border-gray-100 mx-auto">
              <div className="relative flex-shrink-0">
                <div className="w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 rounded-full p-1">
                  <div className="w-full h-full bg-white rounded-full p-1">
                    <Image
                      src="/images/instagram/profile.jpg"
                      alt="Anyshi Sharma"
                      width={120}
                      height={120}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 bg-pink-500 text-white rounded-full p-2">
                  <FaInstagram className="text-sm sm:text-lg" />
                </div>
              </div>
              <div className="text-center sm:text-left flex-1">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Anyshi Sharma</h3>
                <p className="text-gray-600 text-lg sm:text-xl mb-3">{instagramHandle}</p>
                <div className="flex flex-wrap justify-center sm:justify-start gap-x-4 gap-y-2 text-sm sm:text-base text-gray-700 mb-3">
                  <span><strong className="text-purple-600">{postsCount}</strong> posts</span>
                  <span><strong className="text-pink-600">{followersCount}</strong> followers</span>
                  <span><strong className="text-purple-600">3,743</strong> following</span>
                </div>
                <p className="text-gray-600 mb-4 text-sm sm:text-base max-w-md mx-auto sm:mx-0">
                  🎨 Professional Mehndi Artist<br/>
                  📍 Varanasi, India<br/>
                  ✨ Creating beautiful henna designs since 2018<br/>
                  💍 Bridal & Festival Specialist
                </p>
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm sm:text-base"
                >
                  <FaInstagram className="mr-2 sm:mr-3 text-lg sm:text-xl" />
                  Follow on Instagram
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>        {/* Instagram Media Grid */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {instagramMedia.map((media, index) => (
            <motion.div 
              key={media.id}
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
              onClick={() => openModal(index)}
            >              {/* Post Header */}
              <div className="p-3 sm:p-4 flex items-center space-x-3">
                <div className="w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 rounded-full p-0.5">
                  <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                    <FaInstagram className="text-sm sm:text-lg text-gray-800" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-gray-900 text-sm sm:text-base truncate">varanasi_mehndi_artist</p>
                  <p className="text-xs text-gray-500">{media.date}</p>
                </div>
                {media.type === 'video' && (
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-2 sm:px-3 py-1 rounded-full font-semibold">
                    <span className="flex items-center gap-1">
                      <FaPlay className="w-2 sm:w-3 h-2 sm:h-3" />
                      <span className="hidden sm:inline">REEL</span>
                      <span className="sm:hidden">R</span>
                    </span>
                  </div>
                )}
              </div>{/* Media Content */}
              <div className="relative aspect-square overflow-hidden">
                {media.type === 'image' ? (
                  <Image
                    src={media.src}
                    alt={`Mehndi design ${media.id}`}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                ) : (
                  <div className="relative aspect-square">                    {/* Video thumbnail overlay */}
                    <Image
                      src={media.thumbnail || media.src}
                      alt={`Video thumbnail ${media.id}`}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-110"
                    />
                    {/* Hidden video for preview on hover */}
                    <video
                      src={media.src}
                      className="absolute inset-0 w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity duration-300"
                      muted
                      playsInline
                      preload="metadata"
                      onMouseEnter={(e) => {
                        const video = e.target as HTMLVideoElement;
                        video.currentTime = 0;
                        video.play().catch(() => {});
                      }}
                      onMouseLeave={(e) => {
                        const video = e.target as HTMLVideoElement;
                        video.pause();
                        video.currentTime = 0;
                      }}
                    >
                      Your browser does not support the video tag.
                    </video>
                    {/* Play button overlay */}
                    <div className="absolute top-4 right-4 bg-white bg-opacity-90 rounded-full p-2 shadow-lg">
                      <FaPlay className="w-4 h-4 text-purple-600" />
                    </div>
                    {/* Reel badge */}
                    <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      REEL
                    </div>
                  </div>
                )}
                
                {/* Overlay with engagement stats */}
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
                  <div className="text-white text-center">
                    <div className="flex items-center space-x-4 mb-2">
                      <div className="flex items-center space-x-1">
                        <FaHeart className="text-xl" />
                        <span className="font-semibold">{media.likes.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <FaComment className="text-xl" />
                        <span className="font-semibold">{media.comments}</span>
                      </div>
                    </div>
                    <p className="text-sm">Click to view details</p>
                  </div>
                </div>
              </div>              {/* Post Footer */}
              <div className="p-3 sm:p-4">
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <FaHeart className="text-lg sm:text-xl text-red-500" />
                    <FaComment className="text-lg sm:text-xl text-gray-600" />
                    <FaShare className="text-lg sm:text-xl text-gray-600" />
                  </div>
                </div>
                
                <div className="mb-2">
                  <span className="font-semibold text-sm">{media.likes.toLocaleString()} likes</span>
                </div>
                
                <p className="text-sm text-gray-700 line-clamp-2">
                  <span className="font-semibold">varanasi_mehndi_artist</span> {media.caption}
                </p>
                
                <p className="text-xs text-gray-500 mt-2">View all {media.comments} comments</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal for enlarged view */}
        <AnimatePresence>
          {selectedMedia && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
              onClick={closeModal}
            >              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-hidden flex flex-col md:flex-row w-full mx-4"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Media Section */}
                <div className="flex-1 relative min-h-[50vh] md:min-h-auto">
                  {instagramMedia[currentIndex].type === 'image' ? (
                    <Image
                      src={instagramMedia[currentIndex].src}
                      alt={`Mehndi design ${instagramMedia[currentIndex].id}`}
                      width={600}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <video
                      src={instagramMedia[currentIndex].src}
                      controls
                      autoPlay
                      className="w-full h-full object-cover"
                    >
                      Your browser does not support the video tag.
                    </video>
                  )}
                  
                  {/* Navigation arrows */}
                  <button
                    onClick={prevMedia}
                    className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 md:p-3 hover:bg-opacity-70 transition-all"
                  >
                    <FaChevronLeft className="w-3 h-3 md:w-4 md:h-4" />
                  </button>
                  <button
                    onClick={nextMedia}
                    className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 md:p-3 hover:bg-opacity-70 transition-all"
                  >
                    <FaChevronRight className="w-3 h-3 md:w-4 md:h-4" />
                  </button>
                </div>

                {/* Details Section */}
                <div className="w-full md:w-80 p-4 md:p-6 flex flex-col max-h-[40vh] md:max-h-none overflow-y-auto">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 rounded-full p-0.5">
                        <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                          <FaInstagram className="text-lg text-gray-800" />
                        </div>
                      </div>
                      <div>
                        <p className="font-semibold">varanasi_mehndi_artist</p>
                        <p className="text-sm text-gray-500">{instagramMedia[currentIndex].date}</p>
                      </div>
                    </div>
                    <button
                      onClick={closeModal}
                      className="text-gray-500 hover:text-gray-700 p-2"
                    >
                      <FaTimes className="text-xl" />
                    </button>
                  </div>

                  <div className="flex-1 overflow-y-auto">
                    <p className="text-sm text-gray-700 mb-4">
                      <span className="font-semibold">varanasi_mehndi_artist</span> {instagramMedia[currentIndex].caption}
                    </p>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <FaHeart className="text-2xl text-red-500" />
                        <FaComment className="text-2xl text-gray-600" />
                        <FaShare className="text-2xl text-gray-600" />
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <span className="font-semibold">{instagramMedia[currentIndex].likes.toLocaleString()} likes</span>
                    </div>
                    
                    <a
                      href={instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-xl text-center font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <FaInstagram />
                      <span>View on Instagram</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mt-16"
        >          <div className="bg-gradient-to-r from-purple-100 via-pink-100 to-purple-100 rounded-3xl p-6 sm:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Join Our Instagram Community</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-purple-600 mb-2">2000+</div>
                <p className="text-gray-600 font-medium text-sm sm:text-base">Happy Clients</p>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-pink-600 mb-2">8+</div>
                <p className="text-gray-600 font-medium text-sm sm:text-base">Years Experience</p>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-purple-600 mb-2">100%</div>
                <p className="text-gray-600 font-medium text-sm sm:text-base">Satisfaction</p>
              </div>
            </div>
            <p className="text-base sm:text-lg text-gray-600 mb-6 px-4 sm:px-0">
              Follow me for daily mehndi inspiration, step-by-step tutorials, and behind-the-scenes content!
            </p>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-lg font-semibold hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-xl"
            >
              <FaInstagram className="mr-3 text-xl" />
              Follow {instagramHandle}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InstagramShowcase;
