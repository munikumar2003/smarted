import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
            <img src="logo.jpeg" alt="SkillRank Logo" className="w-8 h-8" />

              <span className="font-bold text-xl text-white">SkillRank</span>
            </Link>
            <p className="text-sm">
              Empowering professionals to showcase their skills and connect with opportunities worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/showcase/skillrank-smarted/" className="hover:text-blue-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Platform</h3>
            <ul className="space-y-2">
              <li><Link to="/features" className="hover:text-blue-500 transition-colors">Features</Link></li>
              <li><Link to="/pricing" className="hover:text-blue-500 transition-colors">Pricing</Link></li>
              <li><Link to="/enterprise" className="hover:text-blue-500 transition-colors">Enterprise</Link></li>
              <li><Link to="/security" className="hover:text-blue-500 transition-colors">Security</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-blue-500 transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-blue-500 transition-colors">Careers</Link></li>
              <li><Link to="/blog" className="hover:text-blue-500 transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-blue-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="hover:text-blue-500 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-blue-500 transition-colors">Terms of Service</Link></li>
              <li><Link to="/cookies" className="hover:text-blue-500 transition-colors">Cookie Policy</Link></li>
              <li><Link to="/compliance" className="hover:text-blue-500 transition-colors">Compliance</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} SkillRank. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
