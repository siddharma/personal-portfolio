import React from 'react';
import { Code, Database, Globe, Server, Cloud, Settings, Zap, Brain } from 'lucide-react';

export const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Globe className="text-blue-600 dark:text-blue-400" size={24} />,
      skills: ['React', 'TypeScript', 'Next.js', 'Vue.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript ES6+'],
      color: 'blue'
    },
    {
      title: 'Backend Development',
      icon: <Server className="text-green-600 dark:text-green-400" size={24} />,
      skills: ['Node.js', 'Express.js', 'Python', 'Django', 'REST APIs', 'GraphQL', 'Microservices', 'WebSockets'],
      color: 'green'
    },
    {
      title: 'Database & Storage',
      icon: <Database className="text-purple-600 dark:text-purple-400" size={24} />,
      skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Elasticsearch', 'Firebase', 'Supabase', 'Prisma'],
      color: 'purple'
    },
    {
      title: 'Cloud Computing',
      icon: <Cloud className="text-teal-600 dark:text-teal-400" size={24} />,
      skills: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Serverless', 'CDN', 'Load Balancing'],
      color: 'teal'
    },
    {
      title: 'DevOps & Tools',
      icon: <Settings className="text-orange-600 dark:text-orange-400" size={24} />,
      skills: ['CI/CD', 'Jenkins', 'GitHub Actions', 'Monitoring', 'Testing', 'Automation', 'Performance Optimization'],
      color: 'orange'
    },
    {
      title: 'Emerging Technologies',
      icon: <Brain className="text-red-600 dark:text-red-400" size={24} />,
      skills: ['Terraform (Learning)', 'Generative AI', 'ChatGPT Integration', 'AI Automation', 'Infrastructure as Code'],
      color: 'red'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200 dark:border-blue-800',
      green: 'from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-green-200 dark:border-green-800',
      purple: 'from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border-purple-200 dark:border-purple-800',
      teal: 'from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-800/20 border-teal-200 dark:border-teal-800',
      orange: 'from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border-orange-200 dark:border-orange-800',
      red: 'from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 border-red-200 dark:border-red-800'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit built over 12+ years, constantly evolving with emerging technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${getColorClasses(category.color)} p-6 rounded-xl border hover:shadow-lg transition-all duration-200 transform hover:scale-105`}
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-white dark:bg-gray-800 rounded-lg mr-3">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-300 rounded-full shadow-sm hover:shadow-md transition-shadow duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-full font-medium shadow-lg">
            <Zap size={20} className="mr-2" />
            <span>Currently exploring: Terraform & Generative AI</span>
          </div>
        </div>
      </div>
    </section>
  );
};