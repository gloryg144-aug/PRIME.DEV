import { motion } from 'motion/react'
import { Icon } from './Icon.jsx'
import { LargeTitle } from './Type.jsx'
import { projects } from '../data.js'

const ext = { target: '_blank', rel: 'noopener noreferrer' }

export function Showcase() {
  return (
    <section id="showcase" className="section">
      <div className="container">
        <div className="feed-heading">
          <LargeTitle>Social feed</LargeTitle>
          <span className="feed-count">
            <Icon name="solar:widget-5-linear" size={16} />
            {projects.length} live projects
          </span>
        </div>
        <p className="feed-intro">Updates from PRIME's learning and digital projects. Open any card to explore.</p>
        <div className="feed-grid">
          {projects.map((project, i) => (
            <motion.a
              key={project.id}
              href={project.url}
              className="feed-card"
              {...ext}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ type: 'spring', stiffness: 180, damping: 22, delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="feed-cover">
                <img src={`${import.meta.env.BASE_URL}${project.screenshot}`} alt="" loading="lazy" />
                <span className="feed-type">
                  <Icon name={project.icon} size={15} />
                  {project.type}
                </span>
              </span>
              <span className="feed-card-body">
                <strong>{project.name}</strong>
                <span>{project.description}</span>
                <span className="feed-open">View project <Icon name="solar:arrow-right-up-linear" size={16} /></span>
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
