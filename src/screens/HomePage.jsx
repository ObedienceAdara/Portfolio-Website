import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Menu, X, Facebook, Twitter, Code, Terminal, Book } from 'lucide-react';
import { Link } from 'react-router-dom'

const PersonalWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  // Animate on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= 0 && rect.top <= 300;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLink = ({ href, children }) => (
    <a
      href={href}
      className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
        activeSection === href.slice(1) 
          ? 'bg-purple-700 text-white' 
          : 'hover:bg-purple-700/20'
      }`}
    >
      {children}
    </a>
  );

  const Projects = [
    {
      name: "Block Sphere",
      description: "A next generation decentralized social media platform with end-to-end encryption",
      tech: ["Node", "React", "Mongo DB"]
    },
    {
      name: "Grabbit",
      description: "A downloader software that allows you to download anything from the internet directly to your local device"
    },
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Navigation */}
      <nav className="fixed w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <a href="#home" className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Obedience Adara
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-4">
              <Link to="/" className="px-3 py-2 rounded-md hover:bg-purple-700/20">Home</Link>
              <Link to="/about" className="px-3 py-2 rounded-md hover:bg-purple-700/20">About</Link>
              <Link to="/projects" className="px-3 py-2 rounded-md hover:bg-purple-700/20">Projects</Link>
              <Link to="/contact" className="px-3 py-2 rounded-md hover:bg-purple-700/20">Contact</Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900 border-b border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/" className="block px-3 py-2 rounded-md hover:bg-purple-700/20">Home</Link>
              <Link to="/about" className="block px-3 py-2 rounded-md hover:bg-purple-700/20">About</Link>
              <Link to="/projects" className="block px-3 py-2 rounded-md hover:bg-purple-700/20">Projects</Link>
              <Link to="/contact" className="block px-3 py-2 rounded-md hover:bg-purple-700/20">Contact</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Hello, I'm Obedience Adara
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8 animate-fade-in-delay">
            Software Engineer & Developer
          </p>
          <div className="flex justify-center space-x-4 animate-fade-in-delay-2">
            <a href="https://github.com/ObedienceAdara" className="p-2 hover:text-purple-400 transition-colors">
              <Github />
            </a>
            <a href="https://www.linkedin.com/in/obedienceadara/" className="p-2 hover:text-purple-400 transition-colors">
              <Linkedin />
            </a>
            <a href="https://X.com/ObedienceAdara" className="p-2 hover:text-purple-400 transition-colors">
              <Twitter />
            </a>
            <a href="https://facebook.com/thisisobedienceadara" className="p-2 hover:text-purple-400 transition-colors">
              <Facebook />
            </a>
            <a href="mailto:obedienceadara@gmail.com" className="p-2 hover:text-purple-400 transition-colors">
              <Mail />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg hover:scale-105 transition-transform">
              <Code className="w-12 h-12 mb-4 text-purple-400" />
              <h3 className="text-xl font-semibold mb-2">Developer</h3>
              <p className="text-gray-400">Passionate about creating clean, efficient code and building innovative solutions.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg hover:scale-105 transition-transform">
              <Terminal className="w-12 h-12 mb-4 text-purple-400" />
              <h3 className="text-xl font-semibold mb-2">Engineer</h3>
              <p className="text-gray-400">Problem solver with a strong foundation in engineering principles.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg hover:scale-105 transition-transform">
              <Book className="w-12 h-12 mb-4 text-purple-400" />
              <h3 className="text-xl font-semibold mb-2">Student</h3>
              <p className="text-gray-400">Continuously learning and staying updated with the latest technologies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Projects.map((project) => (
              <div 
                key={project}
                className="bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transition-transform"
              >
                <div className="h-48 bg-purple-900"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                  <p className="text-gray-400 mb-4">
                    {project.description}.
                  </p>
                  <div className="flex space-x-2">
                    <span className="px-3 py-1 bg-purple-700/20 rounded-full text-sm">React</span>
                    <span className="px-3 py-1 bg-purple-700/20 rounded-full text-sm">Node.js</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center py-16">
        <div className="max-w-4xl mx-auto px-4 w-full">
          <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
          <div className="bg-gray-800 p-8 rounded-lg">
            <form className="space-y-4">
              <div>
                <label className="block mb-2">Name</label>
                <input
                  type="text"
                  className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:border-purple-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block mb-2">Email</label>
                <input
                  type="email"
                  className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:border-purple-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block mb-2">Message</label>
                <textarea
                  className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:border-purple-500 focus:outline-none h-32"
                ></textarea>
              </div>
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400">© 2024 Obedience Adara. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default PersonalWebsite;