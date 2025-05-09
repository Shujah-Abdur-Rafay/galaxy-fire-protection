import { Link } from 'react-router-dom';

export function About() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <header className="mb-8">
        <div className="flex justify-center mb-6">
          <img src="/images/galaxy-logo.svg" alt="Galaxy Fire Protection Logo" className="h-24" />
        </div>
        <nav className="bg-white shadow-md rounded-lg p-4 mb-8">
          <ul className="flex flex-wrap justify-center gap-6">
            <li><Link to="/" className="text-gray-700 hover:text-blue-700 hover:underline">Home</Link></li>
            <li><Link to="/about" className="text-blue-700 font-bold hover:underline">About Us</Link></li>
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
      </header>

      <main className="bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-blue-800 text-center mb-8">
          About Us
        </h1>

        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <div className="md:w-1/4 flex justify-center">
              <img src="/images/phone-icon.svg" alt="Phone" className="h-32" />
            </div>
            <div className="md:w-3/4">
              <p className="mb-4">
                Our success in a very competitive environment over the years has been due to the fact that we are committed to exceptional <strong>Customer Service</strong> including answering our day-to-day phone calls or e-mails immediately or in a timely fashion, as well as providing timely <strong>24 Hour Emergency Service.</strong>
              </p>
              <p>
                Written Quotations using <strong>All Inclusive Pricing</strong> with no extras for Labour, Parts, Travel or Trucking Charges, together with the above proven exceptional <strong>Customer Service</strong> has meant a 99.99% Repeat Client Satisfactory factor each year.
              </p>
            </div>
          </div>

          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse border border-gray-300">
              <caption className="sr-only">About Galaxy Fire Protection</caption>
              <thead>
                <tr className="bg-amber-700 text-white">
                  <th className="border border-gray-300 p-3 text-left">Question</th>
                  <th className="border border-gray-300 p-3 text-left">Answer</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-3 font-semibold">What we do...</td>
                  <td className="border border-gray-300 p-3">
                    We provide complete Fire Inspections including: Fire Protection Systems; Fire Extinguishers; Emergency Lighting; Sprinklers; and Kitchen Hood Suppression Systems. Repairs & Fire Safety Plans <u>We also provide 24 hour Emergency Service.</u>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-semibold">When we do it...</td>
                  <td className="border border-gray-300 p-3">
                    Complete Annual Fire Inspections of all equipment and Semi-Annual Inspections of Kitchen Hood Fire Suppression Systems & Monthly Fire Inspections as & when requested.
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-semibold">Where we do it...</td>
                  <td className="border border-gray-300 p-3">
                    In commercial and residential properties throughout the Greater Toronto and surrounding areas. Some samples of existing clients include: <u>Apartment, Condominium & Co-op Property Management</u> (Aplomb Properties / Brookfield Residential Services / Dell Property Management / Minto Properties / Landlord Property & Rental Management Inc / Not-for-Profit Housing / Taft Forward Property Management, etc) <u>Hotels,</u> (Best Western / Days Inns / EconoLodge / Fairfield by Marriott / Hilton Garden Inns / Quality Inns & Suites, etc); <u>Bars; Lounges; & Restaurant Chains</u> (Boston Pizza's / Firkin Pubs /etc) <u>Retail Chains</u> (Value Village Stores / Talize Retail Stores, etc); <u>Theatres</u>, <u>Churches, Mosques & Synagogues;</u> and other Multi-purpose complexes.
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-semibold">Who are our technicians...</td>
                  <td className="border border-gray-300 p-3">
                    <p className="mb-3">
                      They are CFAA (Canadian Fire Alarm Association) qualified with the <u>latest update Course requirements</u>, together with our some fitters having more than fifteen years previous experience on multi-functional systems and equipment. We also have an Ontario College of Trades Licensed Master Electrician; Sprinkler & Fire Protection Installer on staff.
                    </p>
                    <p>
                      Technicians are covered by our own Liability Insurance as well as the Ontario WSIB (Workplace Safety & Insurance Board) program.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-semibold">Why we exist...</td>
                  <td className="border border-gray-300 p-3">
                    Its because of competitive pricing and exceptional service. The Ontario Fire Code requires all Fire Protection Systems be tested on an Annual basis, and Kitchen Hood Fire Suppression systems on a Semi-Annual basis. We are able to issue all the necessary Certificates and Reports as required by the Ontario Fire Code, Local Fire Departments, and/or your Insurance Company.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>

      <footer className="mt-12 text-center text-gray-500">
        <p>Copyright © {new Date().getFullYear()} Galaxy Fire Protection</p>
      </footer>
    </div>
  );
} 