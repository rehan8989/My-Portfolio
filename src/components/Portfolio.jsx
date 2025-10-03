import React, { useState, useEffect } from 'react';
import { 
  Code, Palette, Smartphone, Cloud, Database, FileText, 
  Github, Linkedin, Instagram, Mail, X, ChevronLeft, ChevronRight,
  Pencil, Layers, Terminal, Rocket, Award, Users, Clock, Briefcase 
} from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const services = [
  { 
    icon: <Code className="w-8 h-8" />, 
    title: 'Web Development', 
    description: 'Building responsive and modern websites using HTML, CSS, JavaScript, and React. Experience in developing company websites and interactive web applications.' 
  },
  { 
    icon: <Cloud className="w-8 h-8" />, 
    title: 'Cloud Solutions', 
    description: 'AWS Cloud Foundations certified. Developing cloud-based applications and intelligent frameworks for mobile cloud services with QoE optimization.' 
  },
  { 
    icon: <Database className="w-8 h-8" />, 
    title: 'Blockchain Development', 
    description: 'Building decentralized applications and smart contracts. Experience in certificate verification systems using blockchain technology.' 
  },
  { 
    icon: <Terminal className="w-8 h-8" />, 
    title: 'Python Development', 
    description: 'Expertise in Python programming for AI/ML projects, problem-solving, and diverse applications using various libraries and frameworks.' 
  },
  { 
    icon: <Smartphone className="w-8 h-8" />, 
    title: 'IoT Solutions', 
    description: 'Developing IoT systems with ESP32-CAM microcontrollers for real-time monitoring, surveillance, and hardware integration projects.' 
  },
  { 
    icon: <FileText className="w-8 h-8" />, 
    title: 'Full-Stack Development', 
    description: 'End-to-end web application development with frontend and backend technologies. Experience in building complete web solutions from concept to deployment.' 
  }
];

  const projects = [
  { 
    id: 1, 
    title: 'DigiCertify', 
    category: 'Blockchain', 
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80',
    description: 'A decentralized certificate issuance system using blockchain technology for secure and tamper-proof digital credentials verification.',
    technologies: ['Blockchain', 'Smart Contracts', 'Web3.js', 'React'],
    liveLink: '#',
    codeLink: '#'
  },
  { 
    id: 2, 
    title: 'MobCloudX', 
    category: 'AI/Cloud', 
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
    description: 'Intelligent QoE management framework for mobile cloud services, enabling real-time monitoring, adaptive resource allocation, and seamless user experience optimization across dynamic mobile networks using AI-driven techniques.',
    technologies: ['AI/ML', 'Cloud Computing', 'Python', 'QoE Optimization'],
    liveLink: '#',
    codeLink: '#'
  },
  { 
    id: 3, 
    title: 'Acaira Technologies Website', 
    category: 'Web Development', 
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    description: 'Official company website developed with modern web technologies, featuring responsive design and interactive elements.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    liveLink: 'http://acairaae.acairatest.in/',
    codeLink: '#'
  },
  { 
    id: 4, 
    title: 'Emotion Based Music Player', 
    category: 'AI/ML', 
    image: 'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=800&q=80',
    description: 'AI-powered music recommendation system that suggests playlists based on user emotions detected through facial recognition.',
    technologies: ['Python', 'Flutter', 'AI/ML', 'OpenCV'],
    liveLink: '#',
    codeLink: '#'
  },
  { 
    id: 5, 
    title: 'Mini Web Utilities', 
    category: 'Web App', 
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
    description: 'Collection of useful web tools including password generator and currency converter built with React and modern JavaScript.',
    technologies: ['React', 'JavaScript', 'CSS', 'API Integration'],
    liveLink: '#',
    codeLink: '#'
  },
  { 
    id: 6, 
    title: 'ESP32-CAM IoT System', 
    category: 'IoT', 
    image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&q=80',
    description: 'IoT surveillance system with real-time video streaming and remote monitoring capabilities using ESP32-CAM microcontroller.',
    technologies: ['ESP32', 'IoT', 'C++', 'Arduino'],
    liveLink: '#',
    codeLink: '#'
  }
];
  const process = [
    { icon: <Pencil className="w-10 h-10" />, title: 'Sketch', description: 'Brainstorming ideas and creating wireframes to visualize the project structure.' },
    { icon: <Layers className="w-10 h-10" />, title: 'Design', description: 'Crafting beautiful interfaces with attention to detail and user experience.' },
    { icon: <Terminal className="w-10 h-10" />, title: 'Develop', description: 'Writing clean, efficient code and implementing features with best practices.' },
    { icon: <Rocket className="w-10 h-10" />, title: 'Deploy', description: 'Launching the project to production with proper testing and optimization.' }
  ];
const testimonials = [
  { 
    name: 'Aslam Aldar', 
    role: 'Manager at Acaira Technologies', 
    text: 'Rehan demonstrated exceptional dedication and technical skills during his web development internship. He quickly adapted to our workflow and contributed meaningfully to projects with his problem-solving abilities and attention to detail. A promising developer with great potential.',
    avatar: 'AA'
  },
  { 
    name: 'Academic Reference', 
    role: 'College Professor', 
    text: 'Rehan has consistently shown strong academic performance and practical application skills. His projects demonstrate innovative thinking and technical competence across various domains including web development, IoT, and blockchain.',
    avatar: 'PR'
  }
];  // ← Make sure this line ends with ];

  const stats = [
  { 
    icon: <Code className="w-8 h-8" />, 
    value: '6', 
    label: 'Projects Built' 
  },
  { 
    icon: <Briefcase className="w-8 h-8" />, 
    value: '3', 
    label: 'Internships' 
  },
  { 
    icon: <Award className="w-8 h-8" />, 
    value: '4+', 
    label: 'Certifications' 
  },
  { 
    icon: <Clock className="w-8 h-8" />, 
    value: '4th', 
    label: 'Year Engineering' 
  }
];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

const handleContactSubmit = async (e) => {
  e.preventDefault();
  setIsLoading(true);

  try {
    console.log('Sending email with data:', formData);
    
    const result = await emailjs.send(
      'service_0mstdue',
      'template_z310blc', 
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'animexexplaination@gmail.com'
      },
      'bWY9TNmJ8AlEy3J9R'
    );
    
    console.log('Email sent successfully:', result);
    
    setIsSent(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setIsSent(false), 5000);
  } catch (error) {
    console.error('EmailJS Error Details:', error);
    alert('Failed to send message. Please try again. Error: ' + error.text);
  } finally {
    setIsLoading(false);
  }
};

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/20 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-teal-500/20 via-transparent to-transparent"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full filter blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-teal-500/10 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-40 w-72 h-72 bg-cyan-500/10 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Rehan Waghoo</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
              Computer Science Engineer | Web Developer | Designer | Tech Enthusiast
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-emerald-500/50 transform hover:scale-105 transition-all duration-300"
              >
                See My Work
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-transparent border-2 border-emerald-400 text-emerald-400 rounded-full font-semibold hover:bg-emerald-400 hover:text-slate-900 transform hover:scale-105 transition-all duration-300"
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Services I Offer</h2>
            <p className="text-xl text-gray-600">Comprehensive solutions for your digital needs</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center text-white mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Latest Works</h2>
            <p className="text-xl text-gray-600">Explore my recent projects and creations</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer h-80"
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-emerald-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white">
                    <p className="text-sm font-semibold text-emerald-300 mb-2">{project.category}</p>
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setSelectedProject(null)}>
          <div className="bg-white rounded-2xl max-w-4xl w-full p-8 relative" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-96 object-cover rounded-xl mb-6" />
            <span className="inline-block px-4 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
              {selectedProject.category}
            </span>
            <h3 className="text-3xl font-bold mb-4">{selectedProject.title}</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              This project showcases advanced implementation of modern technologies and best practices. 
              Built with focus on performance, scalability, and user experience.
            </p>
            <div className="flex gap-4">
  {selectedProject.liveLink && selectedProject.liveLink !== '#' && (
    <a 
      href={selectedProject.liveLink} 
      target="_blank" 
      rel="noopener noreferrer"
      className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg hover:shadow-lg hover:shadow-emerald-500/50 transition-all"
    >
      View Live
    </a>
  )}
  {selectedProject.codeLink && selectedProject.codeLink !== '#' ? (
    <a 
      href={selectedProject.codeLink} 
      target="_blank" 
      rel="noopener noreferrer"
      className="px-6 py-3 border-2 border-gray-300 rounded-lg hover:border-emerald-500 hover:text-emerald-600 transition-colors"
    >
      View Code
    </a>
  ) : (
    <button className="px-6 py-3 border-2 border-gray-300 rounded-lg text-gray-400 cursor-not-allowed" disabled>
      Code Private
    </button>
  )}
</div>
          </div>
        </div>
      )}

      {/* Working Process Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">My Working Process</h2>
            <p className="text-xl text-gray-600">From concept to completion in four strategic steps</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white mx-auto mb-6 shadow-xl">
                    {step.icon}
                  </div>
                  <div className="absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-emerald-300 to-teal-300 -z-10 hidden md:block" 
                       style={{ display: index === 3 ? 'none' : 'block' }}>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                  <img 
                    src="/profile.png" 
                    alt="Rehan Waghoo" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center shadow-xl">
                  <Code className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>
            
            <div>
  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Me</h2>
  <p className="text-lg text-gray-600 leading-relaxed mb-4">
    I'm a passionate Computer Science Engineering student in my 4th year at Rizvi College of Engineering, 
    driven by innovation and technology. My journey has been enriched through hands-on experience as a 
    Web Development Intern at Acaira Technologies.
  </p>
  <p className="text-lg text-gray-600 leading-relaxed mb-4">
    I specialize in building cutting-edge projects spanning multiple domains: from ESP32-CAM IoT surveillance 
    systems to blockchain-based certificate verification with DigiCertify, AI-powered mobile cloud optimization 
    with MobCloudX, and full-stack web applications like the Acaira Technologies website.
  </p>
  <p className="text-lg text-gray-600 leading-relaxed mb-6">
    I'm constantly exploring new technologies and pushing the limits of what's possible, with expertise in 
    web development, cloud computing, blockchain, AI/ML, and IoT solutions. My goal is to create innovative 
    solutions that solve real-world problems through technology.
  </p>
  <button 
  onClick={() => window.open('/rehan-cv.pdf', '_blank')}
  className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg hover:shadow-lg hover:shadow-emerald-500/50 transition-all"
>
  Download CV
</button>
</div>
          </div>

          {/* Stats */}
          {/* Stats */}
                {/* Stats */}
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
  {stats.map((stat, index) => (
    <div key={index} className="text-center p-8 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-emerald-100">
      <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white mx-auto mb-4 shadow-md">
        {stat.icon}
      </div>
      <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
      <div className="text-gray-600 font-medium text-lg">{stat.label}</div>
    </div>
  ))}
</div>

        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Client Testimonials</h2>
            <p className="text-xl text-white/80">What people say about my work</p>
          </div>
          
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 shadow-2xl">
              <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed italic">
                "{testimonials[currentTestimonial].text}"
              </p>
              <div className="flex items-center justify-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full flex items-center justify-center text-slate-900 font-bold text-xl mr-4 shadow-lg">
                  {testimonials[currentTestimonial].avatar}
                </div>
                <div className="text-left">
                  <div className="text-white font-bold text-lg">{testimonials[currentTestimonial].name}</div>
                  <div className="text-white/70">{testimonials[currentTestimonial].role}</div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 gap-4">
              <button 
                onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                className="p-3 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button 
                onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
                className="p-3 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600">Let's discuss your next project</p>
          </div>
          
          <form onSubmit={handleContactSubmit} className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-xl">
            {isSent && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg text-center">
                ✅ Message sent successfully! I'll get back to you soon.
              </div>
            )}
            
            <div className="grid gap-6 mb-6">
              <input 
                type="text" 
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:border-emerald-500 transition-colors"
              />
              <input 
                type="email" 
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:border-emerald-500 transition-colors"
              />
              <textarea 
                name="message"
                rows={6}
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                required
                className="w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:border-emerald-500 transition-colors resize-none"
              ></textarea>
            </div>
            <button 
              type="submit"
              disabled={isLoading}
              className="w-full px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-emerald-500/50 transform hover:scale-105 transition-all duration-300 disabled:opacity-50"
            >
              {isLoading ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          <div className="flex justify-center gap-6 mt-12">
  <a 
    href="https://github.com/rehan8989" 
    target="_blank" 
    rel="noopener noreferrer"
    className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-emerald-500 hover:to-teal-500 hover:text-white transition-all duration-300 transform hover:scale-110"
  >
    <Github className="w-6 h-6" />
  </a>
  <a 
    href="https://www.linkedin.com/in/rehan-waghoo-8a34732a6/" 
    target="_blank" 
    rel="noopener noreferrer"
    className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-emerald-500 hover:to-teal-500 hover:text-white transition-all duration-300 transform hover:scale-110"
  >
    <Linkedin className="w-6 h-6" />
  </a>
  <a 
    href="#" 
    target="_blank" 
    rel="noopener noreferrer"
    className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-emerald-500 hover:to-teal-500 hover:text-white transition-all duration-300 transform hover:scale-110"
  >
    <Instagram className="w-6 h-6" />
  </a>
  <a 
    href="mailto:waghoorehan03@gmail.com" 
    className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-emerald-500 hover:to-teal-500 hover:text-white transition-all duration-300 transform hover:scale-110"
  >
    <Mail className="w-6 h-6" />
  </a>
</div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-950 text-white text-center">
        <p className="text-lg">© 2025 Rehan Waghoo. All Rights Reserved.</p>
      </footer>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(20px, -50px) scale(1.1);
          }
          50% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          75% {
            transform: translate(50px, 50px) scale(1.05);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}