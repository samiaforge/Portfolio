
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faArrowUpRightFromSquare,
  faCode,
  faServer,
  faCheck,
} from '@fortawesome/free-solid-svg-icons';

import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { SectionHeader } from '../common/SectionHeader';
import { Button } from '../common/Button';
import { projectsData } from '../../data/projectsData';

export const Projects = () => {
  return (
    <section
      id="projects"
      className="relative py-20 lg:py-28 border-t border-blue-500/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <SectionHeader
          tagline="FEATURED WORK"
          title="Featured Projects"
          subtitle="Real-world full-stack and frontend applications built with Next.js, React, and modern backend architectures."
        />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {projectsData.map((project) => (
            <div
              key={project.id}
              className="rounded-3xl bg-[#0B1120]/80 border border-blue-500/15 hover:border-cyan-400/35 transition-all duration-300 backdrop-blur-md overflow-hidden flex flex-col group shadow-lg hover:shadow-[0_0_30px_rgba(37,99,235,0.15)]"
            >

              <div>

                {/* Project Preview Area */}
                <div className="relative aspect-[16/10] bg-[#070A12] border-b border-blue-500/15 overflow-hidden">

                  {project.liveUrl ? (
                    <div className="absolute inset-0 overflow-hidden bg-[#070A12]">

                      {/* Desktop Website Preview */}
                      <iframe
                        src={project.liveUrl}
                        title={`${project.title} website preview`}
                        className="absolute top-0 left-0 w-[1280px] h-[800px] border-0 pointer-events-none origin-top-left scale-[0.27] sm:scale-[0.28] md:scale-[0.29] lg:scale-[0.30]"
                        loading="lazy"
                        scrolling="no"
                        tabIndex="-1"
                      />

                    </div>
                  ) : (

                    /* Placeholder when live URL is unavailable */
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">

                      <div className="w-14 h-14 rounded-2xl bg-blue-600/15 border border-cyan-400/30 flex items-center justify-center text-cyan-400">
                        <FontAwesomeIcon
                          icon={faCode}
                          className="w-6 h-6"
                        />
                      </div>

                      <p className="text-xs font-mono text-slate-400">
                        {project.imagePlaceholderText}
                      </p>

                    </div>
                  )}

                  {/* Project Category */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-blue-950/90 text-cyan-300 border border-blue-500/30 backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>

                  {/* Project ID */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="text-xs font-mono text-white/70">
                      #{project.id}
                    </span>
                  </div>

                  {/* Preview Label */}
                  <div className="absolute bottom-3 left-3 z-10">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-mono tracking-wider text-white/90 bg-[#070A12]/80 border border-white/10 backdrop-blur-md">
                      WEBSITE PREVIEW
                    </span>
                  </div>

                </div>

                {/* Project Details */}
                <div className="p-6 sm:p-7">

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="mb-6 space-y-2">

                    <p className="text-xs font-mono uppercase tracking-wider text-slate-400">
                      Key Highlights:
                    </p>

                    {project.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 text-xs text-slate-300"
                      >
                        <FontAwesomeIcon
                          icon={faCheck}
                          className="text-cyan-400 text-[10px] mt-0.5 shrink-0"
                        />

                        <span>{feature}</span>
                      </div>
                    ))}

                  </div>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">

                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] px-2.5 py-1 rounded-md bg-slate-900/90 text-slate-300 border border-slate-800"
                      >
                        {tag}
                      </span>
                    ))}

                  </div>

                </div>

              </div>

              {/* Action Buttons Footer */}
              <div className="p-6 sm:p-7 pt-0 border-t border-slate-800/80 flex flex-col gap-2.5 mt-auto">

                {/* BookNook: Separate Client and Server Repositories */}
                {project.id === 'booknook' ? (

                  <div className="grid grid-cols-2 gap-2">

                    {project.githubClient ? (
                      <Button
                        href={project.githubClient}
                        target="_blank"
                        variant="secondary"
                        size="sm"
                        className="w-full text-xs"
                        icon={<FontAwesomeIcon icon={faGithub} />}
                      >
                        Client Repo
                      </Button>
                    ) : (
                      <span className="px-3 py-2 text-[11px] rounded-xl bg-slate-900/60 text-slate-400 border border-dashed border-slate-700 text-center flex items-center justify-center gap-1.5">
                        <FontAwesomeIcon icon={faCode} className="text-[10px]" />
                        Client Repo Pending
                      </span>
                    )}

                    {project.githubServer ? (
                      <Button
                        href={project.githubServer}
                        target="_blank"
                        variant="secondary"
                        size="sm"
                        className="w-full text-xs"
                        icon={<FontAwesomeIcon icon={faServer} />}
                      >
                        Server Repo
                      </Button>
                    ) : (
                      <span className="px-3 py-2 text-[11px] rounded-xl bg-slate-900/60 text-slate-400 border border-dashed border-slate-700 text-center flex items-center justify-center gap-1.5">
                        <FontAwesomeIcon icon={faServer} className="text-[10px]" />
                        Server Repo Pending
                      </span>
                    )}

                  </div>

                ) : (

                  <div>

                    {project.github ? (
                      <Button
                        href={project.github}
                        target="_blank"
                        variant="secondary"
                        size="sm"
                        className="w-full justify-center text-xs"
                        icon={<FontAwesomeIcon icon={faGithub} />}
                      >
                        GitHub Repository
                      </Button>
                    ) : (
                      <span className="w-full px-3 py-2 text-[11px] rounded-xl bg-slate-900/60 text-slate-400 border border-dashed border-slate-700 text-center flex items-center justify-center gap-1.5">
                        <FontAwesomeIcon icon={faGithub} className="text-[10px]" />
                        GitHub Repo Pending
                      </span>
                    )}

                  </div>
                )}

                {/* Live Demo Link */}
                {project.liveUrl ? (
                  <Button
                    href={project.liveUrl}
                    target="_blank"
                    variant="primary"
                    size="sm"
                    className="w-full justify-center text-xs"
                    icon={<FontAwesomeIcon icon={faArrowUpRightFromSquare} />}
                    iconPosition="right"
                  >
                    Live Demo
                  </Button>
                ) : (
                  <span className="w-full px-3 py-2 text-[11px] rounded-xl bg-slate-900/40 text-slate-400 border border-dashed border-slate-800 text-center flex items-center justify-center gap-1.5 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                    Live Demo Pending
                  </span>
                )}

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};
