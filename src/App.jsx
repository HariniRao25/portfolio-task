import { useState, useEffect } from 'react';
import { 
  Github, 
  Mail, 
  Phone, 
  Code, 
  Database, 
  Globe, 
  BookOpen, 
  Terminal, 
  ChevronRight,
  ExternalLink,
  Menu,
  X
} from 'lucide-react';

// Main portfolio component
export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll events to change header appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation links
  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Education', id: 'education' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Scroll to section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Animated background */}
      <div className="fixed inset-0 z-0 opacity-20">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/80 backdrop-blur shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Harini
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`transition-all duration-300 ${
                  activeSection === link.id
                    ? 'text-blue-400 font-medium'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-400 hover:text-white" 
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 shadow-lg">
            <div className="flex flex-col space-y-4 p-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`transition-all duration-300 ${
                    activeSection === link.id
                      ? 'text-blue-400 font-medium'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="container mx-auto px-4 pt-16 relative z-10">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex flex-col justify-center">
          <div className="max-w-3xl mx-auto text-center md:text-left">
            <div className="mb-4 inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
              <h2 className="text-xl font-medium">Hello, I'm</h2>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Harini Jakinapelly
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-8">
              Software Developer & DSA Problem Solver
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a 
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:opacity-90 transition-all duration-300 flex items-center gap-2"
              >
                Get in Touch <ChevronRight size={16} />
              </a>
              <a 
                href="https://github.com/HariniRao25" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300 flex items-center gap-2"
              >
                View GitHub <Github size={16} />
              </a>
            </div>
          </div>
          
          {/* 3D model visualization (placeholder) */}
          <div className="mt-16 flex justify-center">
            <div className="w-64 h-64 md:w-96 md:h-96 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse opacity-30"></div>
              <div className="absolute inset-4 bg-gradient-to-r from-blue-600 to-purple-700 rounded-full animate-pulse opacity-40"></div>
              <div className="absolute inset-8 bg-gradient-to-r from-blue-700 to-purple-800 rounded-full animate-pulse opacity-50"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-4xl font-bold">3D</div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              About Me
            </h2>
            <div className="bg-gray-800/50 backdrop-blur rounded-xl p-6 md:p-8 border border-gray-700/50 shadow-lg">
              <p className="text-lg mb-4">
                I'm Harini, a software developer with strong experience in solving DSA problems and web designing. I am currently pursuing my B.Tech from Sreenidhi Institute of Science and Technology with a CGPA of 9.4.
              </p>
              <p className="text-lg mb-4">
                I'm passionate about problem-solving and love working with technologies like Java, SQL, and modern web tools. My focus is on creating efficient, scalable solutions to complex problems.
              </p>
              <p className="text-lg">
                When I'm not coding, I enjoy exploring new technologies and continuously enhancing my skills through practice and real-world applications.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SkillCard 
                title="Programming" 
                icon={<Code />} 
                skills={[
                  { name: "Java", proficiency: 70 },
                  { name: "Data Structures", proficiency: 85 },
                  { name: "Algorithms", proficiency: 85 }
                ]}
              />
              <SkillCard 
                title="Database" 
                icon={<Database />} 
                skills={[
                  { name: "SQL", proficiency: 90 }
                ]}
              />
              <SkillCard 
                title="Web Development" 
                icon={<Globe />} 
                skills={[
                  { name: "HTML", proficiency: 90 },
                  { name: "CSS", proficiency: 80 },
                  { name: "JavaScript", proficiency: 60 }
                ]}
              />
              <SkillCard 
                title="Problem Solving" 
                icon={<Terminal />} 
                skills={[
                  { name: "DSA Problem Solving", proficiency: 85 },
                  { name: "Logical Thinking", proficiency: 90 }
                ]}
              />
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Education
            </h2>
            <div className="space-y-6">
              <EducationCard 
                degree="B.Tech"
                institution="Sreenidhi Institute of Science and Technology"
                duration="Current"
                description="CGPA: 9.4"
              />
              <EducationCard 
                degree="Intermediate (MPC Stream)"
                institution="Alphores Junior College, Karimnagar"
                duration="Completed"
              />
              <EducationCard 
                degree="SSC"
                institution="Vivekavardhini High School"
                duration="Completed"
              />
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Projects
            </h2>
            <div className="grid grid-cols-1 gap-6">
              <ProjectCard 
                title="LRU Cache Implementation"
                description="Implemented an LRU (Least Recently Used) Cache in Java using a LinkedList. This project demonstrates understanding of data structures, especially memory management and access optimization through caching techniques."
                technologies={["Java", "Data Structures", "Algorithms"]}
                githubLink="https://github.com/HariniRao25"
              />
              {/* Add more projects as needed */}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Get in Touch
            </h2>
            <div className="bg-gray-800/50 backdrop-blur rounded-xl p-6 md:p-8 border border-gray-700/50 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ContactCard 
                  icon={<Phone />}
                  title="Phone"
                  detail="6305985003"
                  link="tel:6305985003"
                />
                <ContactCard 
                  icon={<Mail />}
                  title="Email"
                  detail="harinijakinapelly123@gmail.com"
                  link="mailto:harinijakinapelly123@gmail.com"
                />
                <ContactCard 
                  icon={<Github />}
                  title="GitHub"
                  detail="github.com/HariniRao25"
                  link="https://github.com/HariniRao25"
                  external={true}
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 border-t border-gray-800 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Harini Jakinapelly. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Skill Card Component
function SkillCard({ title, icon, skills }) {
  return (
    <div className="bg-gray-800/50 backdrop-blur rounded-xl p-6 border border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-blue-500/30">
      <div className="flex items-center mb-4">
        <div className="mr-4 p-2 bg-blue-500/20 rounded-lg text-blue-400">
          {icon}
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span className="text-gray-300">{skill.name}</span>
              <span className="text-blue-400">{skill.proficiency}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full" 
                style={{ width: `${skill.proficiency}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Education Card Component
function EducationCard({ degree, institution, duration, description }) {
  return (
    <div className="bg-gray-800/50 backdrop-blur rounded-xl p-6 border border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-blue-500/30">
      <div className="flex items-start md:items-center flex-col md:flex-row">
        <div className="mr-4 p-2 bg-blue-500/20 rounded-lg text-blue-400 md:mb-0 mb-4">
          <BookOpen />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">{degree}</h3>
          <p className="text-blue-400">{institution}</p>
          <p className="text-gray-400 mt-1">{duration}</p>
          {description && <p className="text-gray-300 mt-2">{description}</p>}
        </div>
      </div>
    </div>
  );
}

// Project Card Component
function ProjectCard({ title, description, technologies, githubLink }) {
  return (
    <div className="bg-gray-800/50 backdrop-blur rounded-xl p-6 border border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-blue-500/30">
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      {githubLink && (
        <a 
          href={githubLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
        >
          <Github size={16} /> View on GitHub <ExternalLink size={14} />
        </a>
      )}
    </div>
  );
}

// Contact Card Component
function ContactCard({ icon, title, detail, link, external }) {
  return (
    <a 
      href={link}
      target={external ? "_blank" : "_self"}
      rel={external ? "noopener noreferrer" : ""}
      className="bg-gray-800/70 backdrop-blur rounded-xl p-6 border border-gray-700/50 shadow-lg hover:border-blue-500/30 hover:shadow-xl transition-all duration-300 flex items-center"
    >
      <div className="mr-4 p-2 bg-blue-500/20 rounded-lg text-blue-400">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-bold text-white">{title}</h3>
        <p className="text-gray-300">{detail}</p>
      </div>
      {external && (
        <ExternalLink size={16} className="ml-auto text-gray-400" />
      )}
    </a>
  );
}
