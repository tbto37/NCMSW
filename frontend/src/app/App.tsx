import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import { PublicLayout } from '../components/layout/PublicLayout';

const HomePage = lazy(() => import('../pages/home/HomePage').then((m) => ({ default: m.HomePage })));
const CardsPage = lazy(() => import('../pages/cards/CardsPage').then((m) => ({ default: m.CardsPage })));
const CardDetailPage = lazy(() => import('../pages/cards/CardDetailPage').then((m) => ({ default: m.CardDetailPage })));
const BusinessPage = lazy(() => import('../pages/business/BusinessPage').then((m) => ({ default: m.BusinessPage })));
const GuidePage = lazy(() => import('../pages/guide/GuidePage').then((m) => ({ default: m.GuidePage })));

function PageFallback() {
  return (
    <div className="flex items-center justify-center min-h-[50vh] text-[#64748B]">
      <div className="w-6 h-6 border-2 border-[#E2E8F0] border-t-[#17324D] rounded-full animate-spin" />
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
            <Route path="cards" element={<CardsPage />} />
            <Route path="cards/:slug" element={<CardDetailPage />} />
            <Route path="business" element={<BusinessPage />} />
            <Route path="guide" element={<GuidePage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
