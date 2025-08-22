import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Lightbulb, Zap, Download, GanttChartSquareIcon } from 'lucide-react';
import profileImage from '../assets/profile.jpg';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Updated resume URL for direct viewing
  const resumeUrl = "https://drive.google.com/file/d/1sBwewwlx0wnopuD5OWzkXsvq6qdwVbH5/view?usp=sharing";

  const highlights = [
    {
      icon: Code,
      title: 'Android App Developer',
      description: 'Expertise in modern app technologies and frameworks'
    },
    {
      icon: GanttChartSquareIcon,
      title: 'Data Analyst',
      description: 'Skilled in data visualization and statistical analysis'
    },
    {
      icon: Zap,
      title: 'AIML Enthusiast',
      description: 'Skilled in machine learning and artificial intelligence concepts'
    },
    {
      icon: Lightbulb,
      title: 'Problem Solver',
      description: 'Adept at identifying issues and implementing effective solutions'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-500 mx-auto mb-8" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-500 rounded-full animate-pulse" />
              <div className="absolute inset-2 bg-white dark:bg-gray-700 rounded-full overflow-hidden">
                <img 
                  src={profileImage}
                  alt="Tori Chowdhury"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to initials if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.innerHTML = `
                      <div class="w-full h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white text-4xl font-bold">
                        TC
                      </div>
                    `;
                  }}
                />
              </div>
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm an aspiring software developer with a passion for creating innovative solutions 
              and exceptional user experiences. I am currently in 3rd year pursuing B.Tech @ SRMIST, KTR. 
              I enjoy developing applications in Flutter alongside exploring the dimensions of AI.
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              My version of excellence is showcasing the dimensions of human minds using technology.
              I believe in the power of technology to transform lives and am committed to continuous learning
              and growth in this ever-evolving field.
            </p>

            {/* Resume Download Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="pt-4"
            >
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-500 text-white font-medium rounded-lg hover:from-primary-700 hover:to-accent-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Download className="w-5 h-5 mr-2" />
                View Resume
              </a>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="flex items-start space-x-3 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm"
                >
                  <div className="flex-shrink-0 p-2 bg-gradient-to-r from-primary-100 to-accent-100 dark:from-primary-900/20 dark:to-accent-900/20 rounded-lg">
                    <item.icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;