const list = [3,5,2,6,8,3,2,45,6,45,7,2,3,5,56, -3];

const list2 = [-7, 7, 5, 8 , 77 ,-2, -4];

const list3 = [-10, -7, 3, 5, 3 , 2 ,-2];

const list4 = [3,5,2,6,8,3,2,45,6,45,7,2,3,5,56, -3];


function solution1(arr){ // 2, 1, 4, 3, 8
    const n = arr.length;
     // 5
     let i=0;
    while (i< n) {
        i++;
        let j=0;  // i =2
        while (j< n - 1 - i) { 
            j++;
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j]; // 4
                arr[j] = arr[j+1];  
                arr[j+1] = temp;  
            }
        }
    }
    console.log([arr[0], arr[1]]);
}

solution1(list);


function solution2(arr) {
    let max = arr[0];
    let i = 1; 
    while(i< arr.length){
        i++;
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    let counter = 0;
    let j=0;
    while (j<arr.length) {
        j++;
        if (Math.abs(arr[j]) > max) {
            counter = counter +1; // counter +=1; counter++;
        }
    }
    // console.log(counter);
    console.log(max);
}

solution2(list2);


// [-10, -7, 3, 5, 3 , 2 ,-2, -4];
function solution3(arr) {
    let max; // -2
    let i=0; 
    while(i< arr.length) {
        i++;
        if (arr[i] < 0) {
            max = arr[i];
        }
    }
    let j=0;
    while(j<arr.length) {
        j++;
        if(arr[j] < 0) {
            if (arr[j] > max) {
                max = arr[j];
            }
        }        
    }

    console.log(max);
}

solution3(list3);


function solution4(arr) {
    const hashMap = {};
    let i=0; 
    while(i<arr.length) {
        i++;
        if (hashMap[arr[i]] !== undefined) {
            hashMap[arr[i]] = hashMap[arr[i]] + 1;
        } else {
            hashMap[arr[i]] = 1;
        }
    }  
    
    console.log(hashMap[arr[0]]);
}

solution4(list4);


function solution4_2(arr) {
    const resultList = [];
    let i=0; 
    while (i<arr.length){
        i++;
        let flag = true;
        let j=0;
        while(j< resultList.length) {
            j++;
            if(resultList[j][0] == arr[i]) {
                resultList[j][1]++; 
                flag = false;   
            }
        }

        if (flag) {
            resultList.push([ arr[i] , 1 ]);
        }
    }

    let max = resultList[0];
    let index = 1; 
    while(index< resultList.length) {
        index++;
        if(max[1] <= resultList[index][1]) {
            max = resultList[index];
        }
    }

    console.log(max[0]);
}

solution4_2(list4);
