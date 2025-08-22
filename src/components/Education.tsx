import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const Education: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = [
    {
      degree: 'Bachelors of Technology in Computer Science and Engineering',
      school: 'SRM Institute of Science and Technology (KTR Campus)',
      location: 'Kattankulathur, Tamil Nadu, India',
      period: '2023 - 2027',
      gpa: '9.5/10',
      description: 'Specialization in Big Data Analytics.'
    },

  ];

  const certifications = [
    {
      name: 'Udemy, Machine Learning A-Z: AI, Python & R',
      url: 'https://drive.google.com/file/d/1r9gnDap7bJRwP70qMtUp3js1fNnDMDIY/view'
    },
    {
      name: 'AWS Academy, Data Engineering',
      url: 'https://drive.google.com/file/d/1fIK2-d6ahj0HTG5CASN1OfagvHShdlDg/view'
    },
    {
      name: 'Cisco Networking Academy, Introduction to Data Science',
      url: 'https://drive.google.com/file/d/15r12hTgnF7hLCl5gJQzi9GcXZl-tkaFa/view'
    },
    {
      name: 'AWS Academy, Cloud Foundations',
      url: 'https://drive.google.com/file/d/1C2SHm1ZPzUX7vW0WqSA9n-Lomx9gJMt9/view'
    },
    {
      name: 'British Council, Communicative English, B2 Level',
      url: 'https://drive.google.com/file/d/1q7jlnzIHB6tdqs3fNjZ0or4Tgq5oUevt/view'
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Education & Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-500 mx-auto mb-8" />
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Academic foundation and continuous learning journey
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education */}
          <div className="lg:col-span-2">
            <motion.h3
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center"
            >
              <GraduationCap className="mr-3 text-primary-600 dark:text-primary-400" />
              Academic Background
            </motion.h3>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {edu.degree}
                      </h4>
                      <p className="text-lg text-primary-600 dark:text-primary-400 font-medium mb-2">
                        {edu.school}
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">
                        {edu.location}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-gray-500 dark:text-gray-400 mb-1">
                        <Calendar size={16} className="mr-2" />
                        <span className="text-sm">{edu.period}</span>
                      </div>
                      <div className="text-sm font-medium text-success-600 dark:text-success-400">
                        GPA: {edu.gpa}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {edu.description}
                  </p>

                  <div>
                  
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center"
            >
              <Award className="mr-3 text-primary-600 dark:text-primary-400" />
              Certifications
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
            >
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="flex items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200"
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mr-3">
                      <Award size={16} className="text-white" />
                    </div>
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-900 dark:text-white font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 flex-1"
                    >
                      {cert.name}
                    </a>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;