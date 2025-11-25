import { motion } from 'framer-motion'
import './Skills.css'

const Skills = () => {
  const languages = [
    'Python', 'Java', 'Javascript', 'C++', 'C', 'Swift', 'MATLAB'
  ]
  
  const technologies = [
    'React', 'Node.js', 'MySQL', 'MongoDB', 'Elasticsearch', 
    'Flask', 'Django', 'AWS', 'Docker', 'Linux', 'HTML/CSS',
    'Git', 'Jira', 'Microsoft Excel', 'Firebase/Firestore',
    'PyTorch', 'OpenCV', 'CoreMotion', 'Google Generative AI',
    'LlamaIndex', 'LangChain', 'FastAPI', 'GCP'
  ]
  
  const certifications = [
    { name: 'Oracle Java Foundations Certification', code: '1Z0-811' },
    { name: 'U.S Congressional App Challenge (Runner Up)', project: 'Clinic4U' },
    { name: 'Elements of AI Certification', issuer: 'University of Helsinki' }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="skills section" id="skills">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Skills & Expertise
        </motion.h2>
        
        <div className="skills-grid">
          <motion.div
            className="skills-category glass"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <h3 className="category-title">Languages</h3>
            <motion.div
              className="skills-list"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {languages.map((skill, index) => (
                <motion.span
                  key={index}
                  className="skill-item skill-primary"
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="skills-category glass"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <h3 className="category-title">Technologies & Frameworks</h3>
            <motion.div
              className="skills-list"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {technologies.map((tech, index) => (
                <motion.span
                  key={index}
                  className="skill-item skill-secondary"
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="skills-category glass"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <h3 className="category-title">Certifications & Awards</h3>
            <motion.div
              className="certifications-list"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className="cert-item"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, x: 10 }}
                >
                  <div className="cert-name">{cert.name}</div>
                  {cert.code && <div className="cert-code">{cert.code}</div>}
                  {cert.project && <div className="cert-project">{cert.project}</div>}
                  {cert.issuer && <div className="cert-issuer">{cert.issuer}</div>}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Skills

