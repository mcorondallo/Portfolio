import React from 'react';
import { Coffee } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white/80">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center items-center space-x-6 md:order-2">
          <Coffee className="h-6 w-6 text-primary" />
        </div>
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-center text-base text-primary">
            &copy; {new Date().getFullYear()} The Brunch Club. Est. 2023
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;