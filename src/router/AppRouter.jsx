import React, { lazy } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Loader from '../components/UI/Loader';

// lazy loaded pages
const Home = lazy(() => import('../pages/Home/Home'));
const About = lazy(() => import('../pages/About/About'));
const Projects = lazy(() => import('../pages/Projects/Projects'));
const ProjectShow = lazy(() => import('../pages/ProjectShow/ProjectShow'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));

export default function AppRouter() {
  return (
    <BrowserRouter basename="/rounak-portfolio">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<React.Suspense fallback={<Loader />}><Home /></React.Suspense>} />
          <Route path="/about" element={<React.Suspense fallback={<Loader />}><About /></React.Suspense>} />
          <Route path="/projects" element={<React.Suspense fallback={<Loader />}><Projects /></React.Suspense>} />
          <Route path="/projects/:id" element={<React.Suspense fallback={<Loader />}><ProjectShow /></React.Suspense>} />
          <Route path="*" element={<React.Suspense fallback={<Loader />}><NotFound /></React.Suspense>} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
