import { QuoteValue } from "../containers/QuoteInformation/models";

const data: { [key: string]: QuoteValue[] } = {
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

export default data;
