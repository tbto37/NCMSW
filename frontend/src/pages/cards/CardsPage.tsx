import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router';
import { CARDS, CATEGORIES } from '../../shared/data/cards';

export const CardsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCat = searchParams.get('category') || 'ALL';
  const [selectedCat, setSelectedCat] = useState<string>(initialCat);

  useEffect(() => {
    const cat = searchParams.get('category') || 'ALL';
    setSelectedCat(cat);
  }, [searchParams]);

  const handleSelectCategory = (catId: string) => {
    setSelectedCat(catId);
    if (catId === 'ALL') {
      setSearchParams({});
    } else {
      setSearchParams({ category: catId });
    }
  };

  const filteredCards = selectedCat === 'ALL'
    ? CARDS
    : CARDS.filter((c) => c.category === selectedCat);

  return (
    <div className="py-10 sm:py-16 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      {/* Page Header */}
      <div className="text-left space-y-3 pb-6 border-b border-[#E2E8F0]">
        <span className="text-xs font-bold text-[#245EDB] tracking-wider uppercase block">
          Card Catalog
        </span>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-[#17324D]">
          명함 둘러보기
        </h1>
        <p className="text-sm sm:text-base text-[#1E293B]/80 max-w-2xl">
          기본형 매트지부터 도톰한 코튼지, 고유의 결이 느껴지는 텍스처 용지, 섬세한 후가공까지 
          비즈니스 스타일에 알맞은 명함을 카테고리별로 살펴보세요.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 pb-2">
        {CATEGORIES.map((cat) => {
          const isSelected = selectedCat === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => handleSelectCategory(cat.id)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#245EDB] ${
                isSelected
                  ? 'bg-[#17324D] text-white shadow-sm font-semibold'
                  : 'bg-[#F5F3EE] text-[#1E293B] hover:bg-[#E2E8F0]'
              }`}
            >
              {cat.label}
              <span className="ml-1.5 text-xs opacity-75">
                ({cat.id === 'ALL' ? CARDS.length : CARDS.filter((c) => c.category === cat.id).length})
              </span>
            </button>
          );
        })}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredCards.map((card) => (
          <Link
            key={card.id}
            to={`/cards/${card.slug}`}
            className="group bg-white rounded-xl border border-[#E2E8F0] overflow-hidden transition-all duration-300 hover:shadow-md hover:border-[#CBD5E1] flex flex-col"
          >
            {/* Image Preview */}
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

            {/* Info */}
            <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <h2 className="font-bold text-lg text-[#17324D] group-hover:text-[#245EDB] transition-colors">
                  {card.name}
                </h2>
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

      {/* Bottom Information Notice */}
      <div className="p-4 bg-[#F5F3EE] rounded-lg border border-[#E2E8F0] text-xs text-[#64748B] text-center">
        표시된 상품 사양과 이미지는 디자인 시안 검토용 샘플 데이터입니다. 실제 주문 정책 및 가격 체계는 추후 확정될 예정입니다.
      </div>
    </div>
  );
};
