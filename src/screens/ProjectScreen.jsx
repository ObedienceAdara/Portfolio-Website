import React, { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

const ProjectsSection = () => {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'backend', label: 'Backend' },
  ];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, and payment integration.",
      image: "/api/placeholder/600/400",
      category: "web",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      githubLink: "https://github.com/",
      liveLink: "https://demo.com",
      features: [
        "User authentication and authorization",
        "Product catalog with search and filter",
        "Shopping cart functionality",
        "Secure payment processing",
      ]
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A mobile-first task management application with real-time updates and collaborative features.",
      image: "/api/placeholder/600/400",
      category: "mobile",
      technologies: ["React Native", "Firebase", "Redux", "TypeScript"],
      githubLink: "https://github.com",
      liveLink: "https://demo.com",
      features: [
        "Real-time task synchronization",
        "Team collaboration tools",
        "Push notifications",
        "Offline support",
      ]
    },
    {
      id: 3,
      title: "API Gateway Service",
      description: "A microservices-based API gateway that handles routing, rate limiting, and authentication for multiple services.",
      image: "/api/placeholder/600/400",
      category: "backend",
      technologies: ["Node.js", "Docker", "Redis", "PostgreSQL"],
      githubLink: "https://github.com",
      features: [
        "Request routing and load balancing",
        "Rate limiting and caching",
        "API authentication and authorization",
        "Service monitoring and logging",
      ]
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A responsive portfolio website built with React and Tailwind CSS, featuring dark mode and animations.",
      image: "/api/placeholder/600/400",
      category: "web",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      githubLink: "https://github.com",
      liveLink: "https://demo.com",
      features: [
        "Responsive design",
        "Dark mode support",
        "Smooth animations",
        "Contact form integration",
      ]
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  // Project card component
  const ProjectCard = ({ project }) => (
    <div className="bg-gray-800 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
      {/* Project Image */}
      <div className="relative group">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
          <div className="flex space-x-4">
            <a 
              href={project.githubLink} 
              className="bg-gray-900/80 p-2 rounded-full hover:bg-purple-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5" />
            </a>
            {project.liveLink && (
              <a 
                href={project.liveLink} 
                className="bg-gray-900/80 p-2 rounded-full hover:bg-purple-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Project Details */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-purple-700/20 rounded-full text-sm text-purple-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Features */}
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-gray-300">Key Features:</h4>
          <ul className="text-sm text-gray-400 list-disc list-inside">
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

  return (
    <section className="min-h-screen bg-gray-900 py-20 px-4" id="projects">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              My Projects
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of my featured projects that showcase my skills and experience
            in different areas of software development.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-2 rounded-full transition-colors ${
                filter === category.id
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-800 text-gray-400 hover:bg-purple-600/20'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* GitHub Link */}
        <div className="text-center mt-16">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
          >
            <Github className="w-5 h-5" />
            <span>View More on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
