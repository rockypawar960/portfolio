'use client';

import { motion } from 'framer-motion';

export function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const experiences = [
    {
      role: 'Java Full Stack Developer Intern',
      company: 'The Developers Arena',
      period: 'Dec 2025 – Mar 2026',
      points: [
        'Built 12+ web applications using Java, Spring Boot, React, and JavaScript',
        'Developed REST APIs with Spring Boot including global exception handling and request validation',
        'Implemented JWT authentication, Spring Security, and role-based access control (RBAC)',
        'Deployed applications using Docker containers on AWS EC2 with GitHub Actions CI/CD pipelines',
        'Wrote comprehensive unit tests using JUnit and Mockito to ensure code quality',
      ],
      certificate: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-05-25%20161953-P8QT7QBfJLZKqcuOPsQsap7GGx3lZ8.png',
    },
  ];

  return (
    <section id="experience" className="py-20 md:py-32 px-4 md:px-8 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-orange-500/5 to-transparent"></div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-12"
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="text-[#ff7b00]">Experience</span>
            </h2>
            <p className="text-gray-400 text-lg">Professional journey and achievements</p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#ff7b00] via-[#ff7b00]/50 to-transparent"></div>

            <div className="space-y-12">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className={`grid grid-cols-1 lg:grid-cols-3 gap-8 items-start`}
                >
                  {/* Content */}
                  <div className="lg:col-span-2">
                    <div className="border border-gray-700/50 rounded-lg p-8 bg-gray-900/30 hover:border-[#ff7b00] hover:bg-gray-900/60 transition-all duration-300 h-full">
                      <div className="space-y-2 mb-6">
                        <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                        <p className="text-[#ff7b00] font-semibold text-lg">{exp.company}</p>
                        <p className="text-gray-400 text-sm">{exp.period}</p>
                      </div>

                      <ul className="space-y-3">
                        {exp.points.map((point, i) => (
                          <li key={i} className="flex gap-3 text-gray-300">
                            <span className="text-[#ff7b00] font-bold flex-shrink-0 mt-1">
                              ✓
                            </span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Certificate */}
                  {exp.certificate && (
                    <motion.div
                      className="lg:col-span-1"
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      <a
                        href={exp.certificate}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block border border-gray-700/50 rounded-lg overflow-hidden bg-gradient-to-br from-gray-800/40 to-gray-900/40 hover:border-[#ff7b00] hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300"
                      >
                        <div className="relative overflow-hidden">
                          <img
                            src={exp.certificate}
                            alt="Internship Certificate"
                            className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <p className="text-white font-semibold text-sm">View Certificate</p>
                          </div>
                        </div>
                      </a>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
