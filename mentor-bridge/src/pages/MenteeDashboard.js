import React from 'react';
import Navbar from '../components/Navbar';

function DashboardMentee() {
  const upcomingMeetings = [
    { id: 1, date: '2024-09-05', time: '10:00 AM', mentor: 'Jane Smith' },
    { id: 2, date: '2024-09-10', time: '2:00 PM', mentor: 'John Doe' },
  ];

  const notifications = [
    { id: 1, message: 'You have a new message from your mentor, Jane Smith.' },
    { id: 2, message: 'Your upcoming meeting with John Doe has been confirmed.' },
  ];

  const suggestedMentors = [
    { id: 1, name: 'Alice Johnson', expertise: 'Data Science' },
    { id: 2, name: 'Robert Brown', expertise: 'Web Development' },
  ];

  const achievements = [
    { id: 1, title: 'Completed Data Science Basics', date: '2024-08-15' },
    { id: 2, title: 'Attended Workshop on Machine Learning', date: '2024-07-20' },
  ];

  const events = [
    { id: 1, name: 'Tech Conference 2024', date: '2024-09-25' },
    { id: 2, name: 'Networking Event', date: '2024-10-10' },
  ];

  return (
    <div>
      <Navbar role="mentee" />
      <main className="p-4 md:p-8 bg-gray-100 min-h-screen">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">Mentee Dashboard</h1>

        {/* Profile Summary Section */}
        <section className="mb-6 md:mb-8 bg-white p-4 md:p-6 rounded-lg shadow-md">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Profile Summary</h2>
          <p className="text-gray-600">Here is a brief summary of your profile and goals.</p>
          {/* Add more details as needed */}
        </section>

        {/* Mentorship Goals Tracker Section */}
        <section className="mb-6 md:mb-8 bg-white p-4 md:p-6 rounded-lg shadow-md">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Mentorship Goals Tracker</h2>
          <div className="bg-gray-200 p-4 rounded-lg">
            <p className="text-gray-700">Track and visualize your goals here.</p>
            {/* Add a progress bar or goal tracker */}
          </div>
        </section>

        {/* Upcoming Meetings Section */}
        <section className="mb-6 md:mb-8 bg-white p-4 md:p-6 rounded-lg shadow-md">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Upcoming Meetings</h2>
          <ul className="space-y-4">
            {upcomingMeetings.map(meeting => (
              <li key={meeting.id} className="p-4 border border-gray-200 rounded-md">
                <p className="text-lg font-medium">{meeting.mentor}</p>
                <p className="text-gray-600">{meeting.date} at {meeting.time}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Recent Notifications Section */}
        <section className="mb-6 md:mb-8 bg-white p-4 md:p-6 rounded-lg shadow-md">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Recent Notifications</h2>
          <ul className="space-y-4">
            {notifications.map(notification => (
              <li key={notification.id} className="p-4 border border-gray-200 rounded-md">
                {notification.message}
              </li>
            ))}
          </ul>
        </section>

        {/* Suggested Mentors Section */}
        <section className="mb-6 md:mb-8 bg-white p-4 md:p-6 rounded-lg shadow-md">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Suggested Mentors</h2>
          <ul className="space-y-4">
            {suggestedMentors.map(mentor => (
              <li key={mentor.id} className="p-4 border border-gray-200 rounded-md">
                <p className="text-lg font-medium">{mentor.name}</p>
                <p className="text-gray-600">Expertise: {mentor.expertise}</p>
                <a href={`/profile/mentor/${mentor.id}`} className="text-blue-600 hover:underline">
                  View Profile
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Achievements Section */}
        <section className="mb-6 md:mb-8 bg-white p-4 md:p-6 rounded-lg shadow-md">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Achievements</h2>
          <ul className="space-y-4">
            {achievements.map(achievement => (
              <li key={achievement.id} className="p-4 border border-gray-200 rounded-md">
                <p className="text-lg font-medium">{achievement.title}</p>
                <p className="text-gray-600">Achieved on {achievement.date}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Upcoming Events Section */}
        <section className="bg-white p-4 md:p-6 rounded-lg shadow-md">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Upcoming Events</h2>
          <ul className="space-y-4">
            {events.map(event => (
              <li key={event.id} className="p-4 border border-gray-200 rounded-md">
                <p className="text-lg font-medium">{event.name}</p>
                <p className="text-gray-600">Date: {event.date}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default DashboardMentee;
