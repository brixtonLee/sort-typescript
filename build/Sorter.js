"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
class Sorter {
    // Function
    sort() {
        const { length } = this;
        for (let i = 0; i < length; i++) {
            // - length is to prevent from looping over the whole aray
            for (let j = 0; j < length - i - 1; j++) {
                // All of this only works if collection is an array of number
                if (this.compare(j)) {
                    this.swap(j);
                }
            }
        }
    }
}
exports.Sorter = Sorter;
