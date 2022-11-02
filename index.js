let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

function copySorted (initialArr) {
    return initialArr.slice().sort();
}

alert(sorted);
alert(arr);


