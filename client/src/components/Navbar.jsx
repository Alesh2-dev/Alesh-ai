import React from 'react';
import { Twitter, Github } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-slate-950/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg flex items-center justify-center shadow-lg shadow-primary-500/20">
              <Twitter className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">Alesh<span className="text-primary-500">.ai</span></span>

          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#generator" className="hover:text-white transition-colors">Generator</a>
            <a 
              href="https://x.com/farmingdev1" 
              target="_blank" 
              rel="noreferrer"
              className="px-3 py-1 bg-primary-500/10 border border-primary-500/20 text-primary-400 rounded-lg hover:bg-primary-500/20 transition-all"
            >
              @farmingdev1
            </a>
          </div>


          <div className="flex items-center gap-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noreferrer"
              className="p-2 text-slate-400 hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <button className="hidden sm:block px-4 py-2 bg-white text-slate-950 text-sm font-bold rounded-full hover:bg-slate-200 transition-all active:scale-95">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
