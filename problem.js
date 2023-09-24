// Write a function called same, which acceptc two arrays and returns true if every value in the array has 
// its corresponding value squared in the second array
// The order does not matter, the frequency of the value matters


function isSame(arr1, arr2) {
    let frequency = {};

    let frequency2 = {};
    if (arr1.length !== arr2.length) {
        return false;
    }

    frequency = arr1.reduce((acq, current) => {
        if (!acq[current * current]) {
            acq[current * current] = 1;
        } else {
            acq[current * current]++;
        }
        return acq;
    }, {});

    frequency2 = arr2.reduce((acq, current) => {
        if (!acq[current]) {
            acq[current] = 1;
        } else {
            acq[current]++;
        }
        return acq;
    }, {});

    console.table(frequency);
    console.table(frequency2);
    return JSON.stringify(frequency) == JSON.stringify(frequency2);






}

console.log(isSame([1, 2, 3], [4 ,1,  9]));


