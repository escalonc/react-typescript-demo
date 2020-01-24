import { QuoteCategory, QuoteValue } from "./models";

export interface QuoteData {
  [category: string]: { name: string; price: number }[];
}
export default class QuoteService {
  private readonly basePriceInUsd: number = 500;

  data: QuoteData = {
    processors: [
      { name: "processor-i5", price: 200 },
      { name: "processor-i7", price: 400 },
      { name: "processor-i9", price: 600 }
    ],
    memories: [
      { name: "memory-8", price: 200 },
      { name: "memory-16", price: 400 },
      { name: "memory-32", price: 600 }
    ],
    storage: [
      { name: "storage-256", price: 200 },
      { name: "storage-512", price: 400 },
      { name: "storage-1024", price: 600 }
    ]
  };

  //implement retuns quoteValue
  calcualte(category: QuoteCategory) {}

  //implement retunrs number
  sum(quoteValues: QuoteValue[]) {
    return 0;
  }
}
