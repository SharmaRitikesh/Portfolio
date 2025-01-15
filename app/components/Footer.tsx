import Link from 'next/link'
import { Github, Linkedin, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gradient text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} Ritikesh Sharma. All rights reserved.</p>
          </div>
          <nav className="flex flex-wrap justify-center space-x-4 mb-4 md:mb-0">
            <Link href="#about" className="hover:text-blue-300 transition-colors">
              About
            </Link>
            <Link href="#skills" className="hover:text-blue-300 transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="hover:text-blue-300 transition-colors">
              Projects
            </Link>
            <Link href="#experience" className="hover:text-blue-300 transition-colors">
              Experience
            </Link>
            <Link href="#contact" className="hover:text-blue-300 transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors">
              <Twitter size={24} />
            </a>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap justify-center space-x-4">
          <a href="/privacy-policy" className="text-sm hover:text-blue-300 transition-colors">Privacy Policy</a>
          <a href="/terms-of-service" className="text-sm hover:text-blue-300 transition-colors">Terms of Service</a>
          <a href="/sitemap" className="text-sm hover:text-blue-300 transition-colors">Sitemap</a>
          <a href="/blog" className="text-sm hover:text-blue-300 transition-colors">Blog</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

