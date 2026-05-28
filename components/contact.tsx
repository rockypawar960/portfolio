'use client';

import { Mail, Linkedin, Github, MessageSquare } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export function Contact() {
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

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'rockypawar960@gmail.com',
      href: 'mailto:rockypawar960@gmail.com',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'rockypawar960',
      href: 'https://linkedin.com/in/rockypawar960',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'rockypawar960',
      href: 'https://github.com/rockypawar960',
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 px-4 md:px-8 relative">
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
              Let&apos;s <span className="text-[#ff7b00]">Connect</span>
            </h2>
            <p className="text-gray-400 text-lg">
              I&apos;m always interested in hearing about new opportunities and projects
            </p>
          </motion.div>

          {/* Contact Cards */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-6"
          >
            {contactMethods.map((method, idx) => {
              const Icon = method.icon;
              return (
                <motion.div key={idx} variants={itemVariants}>
                  <Link href={method.href} target={method.href.startsWith('http') ? '_blank' : undefined}>
                    <div className="border border-gray-700/50 rounded-lg p-8 bg-gray-900/30 hover:border-[#ff7b00] hover:bg-gray-900/60 transition-all duration-300 h-full flex flex-col items-center text-center group cursor-pointer">
                      <div className="p-4 rounded-lg bg-orange-500/10 group-hover:bg-orange-500/20 transition-colors mb-4">
                        <Icon className="w-8 h-8 text-[#ff7b00]" />
                      </div>
                      <p className="text-gray-400 text-sm mb-2">{method.label}</p>
                      <p className="font-semibold text-white group-hover:text-[#ff7b00] transition-colors break-all">
                        {method.value}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            variants={itemVariants}
            className="border border-gray-700/50 rounded-lg p-12 bg-gradient-to-br from-gray-900/50 to-black/50 text-center hover:border-[#ff7b00] transition-all duration-300"
          >
            <MessageSquare className="w-12 h-12 text-[#ff7b00] mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to work together?
            </h3>
            <p className="text-gray-400 mb-6 max-w-md mx-auto">
              Whether you have a project in mind or just want to say hello, feel free to get in touch. I&apos;m always open to discussing new ideas and opportunities.
            </p>
            <motion.a
              href="mailto:rockypawar960@gmail.com"
              className="inline-block px-8 py-3 bg-[#ff7b00] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-orange-500/50 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Me an Email
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
