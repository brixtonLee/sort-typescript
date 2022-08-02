"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
const Sorter_1 = require("./Sorter");
class NumbersCollection extends Sorter_1.Sorter {
    constructor(data) {
        super();
        this.data = data;
    }
    get length() { return this.data.length; }
    compare(leftIndex) {
        // Compare left with right element
        return this.data[leftIndex] > this.data[leftIndex + 1];
    }
    swap(leftIndex) {
        const leftHand = this.data[leftIndex];
        this.data[leftIndex] = this.data[leftIndex + 1];
        this.data[leftIndex + 1] = leftHand;
    }
    try() {
        console.log("hi");
    }
}
exports.NumbersCollection = NumbersCollection;
