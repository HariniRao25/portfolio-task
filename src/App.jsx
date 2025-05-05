import { useState } from 'react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header Section */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="font-bold text-2xl text-indigo-600">Harini</h1>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-md focus:outline-none" 
            onClick={toggleMenu}
          >
            {isMenuOpen ? 
              <span className="block w-6 h-px bg-gray-800 rotate-45 translate-y-1"></span> : 
              <div className="space-y-1.5">
                <span className="block w-6 h-px bg-gray-800"></span>
                <span className="block w-6 h-px bg-gray-800"></span>
                <span className="block w-6 h-px bg-gray-800"></span>
              </div>
            }
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-indigo-600 transition-colors">Home</a>
            <a href="#about" className="text-gray-700 hover:text-indigo-600 transition-colors">About</a>
            <a href="#projects" className="text-gray-700 hover:text-indigo-600 transition-colors">Projects</a>
            <a href="#contact" className="text-gray-700 hover:text-indigo-600 transition-colors">Contact</a>
          </nav>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
              <a href="#home" className="text-gray-700 py-2 hover:text-indigo-600 transition-colors" onClick={toggleMenu}>Home</a>
              <a href="#about" className="text-gray-700 py-2 hover:text-indigo-600 transition-colors" onClick={toggleMenu}>About</a>
              <a href="#projects" className="text-gray-700 py-2 hover:text-indigo-600 transition-colors" onClick={toggleMenu}>Projects</a>
              <a href="#contact" className="text-gray-700 py-2 hover:text-indigo-600 transition-colors" onClick={toggleMenu}>Contact</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-indigo-700 text-white py-20 md:py-32">
  <div className="container mx-auto px-4 flex flex-col items-center text-center">
    
    {/* Profile Image */}
<div className="w-32 h-32 mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg">
  <img 
    src="https://media.istockphoto.com/id/1483473258/photo/smiling-young-woman-professional-in-formal-wear-with-arms-crossed-and-looking-at-camera.webp?a=1&b=1&s=612x612&w=0&k=20&c=Lvu-u4DzvgAExdTm2cXRVc-4pqXcKafhDrZkictyVUU="
    alt="Profile"
    className="object-cover w-full h-full"
  />
</div>


    {/* Name and Title */}
    <h1 className="text-4xl md:text-5xl font-bold mb-6">Harini</h1>
    <h2 className="text-2xl md:text-3xl mb-8">BTech Information Technology Student</h2>
    <p className="text-lg md:text-xl max-w-2xl mb-10">
      A passionate developer focused on creating impactful solutions through code.
    </p>

    {/* Buttons */}
    <div className="flex flex-col sm:flex-row gap-4">
      <a 
        href="#projects" 
        className="bg-white text-indigo-700 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
      >
        View My Work
      </a>
      <a 
        href="#contact" 
        className="bg-transparent border-2 border-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-indigo-700 transition-colors"
      >
        Contact Me
      </a>
    </div>
  </div>
</section>


      {/* About Section */}
      <section id="about" className="py-20 bg-white">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">About Me</h2>

    <div className="flex flex-col md:flex-row gap-10 items-center">
      <div className="md:w-1/3 flex justify-center">
        <div className="w-64 h-64 rounded-full bg-indigo-100 flex items-center justify-center overflow-hidden">
          <img 
            src="https://media.istockphoto.com/id/1483473258/photo/smiling-young-woman-professional-in-formal-wear-with-arms-crossed-and-looking-at-camera.webp?a=1&b=1&s=612x612&w=0&k=20&c=Lvu-u4DzvgAExdTm2cXRVc-4pqXcKafhDrZkictyVUU=" 
            alt="Profile" 
            className="rounded-full w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="md:w-2/3">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">Harini</h3>
        <p className="text-gray-600 mb-6">
          I'm a third-year BTech student specializing in Information Technology at SNIST with Roll No. 22311A1220. 
          My academic journey has equipped me with strong foundations in programming, data structures, and web development.
        </p>

        <div className="mb-6">
          <h4 className="text-lg font-medium mb-3 text-gray-800">Education</h4>
          <div className="bg-gray-50 p-4 rounded-md">
            <p className="font-medium text-indigo-600">BTech in Information Technology</p>
            <p className="text-gray-600">Sreenidhi Institute of Science and Technology (SNIST)</p>
            <p className="text-gray-500">2022 - 2026</p>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-medium mb-3 text-gray-800">Skills</h4>
          <div className="flex flex-wrap gap-2">
            <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full">Java</span>
            <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full">Python</span>
            <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full">HTML/CSS</span>
            <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full">JavaScript</span>
            <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full">React</span>
            <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full">SQL</span>
            <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full">Data Structures</span>
            <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full">Algorithms</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">My Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-indigo-200 flex items-center justify-center">
                <div className="text-indigo-600 text-6xl font-bold">&lt;/&gt;</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Student Management System</h3>
                <p className="text-gray-600 mb-4">
                  A comprehensive system to manage student data, attendance, and grades using Java and MySQL.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-2">
                    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-sm">Java</span>
                    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-sm">MySQL</span>
                  </div>
                  <div className="flex space-x-2">
                    <a href="#" className="text-gray-500 hover:text-gray-700">
                      <span className="inline-block w-5 h-5 text-center font-medium">G</span>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-gray-700">
                      <span className="inline-block w-5 h-5 text-center">↗</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-indigo-200 flex items-center justify-center">
                <div className="text-indigo-600 text-6xl font-bold">📚</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">E-Learning Platform</h3>
                <p className="text-gray-600 mb-4">
                  An interactive web application for online learning with course management features.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-2">
                    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-sm">React</span>
                    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-sm">Node.js</span>
                  </div>
                  <div className="flex space-x-2">
                    <a href="#" className="text-gray-500 hover:text-gray-700">
                      <span className="inline-block w-5 h-5 text-center font-medium">G</span>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-gray-700">
                      <span className="inline-block w-5 h-5 text-center">↗</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
  <div className="h-48 bg-indigo-200 flex items-center justify-center">
    {/* Tracker Icon */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-20 w-20 text-indigo-600"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 8c1.657 0 3 1.343 3 3v1h2a2 2 0 012 2v4a2 2 0 01-2 2h-4v-5h-2v5H8a2 2 0 01-2-2v-4a2 2 0 012-2h2v-1c0-1.657 1.343-3 3-3z"
      />
    </svg>
  </div>
  <div className="p-6">
    <h3 className="text-xl font-semibold mb-2 text-gray-800">Smart Health Tracker</h3>
    <p className="text-gray-600 mb-4">
      A mobile application that tracks health metrics and provides personalized recommendations.
    </p>
    <div className="flex justify-between items-center">
      <div className="flex space-x-2">
        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-sm">Flutter</span>
        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-sm">Firebase</span>
      </div>
      <div className="flex space-x-2">
        <a href="#" className="text-gray-500 hover:text-gray-700">
          <span className="inline-block w-5 h-5 text-center font-medium">G</span>
        </a>
        <a href="#" className="text-gray-500 hover:text-gray-700">
          <span className="inline-block w-5 h-5 text-center">↗</span>
        </a>
      </div>
    </div>
  </div>
</div>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Contact Me</h2>
          
          <div className="max-w-3xl mx-auto bg-gray-50 rounded-lg shadow-md p-8">
            <div className="flex flex-col space-y-6">
              <div className="flex items-center">
                <div className="text-indigo-600 mr-4 text-xl">📱</div>
                <div>
                  <h3 className="font-medium text-gray-800">Phone</h3>
                  <p className="text-gray-600">22311A1220</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="text-indigo-600 mr-4 text-xl">✉️</div>
                <div>
                  <h3 className="font-medium text-gray-800">Email</h3>
                  <p className="text-gray-600">harini@example.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="text-indigo-600 mr-4 text-xl">💼</div>
                <div>
                  <h3 className="font-medium text-gray-800">LinkedIn</h3>
                  <p className="text-gray-600">linkedin.com/in/harini</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="text-indigo-600 mr-4 text-xl">🔄</div>
                <div>
                  <h3 className="font-medium text-gray-800">GitHub</h3>
                  <p className="text-gray-600">github.com/harini</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10 pt-10 border-t border-gray-200">
              <h3 className="text-xl font-semibold mb-6 text-center text-gray-800">Send me a message</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows="4" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  ></textarea>
                </div>
                
                <div>
                  <button 
                    type="submit" 
                    className="w-full bg-indigo-600 text-white py-3 rounded-md font-medium hover:bg-indigo-700 transition-colors"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Harini. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <span className="inline-block">🔄</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <span className="inline-block">💼</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <span className="inline-block">✉️</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}