import { motion } from 'framer-motion'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: 'DraftKings Performance & Risk Analysis',
      period: 'Aug 2025 – Present',
      type: 'Vertically Integrated Project with Georgia Tech',
      description: 'Built neural network models on 10K+ roster- and user-level records to predict win/loss outcomes and assess risk-taking.',
      achievements: [
        'Modeled snap counts, snap %, position metrics vs. win rates, achieving 78%+ prediction accuracy.',
        'Quantified risk (StdDev of alphas) and identified top 5% consistent winners/losers using Jaccard Index > 0.65.',
        'Analyzed popularity vs. performance (R² > 0.72) and weekly performance deltas (avg ±12%), generating actionable insights for DraftKings.'
      ],
      tech: ['Python', 'Machine Learning', 'Neural Networks', 'Data Analysis']
    },
    {
      title: 'StatPulseAi',
      period: 'May 2025 – Present',
      type: 'AI-Driven Sports Statistics Prediction Platform',
      description: 'Served 200+ users; projected $5K annual revenue via subscriptions.',
      achievements: [
        'Delivered NBA/NFL predictions with 81%+ accuracy using ML models. [PyTorch, Scikit-learn]',
        'Built scalable ML pipelines (data ingestion → training → live inference) with FastAPI on Google Cloud Run. [FastAPI, GCP]',
        'Designed AI-optimized backend (Cloud SQL + SQLAlchemy) and interactive React frontend.',
        'Automated onboarding and analytics to improve personalization and model performance.'
      ],
      tech: ['PyTorch', 'FastAPI', 'React', 'GCP', 'SQLAlchemy', 'Scikit-learn']
    },
    {
      title: 'Clinic4U',
      period: 'Aug 2024 – Dec 2024',
      type: 'Mobile Application',
      description: 'Built app helping 200+ users find free clinics with real-time Google API data.',
      achievements: [
        'Logged 50+ successful healthcare connections in first 3 months.',
        'Expanding to Android and integrating AI for personalized recommendations, affordable medication, and advanced filtering.'
      ],
      tech: ['Mobile Development', 'Google APIs', 'AI Integration']
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
    hidden: { opacity: 0, y: 80, scale: 0.9, rotateX: 15 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  return (
    <section className="projects section" id="projects">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>
        
        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card glass"
              variants={itemVariants}
              whileHover={{ 
                y: -15, 
                scale: 1.03,
                rotateY: 2,
                transition: { duration: 0.3 }
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-meta">
                  <span className="project-type">{project.type}</span>
                  <span className="project-period">{project.period}</span>
                </div>
              </div>
              
              <p className="project-description">{project.description}</p>
              
              <div className="project-achievements">
                <h4 className="achievements-title">Key Achievements:</h4>
                <ul className="achievements-list">
                  {project.achievements.map((achievement, aIndex) => (
                    <li key={aIndex} className="achievement-point">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="project-tech">
                {project.tech.map((tech, tIndex) => (
                  <span key={tIndex} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

