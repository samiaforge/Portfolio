import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faLocationDot,
  faPaperPlane,
  faCopy,
  faCheck,
  faCircleExclamation,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { SectionHeader } from '../common/SectionHeader';
import { Button } from '../common/Button';
import { profileData } from '../../data/profileData';

export const Contact = () => {
  const { contact } = profileData;
  const [copied, setCopied] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState({
    loading: false,
    success: false,
    error: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Client-side validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormStatus({
        loading: false,
        success: false,
        error: 'Please fill in your name, email, and message.',
      });
      return;
    }

    setFormStatus({ loading: true, success: false, error: '' });

    // If user has provided a Formspree Form ID in profileData.js
    if (contact.formspreeId) {
      try {
        const response = await fetch(`https://formspree.io/f/${contact.formspreeId}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setFormStatus({ loading: false, success: true, error: '' });
          setFormData({ name: '', email: '', subject: '', message: '' });
        } else {
          throw new Error('Form submission failed. Please try again or email directly.');
        }
      } catch (err) {
        setFormStatus({
          loading: false,
          success: false,
          error: err.message || 'Error sending message. Please use direct email.',
        });
      }
    } else {
      // Graceful fallback when Formspree endpoint is pending setup:
      // Construct a mailto link with encoded message
      const subject = encodeURIComponent(formData.subject || `Portfolio Message from ${formData.name}`);
      const body = encodeURIComponent(
        `Hi Meheli,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
      );
      window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;

      setFormStatus({
        loading: false,
        success: true,
        error: '',
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  };

  return (
    <section id="contact" className="relative py-20 lg:py-28 border-t border-blue-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          tagline="GET IN TOUCH"
          title="Let's Connect"
          subtitle="Interested in collaborating, discussing frontend/full-stack opportunities, or learning more about my background? Feel free to reach out."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto">
          
          {/* ================= LEFT COLUMN: Direct Contact Info ================= */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="rounded-3xl p-7 sm:p-8 bg-[#0B1120]/80 border border-blue-500/15 backdrop-blur-md shadow-lg space-y-6">
              
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Contact Information
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  I welcome inquiries regarding full-stack and frontend engineering roles, collaborative projects, or technical discussions.
                </p>
              </div>

              {/* Direct Verified Email Card with Copy Button */}
              <div className="p-4 rounded-2xl bg-slate-900/90 border border-blue-500/25 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-xl bg-blue-950/80 border border-blue-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                    <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-[11px] font-mono text-slate-400 uppercase">Direct Email</p>
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-sm font-medium text-white hover:text-cyan-300 transition-colors truncate block"
                    >
                      {contact.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-3 py-2 rounded-xl bg-blue-600/20 hover:bg-blue-600/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono flex items-center gap-1.5 transition-all shrink-0 cursor-pointer active:scale-95"
                  title="Copy email to clipboard"
                >
                  <FontAwesomeIcon icon={copied ? faCheck : faCopy} className="text-xs" />
                  <span>{copied ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-950/60 border border-blue-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                  <FontAwesomeIcon icon={faLocationDot} className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] font-mono text-slate-400 uppercase">Location</p>
                  <p className="text-sm font-medium text-white">{contact.location}</p>
                </div>
              </div>

              {/* Professional Social Links */}
              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                  Online Profiles:
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href={contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-cyan-400 text-slate-300 hover:text-cyan-300 transition-all flex items-center justify-center gap-2 text-xs font-medium"
                  >
                    <FontAwesomeIcon icon={faGithub} className="text-sm" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-blue-400 text-slate-300 hover:text-blue-300 transition-all flex items-center justify-center gap-2 text-xs font-medium"
                  >
                    <FontAwesomeIcon icon={faLinkedin} className="text-sm" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* ================= RIGHT COLUMN: Contact Message Form ================= */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl p-7 sm:p-9 bg-[#0B1120]/80 border border-blue-500/15 backdrop-blur-md shadow-lg">
              <h3 className="text-xl font-bold text-white mb-2">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Fill out the form below to initiate a conversation.
              </p>

              {/* Success Notification */}
              {formStatus.success && (
                <div className="mb-6 p-4 rounded-2xl bg-cyan-950/60 border border-cyan-500/40 text-cyan-200 text-xs flex items-center gap-2.5">
                  <FontAwesomeIcon icon={faCheck} className="text-cyan-400 text-sm shrink-0" />
                  <span>
                    Thank you! Your message inquiry has been prepared/sent. I will respond to you promptly.
                  </span>
                </div>
              )}

              {/* Error Notification */}
              {formStatus.error && (
                <div className="mb-6 p-4 rounded-2xl bg-red-950/60 border border-red-500/40 text-red-200 text-xs flex items-center gap-2.5">
                  <FontAwesomeIcon icon={faCircleExclamation} className="text-red-400 text-sm shrink-0" />
                  <span>{formStatus.error}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono text-slate-300 mb-1.5">
                      Your Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Sarah Jenkins"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-mono text-slate-300 mb-1.5">
                      Your Email <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. sarah@example.com"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition-colors"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-mono text-slate-300 mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Frontend Opportunity / Project Collaboration"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-slate-300 mb-1.5">
                    Message <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    disabled={formStatus.loading}
                    variant="primary"
                    size="md"
                    className="w-full justify-center"
                    icon={<FontAwesomeIcon icon={faPaperPlane} />}
                    iconPosition="right"
                  >
                    {formStatus.loading ? 'Sending Message...' : 'Send Message'}
                  </Button>
                </div>
              </form>

              {/* Transparent Setup Guidance Note */}
              <p className="mt-4 text-[11px] font-mono text-slate-500 text-center">
                Pre-wired for Formspree. Direct email contact is always guaranteed via{' '}
                <span className="text-cyan-400">{contact.email}</span>.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
