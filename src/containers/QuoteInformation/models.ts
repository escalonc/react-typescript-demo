export interface QuoteCategory {
  name: string;
  option: string;
}

export interface QuoteValue {
  name: string;
  category: string;
  price: number;
}
