import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGraduationCap,
  faBuildingColumns,
  faBriefcase,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';
import { SectionHeader } from '../common/SectionHeader';
import { educationData } from '../../data/educationData';

export const Education = () => {
  return (
    <section id="education" className="relative py-20 lg:py-28 border-t border-blue-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          tagline="ACADEMIC & PROFESSIONAL BACKGROUND"
          title="Education & Training"
          subtitle="A solid academic background in business and information systems paired with structured corporate exposure."
        />

        {/* Education & Experience Milestone Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {educationData.map((item, index) => {
            const isDegree = index === 0;

            return (
              <div
                key={item.major}
                className="rounded-3xl p-7 sm:p-8 bg-[#0B1120]/80 border border-blue-500/15 hover:border-cyan-400/35 transition-all duration-300 backdrop-blur-md shadow-lg flex flex-col justify-between group"
              >
                <div>
                  {/* Card Header Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-blue-950/80 border border-blue-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                      <FontAwesomeIcon
                        icon={isDegree ? faGraduationCap : faBriefcase}
                        className="w-5 h-5"
                      />
                    </div>
                    <span className="px-3.5 py-1 rounded-full text-xs font-mono font-medium bg-blue-950/60 text-cyan-300 border border-blue-500/20">
                      {item.badge}
                    </span>
                  </div>

                  {/* Degree / Milestone Title */}
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                    {item.degree}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-cyan-400 font-medium mb-4">
                    <FontAwesomeIcon icon={faBuildingColumns} className="text-xs" />
                    <span>{item.major}</span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Key Highlights / Competencies */}
                  <div className="space-y-2.5 pt-4 border-t border-slate-800/80">
                    <p className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                      Key Competencies & Takeaways:
                    </p>
                    {item.keyTakeaways.map((takeaway, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          className="text-cyan-400 text-xs mt-0.5 shrink-0"
                        />
                        <span>{takeaway}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>Institutional Excellence</span>
                  <span className="text-cyan-400">Verified Credentials</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
