import type { MetaFunction } from '@remix-run/node';
import { useState, useEffect } from 'react';
import { useLocation } from '@remix-run/react';
import { ExperienceCard } from '~/components/ExperienceCard';

export const meta: MetaFunction = () => {
  return [
    { title: 'Galih Andyan | Software Engineer' },
    {
      name: 'description',
      content:
        'Professional portfolio of Galih Andyan, a passionate software engineer with expertise in web development, cloud solutions, and system architecture.',
    },
  ];
};

export default function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Get the hash without the '#' symbol
    const hash = location.hash.replace('#', '');
    if (hash) {
      // Add a small delay to ensure the DOM is fully loaded
      setTimeout(() => {
        scrollToSection(hash);
      }, 100);
    }
  }, [location]);

  const experiences = [
    {
      title: 'Software Engineer',
      company: 'OxzTech',
      companyDescription:
        'OxzTech is, Fintech company that provides payment infrastructure',
      period: 'Apr 2024 - Present',
      description: [
        'Developing an open banking platform for Vietnam&apos;s financial institutions to facilitate seamless money-in and money-out transactions.',
        'Optimizing payment processes to enhance speed and accuracy.',
        'Analyzing and reverse-engineering banking behaviors to improve user experience.',
        'Collaborating closely with QA and PM to ensure delivered features meet expectations and function as intended.',
      ],
      skills: [
        'Typescript',
        'NestJS',
        'Puppeteer',
        'PostgreSQL',
        'AWS',
        'Redis',
        'Docker',
        'Appium',
      ],
    },
    {
      title: 'Software Engineer',
      company: 'Xendit',
      companyDescription:
        'Xendit is, Southeast Asian fintech company that provides payment infrastructure across Indonesia and the Philippines.',
      period: 'Sep 2021 - Mar 2024',
      description: [
        'Part of the Finance Automation Team, entrusted with developing automation and helper tools tailored for internal use, particularly focusing on streamlining financial processes.',
        'Designing and developing automation services to alleviate operational burdens for internal teams and enhance efficiency.',
        'Collaborating closely with cross-functional teams to deliver end-to-end features that address customer pain points.',
      ],
      skills: [
        'Python',
        'Typescript',
        'Express',
        'Selenium',
        'PostgreSQL',
        'AWS',
        'Redis',
        'RabbitMQ',
        'Docker',
        'Kubernetes',
        'ReactJS',
      ],
    },
    {
      title: 'Industrial Trainer',
      company: 'Glints Academy',
      period: 'Sep 2020 - Dec 2021',
      companyDescription:
        'Glints Academy is, a distinguished bootcamp for aspiring software developers offered by Glints.',
      description: [
        'Assisting students in overcoming challenges encountered with the bootcamp&apos;s materials, ensuring their understanding and progress',
        'Crafting and administering assessments to sharpen their logical thinking and problem-solving skills',
        'Conducting mock technical interviews to equip students with the necessary skills and confidence for real-world scenarios.',
      ],
      skills: ['Javascrupt', 'Node.js', 'ReactJs'],
    },
    {
      title: 'Fullstack Developer',
      company: 'PT Lomlom Teknologi Indonesia',
      companyDescription:
        'Lomlom is a burgeoning local startup based in Yogyakarta, Indonesia, operates as a platform facilitating the rental of guest houses and homestay within the city.',
      period: 'Aug 2020 - Aug 2021',
      description: [
        'Developing robust backend services using PHP, Laravel, and MySQL to cater to requests from both mobile and web applications, catering to internal and external users with a multitude of features.',
        'Designing and implementing an intuitive Admin dashboard web page utilizing ReactJS, tailored for internal team usage in efficiently managing guest houses and homestays.',
        'Orchestrating the setup and deployment of both services onto a single Virtual Private Server (VPS), ensuring seamless accessibility.',
        'Orchestrating the setup and deployment of both services onto a single Virtual Private Server (VPS), ensuring seamless accessibility',
        'Bridging the gap between business requirements and technical implementation, effectively translating complex needs into actionable plans',
      ],
      skills: ['PHP', 'Laravel', 'ReactJS', 'MySQL', 'Nginx', 'Ubuntu', 'Git'],
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <a href="#" className="text-xl font-bold">
                Galih Andyan
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              <a
                href="#about"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                About
              </a>
              <a
                href="#experience"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Experience
              </a>
              <a
                href="#projects"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Projects
              </a>
              <a
                href="#expertise"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Expertise
              </a>
              <a
                href="#contact"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200 dark:border-gray-800">
            <a
              href="#about"
              onClick={() => {
                setIsMenuOpen(false);
              }}
              className="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              About
            </a>
            <a
              href="#experience"
              onClick={() => {
                setIsMenuOpen(false);
              }}
              className="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Experience
            </a>
            <a
              href="#projects"
              onClick={() => {
                setIsMenuOpen(false);
              }}
              className="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Projects
            </a>
            <a
              href="#expertise"
              onClick={() => {
                setIsMenuOpen(false);
              }}
              className="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Expertise
            </a>
            <a
              href="#contact"
              onClick={() => {
                setIsMenuOpen(false);
              }}
              className="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Hi, I&apos;m{' '}
              <span className="text-blue-600 dark:text-blue-400">
                Galih Andyan
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              A passionate software engineer building innovative solutions for
              complex problems
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="px-6 py-3 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-medium rounded-lg transition-colors"
              >
                View My Work
              </a>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white dark:bg-gray-900 transform -skew-y-3 origin-left z-10"></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              About Me
            </h2>
            <div className="mt-2 h-1 w-20 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                👋 Welcome to my page
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                I&apos;m Galih, a software engineer with a knack for all things
                tech and a degree in Informatics Engineering. Back in 2020, I
                jumped headfirst into the software world by signing up for a
                Backend Developer bootcamp at Glints Academy.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                I&apos;ve been lucky enough to gather a bunch of different
                experiences along the way, and I&apos;ve boiled them down to the
                good stuff for you to check out right here.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Thanks for stopping by, and if you&apos;ve got any questions or
                just wanna chat, hit me up! I&apos;m all ears.
              </p>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-90"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white text-6xl font-bold">
                  GA
                </div>
                {/* Replace with your actual image: <img src="/path-to-your-photo.jpg" alt="Galih Andyan" className="w-full h-full object-cover" /> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Professional Experience
            </h2>
            <div className="mt-2 h-1 w-20 bg-blue-600 mx-auto"></div>
          </div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <ExperienceCard key={index} {...experience} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Featured Projects
            </h2>
            <div className="mt-2 h-1 w-20 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-20 w-20 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Analytics Dashboard
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  A real-time analytics dashboard for e-commerce businesses,
                  providing insights on sales, customer behavior, and inventory
                  management.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded text-xs">
                    React
                  </span>
                  <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded text-xs">
                    D3.js
                  </span>
                  <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded text-xs">
                    Firebase
                  </span>
                </div>
                <a
                  href="#"
                  className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  View Project →
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="h-48 bg-gradient-to-r from-green-500 to-teal-600 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-20 w-20 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  TaskFlow Mobile App
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  A productivity app that helps teams manage tasks, track
                  progress, and collaborate effectively across different
                  projects.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded text-xs">
                    React Native
                  </span>
                  <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded text-xs">
                    Redux
                  </span>
                  <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded text-xs">
                    Node.js
                  </span>
                </div>
                <a
                  href="#"
                  className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  View Project →
                </a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="h-48 bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-20 w-20 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                  />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Cloud Storage Solution
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  A secure, scalable cloud storage platform with advanced
                  encryption and file-sharing capabilities for businesses.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded text-xs">
                    AWS
                  </span>
                  <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded text-xs">
                    Python
                  </span>
                  <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded text-xs">
                    Docker
                  </span>
                </div>
                <a
                  href="#"
                  className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              My Expertise
            </h2>
            <div className="mt-2 h-1 w-20 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Expertise 1 */}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-600 dark:text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Front-end Development
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Creating responsive, accessible, and performant user interfaces
                using modern frameworks and best practices.
              </p>
              <div className="mt-4 space-y-2">
                <div className="flex items-center">
                  <span className="w-1/3 text-gray-600 dark:text-gray-400">
                    React
                  </span>
                  <div className="w-2/3 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: '95%' }}
                    ></div>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="w-1/3 text-gray-600 dark:text-gray-400">
                    Vue.js
                  </span>
                  <div className="w-2/3 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: '85%' }}
                    ></div>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="w-1/3 text-gray-600 dark:text-gray-400">
                    CSS/SCSS
                  </span>
                  <div className="w-2/3 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: '90%' }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Expertise 2 */}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-600 dark:text-green-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Back-end Development
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Building robust, scalable server-side applications and APIs with
                a focus on security and performance.
              </p>
              <div className="mt-4 space-y-2">
                <div className="flex items-center">
                  <span className="w-1/3 text-gray-600 dark:text-gray-400">
                    Node.js
                  </span>
                  <div className="w-2/3 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-green-600 h-2 rounded-full"
                      style={{ width: '90%' }}
                    ></div>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="w-1/3 text-gray-600 dark:text-gray-400">
                    Python
                  </span>
                  <div className="w-2/3 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-green-600 h-2 rounded-full"
                      style={{ width: '80%' }}
                    ></div>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="w-1/3 text-gray-600 dark:text-gray-400">
                    Databases
                  </span>
                  <div className="w-2/3 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-green-600 h-2 rounded-full"
                      style={{ width: '85%' }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Expertise 3 */}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-purple-600 dark:text-purple-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                DevOps & Cloud
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Implementing CI/CD pipelines, containerization, and cloud
                infrastructure for reliable, scalable applications.
              </p>
              <div className="mt-4 space-y-2">
                <div className="flex items-center">
                  <span className="w-1/3 text-gray-600 dark:text-gray-400">
                    AWS
                  </span>
                  <div className="w-2/3 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-purple-600 h-2 rounded-full"
                      style={{ width: '85%' }}
                    ></div>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="w-1/3 text-gray-600 dark:text-gray-400">
                    Docker
                  </span>
                  <div className="w-2/3 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-purple-600 h-2 rounded-full"
                      style={{ width: '80%' }}
                    ></div>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="w-1/3 text-gray-600 dark:text-gray-400">
                    CI/CD
                  </span>
                  <div className="w-2/3 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-purple-600 h-2 rounded-full"
                      style={{ width: '75%' }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Get In Touch
            </h2>
            <div className="mt-2 h-1 w-20 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Contact Information
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Feel free to reach out if you&apos;re looking for a developer,
                have a question, or just want to connect.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-blue-600 dark:text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      Email
                    </p>
                    <a
                      href="mailto:andyangalih@gmail.com"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      andyangalih@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-blue-600 dark:text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      Phone
                    </p>
                    <a
                      href="tel:+6281223538602"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      +62 812 2353 8602
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-blue-600 dark:text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      Location
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      Yogyakarta, Indonesia
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                  Connect with me
                </h4>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/galihand"
                    className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                  >
                    <span className="sr-only">GitHub</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/galihandyan/"
                    className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
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
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Galih Andyan. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
