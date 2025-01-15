'use client'

import { motion } from 'framer-motion'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { Code, Book, Award, Laptop } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const experiences = [
  {
    title: 'Tomato: A Food Sharing App',
    company: 'Personal Project',
    date: '2023',
    description: [
      'Designed and developed a platform to connect individuals, restaurants, and hostels with surplus food to those in need.',
      'Technologies Used: HTML, CSS, JavaScript, Python, SQL.',
      'Built a user-friendly interface with responsive design.',
      'Implemented secure user accounts and real-time food listing features.',
      'Developed database structures for seamless data storage and retrieval.'
    ],
    icon: <Code />,
  },
  {
    title: 'Tribute Website for Telegram Chats',
    company: 'Personal Project',
    date: '2023',
    description: [
      'Created an interactive website showcasing 35 HTML files, including images, GIFs, audios, and more, as a tribute project.',
      'Technologies Used: HTML, CSS, JavaScript.',
      'Focused on preserving the original formatting while enhancing the design.',
      'Ensured cross-browser compatibility and responsiveness.'
    ],
    icon: <Code />,
  },
  {
    title: 'ServiceNow System Administration',
    company: 'Certification',
    date: '2024',
    description: [
      'Completed a comprehensive course on configuring, managing, and optimizing workflows in the ServiceNow platform.',
      'Gained hands-on knowledge in troubleshooting and workflow customization.'
    ],
    icon: <Award />,
  },
  {
    title: 'Library Management System',
    company: 'Academic Project',
    date: '2023',
    description: [
      'Built a system to manage book inventories, user registrations, and borrowing history.',
      'Technologies Used: Java, SQL.',
      'Designed a clean, intuitive interface for both administrators and users.',
      'Optimized database interactions for faster data retrieval.'
    ],
    icon: <Book />,
  },
  {
    title: 'Portfolio Website',
    company: 'Academic Project',
    date: '2024',
    description: [
      'Developed a personal portfolio to showcase skills and projects with a focus on aesthetics and functionality.',
      'Technologies Used: HTML, CSS, JavaScript, and animations.',
      'Highlighted coding expertise and responsive design principles.'
    ],
    icon: <Laptop />,
  },
  {
    title: 'CodeFest 2024 – Participant',
    company: 'Hackathon',
    date: '2024',
    description: [
      'Participated in a 24-hour coding marathon, solving algorithmic problems in Python and Java.',
      'Worked collaboratively in a team to debug and optimize solutions under time constraints.',
      'Learned to handle pressure while maintaining code quality.'
    ],
    icon: <Award />,
  },
]

export default function Experience() {
  const { t } = useTranslation()

  return (
    <section id="experience" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Refined Experiences
        </motion.h2>
        <VerticalTimeline>
          {experiences.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{ background: '#1F2937', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid #1F2937' }}
              date={exp.date}
              iconStyle={{ background: '#3B82F6', color: '#fff' }}
              icon={exp.icon}
            >
              <h3 className="vertical-timeline-element-title text-xl font-bold">{exp.title}</h3>
              <h4 className="vertical-timeline-element-subtitle text-blue-400">{exp.company}</h4>
              <ul className="mt-4 list-disc list-inside">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-sm text-gray-300 mb-2">{item}</li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  )
}

