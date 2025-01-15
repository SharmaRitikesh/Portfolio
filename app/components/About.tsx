'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'

export default function About() {
  // const { t } = useTranslation() //Removed as translation is not used in the updated code.

  return (
    <section id="about" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Ritikesh Sharma working"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-lg mb-6 text-gray-600 dark:text-gray-300">
              Hi, I'm a driven and detail-oriented Full Stack Developer, currently pursuing my B.Tech in Software Engineering. My passion lies in creating innovative and user-centric solutions that not only meet client needs but also exceed expectations.
            </p>
            <p className="text-lg mb-6 text-gray-600 dark:text-gray-300">
              With hands-on experience in both front-end and back-end technologies, I specialize in crafting seamless, efficient, and visually appealing applications. My technical toolkit includes Python, Java, C, SQL, HTML, CSS, and JavaScript, as well as frameworks like React.js and Django. Additionally, my knowledge of ServiceNow System Administration enables me to configure, optimize, and troubleshoot workflows for businesses effectively.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              I pride myself on being a continuous learner, staying updated with emerging technologies, and adapting to new challenges with enthusiasm. Beyond coding, I'm passionate about improving systems, simplifying processes, and creating solutions that positively impact users.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

