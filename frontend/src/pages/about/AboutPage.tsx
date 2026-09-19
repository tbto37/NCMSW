import React from 'react';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { Card } from '../../components/ui/Card';
import { COMPANY_INFO } from '../../shared/constants/navigation';
import { Award, Compass, HeartHandshake, MapPin, Building, Users } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const history = [
    { year: '2026', title: 'NCMS 통합 플랫폼 확장', desc: '주요 대기업 및 제약/광고 기업 전용 B2B 명함 관리 솔루션 공급 및 NCMSW 오픈' },
    { year: '2025', title: '실시간 명함 교정 승인 엔진 특허', desc: 'SVG 벡터 렌더링 및 모바일 원클릭 승인 체계 독자 개발' },
    { year: '2023', title: 'FSC 친환경 용지 라인업 구축', desc: '친환경 콩기름 잉크 인쇄 시스템 및 무탄소 고급 수입지 대량 도입' },
    { year: '2020', title: '로그컴 법인 설립', desc: '(주)투비더원 로그컴 설립 및 기업 인쇄 솔루션 사업 개시' },
  ];

  return (
    <div className="py-12 sm:py-20 space-y-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* 1. Header */}
      <SectionHeader
        badge="About Us"
        title="기업의 첫인상을 디자인하는 비즈니스 파트너"
        description="로그컴은 고객사의 브랜드 아이덴티티를 온전히 담아내는 맞춤 명함 인쇄 및 주문 자동화 솔루션 기업입니다."
      />

      {/* 2. CEO Message & Vision */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white p-8 sm:p-12 rounded-2xl border border-slate-200 shadow-sm">
        <div className="space-y-6">
          <span className="text-xs font-bold text-blue-800 tracking-wider uppercase">Our Mission</span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug">
            “명함 한 장에 담긴 <br />
            기업의 가치를 가장 정확하게 전달합니다.”
          </h3>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            명함은 단순한 종이가 아닌, 비즈니스 만남의 시작이자 기업의 신뢰도를 결정짓는 첫 번째 매개체입니다. 
            로그컴은 20년 이상의 정밀 인쇄 장인 정신과 최신 클라우드 기술을 결합하여, 
            인쇄 오탈자 제로화와 발주 공수 90% 절감을 실현하고 있습니다.
          </p>
          <div className="pt-4 border-t border-slate-100 flex items-center gap-4">
            <div>
              <div className="font-bold text-slate-900">{COMPANY_INFO.name} 대표이사 {COMPANY_INFO.ceo}</div>
              <div className="text-xs text-slate-500">로그컴 임직원 일동</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Card className="bg-slate-50 p-6 text-center">
            <Award className="w-8 h-8 text-blue-700 mx-auto mb-3" />
            <div className="font-bold text-slate-900 mb-1">장인 품질</div>
            <div className="text-xs text-slate-500">엄격한 색감 관리 및 정밀 후가공</div>
          </Card>
          <Card className="bg-slate-50 p-6 text-center">
            <Compass className="w-8 h-8 text-indigo-700 mx-auto mb-3" />
            <div className="font-bold text-slate-900 mb-1">스마트 혁신</div>
            <div className="text-xs text-slate-500">NCMS 자동화 플랫폼 도입</div>
          </Card>
          <Card className="bg-slate-50 p-6 text-center">
            <HeartHandshake className="w-8 h-8 text-amber-600 mx-auto mb-3" />
            <div className="font-bold text-slate-900 mb-1">고객 신뢰</div>
            <div className="text-xs text-slate-500">납기 준수율 99.8% 달성</div>
          </Card>
          <Card className="bg-slate-50 p-6 text-center">
            <Users className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
            <div className="font-bold text-slate-900 mb-1">전담 관리</div>
            <div className="text-xs text-slate-500">기업별 1:1 전담 매니저 배정</div>
          </Card>
        </div>
      </div>

      {/* 3. History Timeline */}
      <div>
        <SectionHeader
          badge="History"
          title="로그컴이 걸어온 길"
          description="끊임없는 기술 개발과 품질 혁신으로 지속 성장해 왔습니다."
        />

        <div className="max-w-3xl mx-auto space-y-6">
          {history.map((item, index) => (
            <div key={index} className="flex items-start gap-6 group">
              <div className="w-20 pt-1 text-right font-extrabold text-blue-800 text-lg sm:text-xl">
                {item.year}
              </div>
              <div className="relative pt-2">
                <div className="w-3 h-3 rounded-full bg-blue-700 group-hover:scale-125 transition-transform" />
                {index < history.length - 1 && (
                  <div className="absolute top-5 left-1.5 -translate-x-1/2 w-0.5 h-16 bg-slate-200" />
                )}
              </div>
              <div className="flex-1 pb-8">
                <div className="text-base font-bold text-slate-900">{item.title}</div>
                <div className="text-sm text-slate-600 mt-1">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Location & Contact Info */}
      <div className="bg-slate-100 p-8 sm:p-12 rounded-2xl border border-slate-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Building className="w-5 h-5 text-blue-800" />
              사업장 안내
            </h4>
            <div className="space-y-3 text-sm text-slate-600">
              <p><strong className="text-slate-800">상호명:</strong> {COMPANY_INFO.name} ({COMPANY_INFO.brand})</p>
              <p><strong className="text-slate-800">대표자:</strong> {COMPANY_INFO.ceo}</p>
              <p><strong className="text-slate-800">사업자등록번호:</strong> {COMPANY_INFO.businessNumber}</p>
              <p><strong className="text-slate-800">주소:</strong> {COMPANY_INFO.address}</p>
              <p><strong className="text-slate-800">대표전화:</strong> {COMPANY_INFO.phone}</p>
              <p><strong className="text-slate-800">이메일:</strong> {COMPANY_INFO.email}</p>
            </div>
          </div>
          <div className="flex flex-col justify-center bg-white p-6 rounded-xl border border-slate-200">
            <div className="flex items-center gap-2 text-slate-800 font-semibold mb-2">
              <MapPin className="w-5 h-5 text-red-500" />
              오시는 길
            </div>
            <p className="text-xs text-slate-500 mb-4">
              지하철 2·3호선 을지로3가역 도보 3분 거리입니다. 방문 상담 전 유선 예약 부탁드립니다.
            </p>
            <div className="h-36 bg-slate-100 rounded-lg flex items-center justify-center text-xs text-slate-400 border border-slate-200">
              [오시는 길 약도 / 지도 연동 영역]
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
