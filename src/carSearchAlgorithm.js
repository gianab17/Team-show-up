//Sample Algorithm

function search(arr, x)
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

let items = [ 2, 3, 5, 7, 11, 13, 17 ];

console.log(search(items, 1));

console.log(search(items, 7));

console.log(search(items, 19));

let i = 0;
items = Array
    .apply(null, Array(10000))
    .map(() => ++i );
let count = 10000;

let start = new Date();

for (i = 0; i < count; i++)
    search(items, 7777);

let milliseconds = (new Date()) - start;

console.log(milliseconds);