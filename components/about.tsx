'use client';

import { motion } from 'framer-motion';

export function About() {
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
    <section id="about" className="py-20 md:py-32 px-4 md:px-8 relative">
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
              <span className="text-[#ff7b00]">About</span> Me
            </h2>
            <p className="text-gray-400 text-lg">
              Passionate full-stack developer building scalable solutions with modern tech
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Bio */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Professional Summary</h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  I&apos;m a Java Full Stack Developer with hands-on experience building and deploying scalable REST APIs using Spring Boot. During my internship at The Developers Arena, I built and shipped 12+ full-stack applications, gaining expertise in API development, authentication, deployment, and CI/CD pipelines.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  I&apos;m passionate about clean code, system design, and delivering robust solutions. I was a finalist at IEEE HACKSAGON hackathon and led the backend development for &quot;Chanakya: The Mentor&quot;, an AI-powered career guidance system.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="border border-gray-700/50 rounded-lg p-4 bg-gray-900/30">
                  <p className="text-[#ff7b00] font-bold text-xl">12+</p>
                  <p className="text-gray-400 text-sm">Full Stack Apps</p>
                </div>
                <div className="border border-gray-700/50 rounded-lg p-4 bg-gray-900/30">
                  <p className="text-[#ff7b00] font-bold text-xl">5+</p>
                  <p className="text-gray-400 text-sm">Years Learning</p>
                </div>
              </div>
            </motion.div>

            {/* Right - Education & Achievements */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-[#ff7b00] mb-4">Education</h3>
                <div className="space-y-4">
                  <div className="border-l-2 border-[#ff7b00] pl-4">
                    <p className="font-semibold text-white">MCA - Master of Computer Applications</p>
                    <p className="text-gray-400 text-sm">LNCT Bhopal (2024–2026) | CGPA: 8.47</p>
                  </div>
                  <div className="border-l-2 border-[#ff7b00] pl-4">
                    <p className="font-semibold text-white">BCA - Bachelor of Computer Applications</p>
                    <p className="text-gray-400 text-sm">Devi Ahilya University (2021–2024) | CGPA: 8.48</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#ff7b00] mb-4">Achievements</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3 text-gray-400">
                    <span className="text-[#ff7b00] font-bold">✓</span>
                    <span>Finalist – IEEE HACKSAGON Hackathon, IIIT Gwalior</span>
                  </li>
                  <li className="flex gap-3 text-gray-400">
                    <span className="text-[#ff7b00] font-bold">✓</span>
                    <span>Built 12+ production applications during internship</span>
                  </li>
                  <li className="flex gap-3 text-gray-400">
                    <span className="text-[#ff7b00] font-bold">✓</span>
                    <span>Expert in REST APIs, security, and cloud deployment</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
