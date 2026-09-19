import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import { PublicLayout } from '../components/layout/PublicLayout';

const HomePage = lazy(() => import('../pages/home/HomePage').then((m) => ({ default: m.HomePage })));
const AboutPage = lazy(() => import('../pages/about/AboutPage').then((m) => ({ default: m.AboutPage })));
const ServicesPage = lazy(() => import('../pages/services/ServicesPage').then((m) => ({ default: m.ServicesPage })));
const PortfolioPage = lazy(() => import('../pages/portfolio/PortfolioPage').then((m) => ({ default: m.PortfolioPage })));
const InquiryPage = lazy(() => import('../pages/inquiry/InquiryPage').then((m) => ({ default: m.InquiryPage })));
const NoticePage = lazy(() => import('../pages/notice/NoticePage').then((m) => ({ default: m.NoticePage })));

function PageFallback() {
  return (
    <div className="flex items-center justify-center min-h-[50vh] text-slate-400">
      <div className="w-6 h-6 border-2 border-slate-300 border-t-blue-700 rounded-full animate-spin" />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route element={<PublicLayout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="portfolio" element={<PortfolioPage />} />
            <Route path="inquiry" element={<InquiryPage />} />
            <Route path="notice" element={<NoticePage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
