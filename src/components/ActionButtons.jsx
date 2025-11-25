import { motion } from 'framer-motion'
import './ActionButtons.css'

const ActionButtons = () => {
  // Resume PDF should be placed in the /public folder and named "resume.pdf"
  // It will be accessible at /resume.pdf
  const resumeLink = '/resume.pdf'
  
  const buttons = [
    {
      label: 'Email Me',
      icon: '✉️',
      href: 'mailto:aayushpawar012@gmail.com',
      color: 'primary'
    },
    {
      label: 'LinkedIn',
      icon: '💼',
      href: 'https://linkedin.com/in/aayush-pawar-atl',
      color: 'secondary',
      external: true
    },
    {
      label: 'Resume',
      icon: '📄',
      href: resumeLink,
      color: 'tertiary',
      external: true,
      download: true
    }
  ]

  return (
    <motion.div
      className="action-buttons"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.6 }}
    >
      {buttons.map((button, index) => (
        <motion.a
          key={index}
          href={button.href}
          target={button.external ? '_blank' : undefined}
          rel={button.external ? 'noopener noreferrer' : undefined}
          download={button.download ? 'Aayush_Pawar_Resume.pdf' : undefined}
          className={`action-btn action-btn-${button.color}`}
          whileHover={{ 
            scale: 1.05,
            y: -3,
          }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
        >
          <span className="btn-icon">{button.icon}</span>
          <span className="btn-label">{button.label}</span>
          <div className="btn-glow"></div>
        </motion.a>
      ))}
    </motion.div>
  )
}

export default ActionButtons

