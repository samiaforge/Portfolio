
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFileArrowDown,
  faArrowRight,
  faEnvelope,
  faBolt,
  faDatabase,
} from '@fortawesome/free-solid-svg-icons';
import {
  faReact,
  faJs,
  faCss3Alt,
  faNodeJs,
} from '@fortawesome/free-brands-svg-icons';

import { Button } from '../common/Button';
import { profileData } from '../../data/profileData';

// Map tech stack icon strings to Font Awesome icons
const techIconsMap = {
  react: faReact,
  bolt: faBolt,
  js: faJs,
  'css3-alt': faCss3Alt,
  'node-js': faNodeJs,
  database: faDatabase,
};

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex items-center min-h-screen pt-28 pb-16 sm:pt-32 lg:pt-28 lg:pb-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-12 items-center">

          {/* LEFT COLUMN: Text & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left order-1 min-w-0 w-full">

            {/* Professional Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-3.5 rounded-full text-[11px] sm:text-xs font-mono font-medium tracking-wide bg-blue-950/60 border border-blue-500/25 text-cyan-300 mb-5 sm:mb-6 backdrop-blur-md shadow-sm max-w-full">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shrink-0" />
              <span>{profileData.badge}</span>
            </div>

            {/* Greeting */}
            <p className="text-base sm:text-lg lg:text-xl font-medium text-slate-400 mb-2 font-mono">
              {profileData.greeting}
            </p>

            {/* Full Name */}
            <h1 className="text-3xl min-[400px]:text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-white mb-3 leading-tight break-words max-w-full">
              <span className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
                {profileData.name}
              </span>
            </h1>

            {/* Professional Role */}
            <h2 className="text-lg min-[400px]:text-xl sm:text-2xl xl:text-3xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-300 bg-clip-text text-transparent mb-5 leading-snug">
              {profileData.role}
            </h2>

            {/* Introduction */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-300/90 leading-relaxed max-w-2xl mb-7 sm:mb-8">
              {profileData.intro}
            </p>

            {/* Download Resume */}
            <div className="mb-4 w-full sm:w-auto">
              <Button
                href={profileData.resumeUrl}
                download
                variant="primary"
                size="lg"
                className="w-full sm:w-auto justify-center"
                icon={
                  <FontAwesomeIcon
                    icon={faFileArrowDown}
                    className="text-white text-lg"
                  />
                }
              >
                Download Resume
              </Button>
            </div>

            {/* Secondary CTA Buttons */}
            <div className="flex flex-col min-[400px]:flex-row items-stretch min-[400px]:items-center gap-3.5 mb-9 sm:mb-10 w-full sm:w-auto">

              <Button
                href="#projects"
                variant="secondary"
                size="md"
                className="w-full min-[400px]:w-auto justify-center"
                icon={
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="text-cyan-400 text-xs"
                  />
                }
                iconPosition="right"
              >
                Explore Projects
              </Button>

              <Button
                href="#contact"
                variant="outline"
                size="md"
                className="w-full min-[400px]:w-auto justify-center"
                icon={
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-blue-400 text-xs"
                  />
                }
              >
                Contact Me
              </Button>

            </div>

            {/* Core Tech Stack */}
            <div className="pt-5 sm:pt-6 border-t border-slate-800/80 w-full">

              <p className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                <span>Core Tech Stack</span>
              </p>

              <div className="flex flex-wrap gap-2">
                {profileData.coreTechStack.map((tech) => {
                  const icon = techIconsMap[tech.icon];

                  return (
                    <span
                      key={tech.name}
                      className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1.5 rounded-lg text-[11px] sm:text-xs font-medium bg-[#0B1120] text-slate-300 border border-slate-800 hover:border-blue-500/40 hover:text-white transition-colors shadow-sm"
                    >
                      {icon && (
                        <FontAwesomeIcon
                          icon={icon}
                          className="text-cyan-400 w-3.5 h-3.5"
                        />
                      )}
                      <span>{tech.name}</span>
                    </span>
                  );
                })}
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: Responsive Professional Portrait */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end items-center order-2 w-full">

            <div className="
              relative
              w-full
              max-w-[250px]
              min-[400px]:max-w-[280px]
              sm:max-w-[320px]
              md:max-w-[350px]
              lg:max-w-[370px]
              xl:max-w-[420px]
              aspect-[4/5]
            ">

              {/* Subtle Blue-Cyan Ambient Glow */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-blue-600/20 to-cyan-400/20 blur-3xl opacity-60" />

              {/* Portrait Image */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden">

                <img
                  src={profileData.portraitUrl}
                  alt={profileData.name}
                  loading="eager"
                  fetchPriority="high"
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-[1.02]"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = '/images/portrait-placeholder.svg';
                  }}
                />

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
