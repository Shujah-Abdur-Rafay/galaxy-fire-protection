import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

// Custom hook for detecting when an element is visible in viewport
function useElementOnScreen(options: IntersectionObserverInit) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      setIsVisible(entry.isIntersecting);
    }, options);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [containerRef, options]);

  return [containerRef, isVisible] as const;
}

// Section heading component with animation
const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8">
    {children}
  </h2>
);

// Service card component with hover effects
interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  link: string;
}

const ServiceCard = ({ title, description, icon, index, link }: ServiceCardProps) => {
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  });

  return (
    <div 
      ref={containerRef}
      className={`bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 group relative ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-transparent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
      <div className="p-6">
        <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center text-red-600 mb-5 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 transform group-hover:scale-110">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-red-600 transition-colors">{title}</h3>
        <p className="text-slate-600 mb-4">{description}</p>
        <Link 
          to={link} 
          className="inline-flex items-center text-red-600 font-medium hover:text-red-700 transition-colors"
        >
          Learn More
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1 group-hover:ml-2 transition-all">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

// Stat item component with counting animation
interface StatItemProps {
  value: string;
  label: string;
  index: number;
}

const StatItem = ({ value, label, index }: StatItemProps) => {
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  });
  
  const [count, setCount] = useState("0");
  
  useEffect(() => {
    if (isVisible) {
      const valueNum = parseInt(value.replace(/\D/g, ''));
      let start = 0;
      const end = valueNum;
      const duration = 2000;
      const increment = Math.ceil(end / (duration / 50));
      
      const timer = setInterval(() => {
        start += increment;
        if (start > end) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(start.toString());
        }
      }, 50);
      
      return () => clearInterval(timer);
    }
  }, [isVisible, value]);

  return (
    <div 
      ref={containerRef}
      className={`text-center transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="text-3xl md:text-4xl font-bold text-white mb-2">{isVisible ? value : '0'}</div>
      <div className="text-white">{label}</div>
    </div>
  );
};

export default function Home() {
  const [animateHero, setAnimateHero] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateHero(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 md:pt-16 pb-20 md:pb-24">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-red-50 z-0 clip-hero-right"></div>
        <div 
          className="absolute top-20 right-20 w-64 h-64 rounded-full bg-red-100 opacity-50 z-0 animate-pulse-slow"
          style={{ animationDelay: '1s' }}
        ></div>
        <div 
          className="absolute top-40 left-10 w-32 h-32 rounded-full bg-red-100 opacity-40 z-0 animate-pulse-slow"
          style={{ animationDelay: '0.5s' }}
        ></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 ease-out ${
              animateHero ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 leading-tight">
                Professional <span className="text-red-600">Fire Protection</span> Services
              </h1>
              <p className="text-lg text-slate-600 mb-8">
                Galaxy Fire Protection is a total Fire Protection Company providing <span className="text-red-600 font-semibold">Known for "Out of this World Service" at "Down to Earth Prices"</span> since 2006. We're a proud member of CFAA, NFPA, and ESA.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/services" 
                  className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center"
                >
                  <span>Our Services</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
                <a 
                  href="tel:4162307848" 
                  className="px-6 py-3 bg-white text-red-600 font-medium rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                  <span>416.230.7848</span>
                </a>
              </div>
              <div className="text-sm text-slate-600 mt-2">
                <span className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  Mon-Fri: 8am-5pm
                </span>
                <a href="mailto:service@galaxyfireprotection.com" className="flex items-center gap-1 mt-1 hover:text-red-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                  service@galaxyfireprotection.com
                </a>
              </div>
              {/* Emergency banner */}
              <div className="mt-8 flex items-center p-4 bg-red-50 border-l-4 border-red-500 rounded-r-md">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-500 mr-3 flex-shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                </svg>
                <div>
                  <p className="font-semibold text-red-600">EMERGENCY NUMBER: 416.715.3026</p>
                  <p className="text-slate-700">24 Hours a Day - 7 Days a Week</p>
                </div>
              </div>
            </div>
            
            <div className={`relative transition-all duration-1000 ease-out ${
              animateHero ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}>
              <div className="relative z-10 rounded-xl overflow-hidden shadow-xl transform hover:scale-[1.01] transition-all duration-300 max-w-md mx-auto">
                <img 
                  src="/images/logo.png" 
                  alt="Galaxy Fire Protection Logo" 
                  className="w-full h-auto bg-[#f5f3ee]"
                  loading="eager"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-28 h-28 rounded-lg bg-red-100/60 -z-10 transform rotate-6"></div>
              <div className="absolute -bottom-6 -left-6 w-36 h-36 rounded-lg bg-amber-100/60 -z-10 transform -rotate-6"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Certifications Section */}
      <section className="py-12 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-slate-700 mb-3">Trusted by Industry Organizations</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                We are proud members of these fire safety industry associations
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20">
              <div className="w-32 h-32 md:w-40 md:h-40 flex items-center justify-center bg-white rounded-full shadow-lg p-3 transition-transform hover:scale-105 duration-300">
                <img src="/images/CFAA.jpg" alt="CFAA Logo" className="w-full h-full object-contain rounded-full" />
              </div>
              <div className="w-32 h-32 md:w-40 md:h-40 flex items-center justify-center bg-white rounded-full shadow-lg p-3 transition-transform hover:scale-105 duration-300">
                <div className="w-full h-full flex items-center justify-center bg-white">
                  <img src="/images/NFPA.jpg" alt="NFPA Logo" className="w-4/5 h-4/5 object-contain" />
                </div>
              </div>
              <div className="w-32 h-32 md:w-40 md:h-40 flex items-center justify-center bg-white rounded-full shadow-lg p-3 transition-transform hover:scale-105 duration-300">
                <img src="/images/ESA.jpg" alt="ESA Logo" className="w-full h-full object-contain rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <SectionHeading>Our Fire Protection Services</SectionHeading>
            <p className="text-slate-600 max-w-3xl mx-auto">
              We provide a comprehensive range of fire protection services to ensure the safety of your property and occupants.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Fire Alarm Systems',
                description: 'Installation, inspection, testing, maintenance and monitoring of fire alarm systems to ensure regulatory compliance.',
                image: "/images/FireSafetyPanel.jpg",
                link: '/services',
              },
              {
                title: 'Sprinkler Systems',
                description: 'Design, installation, inspection, and maintenance of fire sprinkler systems for comprehensive fire protection.',
                image: "/images/SprinklerHeads.jpg",
                link: '/services',
              },
              {
                title: 'Extinguisher Service',
                description: 'Comprehensive fire extinguisher services including installation, inspection, maintenance, and recharging.',
                image: "/images/FireExtinguisher.jpg",
                link: '/services',
              },
              {
                title: 'Emergency Lighting',
                description: 'Installation and maintenance of emergency lighting systems to ensure safety during power outages.',
                image: "/images/light.JPG",
                link: '/services',
              },
              {
                title: 'Fire Safety Plans',
                description: 'Development and implementation of comprehensive fire safety plans tailored to your specific needs.',
                image: "/images/TSSA.png",
                link: '/services',
              },
              {
                title: 'Kitchen Hood Suppression',
                description: 'Installation, inspection, and maintenance of kitchen hood suppression systems for commercial kitchens.',
                image: "/images/KitchenHoodFireSystem.jpg",
                link: '/services',
              },
            ].map((service, index) => (
              <div 
                key={service.title}
                className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 group relative transform translate-y-0 opacity-100`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="h-48 overflow-hidden bg-gray-100 flex items-center justify-center p-4">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="max-h-40 w-auto object-contain transition-transform duration-500 group-hover:scale-105" 
                  />
                </div>
                <div className="absolute top-0 left-0 w-full h-1 bg-transparent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-red-600 transition-colors">{service.title}</h3>
                  <p className="text-slate-600 mb-4">{service.description}</p>
                  <Link 
                    to={service.link} 
                    className="inline-flex items-center text-red-600 font-medium hover:text-red-700 transition-colors"
                  >
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1 group-hover:ml-2 transition-all">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-800 text-white relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-transparent"></div>
        <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-red-50 opacity-60"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatItem value="1000+" label="Satisfied Clients" index={0} />
            <StatItem value="15+" label="Years Experience" index={1} />
            <StatItem value="24/7" label="Emergency Service" index={2} />
            <StatItem value="100%" label="Satisfaction Rate" index={3} />
          </div>
          <div className="flex flex-wrap justify-center mt-12 gap-4">
            <Link 
              to="/contact" 
              className="px-6 py-3 bg-red-600 text-white font-medium rounded-lg shadow-md hover:bg-red-700 hover:shadow-lg transition-all"
            >
              Contact Us
            </Link>
            <Link 
              to="/about" 
              className="px-6 py-3 bg-white text-red-600 border border-red-600 font-medium rounded-lg hover:bg-red-50 transition-all flex items-center"
            >
              <span>Learn More</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 