import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router';
import { ArrowLeft, ArrowRight, Check, Eye, HelpCircle, Layers, FileText } from 'lucide-react';
import { CARDS } from '../../shared/data/cards';

export const CardDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [viewSide, setViewSide] = useState<'FRONT' | 'BACK'>('FRONT');

  const card = CARDS.find((c) => c.slug === slug);

  // 404 handling if invalid slug
  if (!card) {
    return (
      <div className="py-20 max-w-[1240px] mx-auto px-4 text-center space-y-6">
        <div className="w-12 h-12 bg-[#F5F3EE] text-[#17324D] rounded-full flex items-center justify-center mx-auto">
          <HelpCircle className="w-6 h-6" />
        </div>
        <h1 className="text-2xl font-bold text-[#17324D]">
          요청하신 명함 정보를 찾을 수 없습니다
        </h1>
        <p className="text-sm text-[#64748B]">
          존재하지 않거나 변경된 상품 경로입니다. 명함 목록에서 다시 선택해 주세요.
        </p>
        <div>
          <Link
            to="/cards"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#17324D] text-white text-sm font-semibold hover:bg-[#102438]"
          >
            <ArrowLeft className="w-4 h-4" />
            명함 목록으로 돌아가기
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-10 sm:py-16 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
      {/* Breadcrumb & Back Link */}
      <div className="flex items-center gap-2 text-xs sm:text-sm text-[#64748B]">
        <Link to="/cards" className="hover:text-[#17324D] transition-colors">
          명함 둘러보기
        </Link>
        <span>/</span>
        <span className="text-[#245EDB] font-medium">{card.categoryName}</span>
        <span>/</span>
        <span className="text-[#17324D] font-semibold">{card.name}</span>
      </div>

      {/* Main Product Layout (Visual + Overview) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left 7 cols: Large Visual with Side Toggle */}
        <div className="lg:col-span-7 space-y-4">
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-[#E2E8F0] bg-[#F5F3EE] shadow-sm">
            {viewSide === 'FRONT' ? (
              <img
                src={card.image}
                alt={`${card.name} 실물 목업 앞면`}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-[#F5F3EE] text-center space-y-4">
                <div className="w-64 h-36 bg-white border border-[#CBD5E1] rounded-sm p-4 shadow-sm flex flex-col justify-between text-left">
                  <div className="text-[10px] text-[#64748B] font-mono">BACK LAYOUT PREVIEW</div>
                  <div className="space-y-1">
                    <div className="w-20 h-2 bg-[#E2E8F0] rounded" />
                    <div className="w-32 h-1.5 bg-[#E2E8F0] rounded" />
                  </div>
                  <div className="text-right text-[9px] text-[#94A3B8]">
                    90 × 50 mm (표준 규격)
                  </div>
                </div>
                <p className="text-xs text-[#64748B]">
                  명함 뒷면은 영문 표기, 웹사이트 URL, 브랜드 슬로건 인쇄에 최적화된 여백 구조입니다.
                </p>
              </div>
            )}

            <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[#17324D] text-xs font-semibold px-2.5 py-1 rounded border border-[#E2E8F0]">
              {viewSide === 'FRONT' ? '앞면 실물 비주얼' : '뒷면 레이아웃 안내'}
            </div>
          </div>

          {/* Toggle buttons for Front / Back */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setViewSide('FRONT')}
              className={`flex-1 py-2 rounded-md text-xs font-semibold border transition-all ${
                viewSide === 'FRONT'
                  ? 'bg-[#17324D] text-white border-[#17324D]'
                  : 'bg-white text-[#1E293B] border-[#E2E8F0] hover:bg-[#F5F3EE]'
              }`}
            >
              앞면 실물 목업 보기
            </button>
            <button
              type="button"
              onClick={() => setViewSide('BACK')}
              className={`flex-1 py-2 rounded-md text-xs font-semibold border transition-all ${
                viewSide === 'BACK'
                  ? 'bg-[#17324D] text-white border-[#17324D]'
                  : 'bg-white text-[#1E293B] border-[#E2E8F0] hover:bg-[#F5F3EE]'
              }`}
            >
              뒷면 구성 방식 보기
            </button>
          </div>
        </div>

        {/* Right 5 cols: Product Specs & Information */}
        <div className="lg:col-span-5 space-y-6 text-left">
          <div>
            <span className="inline-block text-xs font-bold text-[#245EDB] bg-[#F5F3EE] px-2.5 py-1 rounded border border-[#E2E8F0] mb-3">
              {card.categoryName} 스타일
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#17324D]">
              {card.name}
            </h1>
            <p className="mt-3 text-sm text-[#1E293B]/80 leading-relaxed">
              {card.fullDesc}
            </p>
          </div>

          {/* Key Spec Cards */}
          <div className="p-4 rounded-lg bg-[#F5F3EE] border border-[#E2E8F0] space-y-2.5 text-xs text-[#1E293B]">
            <div>
              <span className="text-[#64748B] block mb-0.5">용지 및 마감 사양</span>
              <span className="font-semibold text-sm text-[#17324D]">{card.paperSpec}</span>
            </div>
            <div className="pt-2 border-t border-[#E2E8F0]">
              <span className="text-[#64748B] block mb-0.5">표면 질감 특성</span>
              <span>{card.textureNote}</span>
            </div>
            <div className="pt-2 border-t border-[#E2E8F0]">
              <span className="text-[#64748B] block mb-0.5">추천 용도</span>
              <span>{card.recommendedFor}</span>
            </div>
          </div>

          {/* Working Action Links */}
          <div className="pt-2 flex flex-col gap-2.5">
            <Link
              to="/guide"
              className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-md bg-[#17324D] hover:bg-[#102438] text-white text-sm font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#245EDB]"
            >
              <FileText className="w-4 h-4" />
              명함 제작 가이드 확인하기
            </Link>
            <Link
              to="/cards"
              className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-md bg-white hover:bg-[#F5F3EE] text-[#17324D] border border-[#E2E8F0] text-sm font-semibold transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              다른 명함 스타일 둘러보기
            </Link>
          </div>
        </div>
      </div>

      {/* Detail Sections: Craftsmanship & Design Tips */}
      <div className="pt-10 border-t border-[#E2E8F0]">
        <h2 className="text-xl sm:text-2xl font-bold text-[#17324D] mb-6">
          스타일 상세 및 제작 포인트
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {card.details.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#F5F3EE] rounded-xl p-6 border border-[#E2E8F0]"
            >
              <h3 className="font-bold text-base text-[#17324D] mb-2 flex items-center gap-2">
                <Check className="w-4 h-4 text-[#245EDB]" />
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#1E293B]/80 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
