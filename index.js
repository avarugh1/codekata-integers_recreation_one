function isSq(num){
    return (Math.sqrt(num) % 1 === 0);
}

function sumOfSq(sum){
    return sum.reduce((a,b) => a + b, 0);
}

function sumOfSq(divisors){
    let runningSum = 0;
    for(let i=0;i < divisors.length;i++){
        runningSum += (divisors[i] * divisors[i]);
    }

    return runningSum;
}

function getDivisors(num){
    let divisors = new Set();

    for(let i=1;i <= num;i++){
        if((num % i) == 0){
            divisors.add(i);
        }
    }

    return [...divisors];
}

function listSquared(m, n) {
    let arr = [];
   for(let i=m;i <= n;i++){
        let divisors = getDivisors(i); // Step 1: Get all the divisors
        let sum = sumOfSq(divisors); // Step 2: Calculate the sum of the squares

        if(isSq(sum)){ // Step 3: Determine if sum is a valid square
            arr.push([i, sum]);
        }
   }
   return arr;
}

console.log(listSquared(1, 250), [[1, 1], [42, 2500], [246, 84100]].toString());