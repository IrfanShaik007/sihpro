import React from 'react';
import { Link } from 'react-router-dom';

function CallToAction() {
  return (
    <section className="bg-blue-600 text-white py-16 text-center">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Journey?</h3>
        <p className="text-lg md:text-xl mb-8">Join Mentor Bridge today and take the first step toward success.</p>
        <Link to="/signup" className="bg-white text-blue-600 px-6 py-3 rounded-full hover:bg-gray-200 text-sm md:text-base">Sign Up Now</Link>
      </div>
    </section>
  );
}

export default CallToAction;
