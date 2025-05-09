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

// Section heading component with underline
const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 relative inline-block">
    {children}
  </h2>
);

// Service tab button component
interface ServiceTabProps {
  title: string;
  isActive: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  count: number;
}

const ServiceTab = ({ title, isActive, onClick, icon, count }: ServiceTabProps) => (
  <button
    className={`p-4 rounded-lg flex flex-col items-center gap-2 transition-all duration-300 ${
      isActive 
        ? 'bg-red-600 text-white shadow-md'
        : 'bg-white text-slate-700 hover:bg-gray-50'
    }`}
    onClick={onClick}
  >
    <div className="mb-6 text-red-600 transition-all duration-300 group-hover:scale-110 group-hover:text-red-700">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-red-600 transition-colors">{title}</h3>
    <span className={`text-sm font-medium ${isActive ? 'text-white' : 'text-slate-500'}`}>
      {count} services
    </span>
  </button>
);

// Service card component
interface ServiceCardProps {
  title: string;
  description: React.ReactNode;
  icon: React.ReactNode;
  index: number;
}

const ServiceCard = ({ title, description, icon, index }: ServiceCardProps) => {
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  });
  const [expanded, setExpanded] = useState(false);

  return (
    <div 
      ref={containerRef}
      className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 group relative ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="h-48 overflow-hidden bg-gray-100 flex items-center justify-center p-4">
        {icon}
      </div>
      <div className="absolute top-0 left-0 w-full h-1 bg-red-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-red-600 transition-colors">{title}</h3>
        <div className="text-slate-600 relative">
          <div className={expanded ? "" : "max-h-28 overflow-hidden relative"}>
            {description}
          </div>
          {!expanded && (
            <div className="h-8 bg-transparent"></div>
          )}
          <button 
            onClick={() => setExpanded(!expanded)} 
            className="mt-4 inline-flex items-center text-red-600 font-medium hover:text-red-700 transition-colors gap-1"
          >
            {expanded ? "Show less" : "Read more"}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={2} 
              stroke="currentColor" 
              className={`w-4 h-4 ml-1 transition-transform duration-300 group-hover:ml-2 ${expanded ? "rotate-180" : ""}`}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

// Feature item component
interface FeatureItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

const FeatureItem = ({ title, description, icon, index }: FeatureItemProps) => {
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  });

  return (
    <div 
      ref={containerRef}
      className={`flex gap-4 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-600">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-bold text-slate-800 mb-2">{title}</h3>
        <p className="text-slate-600">{description}</p>
      </div>
    </div>
  );
};

// Process step component
interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  index: number;
}

const ProcessStep = ({ number, title, description, index }: ProcessStepProps) => {
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  });

  return (
    <div 
      ref={containerRef}
      className={`bg-white p-6 rounded-xl shadow-md relative transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center text-xl font-bold">
        {number}
      </div>
      <div className="ml-16">
        <h3 className="text-xl font-bold text-slate-800 mb-2">{title}</h3>
        <p className="text-slate-600">{description}</p>
      </div>
    </div>
  );
};

export default function Services() {
  const [animateHero, setAnimateHero] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateHero(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      title: "Fire Extinguisher Inspections",
      description: (
        <>
          <p className="mb-4">
            Complete annual inspections of fire extinguishers in compliance with NFPA 10 standards. Our certified technicians conduct thorough examinations, including:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>Visual inspection for damage or corrosion</li>
            <li>Pressure gauge checks</li>
            <li>Verification of proper mounting and accessibility</li>
            <li>Examination of seals and tamper indicators</li>
            <li>Weight verification for CO2 extinguishers</li>
          </ul>
          <p>
            We provide detailed documentation and certification for insurance and regulatory compliance.
          </p>
        </>
      ),
      icon: (
        <img src="/src/images/FireExtinguisher.jpg" alt="Fire Extinguisher" className="max-h-40 w-auto object-contain transition-transform duration-500 group-hover:scale-105" />
      )
    },
    {
      title: "Emergency Lighting Testing",
      description: (
        <>
          <p className="mb-4">
            Comprehensive testing of emergency lighting systems to ensure they function properly during power outages. Our services include:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>Monthly function tests</li>
            <li>Annual load testing for battery backup systems</li>
            <li>Illumination level measurements</li>
            <li>Exit sign visibility verification</li>
            <li>Backup battery performance evaluation</li>
          </ul>
          <p>
            All inspections are documented with detailed reports for compliance with building codes and insurance requirements.
          </p>
        </>
      ),
      icon: (
        <img src="/src/images/light.JPG" alt="Emergency Lighting" className="max-h-40 w-auto object-contain transition-transform duration-500 group-hover:scale-105" />
      )
    },
    {
      title: "Fire Alarm Systems",
      description: (
        <>
          <p className="mb-4">
            Comprehensive inspection and testing of fire alarm systems by our CFAA-certified technicians. Our services include:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>Annual testing and inspection</li>
            <li>Control panel functionality verification</li>
            <li>Detector and pull station testing</li>
            <li>Audible and visual alarm verification</li>
            <li>Battery backup system checks</li>
            <li>Communication with monitoring stations</li>
          </ul>
          <p>
            Complete documentation provided for code compliance and insurance purposes.
          </p>
        </>
      ),
      icon: (
        <img src="/src/images/FireSafetyPanel.jpg" alt="Fire Alarm Panel" className="max-h-40 w-auto object-contain transition-transform duration-500 group-hover:scale-105" />
      )
    },
    {
      title: "Sprinkler Systems",
      description: (
        <>
          <p className="mb-4">
            Complete inspections and testing of sprinkler systems to ensure they're ready when needed. Our services include:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>Visual inspection of sprinkler heads</li>
            <li>Pressure testing</li>
            <li>Main drain and inspector's test valve testing</li>
            <li>Anti-freeze system analysis</li>
            <li>Control valve inspections</li>
            <li>Fire department connection inspection</li>
          </ul>
          <p>
            Comprehensive reports provided for code compliance and insurance documentation.
          </p>
        </>
      ),
      icon: (
        <img src="/src/images/building.png" alt="Sprinkler Heads" className="max-h-40 w-auto object-contain transition-transform duration-500 group-hover:scale-105" />
      )
    },
    {
      title: "Kitchen Hood Suppression",
      description: (
        <>
          <p className="mb-4">
            Semi-annual inspection and testing of kitchen hood fire suppression systems. Our services include:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>Inspection of nozzles and piping</li>
            <li>Verification of manual pull stations</li>
            <li>System control head inspection</li>
            <li>Gas valve and electrical shutdown verification</li>
            <li>Tank inspection and weighing</li>
            <li>Fusible link inspection</li>
          </ul>
          <p>
            Complete documentation provided for code compliance and insurance requirements.
          </p>
        </>
      ),
      icon: (
        <img src="/src/images/KitchenHoodFireSystem.jpg" alt="Kitchen Hood Suppression" className="max-h-40 w-auto object-contain transition-transform duration-500 group-hover:scale-105" />
      )
    },
    {
      title: "Fire Safety Plans",
      description: (
        <>
          <p className="mb-4">
            Development of comprehensive fire safety plans tailored to your building and operations. Our services include:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>Building floor plan creation</li>
            <li>Emergency evacuation procedures</li>
            <li>Fire warden assignment and training</li>
            <li>Fire drill coordination</li>
            <li>Fire equipment location mapping</li>
            <li>Compliance with local fire codes</li>
          </ul>
          <p>
            All plans are submitted to local fire departments for approval and comply with the Ontario Fire Code.
          </p>
        </>
      ),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-32 h-32 text-red-600">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
        </svg>
      )
    }
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div 
              className={`text-center mb-12 transition-all duration-1000 ease-out ${
                animateHero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Our Services</h1>
              <div className="h-1 w-32 bg-transparent mx-auto mb-8"></div>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Comprehensive fire protection services to keep your property safe and compliant with regulatory requirements.
              </p>
            </div>
            
            <div 
              className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center transition-all duration-1000 ease-out delay-300 ${
                animateHero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div>
                <div className="max-w-md mx-auto h-72 md:h-80 rounded-lg shadow-lg overflow-hidden">
                  <img 
                    src="/src/images/building.png" 
                    alt="Fire Safety Services" 
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
              </div>
              
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <div className="h-10 w-1 bg-transparent"></div>
                  <h2 className="text-2xl font-bold text-slate-800">Trusted Protection</h2>
                </div>
                
                <p className="text-slate-600 mb-4">
                  At Galaxy Fire Protection, we provide comprehensive fire safety services to ensure your property and occupants are protected. Our team of certified professionals delivers high-quality inspections, maintenance, and emergency services.
                </p>
                
                <p className="text-slate-600 mb-6">
                  We take pride in our attention to detail and commitment to compliance with all relevant codes and standards. Our all-inclusive pricing means no hidden fees or extra charges.
                </p>
                
                <div className="flex gap-4">
                  <Link 
                    to="/contact" 
                    className="px-5 py-2 bg-red-600 text-white rounded-lg font-medium transition-all duration-300 hover:bg-red-700 hover:shadow-md"
                  >
                    Get a Quote
                  </Link>
                  <a 
                    href="tel:+14164977003" 
                    className="px-5 py-2 bg-red-600 text-white rounded-lg font-medium transition-all duration-300 hover:bg-red-700 hover:shadow-md flex items-center gap-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                    </svg>
                    Emergency Service
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <SectionHeading>Our Fire Protection Services</SectionHeading>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                We offer a full range of fire protection services to keep your property safe and compliant with all regulatory requirements.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard 
                  key={index}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <SectionHeading>How It Works</SectionHeading>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Our simple process ensures you receive the highest quality fire protection services with minimal disruption to your operations.
              </p>
            </div>
            
            <div className="space-y-12">
              <ProcessStep 
                number={1}
                title="Initial Consultation"
                description="Contact us for a free consultation. We'll discuss your facility's specific fire protection needs and requirements."
                index={0}
              />
              
              <ProcessStep 
                number={2}
                title="Comprehensive Quote"
                description="We'll provide a detailed, all-inclusive quote with no hidden fees. Our pricing includes all labor, parts, travel, and documentation."
                index={1}
              />
              
              <ProcessStep 
                number={3}
                title="Professional Service"
                description="Our certified technicians will perform the inspections and services according to the agreed schedule, with minimal disruption to your operations."
                index={2}
              />
              
              <ProcessStep 
                number={4}
                title="Detailed Documentation"
                description="You'll receive comprehensive reports and certificates for all completed work, ensuring compliance with regulations and insurance requirements."
                index={3}
              />
              
              <ProcessStep 
                number={5}
                title="Ongoing Support"
                description="We provide continuous support and schedule follow-up inspections to ensure your fire protection systems remain in optimal condition."
                index={4}
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Ensure Your Fire Protection?</h2>
            <p className="text-lg mb-8 text-red-100">
              Contact us today for a free consultation and quote. Our team is ready to provide the fire protection services you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="px-8 py-3 bg-white text-red-600 font-medium rounded-lg transition-all duration-300 hover:bg-gray-100 hover:shadow-lg inline-flex items-center justify-center gap-2"
              >
                <span>Request a Quote</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <a 
                href="tel:+14164977000" 
                className="px-8 py-3 bg-transparent text-white font-medium rounded-lg transition-all duration-300 hover:bg-white/10 hover:shadow-lg border border-white inline-flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                <span>Call Us: (416) 497-7000</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 