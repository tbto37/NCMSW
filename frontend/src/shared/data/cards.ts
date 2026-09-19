import heroImg from '../../assets/images/hero-cards.jpg';
import teamImg from '../../assets/images/team-cards.jpg';
import cardStandardImg from '../../assets/images/card-standard.jpg';
import cardPremiumImg from '../../assets/images/card-premium.jpg';
import cardTextureImg from '../../assets/images/card-texture.jpg';
import cardFoilImg from '../../assets/images/card-foil.jpg';
import cardEmbossImg from '../../assets/images/card-emboss.jpg';
import cardCraftImg from '../../assets/images/card-craft.jpg';

export interface CardProduct {
  id: string;
  slug: string;
  name: string;
  category: 'STANDARD' | 'PREMIUM' | 'TEXTURE' | 'SPECIAL';
  categoryName: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  paperSpec: string;
  textureNote: string;
  recommendedFor: string;
  details: {
    title: string;
    description: string;
  }[];
}

export const SITE_CONFIG = {
  brandName: 'LOGCOM',
  brandKorean: '로그컴',
  // 프로토타입 시안 안내 바 노출 여부 (중앙 관리)
  showPrototypeBanner: true,
  prototypeBannerText: '디자인 시안 · 상품 구성과 이미지는 예시입니다',
  images: {
    hero: heroImg,
    team: teamImg,
  },
};

export const CATEGORIES = [
  { id: 'ALL', label: '전체' },
  { id: 'STANDARD', label: '기본형' },
  { id: 'PREMIUM', label: '고급지' },
  { id: 'TEXTURE', label: '텍스처' },
  { id: 'SPECIAL', label: '포인트 후가공' },
] as const;

export const CARDS: CardProduct[] = [
  {
    id: '1',
    slug: 'standard-matte',
    name: '스탠다드 매트 250g',
    category: 'STANDARD',
    categoryName: '기본형',
    shortDesc: '차분하고 매끄러운 표면으로 가독성이 뛰어난 표준 비즈니스 명함',
    fullDesc: '가장 널리 사용되는 부드러운 백색 매트 용지입니다. 번들거림 없는 무광 표면 처리로 작은 텍스트와 로고를 또렷하게 표현하며, 어떤 기업 스타일에도 단정하게 어울립니다.',
    image: cardStandardImg,
    paperSpec: '스노우 화이트 250g / 양면 무광 처리',
    textureNote: '매끄러운 무광 표면, 또렷한 잉크 발색, 일상적 사용에 적합한 적정 탄성',
    recommendedFor: '대량 배포용 표준 임직원 명함, 신규 브랜드 런칭, 깔끔하고 정돈된 정보 전달',
    details: [
      { title: '인쇄 특성', description: '미세한 망점까지 균일하게 재현되는 고해상도 인쇄로 작은 폰트(6pt)도 번짐 없이 선명합니다.' },
      { title: '용지 질감', description: '손에 쥐었을 때 차분하고 담백한 무광 종이 특유의 촉감을 제공합니다.' },
      { title: '활용 팁', description: '로고 컬러와 텍스트의 대비를 명확히 주면 가장 모던하고 안정적인 인상을 줍니다.' },
    ],
  },
  {
    id: '2',
    slug: 'premium-cotton',
    name: '프리미엄 코튼 350g',
    category: 'PREMIUM',
    categoryName: '고급지',
    shortDesc: '손끝에 닿는 도톰한 두께감과 따뜻한 미색이 돋보이는 고급 코튼지 명함',
    fullDesc: '천연 순면 섬유를 함유하여 부드럽고 따뜻한 감촉을 전하는 최고급 용지입니다. 350g의 묵직한 평량으로 전해지는 안정감이 비즈니스 만남에서 깊은 신뢰감을 선사합니다.',
    image: cardPremiumImg,
    paperSpec: '코튼 펠트 웜화이트 350g',
    textureNote: '자연스러운 미색(Warm Ivory), 도톰한 두께감, 따스하고 부드러운 종이 촉감',
    recommendedFor: '임원 및 전문직 명함, 스튜디오·디자이너, 정중한 비즈니스 파트너십',
    details: [
      { title: '인쇄 특성', description: '잉크가 코튼 섬유에 자연스럽게 스며들어 은은하고 깊이 있는 색감을 형성합니다.' },
      { title: '두께감', description: '일반 명함보다 약 1.5배 도톰하여 손으로 건넬 때 단단한 첫인상을 남깁니다.' },
      { title: '활용 팁', description: '여백을 넉넉히 둔 심플한 레이아웃에 네이비나 짙은 차콜 폰트를 적용하면 우아합니다.' },
    ],
  },
  {
    id: '3',
    slug: 'natural-linen',
    name: '내추럴 리넨 300g',
    category: 'TEXTURE',
    categoryName: '텍스처',
    shortDesc: '자연스러운 격자 직조 질감이 돋보이는 클래식 텍스처 명함',
    fullDesc: '미세한 마(Linen) 직조 엠보싱이 종이 양면에 균일하게 새겨져 있어 손으로 쥐었을 때 기분 좋은 결을 느낄 수 있습니다. 빛을 받을 때 은은한 음영이 살아납니다.',
    image: cardTextureImg,
    paperSpec: '내추럴 리넨 엠보스 300g',
    textureNote: '격자 직조 엠보, 빛에 반응하는 은은한 결, 클래식하고 세련된 감촉',
    recommendedFor: '컨설팅 및 자문 그룹, 건축·인테리어, 전통과 품격을 지향하는 브랜드',
    details: [
      { title: '인쇄 특성', description: '리넨 텍스처 결 위에 잉크가 얹히며 자연스러운 음영과 아날로그적인 정취를 만듭니다.' },
      { title: '촉각적 경험', description: '손끝에 닿는 미세한 격자 엠보싱이 상대방에게 각인되는 섬세한 인상을 줍니다.' },
      { title: '활용 팁', description: '복잡한 배경 그래픽보다는 간결한 타이포그래피로 종이 본연의 결을 살리는 것을 권장합니다.' },
    ],
  },
  {
    id: '4',
    slug: 'deepnavy-goldfoil',
    name: '딥네이비 골드박 350g',
    category: 'SPECIAL',
    categoryName: '포인트 후가공',
    shortDesc: '짙은 네이비 바탕에 섬세한 무광 금박을 압인한 시그니처 명함',
    fullDesc: '어두운 톤의 묵직한 매트 네이비 용지에 정밀 가열 금박을 입혀 브랜드 심볼과 주요 텍스트를 강조했습니다. 은은한 반사광이 격조 높은 첫인상을 완성합니다.',
    image: cardFoilImg,
    paperSpec: '다크 네이비 매트보드 350g / 정밀 무광 금박(Matte Gold Foil)',
    textureNote: '깊이 있는 딥네이비 표면, 정교한 메탈릭 박 압인, 과하지 않은 은은한 광택',
    recommendedFor: '금융·자산운용, 법무법인, 부티크 에이전시, VIP 프라이빗 서비스',
    details: [
      { title: '후가공 특성', description: '미세한 선까지 선명하게 찍히는 고품질 무광 금박을 적용하여 과하지 않은 고급스러움을 띱니다.' },
      { title: '용지 톤', description: '로그컴의 시그니처 컬러인 딥 네이비(#17324D)와 완벽한 조화를 이룹니다.' },
      { title: '활용 팁', description: '앞면 로고 심볼에 박가공을 적용하고, 세부 연락처는 얇은 금박 또는 화이트로 정돈합니다.' },
    ],
  },
  {
    id: '5',
    slug: 'minimal-blind-emboss',
    name: '블라인드 형압 엠보스 300g',
    category: 'SPECIAL',
    categoryName: '포인트 후가공',
    shortDesc: '잉크 없이 종이 자체의 입체적인 요철로 로고를 새긴 미니멀 명함',
    fullDesc: '순백의 최고급 무코팅 판지에 정밀 동판을 압착하여 로고와 그래픽을 입체적으로 돌출시켰습니다. 불필요한 색상을 배제하고 형태의 그림자만으로 브랜드 품격을 표현합니다.',
    image: cardEmbossImg,
    paperSpec: '퓨어 화이트 매트보드 300g / 정밀 블라인드 디보싱·형압',
    textureNote: '입체적 볼륨감, 음영으로 드러나는 형태미, 군더더기 없는 순백지',
    recommendedFor: '모던 미니멀리즘을 지향하는 기업, 갤러리, 건축사무소, 럭셔리 라이프스타일',
    details: [
      { title: '후가공 특성', description: '색상 없이 압력만으로 형태를 표현하므로 조명 각도에 따라 입체적인 그림자가 드리워집니다.' },
      { title: '촉각적 경험', description: '명함을 쥐었을 때 손끝으로 브랜드 심볼의 형태를 직접 느낄 수 있습니다.' },
      { title: '활용 팁', description: '굵은 선과 심플한 형태의 기하학적 로고 심볼에 가장 극적인 효과를 나타냅니다.' },
    ],
  },
  {
    id: '6',
    slug: 'eco-craft-natural',
    name: '에코 크라프트 280g',
    category: 'TEXTURE',
    categoryName: '텍스처',
    shortDesc: '친환경 재생 펄프의 따뜻한 섬유 결이 살아있는 오가닉 명함',
    fullDesc: '표백 과정을 거치지 않은 무염소 친환경 펄프로 제작되어 은은한 나무 섬유 입자가 자연스럽게 배어 있습니다. 지속 가능한 비즈니스 가치를 직관적으로 전달합니다.',
    image: cardCraftImg,
    paperSpec: 'FSC 인증 친환경 재생 크라프트 280g',
    textureNote: '내추럴 브라운 톤, 미세한 천연 펄프 입자, 따뜻한 친환경 촉감',
    recommendedFor: '친환경·ESG 지향 기업, F&B 브랜드, 공방 및 로컬 크리에이터',
    details: [
      { title: '소재 특성', description: '인위적이지 않은 자연스러운 브라운 톤과 표면의 미세한 티끌이 오가닉한 무드를 완성합니다.' },
      { title: '인쇄 특성', description: '짙은 블랙 1도 또는 화이트 잉크 인쇄 시 강한 시각적 대비와 빈티지한 세련미를 줍니다.' },
      { title: '활용 팁', description: '환경에 대한 메시지를 담고 싶을 때 가장 진정성 있는 소재 선택이 됩니다.' },
    ],
  },
];

export const TEXTURE_COMPARISONS = [
  {
    title: '매끈한 표면',
    subtitle: 'Smooth Finish',
    description: '번들거림 없는 고른 무광 표면으로 가독성이 뛰어나며, 작은 영문·한글 텍스트와 세밀한 로고를 또렷하게 표현합니다.',
    tag: '기본형 추천',
  },
  {
    title: '자연스러운 종이 질감',
    subtitle: 'Tactile Paper Grain',
    description: '코튼이나 리넨 등 원료 섬유의 결이 손끝에 닿아 아날로그적 온기와 종이 본연의 묵직한 무게감을 전달합니다.',
    tag: '고급지·텍스처 추천',
  },
  {
    title: '부분적인 광택 & 박가공',
    subtitle: 'Accent Foil & Finish',
    description: '빛의 각도에 따라 섬세하게 반짝이는 무광 금박이나 입체적인 형압으로 브랜드 로고에 격조 높은 시각적 포인트를 줍니다.',
    tag: '포인트 후가공 추천',
  },
];

export const GUIDE_TIPS = [
  {
    num: '01',
    title: '앞뒷면 정보 정리',
    description: '앞면은 성명, 직함, 핵심 연락처(전화·이메일)를 우선 배치하고, 뒷면은 영문 표기, 웹사이트, 브랜드 슬로건을 담아 시각적 균형을 맞춥니다.',
  },
  {
    num: '02',
    title: '작은 글씨의 가독성',
    description: '실제 인쇄물은 모바일 화면보다 글씨가 작게 느껴질 수 있습니다. 주소나 부가 정보는 6.5~7pt 이상, 성명은 9~11pt 이상을 권장합니다.',
  },
  {
    num: '03',
    title: '최종 시안 꼼꼼한 확인',
    description: '인쇄 전 숫자 자릿수(휴대폰 번호, 계좌, 주소)와 영문 철자를 반드시 재검토하고, 재단선 안쪽 3mm 안전 영역 내 텍스트가 위치하는지 확인하세요.',
  },
];

export const FAQS = [
  {
    q: '일반 명함과 고급 명함은 어떤 점이 가장 다른가요?',
    a: '종이의 평량(두께)과 표면 질감에서 차이가 납니다. 일반 명함(250g)은 매끄러운 코팅 표면으로 텍스트 가독성이 뛰어나며, 고급 명함(300~350g)은 순면이나 특수 질감 펄프를 사용하여 손으로 쥐었을 때 도톰한 두께감과 고급스러운 촉감을 선사합니다.',
  },
  {
    q: '명함에 들어갈 기본 정보는 어떻게 구성하는 것이 좋나요?',
    a: '회사 로고, 성명, 직함, 휴대전화 번호, 이메일, 회사 주소, 웹사이트 URL이 표준 기본 항목입니다. 부서명이나 유선 전화번호, SNS 계정은 필요에 따라 선별하여 앞뒷면에 나누어 배치하면 여백이 살아나 훨씬 깔끔합니다.',
  },
  {
    q: '박가공이나 형압 같은 후가공은 어디에 적용하면 효과적인가요?',
    a: '전체 텍스트보다는 기업 로고 심볼, 사명, 혹은 중요한 슬로건 한 곳에 집중 적용하는 것이 가장 정돈되어 보입니다. 은은한 빛 반사를 원하시면 무광 금박이나 은박을, 색상 없이 형태감만 강조하고 싶다면 블라인드 형압을 추천합니다.',
  },
  {
    q: '기업 구성원 명함을 통일감 있게 제작하려면 무엇을 준비해야 하나요?',
    a: '전사 표준이 될 명함 규격(90×50mm 권장)과 기본 레이아웃, 사용 서체 규정을 먼저 정해야 합니다. 직함이나 이름 글자 수 차이에 따라 레이아웃이 흔들리지 않도록 기준 정렬(좌측 정렬 또는 양끝 정렬)을 사전 점검하는 것이 좋습니다.',
  },
];

export const NAV_ITEMS = [
  { label: '홈', href: '/' },
  { label: '명함 둘러보기', href: '/cards' },
  { label: '기업명함', href: '/business' },
  { label: '제작 가이드', href: '/guide' },
];
