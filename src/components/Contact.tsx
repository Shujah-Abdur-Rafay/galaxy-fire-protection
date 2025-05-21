import { Link } from 'react-router-dom';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this data to a server
    console.log('Form submitted:', formData);
    alert('Thanks for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <header className="mb-8">
        <div className="flex justify-center mb-6">
          <img src="/images/galaxy-logo.svg" alt="Galaxy Fire Protection Logo" className="h-24" />
        </div>
        <nav className="bg-white shadow-md rounded-lg p-4 mb-8">
          <ul className="flex flex-wrap justify-center gap-6">
            <li><Link to="/" className="text-gray-700 hover:text-blue-700 hover:underline">Home</Link></li>
            <li><Link to="/about" className="text-gray-700 hover:text-blue-700 hover:underline">About Us</Link></li>
            <li><Link to="/services" className="text-gray-700 hover:text-blue-700 hover:underline">Services</Link></li>
            <li><Link to="/contact" className="text-blue-700 font-bold hover:underline">Contact Us</Link></li>
          </ul>
        </nav>

        <div className="bg-white shadow-md rounded-lg p-6 text-center mb-8">
          <p className="mb-2">
            <a href="mailto:admin@galaxyfireprotection.com" className="text-blue-600 hover:underline">
              admin@galaxyfireprotection.com
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
          Contact Us
        </h1>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <h2 className="text-xl font-bold mb-4">Get in Touch</h2>
            
            <div className="mb-6">
              <p className="mb-2"><strong>Address:</strong></p>
              <p className="mb-4">
                Galaxy Fire Protection<br />
                123 Main Street, Suite 400<br />
                Toronto, ON M5V 1A1
              </p>
              
              <p className="mb-2"><strong>Phone:</strong></p>
              <p className="mb-1">Office: 416.230.7848</p>
              <p className="mb-4">Emergency: 416.715.3026</p>
              
              <p className="mb-2"><strong>Email:</strong></p>
              <p className="mb-4">
                <a href="mailto:service@galaxyfireprotection.com" className="text-blue-600 hover:underline">
                  service@galaxyfireprotection.com
                </a>
              </p>
              
              <p className="mb-2"><strong>Hours:</strong></p>
              <p>Monday to Friday: 8:00 AM - 5:00 PM</p>
              <p>24-Hour Emergency Service Available</p>
            </div>

            <div className="flex items-center justify-center gap-6 mt-8">
              <img src="/images/office-workers.svg" alt="Office Team" className="h-40" />
            </div>
          </div>
          
          <footer className="mt-12 text-center text-gray-500">
            <p>Copyright © {new Date().getFullYear()} Galaxy Fire Protection</p>
          </footer>
        </div>
      </main>
    </div>
  );
} 