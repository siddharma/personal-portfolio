import React from 'react';
import { Heart, Code } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Dharmendra Sid
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Full Stack Developer passionate about building scalable applications 
              and exploring the future of AI-powered development.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-gray-300">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const element = document.querySelector(`#${item.toLowerCase()}`);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-gray-300">Current Focus</h4>
            <ul className="space-y-2 text-gray-400">
              <li>• Terraform Infrastructure</li>
              <li>• Generative AI Applications</li>
              <li>• Cloud Architecture</li>
              <li>• Team Leadership</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center text-gray-400 mb-4 md:mb-0">
              <span>Made with</span>
              <Heart size={16} className="mx-2 text-red-500" />
              <span>and</span>
              <Code size={16} className="mx-2 text-blue-400" />
              <span>by Dharmendra Sid</span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2024 Dharmendra Sid. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};