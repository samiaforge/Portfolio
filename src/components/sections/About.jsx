
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCode,
  faRotate,
  faMobileScreenButton,
  faBrain,
} from '@fortawesome/free-solid-svg-icons';
import { SectionHeader } from '../common/SectionHeader';
import { profileData } from '../../data/profileData';

const strengthIcons = {
  'clean-code': faCode,
  'learning-adaptability': faRotate,
  'responsive-design': faMobileScreenButton,
  'problem-solving': faBrain,
};

export const About = () => {
  const { about } = profileData;

  return (
    <section
      id="about"
      className="relative py-20 lg:py-28 border-t border-blue-500/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <SectionHeader
          tagline={about.tagline}
          title="About Me"
          subtitle="How my academic background in Accounting & Information Systems and corporate exposure shape my approach to software engineering."
        />

        {/* About Narrative */}
        <div className="max-w-4xl mx-auto mb-16 space-y-6">
          <p className="text-sm sm:text-base text-slate-300 leading-8">
            {about.paragraphs[0]}
          </p>

          <p className="text-sm sm:text-base text-slate-300 leading-8">
            {about.paragraphs[1]}
          </p>

          <p className="text-sm sm:text-base text-slate-300 leading-8">
            {about.paragraphs[2]}
          </p>
        </div>

        {/* Core Engineering Strengths */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Core Engineering Strengths
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Key principles guiding my daily development workflow and problem solving
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {about.strengths.map((strength) => {
              const icon = strengthIcons[strength.id];

              return (
                <div
                  key={strength.id}
                  className="p-5 rounded-2xl bg-[#090E1A] border border-blue-500/15 hover:border-cyan-400/40 transition-all duration-300 group hover:-translate-y-0.5 shadow-sm flex flex-col"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-950/60 border border-blue-500/25 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-105 transition-transform">
                    {icon && (
                      <FontAwesomeIcon
                        icon={icon}
                        className="w-4 h-4"
                      />
                    )}
                  </div>

                  <h4 className="text-sm sm:text-base font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {strength.title}
                  </h4>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {strength.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
