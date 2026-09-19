import React from 'react';
import { Link } from 'react-router';
import { COMPANY_INFO, NAV_ITEMS } from '../../shared/constants/navigation';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-12">
          {/* Brand & Mission */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-lg">
                L
              </div>
              <span className="font-bold text-xl text-white tracking-tight">LOGCOM</span>
            </div>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              로그컴은 대한민국 기업의 첫인상을 완성하는 기업 맞춤형 No.1 명함 인쇄 및 주문 자동화 솔루션 기업입니다. 
              스마트 온라인 발주 시스템 NCMS를 통해 빠르고 정확한 명함 라이프사이클을 제공합니다.
            </p>
            <div className="pt-2 text-xs text-slate-500 space-y-1">
              <p>{COMPANY_INFO.name} | 대표자: {COMPANY_INFO.ceo} | 사업자등록번호: {COMPANY_INFO.businessNumber}</p>
              <p>주소: {COMPANY_INFO.address}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-slate-200 tracking-wider uppercase">
              바로가기
            </h4>
            <ul className="space-y-2.5 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={COMPANY_INFO.adminUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  NCMS B2B 어드민
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Center */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-slate-200 tracking-wider uppercase">
              고객지원 센터
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="text-white font-semibold">{COMPANY_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{COMPANY_INFO.email}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-400">{COMPANY_INFO.operatingHours}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-400 cursor-pointer">이용약관</span>
            <span className="text-slate-700">|</span>
            <span className="hover:text-slate-400 cursor-pointer">개인정보처리방침</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
