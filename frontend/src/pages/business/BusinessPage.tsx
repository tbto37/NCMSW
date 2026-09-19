import React from 'react';
import { Link } from 'react-router';
import { ArrowRight, CheckCircle2, ShieldCheck, Users2, FileCheck2, ArrowLeft } from 'lucide-react';
import { SITE_CONFIG } from '../../shared/data/cards';

export const BusinessPage: React.FC = () => {
  const checklists = [
    {
      title: '전사 표준 레이아웃 & 서체 규정',
      desc: '직함이나 이름의 글자 수 차이에도 흐트러지지 않는 기준 정렬과 한글/영문 폰트 위계를 설정합니다.',
    },
    {
      title: '고유 CI/BI 색상 및 로고 규격',
      desc: '인쇄 시 로고 색상의 편차를 줄이기 위해 정확한 팬톤(Pantone) 또는 CMYK 기준값을 확정합니다.',
    },
    {
      title: '부서 및 팀별 필수 표기 항목',
      desc: '임원, 영업, 연구, 지원 등 부서 특성에 따라 유선전화, 휴대폰, 영문 주소 등 표기 항목을 사전 정리합니다.',
    },
    {
      title: '표준 용지 및 후가공 사양 선정',
      desc: '기업의 브랜드 톤앤매너에 맞추어 전사 공통으로 사용할 용지 평량과 박·형압 등 후가공 적용 여부를 결정합니다.',
    },
  ];

  return (
    <div className="py-10 sm:py-16 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* 1. Page Header */}
      <div className="text-left space-y-3 pb-6 border-b border-[#E2E8F0]">
        <span className="text-xs font-bold text-[#245EDB] tracking-wider uppercase block">
          Corporate Identity
        </span>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-[#17324D]">
          기업명함 안내
        </h1>
        <p className="text-sm sm:text-base text-[#1E293B]/80 max-w-2xl leading-relaxed">
          구성원 개개인의 명함이 모여 기업의 단단한 브랜드 아이덴티티를 완성합니다. 
          일관된 스타일과 체계적인 정보 정리를 위한 디자인 방향을 안내해 드립니다.
        </p>
      </div>

      {/* 2. Visual & Concept Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6 space-y-5">
          <span className="inline-block text-xs font-semibold text-[#245EDB] bg-[#F5F3EE] px-2.5 py-1 rounded border border-[#E2E8F0]">
            통일된 브랜드 경험
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#17324D] leading-snug">
            “명함 한 장에도 <br />
            기업의 철학과 신뢰가 담겨 있습니다.”
          </h2>
          <p className="text-sm sm:text-base text-[#1E293B]/80 leading-relaxed">
            비즈니스 미팅 현장에서 고객과 파트너가 처음 마주하는 실물 접점은 명함입니다. 
            팀원마다 제각각인 서체나 레이아웃 대신, 규격화된 전사 템플릿을 통해 정돈되고 신뢰감 있는 브랜드 인상을 전달할 수 있습니다.
          </p>
          <div className="pt-2 flex flex-wrap gap-3">
            <Link
              to="/cards"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#17324D] hover:bg-[#102438] text-white text-sm font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#245EDB]"
            >
              명함 스타일 둘러보기
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/guide"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-white hover:bg-[#F5F3EE] text-[#17324D] border border-[#E2E8F0] text-sm font-semibold transition-all"
            >
              제작 가이드 보기
            </Link>
          </div>
        </div>

        {/* Team Cards Mockup */}
        <div className="lg:col-span-6">
          <div className="rounded-xl overflow-hidden border border-[#E2E8F0] bg-[#F5F3EE] shadow-sm">
            <img
              src={SITE_CONFIG.images.team}
              alt="팀 구성원별 일관된 명함 목업"
              className="w-full h-auto object-cover"
            />
          </div>
          <p className="text-[11px] text-[#64748B] text-center mt-2">
            * 동일한 레이아웃과 서체 규정을 적용한 팀 명함 예시 목업입니다.
          </p>
        </div>
      </div>

      {/* 3. Corporate Checkpoints */}
      <div className="bg-[#F5F3EE] rounded-2xl p-8 sm:p-12 border border-[#E2E8F0] space-y-8">
        <div>
          <span className="text-xs font-bold text-[#245EDB] tracking-wider uppercase block mb-1">
            Checklist for Teams
          </span>
          <h2 className="text-2xl font-bold text-[#17324D]">
            기업 명함 준비 시 꼭 확인할 4가지
          </h2>
          <p className="text-sm text-[#64748B] mt-1">
            여러 인원의 명함을 일괄 기획할 때 사전에 체크해야 할 핵심 항목입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {checklists.map((chk, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 border border-[#E2E8F0] shadow-sm flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-[#F5F3EE] text-[#17324D] font-bold text-sm flex items-center justify-center shrink-0">
                {idx + 1}
              </div>
              <div>
                <h3 className="font-bold text-base text-[#17324D] mb-1">
                  {chk.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#1E293B]/75 leading-relaxed">
                  {chk.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Action Banner (No Fake Form!) */}
      <div className="p-8 sm:p-10 rounded-2xl border border-[#E2E8F0] bg-white text-center max-w-2xl mx-auto space-y-4">
        <h3 className="text-xl font-bold text-[#17324D]">
          다음 단계 준비하기
        </h3>
        <p className="text-sm text-[#64748B] leading-relaxed">
          로그컴의 다양한 명함 재질과 스타일을 둘러보시거나, 
          명함에 들어갈 텍스트와 가독성 체크포인트를 가이드에서 먼저 확인해 보세요.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/cards"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-md bg-[#17324D] hover:bg-[#102438] text-white text-sm font-semibold transition-all"
          >
            명함 스타일 살펴보기
          </Link>
          <Link
            to="/guide"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-md bg-[#F5F3EE] hover:bg-[#E2E8F0] text-[#17324D] text-sm font-semibold transition-all"
          >
            제작 가이드 확인하기
          </Link>
        </div>
      </div>
    </div>
  );
};
