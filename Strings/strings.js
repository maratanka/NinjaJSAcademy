//1. Oczyscic string od liczb. Przyklad "asd78fdsd9sdf7asdf" zwraca "asdfdsdsdfasdf"

function solution1(str) {
    for (let i = 0; i < str.length; i++) {
        strNew = str.split("0").join("");

    }
    console.log("Solution1: " + strNew);
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
    let count = 0;

    for (let i = 0; i < arrayStr.length; i++) {
        for (j = 0; j < i; j++)
            if (arrayStr[i] == arrayStr[j])
                break;
        if (j == i)
            arrayStr[count++] = arrayStr[i];
    }

    newArray = arrayStr;


console.log("Solution3_vol2: " + arrayStr);
}


string3 = "abcddejfksdfjksdufwiiii";
solution3(string3);
solution3_vol2(string3);