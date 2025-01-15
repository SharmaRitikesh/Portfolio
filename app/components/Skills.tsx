'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Code, Server, Database, Cloud, Terminal, PenToolIcon as Tool } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const skills = [
  { 
    category: "Frontend Development",
    skills: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "JavaScript", level: 90 },
      { name: "React.js", level: 85 },
      { name: "Bootstrap", level: 80 },
      { name: "Tailwind CSS", level: 85 },
    ],
    icon: Code,
  },
  {
    category: "Backend Development",
    skills: [
      { name: "Python", level: 90 },
      { name: "Django", level: 85 },
      { name: "Flask", level: 80 },
      { name: "Java", level: 85 },
      { name: "Node.js", level: 75 },
    ],
    icon: Server,
  },
  {
    category: "Database Management",
    skills: [
      { name: "SQL", level: 85 },
      { name: "MySQL", level: 85 },
      { name: "PostgreSQL", level: 80 },
    ],
    icon: Database,
  },
  {
    category: "Cloud & DevOps",
    skills: [
      { name: "ServiceNow Administration", level: 85 },
      { name: "Git", level: 90 },
      { name: "GitHub", level: 90 },
      { name: "API Development (REST)", level: 85 },
    ],
    icon: Cloud,
  },
  {
    category: "Programming Languages",
    skills: [
      { name: "Python", level: 95 },
      { name: "Java", level: 90 },
      { name: "C", level: 85 },
    ],
    icon: Terminal,
  },
  {
    category: "Other Tools & Skills",
    skills: [
      { name: "Agile Development", level: 85 },
      { name: "Debugging", level: 90 },
      { name: "Cross-Browser Compatibility", level: 85 },
    ],
    icon: Tool,
  },
]

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(skills[0].category)
  const { t } = useTranslation()

  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h2>
        <div className="flex flex-wrap justify-center mb-8">
          {skills.map((skillCategory) => (
            <motion.button
              key={skillCategory.category}
              className={`m-2 px-4 py-2 rounded-full text-sm font-medium ${
                activeCategory === skillCategory.category
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
              }`}
              onClick={() => setActiveCategory(skillCategory.category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {skillCategory.category}
            </motion.button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills
            .find((s) => s.category === activeCategory)
            ?.skills.map((skill) => (
              <motion.div
                key={skill.name}
                className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">{skill.name}</h3>
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                        Proficiency
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold inline-block text-blue-600">
                        {skill.level}%
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                    <motion.div
                      style={{ width: `${skill.level}%` }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                    ></motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  )
}

