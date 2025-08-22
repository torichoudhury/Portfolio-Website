import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: 'Web Developer – ASP.NET (On-site Internship)',
      company: 'ITC Infotech',
      location: 'Kolkata, West Bengal, India',
      period: 'June 2024',
      technologies: ['ASP.NET', 'Microsoft SQL Server', 'React', 'JavaScript', 'SwaggerAPI', 'Tailwind CSS'],
      description: [
        'Worked on ASP.NET-based enterprise applications to streamline business processes and internal dashboards.',
        'Collaborated with senior developers on front-end and back-end integration, improving system responsiveness.'
      ]
    },
    {
      title: 'Android Developer (Virtual Internship)',
      company: 'Google, AICTE',
      location: 'Virtual',
      period: 'Nov 2023',
      technologies: ['Kotlin', 'Java', 'Android SDK'],
      description: [
        'Built mobile app features using Android SDK and Java/Kotlin as part of structured internship tasks.',
        'Gained experience in UI/UX design principles and Android best practices through guided projects.'
      ]
    },
    {
      title: 'Data Engineering Virtual Internship',
      company: 'Amazon Web Services',
      location: 'Virtual',
      period: 'March 2023',
      technologies: ['HTML/CSS', 'JavaScript', 'PHP', 'MySQL'],
      description: [
        'Worked on data engineering projects using AWS services.',
        'Gained hands-on experience with ETL processes and data warehousing.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-500 mx-auto mb-8" />
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A journey of growth, innovation, and impactful contributions
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 to-accent-500" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative flex items-start"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full border-4 border-white dark:border-gray-900" />
                
                {/* Content card */}
                <div className="ml-16 flex-1">
                  <motion.div
                    whileHover={{ y: -4, shadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                    className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-lg text-primary-600 dark:text-primary-400 font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex flex-col sm:items-end mt-2 sm:mt-0">
                        <div className="flex items-center text-gray-500 dark:text-gray-400 mb-1">
                          <Calendar size={16} className="mr-2" />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          <MapPin size={16} className="mr-2" />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {exp.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                        Key Achievements:
                      </h4>
                      <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;