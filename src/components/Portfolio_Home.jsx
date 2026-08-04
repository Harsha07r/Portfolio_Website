import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ExternalLink, Menu, X, ArrowRight } from 'lucide-react';

export default function PortfolioHome() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: 'StudyCopilot AI',
      subtitle: 'Retrieval-Augmented Generation Learning Platform',
      description: 'AI-powered study assistant that enables users to upload PDFs and receive context-aware answers using advanced RAG technology.',
      fullDescription: 'Built with LangChain RAG pipeline, Groq LLM APIs, and semantic embeddings for hallucination-reduced responses. Users can upload study materials and get intelligent, document-grounded answers.',
      tech: ['React.js', 'Node.js', 'LangChain', 'Groq API', 'RAG', 'MongoDB'],
      features: ['PDF Upload', 'Semantic Search', 'AI Q&A', 'Context Awareness'],
      liveLink: 'https://studycopilot-ai.vercel.app/',
      githubLink: 'https://github.com/Harsha07r/StudyCopilot',
      imagePosition: 'left'
    },
    {
      id: 2,
      title: 'AQUAH-CC',
      subtitle: 'AI-Powered Climate Decision Support System',
      description: 'Interactive dashboard for river discharge forecasting with multilingual voice AI and real-time climate intelligence.',
      fullDescription: 'Node.js backend integrates Gemini API with ML prediction models. React dashboard provides 6-7 day forecasts, flood risk assessment, and crop recommendations. Achieved NSE = 0.93 accuracy.',
      tech: ['React.js', 'Node.js', 'Gemini API', 'Firebase Auth', 'Web Speech API', 'ML'],
      features: ['Forecasting', 'Voice AI', 'Multilingual', 'Real-time Data'],
      liveLink: 'https://aquah-cc.vercel.app/',
      githubLink: 'https://github.com/Harsha07r/AQUAH-CC',
      imagePosition: 'right'
    },
    {
      id: 3,
      title: 'Travel Booking Platform',
      subtitle: 'Full-Stack MERN Travel Booking System',
      description: 'Complete travel booking platform with dynamic tour packages, JWT authentication, and admin dashboard.',
      fullDescription: 'Built with React, Express, MongoDB, and Node.js. Implements JWT-based authentication and REST APIs for secure client-server communication. Admin dashboard for complete CRUD operations.',
      tech: ['React.js', 'Express.js', 'MongoDB', 'Node.js', 'JWT Auth', 'Bootstrap'],
      features: ['Tour Browsing', 'Booking System', 'Admin Panel', 'Authentication'],
      liveLink: 'https://travel-booking-platform.vercel.app/',
      githubLink: 'https://github.com/Harsha07r/Travel-Booking-Platform',
      imagePosition: 'left'
    },
    {
      id: 4,
      title: 'Audio Upload App',
      subtitle: 'Modern Audio File Management Application',
      description: 'Clean, intuitive interface for uploading and managing audio files with cloud storage.',
      fullDescription: 'Built with React and Vite for optimal performance, Firebase for reliable storage, and Tailwind CSS for responsive design. Provides seamless audio file management experience.',
      tech: ['React.js', 'Vite', 'Firebase', 'Tailwind CSS', 'JavaScript', 'Cloud Storage'],
      features: ['File Upload', 'Cloud Storage', 'Responsive Design', 'Modern UI'],
      liveLink: 'https://audio-upload-app-pi.vercel.app/',
      githubLink: 'https://github.com/Harsha07r/Audio_Upload_App',
      imagePosition: 'right'
    }
  ];

  const skills = [
    { category: 'Languages', items: ['C++', 'JavaScript', 'Python', 'Java', 'C'] },
    { category: 'Frontend', items: ['React.js', 'Next.js', 'Tailwind CSS', 'Vite'] },
    { category: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs'] },
    { category: 'AI/ML', items: ['LangChain', 'RAG', 'Groq API', 'Gemini API'] },
    { category: 'Databases', items: ['MongoDB', 'MySQL', 'Firebase'] },
    { category: 'Tools', items: ['Git', 'GitHub', 'Vercel', 'VS Code'] }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Sora:wght@600;700;800&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-gray-200/50 bg-white/95"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <motion.div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" style={{ fontFamily: "'Sora', sans-serif" }}>
            HA
          </motion.div>

          <ul className="hidden md:flex gap-12 text-sm font-medium">
            {['Projects', 'About', 'Skills', 'Contact'].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="text-gray-600 hover:text-blue-600 transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="md:hidden bg-white border-t border-gray-200">
            <ul className="flex flex-col gap-4 p-6">
              {['Projects', 'About', 'Skills', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-gray-600 hover:text-blue-600">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-40 pb-32 px-6 max-w-7xl mx-auto">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-8">
          <motion.div variants={fadeInUp} className="space-y-4 max-w-3xl">
            <div className="inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold border border-blue-200">
              👨‍💻 Full Stack Developer & AI Engineer
            </div>
            <h1 className="text-7xl md:text-8xl font-bold text-gray-900" style={{ fontFamily: "'Sora', sans-serif", lineHeight: '1.1' }}>
              Harsha Alapati
            </h1>
            <p className="text-2xl text-gray-600 font-medium">
              Building AI-powered products with React, Node.js & modern tech
            </p>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
              Full Stack Developer from NIT Srinagar. Passionate about creating scalable solutions and meaningful products that solve real problems with AI integration.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex gap-4 pt-4">
            <a
              href="#projects"
              className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 flex items-center gap-2"
            >
              View My Work <ArrowRight size={20} />
            </a>
            <a
              href="mailto:harshaalapati1324@gmail.com"
              className="px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-lg font-semibold hover:bg-gray-50 transition-all"
            >
              Get in Touch
            </a>
          </motion.div>

          <motion.div variants={fadeInUp} className="pt-8 flex gap-6">
            <a href="https://github.com/Harsha07r" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2">
              <Github size={20} /> GitHub
            </a>
            <a href="https://linkedin.com/in/harsha-alapati" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2">
              <Linkedin size={20} /> LinkedIn
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="space-y-4 mb-20">
            <motion.h2 variants={fadeInUp} className="text-5xl font-bold text-gray-900" style={{ fontFamily: "'Sora', sans-serif" }}>
              Featured Projects
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-600">
              Building products that matter with cutting-edge technology
            </motion.p>
          </motion.div>

          <div className="space-y-24">
            {projects.map((project, index) => (
              <motion.div key={project.id} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="group">
                <div className={`grid md:grid-cols-2 gap-12 items-center`}>
                  {/* Project Screenshot Area */}
                  <motion.div
                    variants={fadeInUp}
                    className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 border border-gray-300 aspect-square md:aspect-auto md:h-96 flex items-center justify-center group-hover:shadow-2xl transition-all duration-300"
                  >
                    <img 
  src={`/images/${
    project.id === 1 ? 'studycopilot' : 
    project.id === 2 ? 'aquahcc' : 
    project.id === 3 ? 'travel-booking' : 
    'audio-upload'
  }.png`}
  alt={project.title}
  className="w-full h-full object-cover"
/>
                  </motion.div>

                  {/* Project Info */}
                  <motion.div variants={fadeInUp} className="space-y-6">
                    <div className="space-y-3">
                      <h3 className="text-4xl font-bold text-gray-900" style={{ fontFamily: "'Sora', sans-serif" }}>
                        {project.title}
                      </h3>
                      <p className="text-blue-600 font-semibold text-lg">{project.subtitle}</p>
                      <p className="text-gray-600 text-lg leading-relaxed">{project.fullDescription}</p>
                    </div>

                    {/* Key Features */}
                    <div className="space-y-3">
                      <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Key Features</p>
                      <div className="grid grid-cols-2 gap-3">
                        {project.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-2 text-gray-700">
                            <div className="w-2 h-2 bg-blue-600 rounded-full" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="space-y-3">
                      <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Tech Stack</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <span key={i} className="px-4 py-2 bg-blue-50 text-blue-700 text-sm font-semibold rounded-full border border-blue-200">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-4 pt-4">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all flex items-center gap-2"
                      >
                        <ExternalLink size={18} /> Live Demo
                      </a>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-lg font-semibold hover:bg-gray-50 transition-all flex items-center gap-2"
                      >
                        <Github size={18} /> View Code
                      </a>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-2 gap-16">
            <motion.div variants={fadeInUp} className="space-y-6">
              <h2 className="text-5xl font-bold text-gray-900" style={{ fontFamily: "'Sora', sans-serif" }}>
                About Me
              </h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>B.Tech graduate in Information Technology from NIT Srinagar with hands-on experience building AI-powered applications using the MERN stack.</p>
                <p>At Bluestock Fintech, I led a 3-member frontend team delivering real-time financial platforms with 100% sprint completion.</p>
                <p>I specialize in building full-stack applications with AI integration, focusing on RAG systems and scalable architectures.</p>
              </div>

              <div className="pt-4 space-y-3">
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Education</p>
                <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                  <p className="font-bold text-gray-900 text-lg">B.Tech Information Technology</p>
                  <p className="text-gray-600">NIT Srinagar</p>
                  <p className="text-gray-400 text-sm mt-2">Sept 2022 – July 2026</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-12 border-2 border-gray-200 flex items-center justify-center min-h-96">
              <div className="text-center">
                <div className="text-8xl mb-4">👨‍💻</div>
                <p className="text-gray-700 font-semibold text-lg">Full Stack Developer</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="space-y-12">
            <motion.h2 variants={fadeInUp} className="text-5xl font-bold text-gray-900" style={{ fontFamily: "'Sora', sans-serif" }}>
              Technical Skills
            </motion.h2>

            <motion.div variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((skillGroup, index) => (
                <motion.div key={index} variants={fadeInUp} className="bg-white rounded-2xl border-2 border-gray-200 p-8 hover:border-blue-300 hover:shadow-lg transition-all">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-3">
                    {skillGroup.items.map((skill, i) => (
                      <span key={i} className="px-4 py-2 bg-blue-50 text-blue-700 text-sm font-semibold rounded-full border border-blue-200">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="space-y-12">
            <motion.div variants={fadeInUp} className="space-y-4">
              <h2 className="text-5xl font-bold text-gray-900" style={{ fontFamily: "'Sora', sans-serif" }}>
                Let's Work Together
              </h2>
              <p className="text-xl text-gray-600">Open to new opportunities. Reach out!</p>
            </motion.div>

            <motion.div variants={staggerContainer} className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Mail, label: 'Email', value: 'harshaalapati1324@gmail.com', link: 'mailto:harshaalapati1324@gmail.com' },
                { icon: Github, label: 'GitHub', value: '@Harsha07r', link: 'https://github.com/Harsha07r' },
                { icon: Linkedin, label: 'LinkedIn', value: 'Connect', link: 'https://linkedin.com/in/harsha-alapati' }
              ].map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <motion.a key={index} variants={fadeInUp} href={contact.link} target={contact.link.startsWith('http') ? '_blank' : undefined} rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined} className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-blue-300 hover:shadow-lg transition-all group">
                    <div className="mb-4 w-14 h-14 rounded-lg bg-blue-50 flex items-center justify-center">
                      <IconComponent size={28} className="text-blue-600" />
                    </div>
                    <p className="text-sm font-semibold text-gray-500 uppercase mb-2">{contact.label}</p>
                    <p className="font-bold text-gray-900">{contact.value}</p>
                  </motion.a>
                );
              })}
            </motion.div>

            <motion.div variants={fadeInUp} className="pt-8">
              <p className="text-lg text-gray-600 font-semibold mb-2">Phone</p>
              <a href="tel:+919103582173" className="text-3xl font-bold text-gray-900 hover:text-blue-600">
                +91 9103582173
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center text-gray-600 text-sm">
          <p>© 2026 Harsha Alapati. Built with React & Framer Motion.</p>
        </div>
      </footer>
    </div>
  );
}