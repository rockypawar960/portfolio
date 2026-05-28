'use client';

import { motion } from 'framer-motion';

const skills = [
  'Java',
  'Spring Boot',
  'React',
  'MySQL',
  'MongoDB',
  'Docker',
  'GitHub',
  'REST APIs',
  'Kafka',
  'Redis',
];

const skillCategories = [
  {
    name: 'Backend',
    skills: ['Java', 'Spring Boot', 'REST APIs', 'Spring Security', 'JWT'],
  },
  {
    name: 'Databases',
    skills: ['MySQL', 'PostgreSQL', 'Hibernate ORM', 'Database Design'],
  },
  {
    name: 'DevOps & Cloud',
    skills: ['Docker', 'AWS EC2', 'AWS S3', 'GitHub Actions', 'CI/CD Pipelines'],
  },
  {
    name: 'Frontend',
    skills: ['React', 'JavaScript', 'HTML', 'CSS', 'Responsive Design'],
  },
  {
    name: 'Tools & Practices',
    skills: ['Git', 'Postman', 'Linux', 'JUnit', 'Mockito', 'Unit Testing'],
  },
  {
    name: 'Architecture',
    skills: ['RESTful Design', 'Layered Architecture', 'Microservices', 'System Design'],
  },
];

export function Skills() {
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

  return (
    <section id="services" className="py-20 md:py-32 px-4 md:px-8 relative">
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
              Skills & <span className="text-[#ff7b00]">Technologies</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Tools and technologies I work with to build amazing solutions
            </p>
          </motion.div>

          {/* Featured Skills Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12"
          >
            {skills.map((skill, idx) => (
              <motion.div
                key={skill}
                variants={itemVariants}
                className="group"
              >
                <div className="p-4 border border-gray-700/50 rounded-lg bg-gray-900/30 hover:border-[#ff7b00] hover:bg-gray-900/60 transition-all duration-300 text-center cursor-pointer group-hover:shadow-lg group-hover:shadow-orange-500/20">
                  <p className="font-semibold text-white group-hover:text-[#ff7b00] transition-colors">
                    {skill}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Detailed Skills by Category */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-6"
          >
            {skillCategories.map((category) => (
              <motion.div
                key={category.name}
                variants={itemVariants}
                className="p-6 rounded-lg border border-gray-700/50 bg-gray-900/30 hover:border-[#ff7b00] hover:bg-gray-900/60 transition-all duration-300"
              >
                <h3 className="text-lg font-bold mb-4 text-[#ff7b00]">
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-full bg-orange-500/10 text-gray-300 text-sm font-medium border border-orange-500/30 hover:border-[#ff7b00] hover:text-[#ff7b00] transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
