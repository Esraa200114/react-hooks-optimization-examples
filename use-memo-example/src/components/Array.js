const array = [];

for (let i = 1; i <= 50000000; i++) {
    array.push({ index: i, isSelectedItem: 50000000 === i });
}

export default array;
