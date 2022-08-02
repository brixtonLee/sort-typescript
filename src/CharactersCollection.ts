import { Sorter } from "./Sorter";
export class CharactersCollection  extends Sorter {
    constructor(public data: string){
        super();
    }

    get length(): number { return this.data.length; }

    compare(leftIndex: number): boolean {
        // Compare left with right element
        return this.data[leftIndex].toLowerCase() > this.data[leftIndex + 1].toLowerCase()
    }

    swap(leftIndex: number): void {
        const characters = this.data.split('');

        const leftHand = characters[leftIndex];
        characters[leftIndex] = characters[leftIndex + 1];
        characters[leftIndex + 1] = leftHand;

        this.data = characters.join('');
    }
}