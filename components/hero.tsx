'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Code2 } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 pt-20 pb-20 relative overflow-hidden"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Main Container with Border */}
      <motion.div
        className="w-full max-w-6xl border border-gray-700/50 rounded-3xl bg-black/50 backdrop-blur-sm p-12 md:p-20"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Section */}
          <motion.div
            className="flex flex-col gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Intro Text */}
            <motion.div variants={itemVariants}>
              <p className="text-gray-400 text-sm font-light">Hi I am</p>
            </motion.div>

            {/* Name */}
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Rocky Pawar
              </h1>
            </motion.div>

            {/* Main Title with Typing Animation */}
            <motion.div variants={itemVariants}>
              <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                <span className="text-[#ff7b00] text-glow inline-block overflow-hidden">
                  <motion.span
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: 'auto' }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                  >
                    Java Full Stack
                  </motion.span>
                </span>
                <br />
                <span className="text-[#ff7b00] text-glow inline-block">
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.5 }}
                  >
                    Developer
                  </motion.span>
                </span>
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-gray-400 text-base leading-relaxed max-w-md"
            >
              Building scalable REST APIs with Spring Boot, crafting interactive UIs with React, and developing AI-based solutions. Passionate about creating elegant code and user experiences.
            </motion.p>

            {/* Social Icons */}
            <motion.div variants={itemVariants} className="flex gap-4 pt-4">
              <Link
                href="https://github.com"
                target="_blank"
                className="p-3 border border-gray-600 rounded-lg hover:border-[#ff7b00] hover:text-[#ff7b00] transition-all duration-300"
              >
                <Github size={20} />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                className="p-3 border border-gray-600 rounded-lg hover:border-[#ff7b00] hover:text-[#ff7b00] transition-all duration-300"
              >
                <Linkedin size={20} />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                className="p-3 border border-gray-600 rounded-lg hover:border-[#ff7b00] hover:text-[#ff7b00] transition-all duration-300"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="https://leetcode.com"
                target="_blank"
                className="p-3 border border-gray-600 rounded-lg hover:border-[#ff7b00] hover:text-[#ff7b00] transition-all duration-300"
              >
                <Code2 size={20} />
              </Link>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex gap-4 pt-4 flex-wrap"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="mailto:rockypawar960@gmail.com"
                  className="px-8 py-3 bg-[#ff7b00] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 inline-block"
                >
                  Hire Me
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/latest%20full%20skills%20resume-8Rua7DjOcQRinCrBSpBmdUM224vGQT.pdf"
                  download="Rocky_Pawar_Resume.pdf"
                  className="px-8 py-3 border border-gray-500 text-white font-semibold rounded-lg hover:border-[#ff7b00] hover:text-[#ff7b00] transition-all duration-300 inline-block"
                >
                  Download CV
                </a>
              </motion.div>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-700/50"
            >
              <motion.div
                className="pt-4"
                whileInView={{ scale: 1.05 }}
                viewport={{ once: true }}
              >
                <motion.p className="text-2xl font-bold text-[#ff7b00]">
                  15+
                </motion.p>
                <p className="text-gray-400 text-sm">Projects</p>
              </motion.div>
              <motion.div
                className="pt-4"
                whileInView={{ scale: 1.05 }}
                viewport={{ once: true }}
              >
                <motion.p className="text-2xl font-bold text-[#ff7b00]">
                  5+
                </motion.p>
                <p className="text-gray-400 text-sm">Certifications</p>
              </motion.div>
              <motion.div
                className="pt-4"
                whileInView={{ scale: 1.05 }}
                viewport={{ once: true }}
              >
                <motion.p className="text-2xl font-bold text-[#ff7b00]">
                  300+
                </motion.p>
                <p className="text-gray-400 text-sm">DSA Problems</p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Section - Profile Image Placeholder */}
          <motion.div
            className="hidden md:flex items-center justify-center"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-full aspect-square">
              {/* Circular glow background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff7b00]/20 to-transparent rounded-full animate-glow"></div>

              {/* Profile Image */}
              <div className="absolute inset-8 bg-gradient-to-br from-gray-800 to-black rounded-full border border-gray-700/50 flex items-center justify-center overflow-hidden">
                <motion.img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-28%20at%209.57.01%20PM-aMHOqm5nch1sw3EzYf9AfEp2yPczOe.jpeg"
                  alt="Rocky Pawar - Java Developer"
                  className="w-full h-full object-cover"
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
