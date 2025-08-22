import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, X } from 'lucide-react';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'Eureka – An AI-Powered Educator',
      description: 'Hackathon Winning Project Solving SDG 4',
      longDescription: 'Built an interactive AI educator mobile app using Flutter and Firebase, enabling real-time query resolution and lesson recommendations. Won 1st Prize at Ureckon for innovation in AI-powered education.',
      image: 'https://github.com/torichoudhury/Eureka_AI-Powered-Educator/blob/master/assets/logo.jpg?raw=true',
      technologies: ['Flutter', 'Firebase', 'Gemini API'],
      github: 'https://github.com/torichoudhury/Eureka_AI-Powered-Educator',
      featured: true
    },
    {
      title: 'MindfulPals – Virtual Pet Therapy using AI',
      description: 'AI-powered virtual pet therapy app for mental wellness and emotional support.',
      longDescription: 'Created a mental wellness assistant with virtual AI pets offering conversation, activities, and emotional check-ins. Applied sentiment analysis and emotional modeling to deliver adaptive interaction for users.',
      image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=800&q=80',
      technologies: ['Vue.js', 'Express.js', 'MongoDB', 'Socket.io'],
      github: 'https://github.com',
      featured: true
    },
    {
      title: 'Deepfake Detection Chrome Extension',
      description: 'Chrome extension for detecting deepfake content in images and videos.',
      longDescription: 'Designed and developed a Chrome extension to detect deepfake images and audios using machine learning models. Integrated with browser DOM to analyze media content on the fly and display alerts with confidence scores.',
      image: 'https://github.com/torichoudhury/Deepfake-Detection-Chrome-Extension/blob/master/icon.png.png?raw=true',
      technologies: ['React', 'Python', 'JavaScript', 'Chrome API'],
      github: 'https://github.com/torichoudhury/Deepfake-Detection-Chrome-Extension',
      featured: false
    },
    {
      title: 'GourmetTrack',
      description: 'Online Food Order Management System',
      longDescription: 'GourmetTrack is an Online Food Order Management System developed to streamline the process of ordering and managing food orders within an organization. The system provides an efficient and user-friendly platform for users to place orders and for administrators to manage orders, vendors, and users effectively.',
      image: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&w=800&q=80',
      technologies: ['ASP.NET', 'SQL Server', 'React', 'Swagger', 'Vite'],
      github: 'https://github.com/torichoudhury/GourmetTrack',
      featured: false
    }
  ];

  const ProjectModal = ({ project, onClose }: { project: typeof projects[0], onClose: () => void }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover rounded-t-2xl"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white/90 dark:bg-gray-900/90 rounded-full hover:bg-white dark:hover:bg-gray-900 transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="p-8">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {project.title}
          </h3>
          
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
            {project.longDescription}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex justify-center">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-500 text-white rounded-lg font-medium hover:shadow-lg transition-shadow"
            >
              <Github size={18} />
              View Code
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-500 mx-auto mb-8" />
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Showcasing innovative solutions and creative problem-solving
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
              onClick={() => setSelectedProject(index)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={16} />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject !== null && (
          <ProjectModal
            project={projects[selectedProject]}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;