import React from 'react';
import { Coffee } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white/90 backdrop-blur-sm fixed w-full top-0 z-50 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Coffee className="h-8 w-8" style={{ color: '#493129' }} />
            <span className="ml-2 text-xl font-bold text-primary">The Brunch Club</span>
          </div>
          <div className="hidden sm:flex sm:space-x-8">
            <a href="#about" className="text-primary hover:opacity-80 px-3 py-2 rounded-md text-sm font-medium">
              About
            </a>
            <a href="#photos" className="text-primary hover:opacity-80 px-3 py-2 rounded-md text-sm font-medium">
              Photos
            </a>
            <a 
              href="https://docs.google.com/spreadsheets/d/1FXHL7C5SUdvNerJCzVoCVt_eFwxu-knSxh2jtWD4Kt0/edit#gid=125114042"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:opacity-80 px-3 py-2 rounded-md text-sm font-medium"
            >
              Planner
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;