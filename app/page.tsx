'use client'

import { useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import ServiceNowCourse from './components/ServiceNowCourse'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollProgressBar from './components/ScrollProgressBar'

const SectionWrapper = ({ children }: { children: React.ReactNode }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.5 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 }
      }}
    >
      {children}
    </motion.div>
  )
}

export default function Home() {
  useEffect(() => {
    const smoothScroll = (e: Event) => {
      e.preventDefault();
      const href = (e.currentTarget as HTMLAnchorElement).getAttribute('href');
      if (href) {
        const targetId = href.replace('#', '');
        const elem = document.getElementById(targetId);
        elem?.scrollIntoView({
          behavior: 'smooth'
        });
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', smoothScroll);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', smoothScroll);
      });
    };
  }, []);

  return (
    <AnimatePresence>
      <main className="relative text-gray-900 dark:text-white transition-colors duration-300">
        <ScrollProgressBar />
        <Header />
        <Hero />
        <SectionWrapper>
          <About />
        </SectionWrapper>
        <SectionWrapper>
          <Skills />
        </SectionWrapper>
        <SectionWrapper>
          <Projects />
        </SectionWrapper>
        <SectionWrapper>
          <Experience />
        </SectionWrapper>
        <SectionWrapper>
          <ServiceNowCourse />
        </SectionWrapper>
        <SectionWrapper>
          <Testimonials />
        </SectionWrapper>
        <SectionWrapper>
          <Contact />
        </SectionWrapper>
        <Footer />
      </main>
    </AnimatePresence>
  )
}

