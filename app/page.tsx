'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiExternalLink, FiCalendar, FiMapPin, FiX, FiFileText, FiAward } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { resumeData } from './data/resume';
import emailjs from '@emailjs/browser';

const roles = [
  "Software Engineer",
  "AI Engineer",
  "LLMOps Engineer",
  "Data Scientist",
  "Full Stack Developer",
  "Machine Learning Engineer"
];

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [selectedItem, setSelectedItem] = useState<{ type: 'project' | 'experience', data: any } | null>(null);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [displayText, setDisplayText] = useState("");
  const [isPaused, setIsPaused] = useState(false);
  const [currentRole, setCurrentRole] = useState(roles[0]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    error: false
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      document.documentElement.style.setProperty('--mouse-x', `${x}%`);
      document.documentElement.style.setProperty('--mouse-y', `${y}%`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (isPaused) {
      timeout = setTimeout(() => {
        setIsPaused(false);
        setIsTyping(true);
      }, 2000);
    } else if (isTyping) {
      if (displayText.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 1500);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 40);
      } else {
        setIsPaused(true);
        timeout = setTimeout(() => {
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          setCurrentRole(roles[(currentRoleIndex + 1) % roles.length]);
        }, 200);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, isPaused, currentRoleIndex, currentRole]);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({ submitting: true, success: false, error: false });

    try {
      await emailjs.send(
        'service_dt9kdu9', // Replace with your EmailJS service ID
        'template_tdlzchu', // Replace with your EmailJS template ID
        {
          name: formData.name,
          email: formData.email,
          title: formData.subject,
          message: formData.message,
          to_email: resumeData.contact.email
        },
        'nTYACt9gVnoS9n8jg' // Replace with your EmailJS public key
      );

      setFormStatus({ submitting: false, success: true, error: false });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setFormStatus({ submitting: false, success: false, error: true });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <>
      <Navbar />
      <div className="water-trail" />
      <main>
        {/* Hero Section */}
        <section className="section flex items-center justify-center min-h-screen">
          <div className="container text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden border-4 border-accent">
                <img
                  src="/images/profile.jpg"
                  alt="Yatiesh Mehta"
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.h1 
                className="heading"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Hi, I'm <span className="text-accent floating">{resumeData.name}</span>
              </motion.h1>
              <motion.div
                className="h-12 mb-4 flex items-center justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <motion.h2
                  className="subheading text-gray-600 dark:text-gray-300 relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.4,
                    ease: [0.4, 0, 0.2, 1]
                  }}
                >
                  {displayText}
                  <motion.span 
                    className="inline-block w-1 h-6 ml-1 bg-accent"
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: [0, 1, 1, 0],
                      transition: {
                        duration: 1,
                        repeat: Infinity,
                        times: [0, 0.1, 0.9, 1]
                      }
                    }}
                  />
                </motion.h2>
              </motion.div>
              <motion.p 
                className="text-lg mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                A passionate mathematics student at the University of Waterloo,
                specializing in Statistics and Combinatorics & Optimization.
                Experienced in AI engineering and software development.
              </motion.p>
              <motion.div 
                className="flex gap-4 justify-center mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <a
                  href="#projects"
                  className="btn btn-primary pulse"
                >
                  View My Work
                </a>
                <a
                  href="#contact"
                  className="btn btn-outline"
                >
                  Contact Me
                </a>
              </motion.div>
              <motion.div 
                className="flex gap-6 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                <a
                  href={resumeData.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-accent transition-colors bounce"
                >
                  <FiGithub />
                </a>
                <a
                  href={resumeData.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-accent transition-colors bounce"
                >
                  <FiLinkedin />
                </a>
                <a
                  href={`mailto:${resumeData.contact.email}`}
                  className="text-2xl hover:text-accent transition-colors bounce"
                >
                  <FiMail />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="section bg-gray-50/50 dark:bg-secondary/50">
          <div className="container">
            <h2 className="heading text-center">Education</h2>
            <div className="grid gap-8">
              {resumeData.education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card p-6"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{edu.institution}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{edu.degree}</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mt-2 md:mt-0">
                      <FiCalendar />
                      <span>{edu.period}</span>
                      <FiMapPin />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                  <ul className="list-disc list-inside space-y-2">
                    {edu.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-600 dark:text-gray-300 flex items-center gap-2">
                        <FiAward className="text-accent" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="section">
          <div className="container">
            <h2 className="heading text-center">Experience</h2>
            <div className="grid gap-8">
              {resumeData.experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="experience-card"
                  onClick={() => setSelectedItem({ type: 'experience', data: exp })}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{exp.position}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{exp.company}</p>
                    </div>
                    <div className="flex flex-col gap-1 text-sm text-gray-500 mt-2 md:mt-0">
                      <div className="flex items-center gap-2">
                        <FiCalendar />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FiMapPin />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <ul className="list-disc list-inside mb-4 space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-600 dark:text-gray-300">
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="skill-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section bg-gray-50/50 dark:bg-secondary/50">
          <div className="container">
            <h2 className="heading text-center">Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resumeData.projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card flex flex-col h-full"
                  onClick={() => setSelectedItem({ type: 'project', data: project })}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={`/images/${project.image}`}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col h-full">
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                      <div className="flex flex-col gap-1 text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                          <FiCalendar />
                          <span>{project.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FiMapPin />
                          <span>{project.location}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech} 
                          className="skill-tag bg-accent/10 dark:bg-accent/15 px-3 py-1 rounded-full text-sm font-normal text-accent/90 dark:text-accent/90"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="mt-auto">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:underline flex items-center gap-1"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FiGithub /> GitHub
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section">
          <div className="container">
            <h2 className="heading text-center">Skills</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {Object.entries(resumeData.skills).map(([category, skills], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card p-6"
                >
                  <h3 className="text-xl font-semibold mb-4 capitalize">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span key={skill} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section bg-gray-50/50 dark:bg-secondary/50">
          <div className="container">
            <h2 className="heading text-center">Get In Touch</h2>
            <div className="max-w-2xl mx-auto">
              <p className="text-lg mb-8 text-center">
                I'm always open to new opportunities and collaborations.
                Feel free to reach out!
              </p>
              <form className="space-y-6" onSubmit={handleFormSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="Your message here..."
                  />
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    disabled={formStatus.submitting}
                    className={`btn btn-primary ${formStatus.submitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {formStatus.submitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
                {formStatus.success && (
                  <p className="text-green-500 text-center">Message sent successfully!</p>
                )}
                {formStatus.error && (
                  <p className="text-red-500 text-center">Failed to send message. Please try again.</p>
                )}
              </form>
              <div className="mt-8 flex flex-wrap gap-4 justify-center">
                <a
                  href={resumeData.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline flex items-center gap-2"
                >
                  <FiLinkedin />
                  LinkedIn
                </a>
                <a
                  href={resumeData.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline flex items-center gap-2"
                >
                  <FiGithub />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Modal */}
        {selectedItem && (
          <div className="modal" onClick={() => setSelectedItem(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold">
                  {selectedItem.type === 'project' ? selectedItem.data.title : selectedItem.data.position}
                </h2>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                >
                  <FiX size={24} />
                </button>
              </div>
              {selectedItem.type === 'project' ? (
                <>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 mb-4">
                    <FiCalendar />
                    <span>{selectedItem.data.period}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {selectedItem.data.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedItem.data.technologies.map((tech: string) => (
                      <span key={tech} className="skill-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={selectedItem.data.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      View on GitHub
                    </a>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 mb-4">
                    <FiCalendar />
                    <span>{selectedItem.data.period}</span>
                    <FiMapPin />
                    <span>{selectedItem.data.location}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {selectedItem.data.company}
                  </p>
                  <ul className="list-disc list-inside mb-4 space-y-2">
                    {selectedItem.data.description.map((item: string, index: number) => (
                      <li key={index} className="text-gray-600 dark:text-gray-300">
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {selectedItem.data.technologies.map((tech: string) => (
                      <span key={tech} className="skill-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </main>
    </>
  );
} 