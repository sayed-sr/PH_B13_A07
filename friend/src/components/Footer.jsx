import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#1e3a34] text-white py-16 px-10 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Brand Section */}
        <div className="text-center mb-10">
          <h2 className="text-5xl font-bold mb-4 tracking-tight">KeenKeeper</h2>
          <p className="text-gray-300 max-w-xl mx-auto leading-relaxed">
            Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
          </p>
        </div>

        {/* Social Links Section */}
        <div className="flex flex-col items-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-4">
            Social Links
          </p>
          <div className="flex gap-4">
            <a href="#" className="bg-white p-2.5 rounded-full transition-transform hover:scale-110">
              <img src="/assets/instagram.png" alt="Instagram" className="w-5 h-5" />
            </a>
            <a href="#" className="bg-white p-2.5 rounded-full transition-transform hover:scale-110">
              <img src="/assets/facebook.png" alt="Facebook" className="w-5 h-5" />
            </a>
            <a href="#" className="bg-white p-2.5 rounded-full transition-transform hover:scale-110">
              <img src="/assets/twitter.png" alt="Twitter" className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Divider Line */}
        <div className="w-full border-t border-gray-700/50 mb-8"></div>

        {/* Copyright & Legal Section */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies Settings</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;