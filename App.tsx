
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Team from './pages/Team';
import Services from './pages/Services';
import CaseStudies from './pages/CaseStudies';
import CaseStudyDetail from './pages/CaseStudyDetail';
import Pricing from './pages/Pricing';
import Consultation from './pages/Consultation';
import Portal from './pages/Portal';
import ForgotPassword from './pages/ForgotPassword';
import Legal from './pages/Legal';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/services" element={<Services />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/portal" element={<Portal />} />
          <Route path="/staff-login" element={<Portal isStaff />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/privacy" element={<Legal type="privacy" />} />
          <Route path="/terms" element={<Legal type="terms" />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
