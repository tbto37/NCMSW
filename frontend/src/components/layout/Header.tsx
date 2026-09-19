import React, { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';
import { SITE_CONFIG, NAV_ITEMS } from '../../shared/data/cards';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* 1. Prototype Notice Bar (중앙 관리) */}
      {SITE_CONFIG.showPrototypeBanner && (
        <div className="bg-[#17324D] text-[#F5F3EE] text-xs font-normal py-2 px-4 text-center tracking-wide border-b border-[#102438]">
          <span>{SITE_CONFIG.prototypeBannerText}</span>
        </div>
      )}

      {/* 2. Main Navigation Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-[#E2E8F0] transition-all">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* LOGCOM Text Wordmark */}
            <Link
              to="/"
              className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#245EDB] rounded"
              aria-label="로그컴 홈으로 이동"
            >
              <span className="font-extrabold text-2xl tracking-tight text-[#17324D] transition-colors group-hover:text-[#245EDB]">
                {SITE_CONFIG.brandName}
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1 sm:gap-2">
              {NAV_ITEMS.filter((item) => item.href !== '/').map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#245EDB] ${
                      active
                        ? 'text-[#245EDB] bg-[#F5F3EE] font-semibold'
                        : 'text-[#1E293B] hover:text-[#17324D] hover:bg-[#F5F3EE]/60'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                type="button"
                className="p-2 rounded-md text-[#17324D] hover:bg-[#F5F3EE] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#245EDB]"
                aria-label={mobileMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-[#E2E8F0] bg-white px-4 pt-2 pb-6 space-y-1 shadow-md">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-3 rounded-md text-base font-medium transition-colors ${
                    active
                      ? 'text-[#245EDB] bg-[#F5F3EE] font-semibold'
                      : 'text-[#1E293B] hover:bg-[#F5F3EE]'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        )}
      </header>
    </>
  );
};
