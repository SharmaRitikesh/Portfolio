'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

const testimonials = [
  {
    name: 'Sarah Johnson',
    position: 'CEO, TechStart Inc.',
    content: 'John is an exceptional developer. His innovative solutions and attention to detail have been crucial to our projects success.',
    avatar: '/placeholder.svg?height=80&width=80',
  },
  {
    name: 'Michael Chen',
    position: 'CTO, DataDrive Solutions',
    content: 'Working with John was a game-changer for our team. His technical skills and problem-solving abilities are top-notch.',
    avatar: '/placeholder.svg?height=80&width=80',
  },
  {
    name: 'Emily Rodriguez',
    position: 'Product Manager, InnovateTech',
    content: "John's ability to translate complex requirements into elegant, user-friendly interfaces is remarkable. A true professional.",
    avatar: '/placeholder.svg?height=80&width=80',
  },
]

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-gradient text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center text-shadow"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Testimonials
        </motion.h2>
        <motion.div
          className="max-w-4xl mx-auto bg-white bg-opacity-10 p-8 rounded-lg shadow-lg relative backdrop-filter backdrop-blur-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 p-2 rounded-full shadow-md hover:bg-opacity-30 transition-colors duration-200"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="text-white" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 p-2 rounded-full shadow-md hover:bg-opacity-30 transition-colors duration-200"
            aria-label="Next testimonial"
          >
            <ChevronRight className="text-white" />
          </button>
          <motion.div
            key={currentTestimonial}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            <Image
              src={testimonials[currentTestimonial].avatar || "/placeholder.svg"}
              alt={testimonials[currentTestimonial].name}
              width={80}
              height={80}
              className="rounded-full mx-auto mb-4 border-2 border-white"
            />
            <p className="text-xl mb-6 italic">&ldquo;{testimonials[currentTestimonial].content}&rdquo;</p>
            <h3 className="text-2xl font-semibold">{testimonials[currentTestimonial].name}</h3>
            <p className="text-lg opacity-75">{testimonials[currentTestimonial].position}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

