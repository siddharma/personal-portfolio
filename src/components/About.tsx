import React from 'react';
import { Code, Cloud, Zap, Target, TrendingUp, Users } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A passionate full-stack developer on a mission to build scalable solutions and explore cutting-edge technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">My Journey</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                Over 12+ years in the IT industry, I've evolved from a curious developer into a seasoned full-stack engineer. 
                My journey has taken me through various domains, from building responsive web applications to architecting 
                cloud-native solutions.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Today, I'm passionate about exploring emerging technologies like Infrastructure as Code with Terraform 
                and the transformative potential of Generative AI. My goal is to transition from traditional employment 
                to creating multiple income streams through technology-driven solutions.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Vision & Goals</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Building a tech-driven business empire by leveraging my expertise in full-stack development, 
                cloud computing, and emerging AI technologies. I believe in continuous learning and adapting 
                to the ever-evolving tech landscape.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <Code className="text-blue-600 dark:text-blue-400" size={24} />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Full Stack</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">End-to-end application development</p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900 rounded-lg flex items-center justify-center mb-4">
                <Cloud className="text-teal-600 dark:text-teal-400" size={24} />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Cloud Native</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Scalable cloud solutions</p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mb-4">
                <Zap className="text-orange-600 dark:text-orange-400" size={24} />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">AI Explorer</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Generative AI applications</p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                <Target className="text-green-600 dark:text-green-400" size={24} />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">DevOps</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Automation & CI/CD</p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="text-purple-600 dark:text-purple-400" size={24} />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Growth</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Continuous learning mindset</p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mb-4">
                <Users className="text-indigo-600 dark:text-indigo-400" size={24} />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Leadership</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Team mentoring & guidance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};