import React from 'react';
import { ExternalLink, Github, Code, Cloud, Brain, Settings } from 'lucide-react';

export const Projects: React.FC = () => {
  const projects = [
    {
      category: 'Full Stack Application',
      title: 'E-commerce Platform',
      description: 'A comprehensive e-commerce solution with real-time inventory, payment processing, and analytics dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API', 'AWS'],
      features: ['Real-time inventory tracking', 'Multi-payment gateway integration', 'Advanced analytics', 'Mobile responsive'],
      icon: <Code className="text-blue-600 dark:text-blue-400" size={24} />,
      color: 'blue',
      status: 'Production'
    },
    {
      category: 'Cloud Infrastructure',
      title: 'Microservices Architecture',
      description: 'Scalable microservices platform with automated deployment and monitoring for enterprise applications.',
      technologies: ['Docker', 'Kubernetes', 'AWS', 'Jenkins', 'Prometheus'],
      features: ['Auto-scaling', 'Load balancing', 'Health monitoring', 'CI/CD pipeline'],
      icon: <Cloud className="text-teal-600 dark:text-teal-400" size={24} />,
      color: 'teal',
      status: 'Production'
    },
    {
      category: 'AI Experiment',
      title: 'AI Content Generator',
      description: 'Generative AI application for creating marketing content with custom prompts and brand guidelines.',
      technologies: ['Python', 'OpenAI API', 'React', 'FastAPI', 'PostgreSQL'],
      features: ['Custom prompt templates', 'Brand voice consistency', 'Multi-format output', 'Content scheduling'],
      icon: <Brain className="text-purple-600 dark:text-purple-400" size={24} />,
      color: 'purple',
      status: 'Development'
    },
    {
      category: 'Infrastructure as Code',
      title: 'Terraform Automation',
      description: 'Infrastructure automation scripts for rapid deployment of cloud resources with best practices.',
      technologies: ['Terraform', 'AWS', 'GitHub Actions', 'Ansible', 'Vault'],
      features: ['Multi-environment setup', 'Security compliance', 'Cost optimization', 'Automated backups'],
      icon: <Settings className="text-orange-600 dark:text-orange-400" size={24} />,
      color: 'orange',
      status: 'Learning Project'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200 dark:border-blue-800',
      teal: 'from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-800/20 border-teal-200 dark:border-teal-800',
      purple: 'from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border-purple-200 dark:border-purple-800',
      orange: 'from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border-orange-200 dark:border-orange-800'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  const getStatusColor = (status: string) => {
    const statusMap = {
      'Production': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
      'Development': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
      'Learning Project': 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200'
    };
    return statusMap[status as keyof typeof statusMap] || statusMap.Production;
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A showcase of production applications, cloud solutions, and emerging technology experiments
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${getColorClasses(project.color)} p-8 rounded-xl border hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center">
                  <div className="p-3 bg-white dark:bg-gray-800 rounded-lg mr-4 shadow-md">
                    {project.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                        {project.category}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Key Features:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {project.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <div className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-500 rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-300 rounded-full shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <button className="flex items-center px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-200">
                  <Github size={16} className="mr-2" />
                  Code
                </button>
                <button className="flex items-center px-4 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
                  <ExternalLink size={16} className="mr-2" />
                  Live Demo
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            More projects available on GitHub and in my portfolio repository
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-all duration-200 transform hover:scale-105"
            >
              <Github size={20} className="mr-2" />
              View All Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};