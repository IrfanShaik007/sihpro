import React, { useState } from 'react';
import Navbar from '../components/Navbar';

function DashboardMentor() {
  const [isCalendarVisible, setCalendarVisible] = useState(true);
  const [requests, setRequests] = useState([
    { id: 1, mentee: 'Alice Smith', message: 'Looking for guidance on career development.' },
    { id: 2, mentee: 'Bob Brown', message: 'Seeking advice on project management.' },
  ]);

  const handleAccept = (id) => {
    // Logic to handle accepting the request
    setRequests(requests.filter(request => request.id !== id));
    // Additional actions, like notifying the mentee or updating the database, can be added here
    alert(`Request from Mentee ${id} accepted.`);
  };

  const handleReject = (id) => {
    // Logic to handle rejecting the request
    setRequests(requests.filter(request => request.id !== id));
    // Additional actions, like notifying the mentee or updating the database, can be added here
    alert(`Request from Mentee ${id} rejected.`);
  };

  return (
    <div>
      <Navbar role="mentor" />
      <main className="p-4 md:p-8 bg-gray-100 min-h-screen">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">Mentor Dashboard</h1>

        {/* Calendar Section */}
        <section className="mb-6 md:mb-8 bg-white p-4 md:p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl md:text-2xl font-semibold">Interactive Calendar</h2>
            <button
              onClick={() => setCalendarVisible(!isCalendarVisible)}
              className="text-blue-600 hover:underline"
            >
              {isCalendarVisible ? 'Hide Calendar' : 'Show Calendar'}
            </button>
          </div>
          {isCalendarVisible && (
            <div className="bg-gray-200 p-4 rounded-lg">
              {/* Placeholder for calendar integration */}
              <p className="text-gray-700">Calendar will be displayed here.</p>
            </div>
          )}
        </section>

        {/* Performance Metrics Section */}
        <section className="mb-6 md:mb-8 bg-white p-4 md:p-6 rounded-lg shadow-md">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Performance Metrics</h2>
          <ul className="space-y-4">
            {/* Sample metrics */}
            <li className="p-4 border border-gray-200 rounded-md">
              <p className="text-lg font-medium">Total Mentees: 25</p>
            </li>
            <li className="p-4 border border-gray-200 rounded-md">
              <p className="text-lg font-medium">Positive Feedback: 95%</p>
            </li>
          </ul>
        </section>

        {/* Recent Messages Section */}
        <section className="mb-6 md:mb-8 bg-white p-4 md:p-6 rounded-lg shadow-md">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Recent Messages</h2>
          <ul className="space-y-4">
            {/* Sample messages */}
            <li className="p-4 border border-gray-200 rounded-md">
              <p>John Doe sent you a message regarding their progress.</p>
            </li>
            <li className="p-4 border border-gray-200 rounded-md">
              <p>Emily Johnson has requested a meeting.</p>
            </li>
          </ul>
        </section>

        {/* Mentorship Requests Section */}
        <section className="mb-6 md:mb-8 bg-white p-4 md:p-6 rounded-lg shadow-md">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Mentorship Requests</h2>
          <ul className="space-y-4">
            {requests.map(request => (
              <li key={request.id} className="p-4 border border-gray-200 rounded-md flex items-center justify-between">
                <div>
                  <p className="text-lg font-medium">{request.mentee}</p>
                  <p className="text-gray-600">{request.message}</p>
                </div>
                <div className="flex space-x-4">
                  <button
                    onClick={() => handleAccept(request.id)}
                    className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => handleReject(request.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                  >
                    Reject
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Suggested Mentees Section */}
        <section className="bg-white p-4 md:p-6 rounded-lg shadow-md">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Suggested Mentees</h2>
          <ul className="space-y-4">
            {/* Sample mentees */}
            <li className="p-4 border border-gray-200 rounded-md">
              <p className="text-lg font-medium">Clara Wilson</p>
              <p className="text-gray-600"></p>
              <a href={`/profile/mentee/1`} className="text-blue-600 hover:underline">View Profile</a>
            </li>
            <li className="p-4 border border-gray-200 rounded-md">
              <p className="text-lg font-medium">David Lee</p>
              <p className="text-gray-600"></p>
              <a href={`/profile/mentee/2`} className="text-blue-600 hover:underline">View Profile</a>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default DashboardMentor;
