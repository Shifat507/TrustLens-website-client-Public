import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaHandshake, FaUsers, FaGlobe, FaLightbulb, FaShieldAlt, FaChartLine } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <div className="bg-base-100 py-16 px-6 md:px-12 text-base-content">
      <Helmet>
        <title>TrustLens | About Us</title>
      </Helmet>

      {/* Intro */}
      <div className="max-w-7xl mx-auto text-center my-20">
        <h2 className="text-5xl font-bold mb-6">About TrustLens</h2>
        <p className="text-lg max-w-3xl mx-auto leading-relaxed">
          <span className="text-green-500 font-semibold">TrustLens</span> is a platform built on integrity, innovation, and impact. We aim to create a transparent and collaborative ecosystem that helps organizations and individuals achieve sustainable growth, foster meaningful connections, and drive transformative change globally.
        </p>
      </div>

      {/* Mission + Vision + Team */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto mb-20">
        <div className="card bg-white shadow-xl border rounded-xl p-8 hover:shadow-2xl hover:scale-105 transition-transform">
          <div className="flex justify-center text-green-600 mb-4">
            <FaHandshake size={40} />
          </div>
          <h3 className="text-xl font-semibold mb-2">Our Commitment</h3>
          <p>
            We are committed to building partnerships rooted in trust, consistency, and measurable outcomes.
          </p>
        </div>

        <div className="card bg-white shadow-xl border rounded-xl p-8 hover:shadow-2xl hover:scale-105 transition-transform">
          <div className="flex justify-center text-green-600 mb-4">
            <FaUsers size={40} />
          </div>
          <h3 className="text-xl font-semibold mb-2">Our People</h3>
          <p>
            Our diverse team of professionals brings passion, skill, and collaborative spirit to every project we undertake.
          </p>
        </div>

        <div className="card bg-white shadow-xl border rounded-xl p-8 hover:shadow-2xl hover:scale-105 transition-transform">
          <div className="flex justify-center text-green-600 mb-4">
            <FaGlobe size={40} />
          </div>
          <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
          <p>
            To become a global benchmark for transparency, trust, and innovation in every industry we touch.
          </p>
        </div>
      </div>

      {/* Core Values */}
      <div className="max-w-6xl mx-auto mb-20">
        <h3 className="text-3xl font-bold text-center mb-10">Our Core Values</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-xl bg-green-50">
            <div className="text-3xl text-green-500 mb-3"><FaLightbulb /></div>
            <h4 className="text-xl font-semibold mb-2">Innovation</h4>
            <p>We embrace change, think creatively, and deliver future-forward solutions that make a real difference.</p>
          </div>
          <div className="p-6 border rounded-xl bg-green-50">
            <div className="text-3xl text-green-500 mb-3"><FaShieldAlt /></div>
            <h4 className="text-xl font-semibold mb-2">Integrity</h4>
            <p>We uphold the highest ethical standards and believe in being honest, respectful, and transparent in all interactions.</p>
          </div>
          <div className="p-6 border rounded-xl bg-green-50">
            <div className="text-3xl text-green-500 mb-3"><FaChartLine /></div>
            <h4 className="text-xl font-semibold mb-2">Growth</h4>
            <p>We are committed to continuous learning, personal development, and helping others grow with us.</p>
          </div>
        </div>
      </div>

      {/* Journey Timeline */}
      <div className="max-w-4xl mx-auto mb-24">
        <h3 className="text-3xl font-bold text-center mb-10">Our Journey</h3>
        <div className="space-y-8 border-l-4 border-green-600 pl-6 relative">
          <div className="relative">
            <span className="absolute left-[-14px] top-1 w-5 h-5 bg-green-600 rounded-full"></span>
            <h4 className="text-xl font-semibold ml-4">2022 – Foundation</h4>
            <p className="text-base text-gray-600">TrustLens was founded with a mission to build bridges between organizations and people based on trust and mutual value.</p>
          </div>
          <div className="relative">
            <span className="absolute left-[-14px] top-1 w-5 h-5 bg-green-600 rounded-full"></span>
            <h4 className="text-xl font-semibold ml-4">2023 – Early Growth</h4>
            <p className="text-base text-gray-600">Launched our first suite of collaboration tools and gained traction across multiple industries.</p>
          </div>
          <div className="relative">
            <span className="absolute left-[-14px] top-1 w-5 h-5 bg-green-600 rounded-full"></span>
            <h4 className="text-xl font-semibold ml-4">2024 – Going Global</h4>
            <p className="text-base text-gray-600">Expanded into international markets and formed strategic alliances with global partners.</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h4 className="text-2xl font-semibold mb-4">Let’s Build a Transparent Future Together</h4>
        <p className="mb-6 text-base text-gray-700">Whether you're a visionary entrepreneur, a dynamic organization, or a community-driven changemaker — we’d love to collaborate and grow with you.</p>
        <button className="btn bg-green-600 hover:bg-green-700 text-white px-8 rounded-full">Contact Us</button>
      </div>
    </div>
  );
};

export default AboutUs;
