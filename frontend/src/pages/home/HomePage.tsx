import React from 'react';
import { Link } from 'react-router';
import { ArrowRight, CheckCircle2, ShieldCheck, Printer, Truck, Sparkles, Building2 } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { COMPANY_INFO } from '../../shared/constants/navigation';

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-24 sm:space-y-32 pb-24">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden pt-12 sm:pt-20 pb-16 sm:pb-24 bg-gradient-to-b from-blue-900 via-slate-900 to-slate-900 text-white">
        {/* Subtle decorative background light */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full overflow-hidden pointer-events-none opacity-25">
          <div className="absolute -top-40 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-indigo-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs sm:text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 text-amber-400" />
            대한민국 1등 기업형 명함 관리·인쇄 솔루션
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight sm:leading-none max-w-4xl mx-auto">
            비즈니스의 첫인상, <br className="hidden sm:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-indigo-200 to-amber-200">
              로그컴 맞춤 명함 솔루션
            </span>
            으로 완성하세요.
          </h1>

          <p className="mt-6 text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            복잡한 임직원 명함 발주부터 시안 교정, 초정밀 오프셋 인쇄, 개별 맞춤 배송까지. 
            스마트 B2B 플랫폼 **NCMS**로 명함 관리가 1분 만에 끝납니다.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry">
              <Button size="lg" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3.5 shadow-lg shadow-blue-900/50">
                도입 및 견적 문의
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <a href={COMPANY_INFO.adminUrl} target="_blank" rel="noreferrer">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-slate-700 bg-slate-800/80 hover:bg-slate-800 text-slate-200">
                NCMS B2B 데모 체험
              </Button>
            </a>
          </div>

          {/* Quick Metrics Bar */}
          <div className="mt-16 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8 border-t border-slate-800/80">
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white">100+</div>
              <div className="text-xs sm:text-sm text-slate-400 mt-1">기업 고객사 도입</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-amber-400">99.8%</div>
              <div className="text-xs sm:text-sm text-slate-400 mt-1">납기 준수율</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white">1분</div>
              <div className="text-xs sm:text-sm text-slate-400 mt-1">온라인 발주 및 교정</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-blue-400">20년+</div>
              <div className="text-xs sm:text-sm text-slate-400 mt-1">인쇄·후가공 노하우</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Core Value Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Why LOGCOM"
          title="기업 명함 관리가 혁신적으로 쉬워집니다"
          description="기존의 이메일 교정, 전화 주문, 엑셀 취합의 비효율을 없애고 엔터프라이즈 맞춤형 자동화 환경을 제공합니다."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card hoverable className="p-8">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center mb-6">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-3">
              기업 전용 템플릿 & 실시간 미리보기
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              고객사의 CI/BI 가이드를 엄격히 반영한 전용 폰트, 로고, 레이아웃을 등록하여 
              정보 입력 즉시 실시간 SVG 렌더링으로 오탈자 없이 교정합니다.
            </p>
          </Card>

          <Card hoverable className="p-8">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-6">
              <Printer className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-3">
              장인 정신의 프리미엄 인쇄 품질
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              고해상도 옵셋/인디고 인쇄기, FSC 친환경 인증 수입지, 박가공·형압·에지 컬러링 등 
              기업의 품격을 높이는 다채로운 프리미엄 후가공을 지원합니다.
            </p>
          </Card>

          <Card hoverable className="p-8">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-6">
              <Truck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-3">
              스마트 검수 및 전국 직배송
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              전문 검수팀의 데이터 검증 후 인쇄에 착수하며, 본사 일괄 납품부터 
              전국 지사·해외 지사 개별 직발송까지 운송장 연동으로 추적 관리합니다.
            </p>
          </Card>
        </div>
      </section>

      {/* 3. NCMS Platform Integration Feature Preview */}
      <section className="bg-slate-100/70 py-16 sm:py-24 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-700 bg-blue-100/80 rounded-full">
                B2B 솔루션 NCMS
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                임직원 명함 발주부터 총무팀 승인까지, <br />
                전용 웹 포털로 한 번에 해결
              </h2>
              <p className="text-slate-600 leading-relaxed">
                로그컴 고객사에게는 독립된 접속 주소와 브랜드 커스텀이 적용된 NCMS 전용 포털을 무료로 구축해 드립니다.
              </p>
              
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-700 shrink-0" />
                  <span>임직원 셀프 정보 입력 및 모바일 미리보기 승인</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-700 shrink-0" />
                  <span>기업 관리자의 발주 취합, 예산 관리 및 통계 대시보드</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-700 shrink-0" />
                  <span>인쇄 전용 자동화 PDF 생성 및 원클릭 재주문</span>
                </li>
              </ul>

              <div className="pt-2">
                <Link to="/services">
                  <Button variant="secondary" className="gap-2">
                    서비스 상세 보기
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Visual Box */}
            <div className="relative rounded-2xl bg-white p-6 sm:p-8 shadow-xl border border-slate-200/80">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-400"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-400"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-400"></span>
                </div>
                <span className="text-xs text-slate-400 font-mono">ncms.logcom.co.kr</span>
              </div>
              <div className="mt-6 space-y-4">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="text-xs font-semibold text-slate-500 mb-1">고객사 전용 테넌트</div>
                  <div className="text-sm font-bold text-slate-800">한미약품 / 제일기획 등 주요 파트너 운영 중</div>
                </div>
                <div className="p-4 bg-blue-50/50 rounded-xl border border-blue-100 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-semibold text-blue-600">명함 실시간 교정 엔진</div>
                    <div className="text-sm font-bold text-slate-900">SVG 고해상도 프리뷰 & 인쇄 자동화</div>
                  </div>
                  <Building2 className="w-8 h-8 text-blue-600/40" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Ready to Start CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white p-8 sm:p-16 text-center shadow-2xl relative overflow-hidden">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            우리 회사 맞춤 명함 솔루션을 지금 시작해보세요
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            무료 샘플 키트 신청 및 전담 매니저의 기업 맞춤 도입 컨설팅을 제공해 드립니다.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry">
              <Button size="lg" className="w-full sm:w-auto bg-white text-blue-900 hover:bg-slate-100 font-bold px-8">
                온라인 상담 / 견적 신청
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="ghost" className="w-full sm:w-auto text-slate-200 hover:text-white hover:bg-white/10">
                로그컴 회사소개 보기
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
