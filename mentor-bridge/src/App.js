import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MentorDashboard from './pages/MentorDashboard';
import MenteeDashboard from './pages/MenteeDashboard';
import Login from './pages/Login';
import Signup from './pages/Signupmentee';
import SignupMentor from './pages/SignupMentor';
import UserProfileMentee from './pages/UserProfileMentee';
import UserProfileMentor from './pages/UserProfileMentor';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mentordashboard" element={<MentorDashboard />} />
          <Route path="/menteedashboard" element={<MenteeDashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signup/mentor" element={<SignupMentor />} />
          <Route path="/profile/mentee" element={<UserProfileMentee />} />
         <Route path="/profile/mentor" element={<UserProfileMentor />} />
        
        </Routes>
      </div>
    </Router>
  );
}

export default App;
