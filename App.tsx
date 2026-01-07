import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.tsx';
import Home from './pages/Home.tsx';
import Team from './pages/Team.tsx';
import Services from './pages/Services.tsx';
import CaseStudies from './pages/CaseStudies.tsx';
import CaseStudyDetail from './pages/CaseStudyDetail.tsx';
import Pricing from './pages/Pricing.tsx';
import Consultation from './pages/Consultation.tsx';
import Portal from './pages/Portal.tsx';
import ForgotPassword from './pages/ForgotPassword.tsx';
import Legal from './pages/Legal.tsx';
import ScrollToTop from './components/ScrollToTop.tsx';

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