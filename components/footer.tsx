'use client';

import Link from 'next/link';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { useState } from 'react';

export function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="border-t border-gray-700/50 bg-black py-16 px-4 md:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold text-[#ff7b00] mb-2">ROCKY</h3>
            <p className="text-gray-400 text-sm">Java Full Stack Developer</p>
            <p className="text-gray-500 text-xs mt-2">Building scalable solutions with modern tech</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {[
                { href: '#home', label: 'Home' },
                { href: '#about', label: 'About' },
                { href: '#projects', label: 'Projects' },
                { href: '#contact', label: 'Contact' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-400 hover:text-[#ff7b00] transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Follow Me</h4>
            <div className="space-y-2">
              <Link
                href="https://github.com/rockypawar960"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-[#ff7b00] transition-colors text-sm"
              >
                <Github size={16} />
                GitHub
              </Link>
              <Link
                href="https://linkedin.com/in/rockypawar960"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-[#ff7b00] transition-colors text-sm"
              >
                <Linkedin size={16} />
                LinkedIn
              </Link>
              <Link
                href="mailto:rockypawar960@gmail.com"
                className="flex items-center gap-2 text-gray-400 hover:text-[#ff7b00] transition-colors text-sm"
              >
                <Mail size={16} />
                Email
              </Link>
            </div>
          </div>

          {/* Contact CTA */}
          <div>
            <h4 className="text-white font-semibold mb-4">Get in Touch</h4>
            <p className="text-gray-400 text-sm mb-4">
              Let&apos;s discuss your next project
            </p>
            <Link
              href="mailto:rockypawar960@gmail.com"
              className="inline-block px-4 py-2 bg-[#ff7b00] text-white text-sm font-semibold rounded-lg hover:shadow-lg hover:shadow-orange-500/50 transition-all"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700/50 pt-8">
          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © 2026 Rocky Pawar. All rights reserved.
              </p>
              <p className="text-gray-600 text-xs mt-1">
                Designed & Built with ❤️ using Next.js, React & Tailwind CSS
              </p>
            </div>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="p-3 border border-gray-700/50 rounded-lg bg-gray-900/30 hover:border-[#ff7b00] hover:bg-gray-900/60 transition-all duration-300 group"
              aria-label="Back to top"
            >
              <ArrowUp
                size={20}
                className="text-gray-400 group-hover:text-[#ff7b00] transition-colors"
              />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
