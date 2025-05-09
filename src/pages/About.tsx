import { useEffect, useState, useRef } from 'react';
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

// Section heading component
const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8">
    {children}
  </h2>
);

// FAQ Item component
interface FAQItemProps {
  question: string;
  answer: React.ReactNode;
  index: number;
}

const FAQItem = ({ question, answer, index }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  });

  return (
    <div 
      ref={containerRef}
      className={`border border-gray-200 rounded-lg overflow-hidden transition-all duration-500 hover:shadow-md ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <button 
        className="w-full px-6 py-4 text-left bg-white flex justify-between items-center hover:bg-gray-50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-slate-800 text-lg">{question}</span>
        <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-100 group-hover:bg-red-100 transition-colors">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={1.5} 
            stroke="currentColor" 
            className={`w-5 h-5 text-red-600 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </button>
      <div 
        className={`bg-white px-6 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 py-4' : 'max-h-0 py-0'
        }`}
      >
        <div className="text-slate-600">{answer}</div>
      </div>
    </div>
  );
};

// Timeline item component
interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  index: number;
}

const TimelineItem = ({ year, title, description, index }: TimelineItemProps) => {
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  });

  return (
    <div 
      ref={containerRef}
      className={`relative transition-all duration-500 pl-8 pb-10 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Timeline connector */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-red-200"></div>
      
      {/* Timeline dot */}
      <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-red-100 -translate-x-[11px] border-2 border-red-500"></div>
      
      {/* Content */}
      <div className="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow">
        <div className="inline-block px-3 py-1 rounded-full bg-red-100 text-red-700 font-medium text-sm mb-2">
          {year}
        </div>
        <h3 className="text-xl font-bold text-slate-800 mb-2">{title}</h3>
        <p className="text-slate-600">{description}</p>
      </div>
    </div>
  );
};

export default function About() {
  const [animateHero, setAnimateHero] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateHero(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  // FAQ data
  const faqs = [
    {
      question: "What we do...",
      answer: (
        <p>
          We provide complete Fire Inspections including: Fire Protection Systems; Fire Extinguishers; Emergency Lighting; Sprinklers; and Kitchen Hood Suppression Systems. Repairs & Fire Safety Plans <span className="text-red-600 font-medium">We also provide 24 hour Emergency Service.</span>
        </p>
      )
    },
    {
      question: "When we do it...",
      answer: (
        <p>
          Complete Annual Fire Inspections of all equipment and Semi-Annual Inspections of Kitchen Hood Fire Suppression Systems & Monthly Fire Inspections as & when requested.
        </p>
      )
    },
    {
      question: "Where we do it...",
      answer: (
        <p>
          In commercial and residential properties throughout the Greater Toronto and surrounding areas. Some samples of existing clients include: <span className="text-red-600 font-medium">Apartment, Condominium & Co-op Property Management</span> (Aplomb Properties / Brookfield Residential Services / Dell Property Management / Minto Properties / Landlord Property & Rental Management Inc / Not-for-Profit Housing / Taft Forward Property Management, etc) <span className="text-red-600 font-medium">Hotels,</span> (Best Western / Days Inns / EconoLodge / Fairfield by Marriott / Hilton Garden Inns / Quality Inns & Suites, etc); <span className="text-red-600 font-medium">Bars; Lounges; & Restaurant Chains</span> (Boston Pizza's / Firkin Pubs /etc) <span className="text-red-600 font-medium">Retail Chains</span> (Value Village Stores / Talize Retail Stores, etc); <span className="text-red-600 font-medium">Theatres</span>, <span className="text-red-600 font-medium">Churches, Mosques & Synagogues;</span> and other Multi-purpose complexes.
        </p>
      )
    },
    {
      question: "Who are our technicians...",
      answer: (
        <>
          <p className="mb-3">
            They are CFAA (Canadian Fire Alarm Association) qualified with the <span className="text-red-600 font-medium">latest update Course requirements</span>, together with our some fitters having more than fifteen years previous experience on multi-functional systems and equipment. We also have an Ontario College of Trades Licensed Master Electrician; Sprinkler & Fire Protection Installer on staff.
          </p>
          <p>
            Technicians are covered by our own Liability Insurance as well as the Ontario WSIB (Workplace Safety & Insurance Board) program.
          </p>
        </>
      )
    },
    {
      question: "Why we exist...",
      answer: (
        <p>
          Its because of competitive pricing and exceptional service. The Ontario Fire Code requires all Fire Protection Systems be tested on an Annual basis, and Kitchen Hood Fire Suppression systems on a Semi-Annual basis. We are able to issue all the necessary Certificates and Reports as required by the Ontario Fire Code, Local Fire Departments, and/or your Insurance Company.
        </p>
      )
    }
  ];

  // Company history timeline
  const timeline = [
    {
      year: "2006",
      title: "Company Founded",
      description: "Galaxy Fire Protection was established to provide exceptional fire protection services in the Greater Toronto Area."
    },
    {
      year: "2010",
      title: "CFAA Certification",
      description: "Our team achieved full CFAA certification, setting the standard for quality service in the industry."
    },
    {
      year: "2015",
      title: "Service Expansion",
      description: "Expanded our service area to cover all of Ontario with additional service vehicles and technicians."
    },
    {
      year: "2018",
      title: "New Headquarters",
      description: "Moved to our current headquarters to accommodate our growing team and service offerings."
    },
    {
      year: "2023",
      title: "Digital Transformation",
      description: "Implemented state-of-the-art digital reporting systems to enhance service efficiency and client communication."
    }
  ];

  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 md:pt-16 pb-20 md:pb-24">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-red-50 z-0 clip-hero-left"></div>
        <div 
          className="absolute top-20 left-20 w-64 h-64 rounded-full bg-red-100 opacity-50 z-0 animate-pulse-slow"
          style={{ animationDelay: '1s' }}
        ></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div 
            className={`text-center mb-12 transition-all duration-1000 ease-out ${
              animateHero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">About <span className="text-gradient">Galaxy Fire</span></h1>
            <div className="h-1 w-32 bg-gradient-to-r from-red-500 to-amber-500 mx-auto mb-8"></div>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Learn about our mission, values, and the exceptional team behind Galaxy Fire Protection's success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
            <div className={`transition-all duration-1000 ease-out delay-300 flex justify-center items-center ${
              animateHero ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>
              <div className="max-w-md mx-auto">
                <div className="h-80 rounded-lg shadow-lg overflow-hidden mb-6">
                  <img 
                    src="/images/profpeople.png" 
                    alt="Our Team" 
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
            
            <div className={`transition-all duration-1000 ease-out delay-500 ${
              animateHero ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}>
              <div className="flex items-center gap-2 mb-6">
                <div className="h-10 w-1 bg-gradient-to-b from-red-500 to-amber-500"></div>
                <h2 className="text-2xl font-bold text-slate-800">Our Story</h2>
              </div>
              
              <p className="text-slate-600 mb-4">
                Our success in a very competitive environment over the years has been due to the fact that we are committed to exceptional <strong className="text-red-600">Customer Service</strong> including answering our day-to-day phone calls or e-mails immediately or in a timely fashion, as well as providing timely <strong className="text-red-600">24 Hour Emergency Service.</strong>
              </p>
              
              <p className="text-slate-600 mb-6">
                Written Quotations using <strong className="text-red-600">All Inclusive Pricing</strong> with no extras for Labour, Parts, Travel or Trucking Charges, together with the above proven exceptional <strong className="text-red-600">Customer Service</strong> has meant a 99.99% Repeat Client Satisfactory factor each year.
              </p>
              
              <div className="flex flex-wrap gap-4 mt-8">
                <Link 
                  to="/contact" 
                  className="px-6 py-3 bg-gradient-to-r from-red-600 to-amber-500 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center btn-glow"
                >
                  <span>Contact Us</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
                <Link 
                  to="/services" 
                  className="px-6 py-3 bg-white text-red-600 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center"
                >
                  <span>Our Services</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Company Timeline Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <SectionHeading>Our Journey</SectionHeading>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                From our humble beginnings to where we stand today, our commitment to excellence has never wavered.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              {timeline.map((item, index) => (
                <TimelineItem 
                  key={index}
                  year={item.year}
                  title={item.title}
                  description={item.description}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Certifications Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Our Certifications</h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              We are proud members of leading industry associations, ensuring we maintain the highest standards in fire protection services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md text-center hover:shadow-lg transition-all duration-300">
              <div className="flex justify-center mb-6">
                <img src="/images/CFAA.jpg" alt="CFAA Logo" className="w-20 h-20 object-contain" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Canadian Fire Alarm Association</h3>
              <p className="text-slate-600">
                A member of the CFAA, ensuring we meet industry standards for fire alarm installations and inspections.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md text-center hover:shadow-lg transition-all duration-300">
              <div className="flex justify-center mb-6">
                <img src="/images/NFPA.jpg" alt="NFPA Logo" className="w-20 h-20 object-contain" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">National Fire Protection Association</h3>
              <p className="text-slate-600">
                Following NFPA codes and standards, the leading fire safety guidelines in North America.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md text-center hover:shadow-lg transition-all duration-300">
              <div className="flex justify-center mb-6">
                <img src="/images/ESA.jpg" alt="ESA Logo" className="w-20 h-20 object-contain" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Electrical Safety Authority</h3>
              <p className="text-slate-600">
                ESA certified, ensuring all electrical aspects of fire protection systems meet safety standards.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <SectionHeading>Frequently Asked Questions</SectionHeading>
              <p className="text-lg text-slate-600">
                Learn more about Galaxy Fire Protection and how we can help you.
              </p>
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <FAQItem 
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-amber-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute right-0 bottom-0 w-96 h-96 bg-white rounded-full -mr-32 -mb-32"></div>
          <div className="absolute left-0 top-0 w-96 h-96 bg-white rounded-full -ml-32 -mt-32"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work With Us?</h2>
            <p className="text-lg mb-8 text-red-100">
              Contact us today for a free consultation and quote. Our team is ready to provide the fire protection services you need.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/contact" 
                className="px-8 py-3 bg-white text-red-600 font-medium rounded-lg transition-all duration-300 hover:bg-gray-100 hover:shadow-lg inline-flex items-center gap-2 btn-glow"
              >
                <span>Contact Us Today</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <a 
                href="tel:4162307848" 
                className="px-8 py-3 bg-red-800 text-white font-medium rounded-lg transition-all duration-300 hover:bg-red-900 hover:shadow-lg inline-flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 