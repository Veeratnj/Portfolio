import { useState, useEffect } from 'react';
import {
  Github, Linkedin, Mail, Code2, Database, Cloud, Cpu,
  GitBranch, Server, Terminal, Zap, Binary, Brain, Sparkles,
  MessageCircle, Phone, Box
} from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Portfolio() {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const sections = ['hero', 'about', 'tech', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const techStack = [
    { name: 'Python', icon: <Code2 />, category: 'Backend' },
    { name: 'FastAPI', icon: <Zap />, category: 'Backend' },
    { name: 'PostgreSQL', icon: <Database />, category: 'Database' },
    { name: 'NoSQL', icon: <Server />, category: 'Database' },
    { name: 'Chroma', icon: <Binary />, category: 'Vector Databases' },
    { name: 'FAISS', icon: <Sparkles />, category: 'Vector Databases' },
    { name: 'pgvector', icon: <Database />, category: 'Vector Databases' },
    { name: 'Qdrant', icon: <Cpu />, category: 'Vector Databases' },
    { name: 'Ollama', icon: <Brain />, category: 'AI/ML' },
    { name: 'Agno', icon: <Sparkles />, category: 'AI/ML' },
    { name: 'LangChain', icon: <GitBranch />, category: 'AI/ML' },
    { name: 'AI Agents', icon: <Cpu />, category: 'AI/ML' },
      { name: 'LangGraph', icon: <GitBranch />, category: 'AI/ML' },
    { name: 'Docker', icon: <Box />, category: 'DevOps' },
    { name: 'CI/CD', icon: <GitBranch />, category: 'DevOps' },
    { name: 'AWS', icon: <Cloud />, category: 'DevOps' },
    { name: 'GCP', icon: <Cloud />, category: 'DevOps' },
    { name: 'Linux', icon: <Terminal />, category: 'DevOps' },
  ];

  const categories = [...new Set(techStack.map(t => t.category))];

  return (
    <div style={{
      background: 'linear-gradient(to bottom right, #0f172a, #3b0764, #0f172a)',
      color: 'white'
    }}>

      {/* Navbar */}
      <nav className={`navbar fixed-top ${scrollY > 50 ? 'bg-dark shadow-sm' : 'bg-transparent'}`}>
        <div className="container d-flex justify-content-between align-items-center">
          <a className="navbar-brand fw-bold text-gradient fs-3" href="#hero">VM</a>
          <div className="d-flex gap-4">
            <a href="#about" className={`nav-link text-light ${activeSection === 'about' ? 'fw-bold text-info' : ''}`}>About</a>
            <a href="#tech" className={`nav-link text-light ${activeSection === 'tech' ? 'fw-bold text-info' : ''}`}>Tech Stack</a>
            <a href="#contact" className={`nav-link text-light ${activeSection === 'contact' ? 'fw-bold text-info' : ''}`}>Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="hero" className="d-flex flex-column justify-content-center align-items-center vh-100 text-center px-3">
        <h1 className="display-3 fw-bold text-gradient mb-3">Veerakumar Murugesan</h1>
        <h2 className="text-light mb-3">Python Engineer</h2>
        {/* <p className="text-secondary mb-2">Revolite Infotech | Mar 2023 – Present</p> */}
          <p className="text-secondary mb-2">Revolite Infotech | Mar 2023 – Dec 2025</p>
          <p className="text-secondary mb-2">Capgemini | Jan 2026 – Present</p>
          <p className="text-light mb-4">
            Building intelligent systems with AI automation, scalable APIs, and data engineering
          </p>
        <a href="#contact" className="btn btn-lg btn-gradient rounded-pill px-5">Get In Touch</a>
      </section>

      {/* About */}
      <section id="about" className="py-5 container text-center">
        <h2 className="display-5 fw-bold text-gradient mb-4">About Me</h2>
        <div className="bg-dark p-4 rounded-4 shadow text-start">
          <p>
            I'm a <span className="text-info fw-semibold">Python Engineer</span> specializing in
            <span className="text-info"> API development</span>, AI automation, and data-driven systems.
          </p>
          <p>
              At Revolite Infotech, I built AI agents, automated workflows, and integrated real-time APIs to enhance efficiency and scalability.
            </p>
            <p>
              At Capgemini, I focus on advanced AI/ML solutions, enterprise automation, and scalable cloud integrations.
          </p>
          <p>
            Passionate about <span className="text-warning">automation</span> and
            <span className="text-warning"> data engineering</span>, I deploy intelligent systems using FastAPI, Docker, and AWS.
          </p>
        </div>

        <div className="row mt-5">
          <div className="col-md-4 mb-4">
            <div className="p-4 border rounded-4 h-100 bg-dark text-center">
              <Code2 size={48} className="text-info mb-3" />
              <h4>API Development</h4>
              <p>Building scalable APIs with FastAPI</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="p-4 border rounded-4 h-100 bg-dark text-center">
              <Cpu size={48} className="text-danger mb-3" />
              <h4>AI Automation</h4>
              <p>Creating intelligent agents and workflows</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="p-4 border rounded-4 h-100 bg-dark text-center">
              <Database size={48} className="text-primary mb-3" />
              <h4>Data Engineering</h4>
              <p>Building data pipelines and storage solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section id="tech" className="py-5 bg-dark bg-opacity-75">
        <div className="container">
          <h2 className="display-5 fw-bold text-gradient text-center mb-5">Tech Stack</h2>

          {categories.map((cat) => (
            <div key={cat} className="mb-5">
              <h3 className="text-info mb-4">{cat}</h3>
              <div className="row g-3">
                {techStack.filter(t => t.category === cat).map(t => (
                  <div key={t.name} className="col-6 col-md-3 col-lg-2">
                    <div className="p-3 border rounded-4 text-center bg-dark hover-shadow">
                      <div className="text-info mb-2">{t.icon}</div>
                      <p className="mb-0 small">{t.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-5 text-center container">
        <h2 className="display-5 fw-bold text-gradient mb-4">Get In Touch</h2>
        <p className="text-light mb-4">Let's build something amazing together</p>
        <div className="d-flex flex-wrap justify-content-center gap-3">
          <a href="mailto:veerakumarhgkfm@gmail.com" className="btn btn-outline-light d-flex align-items-center gap-2 px-4">
            <Mail /> Email
          </a>
          <a href="https://wa.me/8248831127" className="btn btn-outline-success d-flex align-items-center gap-2 px-4">
            <MessageCircle /> WhatsApp
          </a>
          <a href="tel:+918248831127" className="btn btn-outline-primary d-flex align-items-center gap-2 px-4">
            <Phone /> Call
          </a>
          <a href="https://github.com/veerakumarpythonengineer" className="btn btn-outline-light d-flex align-items-center gap-2 px-4">
            <Github /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/veerakumar-murugesan/" className="btn btn-outline-info d-flex align-items-center gap-2 px-4">
            <Linkedin /> LinkedIn
          </a>
        </div>
      </section>

      <footer className="py-4 text-center text-secondary border-top border-secondary">
        © 2025 Veerakumar Murugesan. Building the future with AI and automation.
      </footer>

      <style>{`
        .text-gradient {
          background: linear-gradient(90deg, #a855f7, #ec4899, #a855f7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .btn-gradient {
          background: linear-gradient(90deg, #6d28d9, #db2777);
          color: white;
          border: none;
        }
        .btn-gradient:hover {
          transform: scale(1.05);
          box-shadow: 0 0 20px rgba(168,85,247,0.4);
        }
        @keyframes gradient {
          0%,100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </div>
  );
}
