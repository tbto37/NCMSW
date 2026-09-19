import React, { useState, useEffect } from 'react';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { Card } from '../../components/ui/Card';
import { api } from '../../shared/api/client';
import { NoticeItem } from '../../shared/types/notice';
import { Bell, Pin, Eye, ChevronDown, ChevronUp } from 'lucide-react';

const FALLBACK_NOTICES: NoticeItem[] = [
  {
    id: 1,
    title: '[공지] 로그컴 공식 홈페이지(NCMSW) 오픈 및 B2B 전용 혜택 안내',
    content: `안녕하세요. (주)투비더원 로그컴입니다.\n\n고객 여러분께 더욱 스마트하고 체계적인 명함 서비스를 제공하고자 공식 홈페이지(NCMSW)를 새롭게 오픈하였습니다.\n\n신규 B2B 도입 고객사 대상 전용 템플릿 무료 디자인 및 명함 샘플 키트 무상 발송 프로모션을 진행하오니 많은 관심 부탁드립니다.\n\n감사합니다.`,
    category: '공지',
    isPinned: true,
    viewCount: 342,
    createdAt: '2026-09-19',
  },
  {
    id: 2,
    title: '[안내] NCMS v0.3 모바일 실시간 명함 교정 엔진 업그레이드',
    content: `NCMS 플랫폼의 SVG 벡터 렌더링 엔진이 업그레이드되어 모바일 기기에서도 한글 서체의 자간/행간이 인쇄물과 100% 동일하게 렌더링됩니다.\n오탈자 없는 스마트한 발주 경험을 누려보세요.`,
    category: '업데이트',
    isPinned: true,
    viewCount: 215,
    createdAt: '2026-08-10',
  },
  {
    id: 3,
    title: '[서비스] 추석 연휴 인쇄소 휴무 및 택배 출고 마감 일정 안내',
    content: `추석 명절 연휴에 따른 제작 및 배송 일정을 사전 공지해 드립니다.\n연휴 전 수령을 원하시는 기업 고객사께서는 지정 기한 내에 NCMS를 통해 발주 승인을 완료해 주시기 바랍니다.`,
    category: '배송안내',
    isPinned: false,
    viewCount: 180,
    createdAt: '2026-08-01',
  },
];

export const NoticePage: React.FC = () => {
  const [notices, setNotices] = useState<NoticeItem[]>(FALLBACK_NOTICES);
  const [expandedId, setExpandedId] = useState<number | null>(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadNotices() {
      try {
        setLoading(true);
        const res = await api.getNotices();
        if (res.data && res.data.length > 0) {
          setNotices(res.data);
        }
      } catch (err) {
        // Fallback default notices are already set
      } finally {
        setLoading(false);
      }
    }
    loadNotices();
  }, []);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="py-12 sm:py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <SectionHeader
        badge="Notice & News"
        title="로그컴 공지사항 및 새소식"
        description="로그컴의 새로운 서비스 소식, 시스템 업데이트 및 배송 일정을 안내해 드립니다."
      />

      <div className="space-y-4">
        {notices.map((item) => {
          const isExpanded = expandedId === item.id;
          return (
            <Card
              key={item.id}
              className={`transition-all duration-200 cursor-pointer ${
                item.isPinned ? 'border-blue-200 bg-blue-50/20' : ''
              }`}
            >
              <div
                onClick={() => toggleExpand(item.id)}
                className="flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3">
                  {item.isPinned ? (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-blue-100 text-blue-800 text-xs font-bold shrink-0">
                      <Pin className="w-3 h-3" />
                      중요
                    </span>
                  ) : (
                    <span className="px-2.5 py-1 rounded bg-slate-100 text-slate-700 text-xs font-semibold shrink-0">
                      {item.category}
                    </span>
                  )}
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 line-clamp-1">
                    {item.title}
                  </h3>
                </div>

                <div className="flex items-center gap-4 text-xs text-slate-500 shrink-0">
                  <span className="hidden sm:inline-block">{item.createdAt.slice(0, 10)}</span>
                  <div className="flex items-center gap-1">
                    <Eye className="w-3.5 h-3.5" />
                    <span>{item.viewCount}</span>
                  </div>
                  {isExpanded ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                </div>
              </div>

              {isExpanded && (
                <div className="mt-6 pt-6 border-t border-slate-100 text-sm text-slate-700 whitespace-pre-line leading-relaxed">
                  {item.content}
                </div>
              )}
            </Card>
          );
        })}
      </div>
    </div>
  );
};
