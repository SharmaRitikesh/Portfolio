'use client'

import { motion } from 'framer-motion'
import { useState, useRef } from 'react'
import Image from 'next/image'
import { Github, ExternalLink } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory management.',
    image: '/placeholder.svg?height=300&width=500',
    tags: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    github: 'https://github.com/johndoe/ecommerce-platform',
    demo: 'https://ecommerce-platform-demo.com',
  },
  {
    title: 'AI-powered Task Manager',
    description: 'Task management app with AI-driven prioritization and scheduling.',
    image: '/placeholder.svg?height=300&width=500',
    tags: ['React', 'Python', 'TensorFlow', 'Flask'],
    github: 'https://github.com/johndoe/ai-task-manager',
    demo: 'https://ai-task-manager-demo.com',
  },
  {
    title: 'Blockchain Voting System',
    description: 'Secure and transparent voting system built on blockchain technology.',
    image: '/placeholder.svg?height=300&width=500',
    tags: ['Solidity', 'Ethereum', 'Web3.js', 'React'],
    github: 'https://github.com/johndoe/blockchain-voting',
    demo: 'https://blockchain-voting-demo.com',
  },
]

export default function Projects() {
  const [activeProject, setActiveProject] = useState(0)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const { t } = useTranslation()

  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const card = cardRef.current
      const cardRect = card.getBoundingClientRect()
      const cardCenterX = cardRect.left + cardRect.width / 2
      const cardCenterY = cardRect.top + cardRect.height / 2
      const angleX = (e.clientY - cardCenterY) / 25
      const angleY = (cardCenterX - e.clientX) / 25
      setRotateX(angleX)
      setRotateY(angleY)
    }
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
  }

  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className={`p-6 rounded-lg cursor-pointer transition-all duration-300 ${
                  activeProject === index
                    ? 'bg-blue-500 text-white scale-105'
                    : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-white hover:bg-blue-100 dark:hover:bg-blue-900'
                }`}
                onClick={() => setActiveProject(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm">{project.description}</p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            ref={cardRef}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg perspective-1000"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{
              transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
              transition: 'transform 0.1s ease-out',
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <Image
              src={projects[activeProject].image || "/placeholder.svg"}
              alt={projects[activeProject].title}
              width={500}
              height={300}
              className="w-full rounded-lg mb-6 shadow-md"
            />
            <div className="flex flex-wrap gap-2 mb-4">
              {projects[activeProject].tags.map((tag, index) => (
                <motion.span
                  key={tag}
                  className="px-3 py-1 bg-blue-500 text-white text-sm rounded-full"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
            <div className="flex space-x-4">
              <a
                href={projects[activeProject].github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
              >
                <Github className="mr-2" size={20} />
                GitHub
              </a>
              <a
                href={projects[activeProject].demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-green-500 hover:text-green-600 dark:text-green-400 dark:hover:text-green-300"
              >
                <ExternalLink className="mr-2" size={20} />
                Live Demo
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

