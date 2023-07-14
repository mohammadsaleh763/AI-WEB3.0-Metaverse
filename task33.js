var numbers_array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 0; i < numbers_array.length; i++) {
    if (numbers_array[i] === 1) {
        console.log(numbers_array[i], 'st');
    }
    else if (numbers_array[i] === 2) {
        console.log(numbers_array[i], 'nd');
    }
    else if (numbers_array[i] === 3) {
        console.log(numbers_array[i], 'rd');
    }
    else {
        console.log(numbers_array[i], 'th');
    }
}
