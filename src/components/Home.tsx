import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <header className="mb-8">
        <div className="flex justify-center mb-6">
          <img src="/images/galaxy-logo.svg" alt="Galaxy Fire Protection Logo" className="h-24" />
        </div>
        <nav className="bg-white shadow-md rounded-lg p-4 mb-8">
          <ul className="flex flex-wrap justify-center gap-6">
            <li><Link to="/" className="text-blue-700 font-bold hover:underline">Home</Link></li>
            <li><Link to="/about" className="text-gray-700 hover:text-blue-700 hover:underline">About Us</Link></li>
            <li><Link to="/services" className="text-gray-700 hover:text-blue-700 hover:underline">Services</Link></li>
            <li><Link to="/contact" className="text-gray-700 hover:text-blue-700 hover:underline">Contact Us</Link></li>
          </ul>
        </nav>

        <div className="bg-white shadow-md rounded-lg p-6 text-center mb-8">
          <p className="mb-2">
            <a href="mailto:service@galaxyfireprotection.com" className="text-blue-600 hover:underline">
              service@galaxyfireprotection.com
            </a>
          </p>
          <p className="font-bold">
            TELEPHONE<br />
            416.230.7848<br />
            (Mon-Fri: 8am-5pm)
          </p>
        </div>

        <div className="bg-red-600 text-white shadow-md rounded-lg p-6 text-center mb-8">
          <h3 className="text-xl font-bold mb-2">EMERGENCY NUMBER</h3>
          <p className="text-2xl font-bold mb-1">416.715.3026</p>
          <p className="font-semibold">24 Hours a Day - 7 Days a Week</p>
        </div>

        <div className="flex justify-center gap-8 mb-8">
          <img src="/images/cfaa-logo.svg" alt="CFAA Logo" className="h-20" />
          <img src="/images/nfpa-logo.svg" alt="NFPA Logo" className="h-20" />
          <img src="/images/esa-logo.svg" alt="ESA Logo" className="h-20" />
        </div>
      </header>

      <main className="bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-blue-800 text-center mb-4">
          Welcome to Galaxy Fire Protection
        </h1>

        <p className="text-center italic text-lg mb-8">
          Known for "Out of this World Service" at "Down to Earth Prices"
        </p>

        <div className="mb-8">
          <p className="mb-4">
            Galaxy Fire Protection is a total Fire Protection Company and has been a member of the CFAA (Canadian Fire Alarm Association) since 2006, but is also and International Member of NFPA (National Fire Protection Association) and an ESA (Electrical Safety Authority) Licensed Electrical Contractor.
          </p>
          <p className="mb-4">
            We also hold memberships in the GTAA (Greater Toronto Apartment Association); OCofT (Ontario College of Trades) and ONPHA (Ontario Non-Profit Housing Association)
          </p>
        </div>

        <hr className="my-8" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="flex flex-col items-center text-center">
            <img src="/images/fire-extinguisher.svg" alt="Fire Extinguisher" className="h-32 mb-4" />
            <p>
              If you are having service concerns, or need an Installation or Annual Fire Inspection, be sure to <a href="/contact" className="text-blue-600 hover:underline">contact us</a>
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img src="/images/fire-alarm-panel.svg" alt="Fire Alarm Panel" className="h-32 mb-4" />
            <p>
              We tackle any project, large or small i.e. Emergency Service, Annual / Monthly Fire Inspections, Installations, & Repairs.
            </p>
          </div>
        </div>

        <div className="text-center font-bold text-xl text-blue-800 mb-8">
          We will be pleased to assist you.
        </div>

        <hr className="mb-8" />
      </main>

      <footer className="mt-12 text-center text-gray-500">
        <p>Copyright © {new Date().getFullYear()} Galaxy Fire Protection</p>
      </footer>
    </div>
  );
} 