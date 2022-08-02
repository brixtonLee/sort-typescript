import { NumbersCollection } from "./NumbersCollection";

/*
    Interface: 
    1. Set up contract between different classes (The class must have all the items stated in the interface)
    2. Promotes loose coupling
    3. Use when we want to work on very different objects

    Abstract class / inheritance:
    1. Set up contract between different classes (The class must have implement all the abstract items stated in the interface)
    2. Strongly couples classes together
    3. Use when we try to build a definition of an object
*/

interface Sortable {
    length: number;
    compare(leftIndex:number): boolean;
    swap(leftIndex:number): void;
}

export abstract class Sorter{
    abstract length: number;
    abstract compare(leftIndex: number): boolean;
    abstract swap(leftIndex: number): void;
    // Function
    sort(): void {
        const { length } = this;

        for(let i = 0; i < length; i++) {
            // - length is to prevent from looping over the whole aray
            for(let j = 0; j < length - i - 1; j++) {
                // All of this only works if collection is an array of number
                if(this.compare(j)) {
                    this.swap(j)
                }
            }
        }
    }
}



