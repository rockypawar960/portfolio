'use client';

import { motion } from 'framer-motion';
import { Award, Download } from 'lucide-react';

const certifications = [
  {
    title: 'Mastering Java Fundamentals',
    issuer: 'Scaler',
    date: 'Jan 2025',
    description: 'Comprehensive Java course covering core fundamentals and best practices',
    icon: '☕',
    pdfUrl: 'https://moonshot.scaler.com/s/sl/S3raExQD-R?_gl=1*t3gppa*_gcl_au*MTA2MTEzMTAx',
  },
  {
    title: 'REST API with Spring Boot',
    issuer: 'Infosys Springboard',
    date: 'May 2025',
    description: 'Building production-ready REST APIs with Java Spring Boot framework',
    icon: '🚀',
    pdfUrl: 'https://verify.onwingspan.com',
  },
  {
    title: 'AWS Cloud Fundamentals',
    issuer: 'AWS Academy',
    date: 'Jul 2025',
    description: 'Cloud foundations and AWS services (20 hours of training)',
    icon: '☁️',
    pdfUrl: 'https://www.credly.com/go/eXqm3JpU',
  },
  {
    title: 'Hackathon Finalist',
    issuer: 'IEEE HACKSAGON - IIIT Gwalior',
    date: '2025',
    description: 'Finalist in prestigious hackathon for AI-powered career guidance system',
    icon: '🏆',
    pdfUrl: '#',
  },
  {
    title: 'Full Stack Development',
    issuer: 'The Developers Arena',
    date: 'Dec 2025 - Mar 2026',
    description: 'Intensive internship building 12+ full-stack applications with deployment',
    icon: '💼',
    pdfUrl: '#',
  },
];

export function Certifications() {
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
    <section id="certifications" className="py-20 md:py-32 px-4 md:px-8 relative">
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
              <span className="text-[#ff7b00]">Certifications</span> & Credentials
            </h2>
            <p className="text-gray-400 text-lg">
              Professional certifications and training achievements
            </p>
          </motion.div>

          {/* Certifications Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group"
              >
                <a
                  href={cert.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-80 border border-gray-700/50 rounded-lg bg-gradient-to-br from-gray-900/50 to-black/50 hover:border-[#ff7b00] hover:bg-gradient-to-br hover:from-gray-900 hover:to-gray-800/50 transition-all duration-300 p-6 flex flex-col justify-between relative overflow-hidden group"
                >
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#ff7b00]/0 to-[#ff7b00]/0 group-hover:from-[#ff7b00]/10 group-hover:to-[#ff7b00]/5 transition-all duration-300"></div>

                  <div className="relative z-10 space-y-4 flex flex-col h-full">
                    {/* Icon and Title */}
                    <div className="space-y-3">
                      <div className="text-5xl">{cert.icon}</div>
                      <div>
                        <h3 className="text-lg font-bold text-white group-hover:text-[#ff7b00] transition-colors text-left">
                          {cert.title}
                        </h3>
                      </div>
                    </div>

                    {/* Description and Details */}
                    <div className="flex-grow space-y-3">
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {cert.description}
                      </p>
                    </div>

                    {/* Footer with issuer and date */}
                    <div className="pt-4 border-t border-gray-700/50 space-y-3">
                      <div>
                        <p className="text-gray-500 text-xs">{cert.issuer}</p>
                        <p className="text-gray-600 text-xs">{cert.date}</p>
                      </div>
                      <div className="flex items-center gap-2 text-[#ff7b00] text-xs font-semibold group-hover:gap-3 transition-all">
                        <Download size={14} />
                        <span>View Certificate</span>
                      </div>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
