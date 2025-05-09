import { useEffect, useState } from 'react';
import { useElementOnScreen } from '../hooks/useElementOnScreen';

interface LinkItemProps {
  title: string;
  url: string;
  delay: number;
}

const LinkItem = ({ title, url, delay }: LinkItemProps) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100 + delay);
    
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      className={`transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:-translate-y-1 transform">
        <div className="p-5 relative">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
            <a 
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              <span>Visit</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// Links card component with hover effect
interface LinkCardProps {
  title: string;
  description: string;
  url: string;
  icon: React.ReactNode;
  index: number;
}

const LinkCard = ({ title, description, url, icon, index }: LinkCardProps) => {
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  });

  return (
    <div 
      ref={containerRef}
      className={`bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-500 transform hover:-translate-y-1 hover:shadow-xl ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="p-5 relative">
        <div className="flex items-center mb-4">
          <div className="w-14 h-14 rounded-lg bg-red-50 flex items-center justify-center mr-4 border border-red-100">
            {icon}
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-800">{title}</h3>
            <p className="text-slate-600 text-sm">{description}</p>
          </div>
        </div>
        <a 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="mt-3 w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
        >
          <span>Visit Website</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default function Links() {
  const [animateHero, setAnimateHero] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateHero(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  const links = [
    {
      title: "Office of the Fire Marshall",
      url: "http://www.ofm.gov.on.ca/"
    },
    {
      title: "Building Codes - Ontario Ministry of Municipal Affairs and Housing",
      url: "http://www.mah.gov.on.ca/objectivecodes/index.html"
    },
    {
      title: "National Building Code of Canada",
      url: "http://www.nationalcodes.ca/ccbfc/system_e.shtml"
    },
  ];

  const linkCards = [
    {
      title: "CFAA",
      description: "Canadian Fire Alarm Association",
      url: "http://www.cfaa.ca/",
      icon: <img src="/src/images/CFAA.jpg" alt="CFAA Logo" className="w-10 h-10 object-contain" />,
      index: 0
    },
    {
      title: "NFPA",
      description: "National Fire Protection Association",
      url: "https://www.nfpa.org/",
      icon: <img src="/src/images/NFPA.jpg" alt="NFPA Logo" className="w-10 h-10 object-contain" />,
      index: 1
    },
    {
      title: "ESA",
      description: "Electrical Safety Authority",
      url: "https://www.esasafe.com/",
      icon: <img src="/src/images/ESA.jpg" alt="ESA Logo" className="w-10 h-10 object-contain" />,
      index: 2
    },
    {
      title: "GTAA",
      description: "Greater Toronto Apartment Association",
      url: "https://www.gtaaonline.com/",
      icon: <img src="/src/images/GTAA.jpg" alt="GTAA Logo" className="w-10 h-10 object-contain" />,
      index: 3
    },
    {
      title: "ONPHA",
      description: "Ontario Non-Profit Housing Association",
      url: "https://www.onpha.on.ca/",
      icon: <img src="/src/images/ONPHA.jpg" alt="ONPHA Logo" className="w-10 h-10 object-contain" />,
      index: 4
    },
    {
      title: "OCoT",
      description: "Ontario College of Trades",
      url: "https://www.collegeoftrades.ca/",
      icon: <img src="/src/images/OCofT.jpg" alt="OCoT Logo" className="w-10 h-10 object-contain" />,
      index: 5
    },
    {
      title: "TSSA",
      description: "Technical Standards and Safety Authority",
      url: "https://www.tssa.org/",
      icon: <img src="/src/images/TSSA.png" alt="TSSA Logo" className="w-10 h-10 object-contain" />,
      index: 6
    }
  ];

  return (
    <div className="space-y-12 pb-24">
      {/* Hero Section */}
      <section className="pt-12 pb-20">
        <div className="container mx-auto px-4">
          <div 
            className={`text-center mb-16 transition-all duration-1000 ease-out ${
              animateHero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Useful Links</h1>
            <div className="h-1 w-24 bg-transparent mx-auto mb-8"></div>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              You can find useful links to government resources and regulatory codes below.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="space-y-4 mb-12">
              {links.map((link, index) => (
                <LinkItem
                  key={index}
                  title={link.title}
                  url={link.url}
                  delay={index * 100}
                />
              ))}
            </div>
            
            <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center mt-16">Industry Associations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {linkCards.map((card) => (
                <LinkCard
                  key={card.title}
                  title={card.title}
                  description={card.description}
                  url={card.url}
                  icon={card.icon}
                  index={card.index}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute right-0 bottom-0 w-96 h-96 bg-white rounded-full -mr-32 -mb-32"></div>
          <div className="absolute left-0 top-0 w-96 h-96 bg-white rounded-full -ml-32 -mt-32"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Have Questions?</h2>
            <p className="text-lg mb-8 text-red-100">
              If you need more information or have questions about fire safety regulations, feel free to contact us.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="/contact" 
                className="px-8 py-3 bg-white text-red-600 font-medium rounded-lg transition-all duration-300 hover:bg-gray-100 hover:shadow-lg inline-flex items-center gap-2"
              >
                <span>Contact Us Today</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <a 
                href="tel:4162307848" 
                className="px-8 py-3 bg-red-800 text-white font-medium rounded-lg transition-all duration-300 hover:bg-red-900 hover:shadow-lg inline-flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                <span>Call Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 