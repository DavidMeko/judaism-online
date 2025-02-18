import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Lessons from './pages/Lessons';
import Quizzes from './pages/Quizzes';
import Resources from './pages/Resources';
import About from './pages/About';
import Help from './pages/Help';
import AccountSettings from './pages/AccountSettings';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/quizzes" element={<Quizzes />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/about" element={<About />} />
          <Route path="/help" element={<Help />} />
          <Route path="/account-settings" element={<AccountSettings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;