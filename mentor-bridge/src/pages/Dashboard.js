import React from 'react';

function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header Section */}
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#profile" className="hover:underline">Profile</a>
              </li>
              <li>
                <a href="#sessions" className="hover:underline">Sessions</a>
              </li>
              <li>
                <a href="#settings" className="hover:underline">Settings</a>
              </li>
              <li>
                <a href="#logout" className="hover:underline">Logout</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="container mx-auto">
          {/* Profile Section */}
          <section id="profile" className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Your Profile</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-lg">Name: John Doe</p>
              <p className="text-lg">Email: john.doe@example.com</p>
              {/* Add more profile details here */}
            </div>
          </section>

          {/* Upcoming Sessions Section */}
          <section id="sessions" className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Upcoming Sessions</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <ul>
                <li className="mb-4">
                  <p className="text-lg font-medium">Session with Mentor A</p>
                  <p>Date: September 15, 2024</p>
                </li>
                <li className="mb-4">
                  <p className="text-lg font-medium">Session with Mentor B</p>
                  <p>Date: September 22, 2024</p>
                </li>
                {/* Add more sessions here */}
              </ul>
            </div>
          </section>

          {/* Settings Section */}
          <section id="settings" className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Edit Profile
              </button>
              {/* Add more settings options here */}
            </div>
          </section>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="bg-blue-600 text-white p-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Mentor Bridge. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Dashboard;
