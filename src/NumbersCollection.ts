import { Sorter } from "./Sorter";

export class NumbersCollection extends Sorter {

    constructor(public data: number[]) {
        super();
    }

    get length(): number { return this.data.length; }

    compare(leftIndex: number): boolean {
        // Compare left with right element
        return this.data[leftIndex] > this.data[leftIndex + 1]
    }

    swap(leftIndex: number): void {
        const leftHand = this.data[leftIndex];
        this.data[leftIndex] = this.data[leftIndex + 1];
        this.data[leftIndex + 1] = leftHand;
    }

    try(): void {
        console.log("hi");
    }
}