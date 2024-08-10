// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home'; // Import Home component
import RecruiterList from './components/Recruiter/RecruiterList';
import SubscriptionList from './components/Subscription/SubscriptionList';
import JobseekerList from './components/JobSeeker/JobseekerList';
import SkillList from './components/Skills/SkillList';
import SignIn from './components/Home/signin'; // Import SignIn component
import Navbar from './components/layout/navbar';

const App = () => {
    return (
        <Router>
            <Navbar /> {/* Move Navbar inside the Router */}
            <Routes>
                <Route path="/" element={<Home />} /> {/* Route to Home component */}
                <Route path="/recruiters" element={<RecruiterList />} />
                <Route path="/jobseekers" element={<JobseekerList />} />
                <Route path="/subscriptions" element={<SubscriptionList />} />
                <Route path="/skills" element={<SkillList />} />
                <Route path="/about" element={<div>About Us</div>} />
                <Route path="/contact" element={<div>Contact Us</div>} />
                <Route path="/signin" element={<SignIn />} /> {/* Route to SignIn component */}
            </Routes>
        </Router>
    );
};

export default App;
