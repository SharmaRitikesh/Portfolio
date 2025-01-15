'use client'

import { motion } from 'framer-motion'
import { Book, Calendar, Clock } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function ServiceNowCourse() {
  const { t } = useTranslation()

  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          ServiceNow Course
        </motion.h2>
        <motion.div
          className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">ServiceNow System Administration</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center">
              <Book className="text-blue-500 mr-2" />
              <span className="text-gray-600 dark:text-gray-300">Certification Course</span>
            </div>
            <div className="flex items-center">
              <Calendar className="text-blue-500 mr-2" />
              <span className="text-gray-600 dark:text-gray-300">3 Months</span>
            </div>
            <div className="flex items-center">
              <Clock className="text-blue-500 mr-2" />
              <span className="text-gray-600 dark:text-gray-300">Completed</span>
            </div>
          </div>
          <p className="mt-6 text-gray-600 dark:text-gray-300">
            Completed a comprehensive course on configuring, managing, and optimizing workflows in the ServiceNow platform. Gained hands-on knowledge in troubleshooting and workflow customization.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

