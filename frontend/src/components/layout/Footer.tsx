import React from 'react';
import { Link } from 'react-router';
import { SITE_CONFIG, NAV_ITEMS } from '../../shared/data/cards';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#17324D] text-[#F5F3EE] border-t border-[#102438]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Brand Wordmark & Role */}
          <div className="space-y-2 max-w-md">
            <span className="font-extrabold text-2xl tracking-tight text-white block">
              {SITE_CONFIG.brandName}
            </span>
            <p className="text-sm text-[#F5F3EE]/80 leading-relaxed">
              비즈니스의 첫인상을 완성하는 명함 스타일 탐색 및 제작 가이드를 제공합니다.
            </p>
          </div>

          {/* Navigation Links */}
          <nav aria-label="푸터 네비게이션" className="flex flex-wrap gap-6 text-sm">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-[#F5F3EE]/80 hover:text-white transition-colors focus:outline-none focus-visible:underline"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom Disclaimer */}
        <div className="mt-10 pt-6 border-t border-[#F5F3EE]/10 flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs text-[#F5F3EE]/60 gap-3">
          <p>© {new Date().getFullYear()} {SITE_CONFIG.brandName}. All rights reserved.</p>
          <p className="text-[#F5F3EE]/50">
            본 웹사이트는 디자인 및 콘텐츠 구성을 검토하기 위한 프런트엔드 프로토타입 시안입니다.
          </p>
        </div>
      </div>
    </footer>
  );
};
