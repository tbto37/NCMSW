import React from 'react';
import { Link } from 'react-router';
import { ArrowRight, ChevronRight, Layers, Sparkles, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG, CARDS, TEXTURE_COMPARISONS, GUIDE_TIPS, CATEGORIES } from '../../shared/data/cards';

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-20 sm:space-y-28 pb-20">
      {/* 1. Hero Section */}
      <section className="bg-[#F5F3EE] border-b border-[#E2E8F0] pt-12 sm:pt-20 pb-16 sm:pb-24">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Hero Copy */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#E2E8F0] text-xs font-medium text-[#17324D]">
                <span className="w-2 h-2 rounded-full bg-[#245EDB]" />
                명함 스타일 & 제작 가이드
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#17324D] leading-[1.2]">
                좋은 인상을 남기는, <br />
                <span className="text-[#245EDB]">한 장의 명함</span>
              </h1>

              <p className="text-base sm:text-lg text-[#1E293B]/80 leading-relaxed font-normal max-w-xl">
                다양한 명함 스타일과 제작 정보를 로그컴에서 살펴보세요. 
                비즈니스의 성격에 꼭 맞는 종이의 질감과 표현 방식을 제안합니다.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  to="/cards"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-[#17324D] hover:bg-[#102438] text-white text-sm font-semibold shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#245EDB]"
                >
                  명함 둘러보기
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/business"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-white hover:bg-[#F5F3EE] text-[#17324D] border border-[#E2E8F0] text-sm font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#245EDB]"
                >
                  기업명함 알아보기
                </Link>
              </div>
            </div>

            {/* Hero Large Mockup Image */}
            <div className="lg:col-span-6">
              <div className="relative rounded-xl overflow-hidden shadow-md border border-[#E2E8F0] bg-white group">
                <img
                  src={SITE_CONFIG.images.hero}
                  alt="로그컴 네이비 및 화이트 종이 질감 명함 샘플"
                  className="w-full h-auto aspect-[16/10] object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-white text-[11px] px-2.5 py-1 rounded">
                  스튜디오 촬영 예시 비주얼
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Style Categories Overview */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-[#E2E8F0]">
          <div>
            <span className="text-xs font-bold text-[#245EDB] tracking-wider uppercase block mb-1">
              Styles Overview
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#17324D]">
              명함 스타일 카테고리
            </h2>
          </div>
          <p className="text-sm text-[#64748B] mt-2 md:mt-0">
            원하는 감성과 용도에 따라 4가지 스타일로 분류해 탐색할 수 있습니다.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {CATEGORIES.filter((c) => c.id !== 'ALL').map((cat) => {
            const descMap: Record<string, string> = {
              STANDARD: '단정하고 가독성 높은 표준 매트 용지',
              PREMIUM: '도톰한 두께와 따뜻한 감촉의 코튼지',
              TEXTURE: '직조 결이 살아있는 클래식 리넨·크라프트',
              SPECIAL: '은은한 박가공과 입체적인 형압 표현',
            };
            return (
              <Link
                key={cat.id}
                to={`/cards?category=${cat.id}`}
                className="group bg-[#F5F3EE] hover:bg-white rounded-lg p-5 border border-[#E2E8F0] transition-all hover:shadow-sm"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-[#245EDB] bg-white px-2.5 py-1 rounded border border-[#E2E8F0]">
                    {cat.label}
                  </span>
                  <ChevronRight className="w-4 h-4 text-[#64748B] group-hover:translate-x-0.5 transition-transform" />
                </div>
                <h3 className="font-bold text-base text-[#17324D] mb-1">
                  {cat.label} 명함
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  {descMap[cat.id]}
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* 3. Featured 6 Business Card Samples Grid */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-[#E2E8F0]">
          <div>
            <span className="text-xs font-bold text-[#245EDB] tracking-wider uppercase block mb-1">
              Sample Collection
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#17324D]">
              대표 명함 스타일 살펴보기
            </h2>
          </div>
          <Link
            to="/cards"
            className="inline-flex items-center gap-1 text-sm font-semibold text-[#245EDB] hover:underline mt-2 sm:mt-0"
          >
            전체 명함 목록 보기
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CARDS.map((card) => (
            <Link
              key={card.id}
              to={`/cards/${card.slug}`}
              className="group bg-white rounded-xl border border-[#E2E8F0] overflow-hidden transition-all duration-300 hover:shadow-md hover:border-[#CBD5E1] flex flex-col"
            >
              {/* Card Mockup Visual */}
              <div className="aspect-[4/3] bg-[#F5F3EE] overflow-hidden relative">
                <img
                  src={card.image}
                  alt={`${card.name} 명함 샘플`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 text-[11px] font-semibold text-[#17324D] bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded border border-[#E2E8F0]">
                  {card.categoryName}
                </span>
              </div>

              {/* Card Information */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-bold text-lg text-[#17324D] group-hover:text-[#245EDB] transition-colors">
                    {card.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#1E293B]/75 leading-relaxed line-clamp-2">
                    {card.shortDesc}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E2E8F0] text-xs text-[#64748B] flex items-center justify-between">
                  <span className="truncate pr-2">{card.paperSpec}</span>
                  <span className="text-[#245EDB] font-medium shrink-0 group-hover:translate-x-0.5 transition-transform">
                    상세보기 →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. Material & Texture Comparison Section */}
      <section className="bg-[#F5F3EE] py-16 sm:py-20 border-y border-[#E2E8F0]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <span className="text-xs font-bold text-[#245EDB] tracking-wider uppercase block mb-1">
              Material & Touch
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#17324D]">
              소재와 표현 비교
            </h2>
            <p className="text-sm sm:text-base text-[#1E293B]/75 mt-2">
              종이의 표면 처리와 후가공에 따라 완전히 다른 브랜드 첫인상을 전달할 수 있습니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TEXTURE_COMPARISONS.map((tex, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 sm:p-8 border border-[#E2E8F0] shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block text-[11px] font-semibold text-[#245EDB] bg-[#F5F3EE] px-2.5 py-1 rounded mb-4">
                    {tex.tag}
                  </span>
                  <h3 className="font-bold text-lg text-[#17324D] mb-1">
                    {tex.title}
                  </h3>
                  <div className="text-xs font-medium text-[#64748B] mb-3">
                    {tex.subtitle}
                  </div>
                  <p className="text-sm text-[#1E293B]/80 leading-relaxed">
                    {tex.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Corporate Business Card Showcase Banner */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-[#E2E8F0] bg-white overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 p-8 sm:p-12 space-y-5">
              <span className="inline-block text-xs font-semibold text-[#245EDB] bg-[#F5F3EE] px-3 py-1 rounded border border-[#E2E8F0]">
                기업명함 솔루션 안내
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#17324D] leading-tight">
                일관된 브랜드 아이덴티티, <br />
                팀과 기업을 위한 명함 디자인
              </h2>
              <p className="text-sm sm:text-base text-[#1E293B]/80 leading-relaxed">
                여러 구성원의 명함을 통일된 스타일로 정돈하고 규격과 서체를 표준화하여 
                기업의 브랜드 신뢰도를 높일 수 있는 방법을 안내해 드립니다.
              </p>
              <div className="pt-2">
                <Link
                  to="/business"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-[#17324D] hover:bg-[#102438] text-white text-sm font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#245EDB]"
                >
                  기업명함 소개 보기
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 p-4 sm:p-6 lg:p-8">
              <div className="rounded-xl overflow-hidden border border-[#E2E8F0] bg-[#F5F3EE]">
                <img
                  src={SITE_CONFIG.images.team}
                  alt="일관된 브랜드 스타일로 정렬된 기업 팀 명함 목업"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Production Guide Preview (3 Tips) */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-[#E2E8F0]">
          <div>
            <span className="text-xs font-bold text-[#245EDB] tracking-wider uppercase block mb-1">
              Preparation Guide
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#17324D]">
              명함 제작 가이드 미리보기
            </h2>
          </div>
          <Link
            to="/guide"
            className="inline-flex items-center gap-1 text-sm font-semibold text-[#245EDB] hover:underline mt-2 sm:mt-0"
          >
            제작 가이드 전체 및 FAQ 보기
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {GUIDE_TIPS.map((tip) => (
            <div
              key={tip.num}
              className="bg-[#F5F3EE] rounded-xl p-6 border border-[#E2E8F0] relative overflow-hidden"
            >
              <div className="text-3xl font-extrabold text-[#17324D]/15 mb-3 font-mono">
                {tip.num}
              </div>
              <h3 className="font-bold text-base text-[#17324D] mb-2">
                {tip.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#1E293B]/75 leading-relaxed">
                {tip.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
