import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="bg-gray-100 py-16 md:py-20 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">Connect with Mentors, Grow Your Skills</h2>
        <p className="text-lg md:text-xl mb-8">Join Mentor Bridge to find the perfect mentor to guide you on your learning journey.</p>
        <Link to="/signup" className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 text-sm md:text-base">Get Started</Link>
      </div>
    </section>
  );
}

export default Hero;
