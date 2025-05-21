import { Link, useLocation } from 'react-router-dom';
import { ReactNode, useState, useEffect } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 rounded-full bg-gradient-to-br from-red-100 to-amber-50 blur-3xl opacity-70 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-80 h-80 rounded-full bg-gradient-to-tr from-red-100 to-red-50 blur-3xl opacity-70"></div>
      
      {/* Header */}
      <header 
        className={`fixed w-full top-0 z-50 transition-all duration-300 ease-in-out ${
          scrolled ? 'bg-white/95 shadow-lg backdrop-blur-sm py-2' : 'bg-white/90 py-4'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 transition-transform hover:scale-105">
            <div className="relative overflow-hidden w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center p-0 shadow-md">
              <img 
                src="/images/logo.png" 
                alt="Galaxy Fire Protection Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-bold text-slate-800 leading-tight">Galaxy Fire</span>
              <span className="text-xs text-red-600 font-medium">Protection Services</span>
              <span className="text-[10px] text-gray-500">MEMBER SINCE 2006</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              <li>
                <Link 
                  to="/" 
                  className={`px-2 py-1 font-medium transition-all duration-300 relative hover:text-red-600 ${
                    isActive('/') 
                      ? 'text-red-700' 
                      : 'text-slate-700'
                  }`}
                >
                  <span>Home</span>
                  {isActive('/') && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-red-600 to-amber-500 rounded-full" />
                  )}
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className={`px-2 py-1 font-medium transition-all duration-300 relative hover:text-red-600 ${
                    isActive('/about') 
                      ? 'text-red-700' 
                      : 'text-slate-700'
                  }`}
                >
                  <span>About Us</span>
                  {isActive('/about') && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-red-600 to-amber-500 rounded-full" />
                  )}
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className={`px-2 py-1 font-medium transition-all duration-300 relative hover:text-red-600 ${
                    isActive('/services') 
                      ? 'text-red-700' 
                      : 'text-slate-700'
                  }`}
                >
                  <span>Services</span>
                  {isActive('/services') && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-red-600 to-amber-500 rounded-full" />
                  )}
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className={`px-2 py-1 font-medium transition-all duration-300 relative hover:text-red-600 ${
                    isActive('/contact') 
                      ? 'text-red-700' 
                      : 'text-slate-700'
                  }`}
                >
                  <span>Contact</span>
                  {isActive('/contact') && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-red-600 to-amber-500 rounded-full" />
                  )}
                </Link>
              </li>
              <li>
                <Link 
                  to="/links" 
                  className={`px-2 py-1 font-medium transition-all duration-300 relative hover:text-red-600 ${
                    isActive('/links') 
                      ? 'text-red-700' 
                      : 'text-slate-700'
                  }`}
                >
                  <span>Links</span>
                  {isActive('/links') && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-red-600 to-amber-500 rounded-full" />
                  )}
                </Link>
              </li>
              <li>
                <a
                  href="tel:4162307848"
                  className="ml-4 px-5 py-2 bg-gradient-to-br from-red-600 to-red-700 text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:from-red-700 hover:to-red-800 flex items-center gap-2 group"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 group-hover:animate-pulse">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                  <span>Call Us</span>
                </a>
              </li>
            </ul>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 text-slate-700 focus:outline-none hover:text-red-600 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          <ul className="flex flex-col py-2 px-4">
            <li className="py-2">
              <Link 
                to="/" 
                className={`block px-2 py-1 font-medium ${
                  isActive('/') ? 'text-red-700' : 'text-slate-700'
                }`}
              >
                Home
              </Link>
            </li>
            <li className="py-2">
              <Link 
                to="/about" 
                className={`block px-2 py-1 font-medium ${
                  isActive('/about') ? 'text-red-700' : 'text-slate-700'
                }`}
              >
                About Us
              </Link>
            </li>
            <li className="py-2">
              <Link 
                to="/services" 
                className={`block px-2 py-1 font-medium ${
                  isActive('/services') ? 'text-red-700' : 'text-slate-700'
                }`}
              >
                Services
              </Link>
            </li>
            <li className="py-2">
              <Link 
                to="/contact" 
                className={`block px-2 py-1 font-medium ${
                  isActive('/contact') ? 'text-red-700' : 'text-slate-700'
                }`}
              >
                Contact
              </Link>
            </li>
            <li className="py-2">
              <Link 
                to="/links" 
                className={`block px-2 py-1 font-medium ${
                  isActive('/links') ? 'text-red-700' : 'text-slate-700'
                }`}
              >
                Links
              </Link>
            </li>
            <li className="py-2">
              <a
                href="tel:4162307848"
                className="block px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-700 transition-colors"
              >
                Call: 416.230.7848
              </a>
            </li>
          </ul>
        </div>
      </header>

      {/* Emergency call banner */}
      <div className="fixed bottom-0 left-0 w-full z-40 shadow-[0_-4px_10px_-1px_rgba(0,0,0,0.1)]">
        <div className="bg-gradient-to-r from-red-600 via-red-600 to-red-700 text-white py-2 relative overflow-hidden">
          <span className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-30"></span>
          
          <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center relative z-10">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center animate-pulse">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                </svg>
              </div>
              <span className="font-medium">EMERGENCY NUMBER - 24 Hours a Day - 7 Days a Week</span>
            </div>
            <a 
              href="tel:4167153026" 
              className="flex items-center gap-2 hover:underline font-bold group"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 group-hover:animate-pulse">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
              416.715.3026
            </a>
          </div>
          
          {/* Animated fire pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute bottom-0 left-1/4 w-12 h-16 bg-white rounded-t-full animate-flame"></div>
            <div className="absolute bottom-0 left-1/3 w-10 h-12 bg-white rounded-t-full animate-flame delay-100"></div>
            <div className="absolute bottom-0 left-1/2 w-14 h-20 bg-white rounded-t-full animate-flame delay-200"></div>
            <div className="absolute bottom-0 left-2/3 w-10 h-14 bg-white rounded-t-full animate-flame delay-300"></div>
            <div className="absolute bottom-0 left-3/4 w-12 h-16 bg-white rounded-t-full animate-flame delay-400"></div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <main className="flex-grow pt-24 pb-16 relative z-10">
        {children}
      </main>

      {/* Footer */}
      <footer className="relative bg-gray-900 text-white py-16 mt-auto">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Company Info Column */}
            <div className="md:col-span-5 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-full overflow-hidden flex items-center justify-center p-0 shadow-md">
                  <img 
                    src="/images/logo.png" 
                    alt="Galaxy Fire Protection Logo" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Galaxy Fire Protection</h3>
                  <p className="text-gray-400 text-sm">Member Since 2006</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Professional fire protection services with <span className="text-amber-400 font-medium">"Out of this World Service"</span> at <span className="text-amber-400 font-medium">"Down to Earth Prices"</span>
              </p>
              <div className="flex items-center gap-6 pt-2">
                <div className="h-12 w-auto rounded flex items-center justify-center bg-white/5 px-3 hover:bg-white/10 transition-colors">
                  <img src="/images/CFAA.jpg" alt="CFAA Logo" className="h-9 w-9 object-contain" />
                </div>
                <div className="h-12 w-auto rounded flex items-center justify-center bg-white/5 px-3 hover:bg-white/10 transition-colors">
                  <img src="/images/NFPA.jpg" alt="NFPA Logo" className="h-9 w-9 object-contain" />
                </div>
                <div className="h-12 w-auto rounded flex items-center justify-center bg-white/5 px-3 hover:bg-white/10 transition-colors">
                  <img src="/images/ESA.jpg" alt="ESA Logo" className="h-9 w-9 object-contain" />
                </div>
              </div>
            </div>
            
            {/* Contact Column */}
            <div className="md:col-span-4">
              <h3 className="text-lg font-bold mb-6 pb-2 border-b border-red-600/30">Contact Information</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3 group hover:translate-x-1 transition-transform">
                  <div className="w-8 h-8 rounded-full bg-red-600/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-red-600/20 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-red-500">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                  </div>
                  <span>1468 Victoria Park Ave. Suite 110, Toronto, ON, M9A 2M2</span>
                </li>
                <li className="flex items-start gap-3 group hover:translate-x-1 transition-transform">
                  <div className="w-8 h-8 rounded-full bg-red-600/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-red-600/20 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-red-500">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                  </div>
                  <a href="tel:4162307848" className="hover:text-white">Office: 416.230.7848</a>
                </li>
                <li className="flex items-start gap-3 group hover:translate-x-1 transition-transform">
                  <div className="w-8 h-8 rounded-full bg-red-600/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-red-600/20 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-red-500">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <a href="mailto:admin@galaxyfireprotection.com" className="hover:text-white break-words">
                    admin@galaxyfireprotection.com
                  </a>
                </li>
                <li className="flex items-start gap-3 group hover:translate-x-1 transition-transform">
                  <div className="w-8 h-8 rounded-full bg-red-600/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-red-600/20 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-red-500">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </div>
                  <span>Monday-Friday: 8am-5pm</span>
                </li>
              </ul>
            </div>
            
            {/* Navigation Column */}
            <div className="md:col-span-3">
              <h3 className="text-lg font-bold mb-6 pb-2 border-b border-red-600/30">Quick Links</h3>
              <div className="grid grid-cols-1 gap-3">
                {[
                  { label: 'Home', path: '/' },
                  { label: 'About Us', path: '/about' },
                  { label: 'Services', path: '/services' },
                  { label: 'Contact', path: '/contact' },
                  { label: 'Links', path: '/links' },
                ].map((link) => (
                  <Link 
                    key={link.path} 
                    to={link.path} 
                    className={`py-2 px-4 rounded hover:bg-white/5 transition-colors flex items-center ${
                      isActive(link.path) ? 'text-red-500 bg-white/5 font-medium' : 'text-gray-300'
                    }`}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-red-600 mr-3 flex-shrink-0"></span>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                Copyright © {new Date().getFullYear()} Galaxy Fire Protection. All rights reserved.
              </p>
              <div className="flex items-center gap-6 text-sm text-gray-500">
                <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
                <div className="h-3 w-px bg-gray-700"></div>
                <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background pattern */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute top-0 left-0 w-full h-full">
              <defs>
                <pattern id="grid" patternUnits="userSpaceOnUse" width="40" height="40">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
          <div className="absolute -top-40 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-amber-600/5 rounded-full blur-3xl"></div>
        </div>
      </footer>
    </div>
  );
} 