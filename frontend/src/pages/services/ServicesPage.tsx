import React from 'react';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Link } from 'react-router';
import { Layout, CheckCircle2, Sliders, Layers, PackageCheck, Send, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../../shared/constants/navigation';

export const ServicesPage: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: '고객사 전용 템플릿 세팅',
      desc: '고객사 CI 규정에 맞는 규격, 색상, 서체를 NCMS에 등록하고 보안 테넌트를 개설합니다.',
      icon: Layout,
    },
    {
      num: '02',
      title: '임직원 정보 입력 & 교정',
      desc: '임직원이 접속하여 정보 입력 시 실시간 SVG 렌더링으로 즉시 시안을 확인하고 발주합니다.',
      icon: Sliders,
    },
    {
      num: '03',
      title: '전문 검수 & 정밀 인쇄',
      desc: '로그컴 전담 검수팀이 최종 교정 확인 후 고해상도 옵셋/디지털 인쇄 및 후가공을 진행합니다.',
      icon: PackageCheck,
    },
    {
      num: '04',
      title: '개별 맞춤 전국 배송',
      desc: '본사 납품 또는 지사·임직원 자택 개별 택배 발송 및 운송장 알림을 실시간 제공합니다.',
      icon: Send,
    },
  ];

  const techniques = [
    { title: '프리미엄 수입지', desc: '반누보, 엑스트라 매트, 랑데뷰, 크라프트 등 30여 종의 최고급 용지 보유' },
    { title: '정밀 박가공 (Foil)', desc: '금박(유광/무광), 은박, 홀로그램박, 로즈골드박 등 정교한 압인 가공' },
    { title: '형압 및 엠보싱 (Emboss)', desc: '로고나 심볼의 입체감을 살리는 정밀 엠보싱 및 디보싱 공정' },
    { title: '엣지 컬러링 & 코팅', desc: '명함 옆면에 브랜드 고유 색상을 입히는 엣지 도색 및 내구성 무광 코팅' },
  ];

  return (
    <div className="py-12 sm:py-20 space-y-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <SectionHeader
        badge="Services & Solutions"
        title="기업에 최적화된 올인원 명함 서비스"
        description="독자 개발한 NCMS 솔루션과 20년 인쇄 노하우로 번거로운 명함 업무를 완벽하게 자동화합니다."
      />

      {/* 1. NCMS B2B Solution Introduction */}
      <div className="bg-gradient-to-br from-blue-900 to-indigo-950 text-white rounded-3xl p-8 sm:p-14 shadow-xl">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            엔터프라이즈 B2B 솔루션
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            NCMS (NameCard Management System)
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            전국 분산 지사, 수백 명의 임직원 명함을 단 한 명의 담당자가 손쉽게 관리할 수 있는 전용 솔루션입니다. 
            조직도 연동, 예산 관리, 주문 이력 및 재발주까지 모든 프로세스를 웹에서 실시간으로 처리합니다.
          </p>
          <div className="pt-2 flex flex-wrap gap-4">
            <a href={COMPANY_INFO.adminUrl} target="_blank" rel="noreferrer">
              <Button className="bg-white text-blue-900 hover:bg-slate-100 font-bold">
                NCMS 어드민 체험
              </Button>
            </a>
            <Link to="/inquiry">
              <Button variant="outline" className="border-slate-500 text-slate-200 hover:bg-white/10">
                도입 상담 문의
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* 2. 4-Step Process */}
      <div>
        <SectionHeader
          badge="Workflow"
          title="원스톱 제작 프로세스"
          description="접수부터 배송까지 투명하고 신속하게 진행됩니다."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <Card key={step.num} className="p-6 relative overflow-hidden">
                <div className="text-4xl font-black text-slate-100 absolute -top-1 -right-1 pointer-events-none select-none">
                  {step.num}
                </div>
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-800 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </Card>
            );
          })}
        </div>
      </div>

      {/* 3. Print Quality & Post-Processing */}
      <div className="bg-slate-50 p-8 sm:p-12 rounded-2xl border border-slate-200">
        <SectionHeader
          badge="Quality Craft"
          title="압도적인 인쇄 및 후가공 기술"
          description="고객사의 브랜드 품격을 한 차원 끌어올리는 특수 가공 라인업을 제공합니다."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {techniques.map((t, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 flex items-start gap-4">
              <Layers className="w-6 h-6 text-blue-700 shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-slate-900 mb-1">{t.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
