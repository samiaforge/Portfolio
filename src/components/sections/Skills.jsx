import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBolt,
  faCode,
  faServer,
  faDatabase,
  faShieldHalved,
  faLaptopCode,
  faPaperPlane,
  faCloudArrowUp,
} from '@fortawesome/free-solid-svg-icons';
import {
  faReact,
  faJs,
  faHtml5,
  faCss3Alt,
  faCss3,
  faNodeJs,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { SectionHeader } from '../common/SectionHeader';
import { skillsCategories, skillsData } from '../../data/skillsData';

const iconMap = {
  react: faReact,
  bolt: faBolt,
  js: faJs,
  code: faCode,
  'css3-alt': faCss3Alt,
  css3: faCss3,
  html5: faHtml5,
  'node-js': faNodeJs,
  server: faServer,
  database: faDatabase,
  'shield-halved': faShieldHalved,
  github: faGithub,
  'laptop-code': faLaptopCode,
  'paper-plane': faPaperPlane,
  'cloud-arrow-up': faCloudArrowUp,
};

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills =
    activeCategory === 'all'
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="relative py-20 lg:py-28 border-t border-blue-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          tagline="TECHNICAL ARSENAL"
          title="My Skills"
          subtitle="The technologies, libraries, and developer tools I leverage to build fast, responsive, and maintainable web applications."
        />

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {skillsCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-[0_0_16px_rgba(6,182,212,0.35)]'
                    : 'bg-[#0B1120] text-slate-400 border border-slate-800 hover:border-blue-500/30 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredSkills.map((skill) => {
            const icon = iconMap[skill.iconName];

            return (
              <div
                key={skill.name}
                className="p-5 rounded-2xl bg-[#0B1120]/80 border border-blue-500/15 hover:border-cyan-400/35 transition-all duration-300 group hover:-translate-y-1 shadow-sm backdrop-blur-sm flex flex-col justify-between"
              >
                <div>
                  {/* Top row: Icon and category dot */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                      {icon && (
                        <FontAwesomeIcon icon={icon} className={skill.iconColor} />
                      )}
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-900/60 text-slate-400 border border-slate-800">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      {skill.categoryLabel}
                    </span>
                  </div>

                  {/* Skill Title & Description */}
                  <h3 className="text-base font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {skill.description}
                  </p>
                </div>

                {/* Practical Tags */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80">
                  {skill.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-950/40 text-cyan-300 border border-blue-500/15"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
