import React from 'react';
import { FaHandshake, FaUsers, FaGlobe } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <div className="bg-base-100 py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-primary mb-6">About Us</h2>
        <p className="text-base-content mb-8 text-lg">
          Welcome to <span className="text-secondary font-semibold">TrustLens</span>, where transparency and trust meet innovation. Our mission is to foster 
          strong collaborations and deliver exceptional value by connecting organizations, people, and ideas worldwide.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card shadow-lg border rounded-lg p-6 bg-base-200 hover:shadow-xl">
            <div className="flex justify-center items-center text-primary mb-4">
              <FaHandshake size={40} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Our Commitment</h3>
            <p className="text-base-content">
              At TrustLens, we are committed to building reliable partnerships and delivering on our promises with honesty and dedication.
            </p>
          </div>
          <div className="card shadow-lg border rounded-lg p-6 bg-base-200 hover:shadow-xl">
            <div className="flex justify-center items-center text-primary mb-4">
              <FaUsers size={40} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Our Team</h3>
            <p className="text-base-content">
              Our team is composed of passionate professionals with diverse expertise, working collaboratively to achieve excellence.
            </p>
          </div>
          <div className="card shadow-lg border rounded-lg p-6 bg-base-200 hover:shadow-xl">
            <div className="flex justify-center items-center text-primary mb-4">
              <FaGlobe size={40} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
            <p className="text-base-content">
              We envision a world where trust and innovation drive progress, creating sustainable impacts for communities and businesses.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;