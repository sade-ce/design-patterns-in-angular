import { Iterator } from './iterator.interface';
import { Aggregator } from './aggregator.interface';
import { AlphabeticalOrderIterator } from './iterator.model';

// aggregator = collection
export class WordsCollection implements Aggregator {
  private collectionItems: string[] = [];

  get items(): string[] {
    return this.collectionItems;
  }

  get count(): number {
    return this.collectionItems.length;
  }

  public addItem(item: string): void {
    this.collectionItems.push(item);
  }

  public removeItem(item: string): void {
    const index: number = this.collectionItems.indexOf(item);
    this.collectionItems.splice(index, 1);
  }

  // factory method
  public getIterator(): Iterator<string> {
    return new AlphabeticalOrderIterator(this);
  }

  public getReverseIterator(): Iterator<string> {
    return new AlphabeticalOrderIterator(this, true);
  }
}
