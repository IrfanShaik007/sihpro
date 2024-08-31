import React from 'react';

function Features() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-bold mb-12">Why Choose Mentor Bridge?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold mb-4">Expert Mentors</h4>
            <p>Connect with industry experts who can guide you in your career development.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold mb-4">Personalized Learning</h4>
            <p>Get a customized learning experience tailored to your individual goals.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold mb-4">Flexible Scheduling</h4>
            <p>Schedule sessions that fit your busy lifestyle with our easy-to-use booking system.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
