import React, { useState } from 'react';
import { Link } from 'react-router';
import { ChevronDown, ChevronUp, FileText, CheckCircle2, ArrowRight } from 'lucide-react';
import { FAQS, GUIDE_TIPS } from '../../shared/data/cards';

export const GuidePage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const detailedSteps = [
    {
      title: '1. 명함에 넣을 필수 정보 정리',
      items: [
        '기본 정보: 성명, 직함(직급), 회사명(또는 브랜드명)',
        '연락 정보: 휴대전화 번호, 대표 이메일 주소, 회사 웹사이트',
        '선택 정보: 부서명, 회사 유선전화, 사업장 소재지 주소, 공식 SNS 링크',
        '팁: 정보가 너무 많으면 여백이 부족해져 가독성이 저하되므로 핵심 연락 수단 중심으로 선별하는 것을 권장합니다.',
      ],
    },
    {
      title: '2. 작은 글씨 가독성과 서체 크기 기준',
      items: [
        '성명: 9pt ~ 11pt (가장 크고 또렷하게)',
        '직함 및 회사명: 7.5pt ~ 8.5pt (성명과 대비를 주어 식별 용이)',
        '전화번호·이메일: 7pt ~ 8pt',
        '주소 및 부가 텍스트: 최소 6.5pt 권장 (6pt 미만은 획이 뭉칠 위험이 있습니다)',
        '팁: 얇은 명조체(Light Serif)보다는 굵기가 일정한 고딕/산세리프(Sans-serif) 폰트가 인쇄 시 선명도가 우수합니다.',
      ],
    },
    {
      title: '3. 앞면과 뒷면의 역할 분리',
      items: [
        '앞면 중심: 비즈니스 대면 시 즉각 확인해야 하는 성명, 직함, 연락처를 집중 배치합니다.',
        '뒷면 활용: 영문 정보 표기(글로벌 비즈니스용), 지도나 오시는 길, 슬로건 또는 QR코드로 역할을 분리합니다.',
        '팁: 앞면에 모든 정보를 몰아넣기보다 뒷면에 여백과 보조 정보를 배치하면 전체적인 완성도가 높아집니다.',
      ],
    },
    {
      title: '4. 최종 시안 확인 체크리스트',
      items: [
        '오탈자 확인: 영문 스펠링, 직함 표기법, 한자/한글 오기를 반드시 2회 이상 교차 검토합니다.',
        '숫자 자릿수 검증: 휴대폰 번호 11자리, 유선전화 지역번호, 이메일 도메인 오타 여부를 확인합니다.',
        '안전 여백 확보: 재단 시 잘려나가지 않도록 재단선(90×50mm) 안쪽 최소 3mm 여백 내에 글자를 배치합니다.',
      ],
    },
  ];

  return (
    <div className="py-10 sm:py-16 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* 1. Page Header */}
      <div className="text-left space-y-3 pb-6 border-b border-[#E2E8F0]">
        <span className="text-xs font-bold text-[#245EDB] tracking-wider uppercase block">
          Card Making Guide
        </span>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-[#17324D]">
          명함 제작 가이드
        </h1>
        <p className="text-sm sm:text-base text-[#1E293B]/80 max-w-2xl leading-relaxed">
          명함에 들어갈 정보의 위계부터 작은 글씨의 가독성 기준, 앞뒷면 구성과 인쇄 전 최종 체크포인트를 정리했습니다.
        </p>
      </div>

      {/* 2. Detailed Production Guide Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {detailedSteps.map((step, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl p-6 sm:p-8 border border-[#E2E8F0] shadow-sm space-y-4"
          >
            <h2 className="text-lg font-bold text-[#17324D] pb-3 border-b border-[#E2E8F0]">
              {step.title}
            </h2>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#1E293B]/80 leading-relaxed">
              {step.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#245EDB] mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* 3. Frequently Asked Questions (Accordion) */}
      <div className="bg-[#F5F3EE] rounded-2xl p-6 sm:p-12 border border-[#E2E8F0] space-y-8">
        <div>
          <span className="text-xs font-bold text-[#245EDB] tracking-wider uppercase block mb-1">
            FAQ
          </span>
          <h2 className="text-2xl font-bold text-[#17324D]">
            자주 묻는 질문
          </h2>
          <p className="text-sm text-[#64748B] mt-1">
            명함 기획 및 스타일에 관해 자주 궁금해하시는 내용을 모았습니다.
          </p>
        </div>

        <div className="space-y-3 max-w-3xl">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-lg border border-[#E2E8F0] overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:bg-[#F5F3EE]"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-sm sm:text-base text-[#17324D]">
                    {faq.q}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-[#245EDB] shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#64748B] shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#1E293B]/80 leading-relaxed border-t border-[#F5F3EE]">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* 4. Action Link */}
      <div className="p-8 rounded-xl border border-[#E2E8F0] bg-white text-center max-w-xl mx-auto space-y-4">
        <h3 className="text-lg font-bold text-[#17324D]">
          실제 스타일을 둘러보시겠습니까?
        </h3>
        <p className="text-xs sm:text-sm text-[#64748B]">
          가이드에서 확인한 내용을 바탕으로 로그컴의 6가지 대표 명함 스타일을 직접 확인해 보세요.
        </p>
        <div>
          <Link
            to="/cards"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-md bg-[#17324D] hover:bg-[#102438] text-white text-sm font-semibold transition-all"
          >
            명함 둘러보기
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
