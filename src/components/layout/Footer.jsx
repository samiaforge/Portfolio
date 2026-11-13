import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { profileData } from '../../data/profileData';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-blue-500/15 bg-[#05070D]/90 backdrop-blur-md pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a href="#home" className="flex items-center gap-2 text-xl font-bold font-mono text-white mb-2">
              <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white text-xs font-mono">
                M
              </span>
              <span>
                Meheli<span className="text-cyan-400">.</span>
              </span>
            </a>
            <p className="text-xs text-slate-400 max-w-sm">
              Aspiring Frontend / Full-Stack Developer with an analytical foundation in Accounting & Information Systems.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={profileData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-cyan-400 flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-all hover:scale-105"
              aria-label="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} className="w-4 h-4" />
            </a>
            <a
              href={profileData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-blue-400 flex items-center justify-center text-slate-400 hover:text-blue-400 transition-all hover:scale-105"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${profileData.contact.email}`}
              className="w-10 h-10 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-cyan-400 flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-all hover:scale-105"
              aria-label="Email"
            >
              <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4" />
            </a>
          </div>

          {/* Back to top button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-cyan-300 transition-colors px-3 py-2 rounded-lg bg-slate-900/60 border border-slate-800 hover:border-blue-500/30"
          >
            <span>Back to top</span>
            <FontAwesomeIcon icon={faArrowUp} className="w-3 h-3" />
          </button>
        </div>

        {/* Bottom copyright notice */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Meheli Akther Samia. All rights reserved.</p>
          <p className="font-mono text-[11px] text-slate-600">
            Crafted with React, Tailwind CSS & Font Awesome
          </p>
        </div>
      </div>
    </footer>
  );
};
