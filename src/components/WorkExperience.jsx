import { motion } from 'framer-motion'
import './WorkExperience.css'

const WorkExperience = () => {
  const experiences = [
    {
      company: 'AutomaticAI (Startup)',
      location: 'Atlanta, GA',
      role: 'AI/ML Engineer',
      period: 'May 2025 – Present',
      achievements: [
        'Built Motion Sensor AI engine using Apple Watch gyroscope/accelerometer data to detect basketball shots in real time. [Python, CoreMotion, Swift]',
        'Building LLM RAG live coaching system to generate real-time, context-aware voice tips. [Swift, Firebase/Firestore, Google Generative AI, RAG]',
        'Built Computer Vision Video AI system with 99% accuracy (YOLOv8, object tracking, make/miss logic). [PyTorch, OpenCV]',
        'iOS/Watch app used by 30K+ players and NCAA teams; supported biweekly feature releases. [Swift, Firebase]',
        'Sports tech company recognized by U.S. Congressional App Challenge and university innovation hubs.'
      ]
    },
    {
      company: 'Outamation',
      location: 'Remote',
      role: 'Artificial Intelligence and Automation Intern',
      period: 'May 2025 – July 2025',
      achievements: [
        'Automated document classification/data extraction with NLP, Computer Vision, and Python. [Python, NLP, OCR]',
        'Built LlamaIndex + RAG retrieval system for mortgage docs; evaluated open-source AI models. [LlamaIndex, RAG, LangChain]',
        'Authored analysis on top AI models with deployment recommendations.'
      ]
    },
    {
      company: 'Cisco Systems',
      location: 'Atlanta, GA',
      role: 'Intelligence System Developer Intern',
      period: 'Aug 2024 – Dec 2024',
      achievements: [
        'Optimized device communication efficiency (+20%) with SDR testing and wave analysis. [MATLAB, Python]',
        'Applied ML to SDR for faster cognitive responses, cutting convergence time 25%. [Machine Learning, Signal Processing]',
        'Classified wave types (2.4GHz, E&M) to improve spectrum utilization. [Wireless Systems]',
        'Documented 15+ sessions to create knowledge base, reducing onboarding time 30%.'
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -80, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  return (
    <section className="work-experience section" id="experience">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Work Experience
        </motion.h2>
        
        <motion.div
          className="experience-timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="experience-card glass"
              variants={itemVariants}
              whileHover={{ scale: 1.02, x: 10 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="experience-header">
                <div className="experience-title-group">
                  <h3 className="experience-role">{exp.role}</h3>
                  <h4 className="experience-company">{exp.company}</h4>
                </div>
                <div className="experience-meta">
                  <span className="experience-location">{exp.location}</span>
                  <span className="experience-period">{exp.period}</span>
                </div>
              </div>
              
              <ul className="experience-achievements">
                {exp.achievements.map((achievement, aIndex) => (
                  <motion.li
                    key={aIndex}
                    className="achievement-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + aIndex * 0.05 }}
                  >
                    {achievement}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default WorkExperience

