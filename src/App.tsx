// import  { useState, useEffect } from 'react';
// import { Github, Linkedin, Mail, Code2, Database, Cloud, Cpu,  Phone, MessageCircle, Box, GitBranch, Server, Terminal, Zap, Binary, Brain, Sparkles } from 'lucide-react';

// export default function Portfolio() {
//   const [scrollY, setScrollY] = useState(0);
//   const [activeSection, setActiveSection] = useState('hero');

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.scrollY);
      
//       const sections = ['hero', 'about', 'tech', 'contact'];
//       sections.find(section => {
//         const element = document.getElementById(section);
//         if (element) {
//           const rect = element.getBoundingClientRect();
//           return rect.top <= 100 && rect.bottom >= 100;
//         }
//         return false;
//       });
//       if (current) setActiveSection(current);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const techStack = [
//     { name: 'Python', icon: <Code2 className="w-6 h-6" />, category: 'Backend' },
//     { name: 'FastAPI', icon: <Zap className="w-6 h-6" />, category: 'Backend' },
//     { name: 'PostgreSQL', icon: <Database className="w-6 h-6" />, category: 'Database' },
//     { name: 'NoSQL', icon: <Server className="w-6 h-6" />, category: 'Database' },
//     { name: 'Chroma', icon: <Binary className="w-6 h-6" />, category: 'Vector Databases' },
//     { name: 'FAISS', icon: <Sparkles className="w-6 h-6" />, category: 'Vector Databases' },
//     { name: 'pgvector', icon: <Database className="w-6 h-6" />, category: 'Vector Databases' },
//     { name: 'Qdrant', icon: <Cpu className="w-6 h-6" />, category: 'Vector Databases' },
//     { name: 'Ollama', icon: <Brain className="w-6 h-6" />, category: 'AI/ML' },
//     { name: 'Agno', icon: <Sparkles className="w-6 h-6" />, category: 'AI/ML' },
//     { name: 'LangChain', icon: <GitBranch className="w-6 h-6" />, category: 'AI/ML' },
//     { name: 'AI Agents', icon: <Cpu className="w-6 h-6" />, category: 'AI/ML' },
//     { name: 'Docker', icon: <Box className="w-6 h-6" />, category: 'DevOps' },
//     { name: 'CI/CD', icon: <GitBranch className="w-6 h-6" />, category: 'DevOps' },
//     { name: 'AWS', icon: <Cloud className="w-6 h-6" />, category: 'DevOps' },
//     { name: 'GCP', icon: <Cloud className="w-6 h-6" />, category: 'DevOps' },
//     { name: 'Linux', icon: <Terminal className="w-6 h-6" />, category: 'DevOps' }
//   ];

//   const categories = [...new Set(techStack.map(tech => tech.category))];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
//       {/* Navigation */}
//       <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
//         <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
//           <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
//             VM
//           </div>
//           <div className="flex gap-6">
//             <a href="#about" className="hover:text-purple-400 transition-colors">About</a>
//             <a href="#tech" className="hover:text-purple-400 transition-colors">Tech Stack</a>
//             <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]"></div>
        
//         <div className="relative z-10 text-center max-w-4xl">
//           <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
//             Veerakumar Mrugesan
//           </h1>
//           <p className="text-2xl md:text-3xl text-purple-300 mb-4">Python Developer</p>
//           <p className="text-xl text-gray-300 mb-8">Revolite Infotech | Mar 2023 – Present</p>
//           <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
//             Building intelligent systems with AI automation, scalable APIs, and cutting-edge data engineering
//           </p>
          
//           <div className="flex gap-4 justify-center">
//             <a href="#contact" className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all transform hover:scale-105">
//               Get In Touch
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section id="about" className="py-24 px-6 relative">
//         <div className="max-w-4xl mx-auto">
//           <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
//             About Me
//           </h2>
          
//           <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-purple-500/20">
//             <p className="text-lg text-gray-300 leading-relaxed mb-6">
//               I'm a Python Developer specializing in <span className="text-purple-400 font-semibold">API development</span>, <span className="text-purple-400 font-semibold">AI automation</span>, and <span className="text-purple-400 font-semibold">data-driven systems</span>. 
//             </p>
//             <p className="text-lg text-gray-300 leading-relaxed mb-6">
//               At Revolite Infotech, I build AI agents, automate workflows, and integrate real-time APIs to enhance efficiency and scalability.
//             </p>
//             <p className="text-lg text-gray-300 leading-relaxed">
//               Passionate about connecting <span className="text-pink-400 font-semibold">automation</span>, <span className="text-pink-400 font-semibold">data engineering</span>, and <span className="text-pink-400 font-semibold">AI</span>, I deploy intelligent systems with FastAPI, Docker, and AWS.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-6 mt-12">
//             <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl p-6 border border-purple-500/30 hover:border-purple-400/60 transition-all transform hover:scale-105">
//               <Code2 className="w-12 h-12 text-purple-400 mb-4" />
//               <h3 className="text-xl font-bold mb-2">API Development</h3>
//               <p className="text-gray-400">Building scalable and efficient APIs with FastAPI</p>
//             </div>
            
//             <div className="bg-gradient-to-br from-pink-600/20 to-purple-600/20 rounded-xl p-6 border border-pink-500/30 hover:border-pink-400/60 transition-all transform hover:scale-105">
//               <Cpu className="w-12 h-12 text-pink-400 mb-4" />
//               <h3 className="text-xl font-bold mb-2">AI Automation</h3>
//               <p className="text-gray-400">Creating intelligent agents and automated workflows</p>
//             </div>
            
//             <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-xl p-6 border border-blue-500/30 hover:border-blue-400/60 transition-all transform hover:scale-105">
//               <Database className="w-12 h-12 text-blue-400 mb-4" />
//               <h3 className="text-xl font-bold mb-2">Data Engineering</h3>
//               <p className="text-gray-400">Building robust data pipelines and storage solutions</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Tech Stack Section */}
//       <section id="tech" className="py-24 px-6 bg-slate-900/50">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
//             Tech Stack
//           </h2>
          
//           {categories.map(category => (
//             <div key={category} className="mb-12">
//               <h3 className="text-2xl font-bold mb-6 text-purple-400">{category}</h3>
//               <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
//                 {techStack
//                   .filter(tech => tech.category === category)
//                   .map((tech, i) => (
//                     <div
//                       key={tech.name}
//                       className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-400/60 transition-all transform hover:scale-110 hover:shadow-lg hover:shadow-purple-500/20"
//                       style={{ animationDelay: `${i * 0.1}s` }}
//                     >
//                       <div className="flex flex-col items-center gap-3">
//                         <div className="text-purple-400">{tech.icon}</div>
//                         <span className="text-sm font-medium text-center">{tech.name}</span>
//                       </div>
//                     </div>
//                   ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="py-24 px-6">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
//             Get In Touch
//           </h2>
          
//           <p className="text-xl text-gray-300 mb-12">
//             Let's build something amazing together
//           </p>
          
//           <div className="flex flex-wrap justify-center gap-6">
//             <a
//               href="mailto:veerakumar@example.com"
//               className="flex items-center gap-3 px-8 py-4 bg-slate-800/50 backdrop-blur-sm rounded-full border border-purple-500/30 hover:border-purple-400/60 hover:shadow-lg hover:shadow-purple-500/20 transition-all transform hover:scale-105"
//             >
//               <Mail className="w-6 h-6" />
//               <span>Email</span>
//             </a>
            
//             <a
//               href="https://wa.me/1234567890"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-3 px-8 py-4 bg-green-600/20 backdrop-blur-sm rounded-full border border-green-500/30 hover:border-green-400/60 hover:shadow-lg hover:shadow-green-500/20 transition-all transform hover:scale-105"
//             >
//               <MessageCircle className="w-6 h-6" />
//               <span>WhatsApp</span>
//             </a>
            
//             <a
//               href="tel:+1234567890"
//               className="flex items-center gap-3 px-8 py-4 bg-blue-600/20 backdrop-blur-sm rounded-full border border-blue-500/30 hover:border-blue-400/60 hover:shadow-lg hover:shadow-blue-500/20 transition-all transform hover:scale-105"
//             >
//               <Phone className="w-6 h-6" />
//               <span>Call</span>
//             </a>
            
//             <a
//               href="https://github.com/veerakumar"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-3 px-8 py-4 bg-slate-800/50 backdrop-blur-sm rounded-full border border-purple-500/30 hover:border-purple-400/60 hover:shadow-lg hover:shadow-purple-500/20 transition-all transform hover:scale-105"
//             >
//               <Github className="w-6 h-6" />
//               <span>GitHub</span>
//             </a>
            
//             <a
//               href="https://linkedin.com/in/veerakumar"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-3 px-8 py-4 bg-slate-800/50 backdrop-blur-sm rounded-full border border-purple-500/30 hover:border-purple-400/60 hover:shadow-lg hover:shadow-purple-500/20 transition-all transform hover:scale-105"
//             >
//               <Linkedin className="w-6 h-6" />
//               <span>LinkedIn</span>
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="py-8 px-6 border-t border-purple-500/20 text-center text-gray-400">
//         <p>© 2025 Veerakumar Mrugesan. Building the future with AI and automation.</p>
//       </footer>

//       <style>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0) rotate(0deg); }
//           50% { transform: translateY(-20px) rotate(5deg); }
//         }
        
//         @keyframes gradient {
//           0%, 100% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//         }
        
//         .animate-gradient {
//           background-size: 200% 200%;
//           animation: gradient 3s ease infinite;
//         }
//       `}</style>
//     </div>
//   );
// }