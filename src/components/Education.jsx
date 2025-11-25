import { motion } from 'framer-motion'
import './Education.css'

const Education = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  return (
    <section className="education section" id="education">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Education
        </motion.h2>
        
        <motion.div
          className="education-card glass"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          whileHover={{ scale: 1.02, y: -10 }}
        >
          <motion.div className="education-header" variants={itemVariants}>
            <h3 className="education-school">Georgia Institute of Technology</h3>
            <p className="education-degree">B.S. in Computer Science & Minor in Fintech</p>
            <p className="education-location">Atlanta, GA</p>
          </motion.div>
          
          <motion.div className="education-details" variants={itemVariants}>
            <div className="education-meta">
              <span className="meta-item">
                <span className="meta-label">Expected Graduation:</span>
                <span className="meta-value">May 2027</span>
              </span>
            </div>
            
            <div className="education-info">
              <div className="info-section">
                <h4 className="info-title">Concentrations</h4>
                <div className="info-tags">
                  <span className="tag">Intelligence</span>
                  <span className="tag">People</span>
                </div>
              </div>
              
              <div className="info-section">
                <h4 className="info-title">Clubs</h4>
                <ul className="info-list">
                  <li>Executive Officer at ClaudeAI Builders Club</li>
                  <li>AI @ GT</li>
                </ul>
              </div>
              
              <div className="info-section">
                <h4 className="info-title">Relevant Coursework</h4>
                <div className="info-tags">
                  <span className="tag">Data Structure and Algorithms</span>
                  <span className="tag">Object-Oriented Programming</span>
                  <span className="tag">Objects & Software Design</span>
                  <span className="tag">Digital System Design</span>
                  <span className="tag">AI Ethics and Policy</span>
                  <span className="tag">Data Manipulation for Science and Industry</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education

