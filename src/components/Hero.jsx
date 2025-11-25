import { motion } from 'framer-motion'
import ActionButtons from './ActionButtons'
import './Hero.css'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  const nameVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.3
      }
    }
  }

  return (
    <section className="hero section" id="hero">
      <div className="container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-glow"></motion.div>
          
          <motion.div 
            className="hero-profile"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <motion.div 
              className="hero-image-wrapper"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="/headshot.jpg" 
                alt="Aayush Pawar" 
                className="hero-image"
              />
              <div className="hero-image-glow"></div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="hero-card glass"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="hero-card-content">
              <div className="hero-card-header">
                <motion.img
                  src="/headshot.jpg"
                  alt="Aayush Pawar"
                  className="hero-card-image"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                />
                <div className="hero-card-text">
                  <motion.h1 
                    className="hero-name-card"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                  >
                    Aayush Pawar
                  </motion.h1>
                  <motion.p 
                    className="hero-title-card"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9, duration: 0.6 }}
                  >
                    AI/ML Engineer & Computer Science Student
                  </motion.p>
                </div>
              </div>
              
              <motion.p 
                className="hero-greeting"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                Hello, I'm Aayush!
              </motion.p>
              
              <motion.p 
                className="hero-bio"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.6 }}
              >
                Building intelligent systems at the intersection of AI, sports tech, and automation. 
                Currently working on AI/ML solutions at AutomaticAI and pursuing Computer Science at Georgia Tech.
              </motion.p>
              
              <ActionButtons />
            </div>
          </motion.div>
          
          <motion.div 
            className="scroll-indicator"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.6 }}
          >
            <motion.div
              className="scroll-arrow"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              ↓
            </motion.div>
            <span>Scroll to explore</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

