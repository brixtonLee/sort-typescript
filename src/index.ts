class Sorter {
    // Data that we want to sort
    // collection: number[];

    // constructor(collection: number[]){
    //     this.collection = collection;
    // }

    // More clearer code
    constructor(public collection: number[]){};

    // Function
    sort(): void {
        const { length } = this.collection;

        for(let i = 0; i < length; i++) {
            // - length is to prevent from looping over the whole aray
            for(let j = 0; j < length - i - 1; j++) {
                // Compare left with right element
                if(this.collection[j] > this.collection[j + 1]) {
                    const leftHand = this.collection[j];
                    this.collection[j] = this.collection[j + 1];
                    this.collection[j + 1] = leftHand;
                }
            }
        }
    }
}



