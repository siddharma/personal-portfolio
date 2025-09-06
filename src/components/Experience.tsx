import React from 'react';
import { Calendar, MapPin, Briefcase, TrendingUp, Users, Award } from 'lucide-react';

export const Experience: React.FC = () => {
  const highlights = [
    {
      icon: <Briefcase className="text-blue-600 dark:text-blue-400" size={24} />,
      title: '12+ Years',
      description: 'Professional IT Experience'
    },
    {
      icon: <TrendingUp className="text-green-600 dark:text-green-400" size={24} />,
      title: 'End-to-End',
      description: 'Application Development'
    },
    {
      icon: <Users className="text-purple-600 dark:text-purple-400" size={24} />,
      title: 'Team Leadership',
      description: 'Mentoring & Project Management'
    },
    {
      icon: <Award className="text-orange-600 dark:text-orange-400" size={24} />,
      title: 'Business Impact',
      description: 'Delivering Scalable Solutions'
    }
  ];

  const experiences = [
    {
      period: '2018 - Present',
      role: 'Senior Full Stack Developer',
      company: 'Tech Enterprise Solutions',
      location: 'Pune, India',
      achievements: [
        'Led end-to-end development of scalable web applications serving 100K+ users',
        'Architected and implemented cloud migration strategies reducing infrastructure costs by 40%',
        'Mentored a team of 8 developers and established best practices for code quality',
        'Implemented DevOps practices including CI/CD pipelines, reducing deployment time by 60%'
      ]
    },
    {
      period: '2014 - 2018',
      role: 'Full Stack Developer',
      company: 'Digital Innovation Labs',
      location: 'Pune, India',
      achievements: [
        'Developed and maintained 15+ web applications across various business domains',
        'Optimized application performance resulting in 50% faster load times',
        'Collaborated with cross-functional teams to deliver projects on time and within budget',
        'Introduced modern frontend frameworks and improved user experience significantly'
      ]
    },
    {
      period: '2012 - 2014',
      role: 'Software Developer',
      company: 'StartUp Tech Solutions',
      location: 'Pune, India',
      achievements: [
        'Built responsive web applications from concept to deployment',
        'Worked closely with clients to understand requirements and deliver solutions',
        'Gained expertise in multiple programming languages and frameworks',
        'Contributed to the growth of the company from 10 to 50+ employees'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A decade of building scalable solutions, leading teams, and driving digital transformation
          </p>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl text-center hover:shadow-lg transition-all duration-200 transform hover:scale-105"
            >
              <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-md">
                {highlight.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {highlight.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-teal-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-xl border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-all duration-200"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="mb-4 lg:mb-0">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {exp.role}
                  </h3>
                  <p className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-2">
                    {exp.company}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      {exp.period}
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-1" />
                      {exp.location}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                {exp.achievements.map((achievement, achIndex) => (
                  <div key={achIndex} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {achievement}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
            <TrendingUp size={20} className="mr-3" />
            <span className="text-lg">Ready to take on new challenges and explore emerging technologies</span>
          </div>
        </div>
      </div>
    </section>
  );
};