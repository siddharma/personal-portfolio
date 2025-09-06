import React from 'react';
import { MapPin, Download, Mail, Github, Linkedin } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-lg">
              DS
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Dharmendra Sid
            </h1>
            <div className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent font-semibold">
                Full Stack Web Developer
              </span>
              <span className="mx-2">|</span>
              <span className="bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent font-semibold">
                Cloud Enthusiast
              </span>
              <span className="mx-2">|</span>
              <span className="bg-gradient-to-r from-green-600 to-orange-600 bg-clip-text text-transparent font-semibold">
                AI Explorer
              </span>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 max-w-3xl mx-auto">
              Building scalable apps & exploring AI-powered future with 12+ years of experience in crafting digital solutions
            </p>
            <div className="flex items-center justify-center text-gray-500 dark:text-gray-400 mb-8">
              <MapPin size={20} className="mr-2" />
              <span>Pune, India</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Mail size={20} className="mr-2" />
              Get In Touch
            </a>
            <button className="inline-flex items-center px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
              <Download size={20} className="mr-2" />
              Download Resume
            </button>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-110 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-110 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <Github size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};