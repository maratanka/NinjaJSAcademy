//1. Oczyscic string od liczb. Przyklad "asd78fdsd9sdf7asdf" zwraca "asdfdsdsdfasdf"

function solution1(str) {
    let arrStr = str.split("");
    let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    let i = str.length - 1;
    while (i >= 0) {
        i--;
        let j = 0
        while (j < numbers.length) {
            j++;
            if (arrStr[i] === numbers[j]) {
                arrStr.splice(i, 1);
            }
        }
    }

    console.log("Solution1: " + arrStr.join(""));

}

string1 = "asd78fdsd9sdf7asdf";
solution1(string1);



//2. Usunąc spacje z stringa. Przyklad "sadfsa fsdafasdf sadfsadf sadfasdf sadfsafd" zwraca "sadfsafsdafasdfsadfsadfsadfasdfsadfsafd"

function solution2(str) {
    newStr = str.split(" ").join("");
    console.log("Solution2: " + newStr);
}

string2 = "sadfsa fsdafasdf sadfsadf sadfasdf sadfsafd";
solution2(string2);


//3. oczyscic string od powtórzen przyklad "abcddejfksdfjksdufwi" zwraca "abcdejfksuwi"

function solution3(str) {
    //let arrayStr = [];

    arrayStr = str.split("");
    filterArray = arrayStr.filter(function (item, position) {
        //console.log(position + " , " + item);
        return arrayStr.indexOf(item) == position;
    })

    removeDuplicates = filterArray.join("");

    console.log("Solution3: " + removeDuplicates);

}

function solution3_vol2(str) {

    arrayStr = str.split("");
    let duplicates = {};
    let newArray = [];
    let j = 0;
    let i = 0;
    while (i < arrayStr.length) { 
        let item = arrayStr[i];
        if (duplicates[item] !== 1) {
            duplicates[item] = 1;
            newArray[j++] = item;
        }
        i++;
    }

    console.log("Solution3_vol2: " + newArray.join(""));
}


string3 = "abcddejfksdfjksdufwiiii";
solution3(string3);
solution3_vol2(string3);