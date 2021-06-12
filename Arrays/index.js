const list = [3,5,2,6,8,3,2,45,6,45,7,2,3,5,56, -3];

const list2 = [4, 2, 1, 8, 3];

const list3 = [-10, -7, 3, 5, 3 , 2 ,-2];

function solution1(arr){ // 2, 1, 4, 3, 8
    const n = arr.length; // 5
    for (let i=0; i< n; i++) {  // i =2
        for (let j=0; j< n - 1 - i; j++) { 
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j]; // 4
                arr[j] = arr[j+1];  
                arr[j+1] = temp;  
            }
        }
    }
    console.log([arr[0], arr[1]]);
}

// solution1(list);


// console.log(list.sort());




function solution2(arr) {
    let max = arr[0];
    for(let i = 1; i< arr.length; i++){
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    let counter = 0;
    for (let i=0; i<arr.length; i++) {
        if (Math.abs(arr[i]) > max) {
            counter = counter +1; // counter +=1; counter++;
        }
    }
    console.log(counter);
}

solution2(list3);


// [-10, -7, 3, 5, 3 , 2 ,-2, -4];
function solution3(arr) {
    let max; // -2
    for (let i=0; i< arr.length; i++) {
        if (arr[i] < 0) {
            max = arr[i];
        }
    }

    for (let i=0; i<arr.length; i++) {
        if(arr[i] < 0) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }        
    }
}

true && true == true

false || true == true


// [3,5,2,6,8,3,2,45,6,45,7,2,3,5,56, -3];


/**
 * 3 => 3
 * 5 => 2
 * 2 => 3
 * 6 => 2
 * 8 => 1
 * 45 => 2
 * 7 => 1
 * 56 => 1
 * -3 => 1
 */

function solution4(arr) {
    const hashMap = {};
    for(let i=0; i<arr.length; i++) {
        if (hashMap[arr[i]] !== undefined) {
            hashMap[arr[i]] = hashMap[arr[i]] + 1;
        } else {
            hashMap[arr[i]] = 1;
        }
    }   
}

// [3,5,2,6,8,3,2,45,6,45,7,2,3,5,56, -3];

/**
 * [
 *  [3, 3],
 *  [5, 1],
 *  [2, 3],
 *  [6, 1],
 *  [8, 1],
 * ]
 * 
 */ 
function solution4_2(arr) {
    const resultList = [];
    for (let i=0; i<arr.length; i++){
        
        let flag = true;
        for(let j=0; j< resultList.length; j++) {
            if(resultList[j][0] == arr[i]) {
                resultList[j][1]++; 
                flag = false;
            }
        }

        if (flag) {
            resultList.push(    [ arr[i] , 1 ]   );
        }
    }
    let max = resultList[0];
    for(let i = 1; i< resultList.length; i++) {
        if(max[1] <= resultList[i][1]) {
            max = resultList[i];
        }
    }

    console.log(max[0]);
}


solution4_2([3,5,2,6,8,3,2,45,6,45,7,2,3,5,56, -3])