//Sample Algorithm

function search(arr, x) // Replace these parameters with your user input field values
{
    let i = 0;
    let count = arr.length;
    arr.push(x);
    while (true) {
        if (arr[i] == x) {
            delete arr[count];
            return i < count ? i : null;
        }
        i++;
    }
}

// let items = []; // Insert carsData here as an array

// let i = 0;
// items = Array
//     .apply(null, Array(10000))
//     .map(() => ++i );
// let count = 10000;

// let start = new Date();

// for (i = 0; i < count; i++)
//     search(items, 7777);

// let milliseconds = (new Date()) - start;

// console.log(milliseconds);