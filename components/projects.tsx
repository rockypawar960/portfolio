'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink, Play, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const projects = [
  {
    title: 'Chanakya: The Mentor',
    description: 'An AI-powered career guidance and mentorship platform that helps students discover career paths, skill gaps, learning resources, and personalized recommendations.',
    features: [
      'AI career recommendation engine with intelligent scoring',
      'JWT-based role-based authentication',
      'Admin panel for user management',
      'Containerized with Docker',
      'Deployed on Vercel with AWS backend',
    ],
    technologies: ['Java', 'Spring Boot', 'React', 'AI', 'MySQL'],
    highlights: 'Hackathon finalist project - led backend development',
    type: 'Hackathon Project',
    github: '#',
    demo: '#',
    videoUrl: 'https://www.youtube.com/embed/nLtgsIYQGts?si=b7DIAgz1OhHKn6KR',
    thumbnail: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-J3W6c4GBZxeStB2MM6YbGm0cAjukLs.png',
    featured: true,
  },
  {
    title: 'Student Management System',
    description: 'A secure RESTful backend for managing student records with complete CRUD operations.',
    features: [
      'Secure RESTful API with JWT authentication',
      'CRUD operations with pagination',
      'Swagger UI for API documentation',
      'Hibernate ORM with layered architecture',
      'Comprehensive unit testing with JUnit',
    ],
    technologies: ['Java', 'Spring Boot', 'JWT', 'MySQL', 'Swagger', 'JUnit'],
    highlights: 'Production-ready API with enterprise-grade security and documentation',
    github: '#',
    demo: '#',
  },
];

export function Projects() {
  const [showVideo, setShowVideo] = useState(false);

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

  const featuredProject = projects.find(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 md:py-32 px-4 md:px-8 relative">
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
              Featured <span className="text-[#ff7b00]">Projects</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Showcase of my latest work and creations
            </p>
          </motion.div>

          {/* Featured Project */}
          {featuredProject && (
            <motion.div
              variants={itemVariants}
              className="mb-12"
            >
              <div className="group border border-gray-600/50 rounded-xl overflow-hidden bg-gradient-to-br from-gray-800/40 to-gray-900/40 hover:border-[#ff7b00] hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 flex flex-col lg:flex-row"
              >
                {/* Video Section */}
                <div className="w-full lg:w-1/2 relative h-80 lg:h-auto flex items-center justify-center bg-gradient-to-br from-gray-800 to-black overflow-hidden group-hover:shadow-lg">
                  <button
                    onClick={() => setShowVideo(true)}
                    className="relative w-full h-full flex items-center justify-center group/video cursor-pointer"
                  >
                    <img
                      src={featuredProject?.thumbnail}
                      alt="Chanakya: The Mentor"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover/video:bg-black/20 transition-all duration-300"></div>
                    <div className="relative z-10 text-center">
                      <motion.div
                        animate={{ scale: [1, 1.15, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="inline-block p-6 rounded-full border-2 border-[#ff7b00] bg-[#ff7b00]/20 group-hover/video:bg-[#ff7b00]/40 transition-all"
                      >
                        <Play size={48} className="text-white" />
                      </motion.div>
                      <p className="text-white font-semibold mt-4">Watch Demo</p>
                    </div>
                  </button>
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-between">
                  <div className="space-y-6">
                    <div>
                      <p className="text-[#ff7b00] text-xs font-bold uppercase tracking-wider mb-2">
                        {featuredProject.type}
                      </p>
                      <h3 className="text-3xl lg:text-4xl font-bold text-white group-hover:text-[#ff7b00] transition-colors">
                        {featuredProject.title}
                      </h3>
                    </div>

                    <p className="text-gray-300 text-base leading-relaxed">
                      {featuredProject.description}
                    </p>

                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-[#ff7b00] uppercase">
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {featuredProject.features.map((feature, i) => (
                          <li
                            key={i}
                            className="text-sm text-gray-400 flex gap-3"
                          >
                            <span className="text-[#ff7b00] flex-shrink-0 font-bold">✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-3 pt-4">
                      {featuredProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 rounded-full text-sm bg-orange-500/20 text-[#ff7b00] border border-orange-500/40 hover:border-[#ff7b00] transition-all"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-4 pt-8 border-t border-gray-700/50 mt-8">
                    <button
                      onClick={() => setShowVideo(true)}
                      className="px-6 py-2.5 bg-[#ff7b00] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-orange-500/50 transition-all flex items-center gap-2"
                    >
                      <Play size={18} />
                      Watch Demo
                    </button>
                    <Link
                      href={featuredProject.github}
                      className="px-6 py-2.5 border border-gray-500 text-white font-semibold rounded-lg hover:border-[#ff7b00] hover:text-[#ff7b00] transition-all flex items-center gap-2"
                    >
                      <Github size={18} />
                      View Code
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Other Projects Grid */}
          {otherProjects.length > 0 && (
            <>
              <motion.div variants={itemVariants} className="text-center">
                <h3 className="text-2xl font-bold text-white">Other <span className="text-[#ff7b00]">Projects</span></h3>
              </motion.div>

              <motion.div
                variants={containerVariants}
                className="grid md:grid-cols-2 gap-6"
              >
                {otherProjects.map((project, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="group border border-gray-700/50 rounded-lg overflow-hidden bg-gray-900/30 hover:border-[#ff7b00] hover:bg-gray-900/60 transition-all duration-300 flex flex-col"
                  >
                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="space-y-3 flex-grow">
                        <div>
                          <h3 className="text-xl font-bold text-white group-hover:text-[#ff7b00] transition-colors">
                            {project.title}
                          </h3>
                          {project.type && (
                            <p className="text-xs text-[#ff7b00] font-semibold mt-1 uppercase tracking-widest">
                              {project.type}
                            </p>
                          )}
                        </div>

                        <p className="text-gray-400 text-sm leading-relaxed">
                          {project.description}
                        </p>

                        <div className="space-y-2">
                          <h4 className="text-xs font-semibold text-[#ff7b00] uppercase">
                            Key Features
                          </h4>
                          <ul className="space-y-1">
                            {project.features.slice(0, 3).map((feature, i) => (
                              <li
                                key={i}
                                className="text-xs text-gray-400 flex gap-2"
                              >
                                <span className="text-[#ff7b00] flex-shrink-0">•</span>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex flex-wrap gap-2 pt-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 rounded text-xs bg-orange-500/10 text-gray-300 border border-orange-500/30 hover:border-[#ff7b00] hover:text-[#ff7b00] transition-all"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Buttons */}
                      <div className="flex gap-3 pt-4 border-t border-gray-700/50 mt-4">
                        <Link
                          href={project.github}
                          className="flex-1 flex items-center justify-center gap-2 px-3 py-2 border border-gray-700 rounded hover:border-[#ff7b00] hover:text-[#ff7b00] text-gray-400 transition-all text-sm font-medium"
                        >
                          <Github size={16} />
                          Code
                        </Link>
                        <Link
                          href={project.demo}
                          className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-[#ff7b00] text-white rounded hover:shadow-lg hover:shadow-orange-500/50 transition-all text-sm font-medium"
                        >
                          <ExternalLink size={16} />
                          Demo
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </>
          )}

          {/* Video Modal */}
          {showVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowVideo(false)}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={e => e.stopPropagation()}
                className="w-full max-w-4xl relative"
              >
                <button
                  onClick={() => setShowVideo(false)}
                  className="absolute -top-10 right-0 p-2 text-white hover:text-[#ff7b00] transition-colors z-10"
                >
                  <X size={32} />
                </button>
                <div className="w-full aspect-video rounded-lg overflow-hidden border border-[#ff7b00]/50">
                  <iframe
                    width="100%"
                    height="100%"
                    src={featuredProject?.videoUrl}
                    title="Chanakya: The Mentor - Demo Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
