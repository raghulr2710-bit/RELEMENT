export interface WhyCard {
  num: string;
  icon: string;
  title: string;
  description: string;
  bgImage?: string;
}

export interface MineralItem {
  symbol: string;
  name: string;
  sub: string;
}

export interface MineralColumn {
  title: string;
  icon: string;
  items: MineralItem[];
  type: 'ev' | 'solar' | 'grid';
}

export interface ProductCard {
  symbol: string;
  name: string;
  grade: string;
}

export interface ProductFamily {
  id: string; // 'li' | 'co' | 'ni' | 'mn'
  name: string;
  products: ProductCard[];
}

export interface ScaleCard {
  id: number;
  label: string;
  title: string;
  description: string;
  styleType: 'green' | 'light' | 'mid';
}

export interface InvestorCard {
  icon: string;
  title: string;
  description: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'technology' | 'products' | 'environmental';
}
