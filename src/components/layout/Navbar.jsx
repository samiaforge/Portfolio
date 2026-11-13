import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileArrowDown, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../common/Button';
import { profileData } from '../../data/profileData';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#070A12]/85 backdrop-blur-md border-b border-blue-500/15 py-3 shadow-[0_4px_25px_rgba(0,0,0,0.4)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2 group text-xl sm:text-2xl font-bold tracking-tight text-white"
          >
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white text-sm font-mono shadow-[0_0_12px_rgba(59,130,246,0.4)] group-hover:scale-105 transition-transform">
              M
            </span>
            <span className="font-mono">
              Meheli<span className="text-cyan-400">.</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#0B1120]/70 border border-blue-500/15 px-3 py-1.5 rounded-full backdrop-blur-md">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-600/30 text-cyan-300 border border-cyan-500/30 shadow-[0_0_12px_rgba(6,182,212,0.2)]'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Download Resume */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              href={profileData.resumeUrl}
              download
              target="_blank"
              variant="secondary"
              size="sm"
              icon={<FontAwesomeIcon icon={faFileArrowDown} className="text-cyan-400" />}
            >
              Resume
            </Button>
          </div>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-slate-900/80 border border-blue-500/20 text-slate-300 hover:text-white hover:border-cyan-400 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            <FontAwesomeIcon icon={mobileMenuOpen ? faXmark : faBars} className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 rounded-2xl bg-[#0B1120]/95 border border-blue-500/20 backdrop-blur-xl shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col gap-1.5">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-blue-600/30 text-cyan-300 border border-cyan-500/30'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                    }`}
                  >
                    {item.name}
                  </a>
                );
              })}
              <div className="pt-2 mt-1 border-t border-slate-800">
                <Button
                  href={profileData.resumeUrl}
                  download
                  target="_blank"
                  variant="primary"
                  size="sm"
                  className="w-full justify-center"
                  icon={<FontAwesomeIcon icon={faFileArrowDown} />}
                >
                  Download Resume
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
