import quoteValues from "../../data/quoteValues";
import { QuoteCategory, QuoteValue } from "./models";

export default class QuoteService {
  private readonly basePriceInUsd = 500;

  calcualte(category: QuoteCategory) {
    return quoteValues[category.name].find(
      value => value.option === category.option
    );
  }

  sum(quoteValues: QuoteValue[]) {
    return quoteValues.reduce(
      (previous, current) => previous + current.price,
      0
    );
  }
}
