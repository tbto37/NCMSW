import React, { useState } from 'react';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Link } from 'react-router';
import { Layers, Sparkles, Building2, ExternalLink } from 'lucide-react';

export const PortfolioPage: React.FC = () => {
  const [filter, setFilter] = useState<'ALL' | 'ENTERPRISE' | 'FINANCE' | 'TECH'>('ALL');

  const items = [
    {
      id: 1,
      category: 'ENTERPRISE',
      categoryName: '제약 / 바이오',
      client: '한미약품 그룹',
      title: '전사 표준 명함 CI 리뉴얼 및 NCMS 테넌트 구축',
      paper: '랑데뷰 울트라화이트 240g',
      finish: '정밀 에폭시 코팅 / 부분 유광',
      desc: '전국 3,000여 명의 임직원이 사용하는 부서/본부별 표준 템플릿 제작 및 모바일 자가 발주 시스템 구축',
    },
    {
      id: 2,
      category: 'ENTERPRISE',
      categoryName: '광고 / 미디어',
      client: '제일기획',
      title: '크리에이티브 임직원 감성 명함 및 다국어 템플릿',
      paper: '반누보 화이트 250g',
      finish: '무광 은박 압인 가공',
      desc: '글로벌 네트워크 지사를 위한 영문/국문 듀얼 템플릿 및 특수 박가공 적용',
    },
    {
      id: 3,
      category: 'TECH',
      categoryName: 'IT / 플랫폼',
      client: '글로벌 테크 유니콘',
      title: '미니멀리즘 친환경 아이덴티티 명함',
      paper: 'FSC 인증 친환경 매트지 300g',
      finish: '형압 엠보싱 / 콩기름 잉크',
      desc: 'ESG 경영 철학을 반영한 재생 용지와 심플한 음각 로고 가공으로 브랜드 신뢰도 제고',
    },
    {
      id: 4,
      category: 'FINANCE',
      categoryName: '금융 / 법무',
      client: '리딩 파트너스 자산운용',
      title: 'VIP 프라이빗 뱅킹 프리미엄 명함',
      paper: '엑스트라 매트 350g',
      finish: '로즈골드 무광박 / 엣지 도색',
      desc: '두께감 있는 최고급 평량 용지와 측면 엣지 도색으로 중후하고 고급스러운 첫인상 연출',
    },
  ];

  const filteredItems = filter === 'ALL' ? items : items.filter((item) => item.category === filter);

  return (
    <div className="py-12 sm:py-20 space-y-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <SectionHeader
        badge="Portfolio & References"
        title="로그컴과 함께하는 기업들의 성공적인 첫인상"
        description="대한민국 대표 기업들이 로그컴의 품질과 NCMS 솔루션을 신뢰하고 있습니다."
      />

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        <Button
          variant={filter === 'ALL' ? 'primary' : 'outline'}
          size="sm"
          onClick={() => setFilter('ALL')}
        >
          전체 보기
        </Button>
        <Button
          variant={filter === 'ENTERPRISE' ? 'primary' : 'outline'}
          size="sm"
          onClick={() => setFilter('ENTERPRISE')}
        >
          대기업 / 바이오
        </Button>
        <Button
          variant={filter === 'FINANCE' ? 'primary' : 'outline'}
          size="sm"
          onClick={() => setFilter('FINANCE')}
        >
          금융 / 전문직
        </Button>
        <Button
          variant={filter === 'TECH' ? 'primary' : 'outline'}
          size="sm"
          onClick={() => setFilter('TECH')}
        >
          IT / 혁신기업
        </Button>
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredItems.map((item) => (
          <Card key={item.id} hoverable className="p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-blue-800 bg-blue-50 px-2.5 py-1 rounded-md">
                  {item.categoryName}
                </span>
                <span className="text-xs font-bold text-slate-500">{item.client}</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 leading-snug">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 grid grid-cols-2 gap-3 text-xs text-slate-500">
              <div>
                <span className="font-semibold text-slate-700 block">용지 사양</span>
                {item.paper}
              </div>
              <div>
                <span className="font-semibold text-slate-700 block">적용 후가공</span>
                {item.finish}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Sample Kit Box */}
      <div className="bg-blue-50 border border-blue-200/80 rounded-2xl p-8 text-center max-w-3xl mx-auto space-y-4">
        <Sparkles className="w-8 h-8 text-blue-800 mx-auto" />
        <h3 className="text-xl font-bold text-slate-900">
          실제 명함 재질과 후가공을 직접 만져보고 싶으신가요?
        </h3>
        <p className="text-sm text-slate-600 max-w-lg mx-auto">
          로그컴의 최고급 용지 12종과 특수 박가공 샘플이 담긴 <br />
          <strong>‘로그컴 B2B 프리미엄 샘플 키트’</strong>를 무료로 보내드립니다.
        </p>
        <div className="pt-2">
          <Link to="/inquiry">
            <Button size="md" className="bg-blue-800 hover:bg-blue-900 text-white font-semibold">
              무료 샘플 키트 신청하기
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
