

function reverseNumber(num){
  let reversed = 0;
  let isNegative = num < 0;
  num = isNegative ? -num : num;
  
  while(num > 0){
      let digit = num % 10;
      reversed = reversed * 10 + digit;
      num = Math.floor(num/10)
  }
  
  return isNegative ? -reversed : reversed
}

// console.log(reverseNumber(-1234))

function minMax(arr){
  let min = arr[0];
  let max = arr[0];
  
  for(let i =0;i< arr.length ; i++){
      if(arr[i]>max){
          max = arr[i];
      }
      if(arr[i] < min){
          min = arr[i]
      }
  }
  return {min,max}
}
// console.log(minMax([1,2,3,4,5]))

function reverseName(name){
  let reverse = "";
  for(let i=name.length-1;i >= 0;i--){
      console.log("....name[i]",name[i])
      reverse += name[i]
  }
  return reverse;
}

// console.log(reverseName("shafi"))

function secondLargest(arr){
  let first = arr[0];
  let second = arr[0];
  for (let i=0;i<arr.length;i++){
      if(arr[i]>first){
          second = first;
          first = arr[i];
      }else{ // if(arr[i] > second && arr[i] !== first)
          second = arr[i]
      }
  }
  return second;
}

// console.log(secondLargest([1,2,3,12,5]))

function removeSubString(str,subStr){
  let index = str.indexOf(subStr);
  while(index !== -1){
      str = str.slice(0,index) + str.slice(index + subStr.length)
      console.log("....str",str)
      index = str.indexOf(subStr)
  }
  return str;
}

// console.log(removeSubString("Hello World, World","World"))

const hello=(input)=>{
    let count = 1;
    let result = "";
    for(let i=1;i<=input.length;i++){
        if(input[i] === input[i-1]){
            count++;
        }else{
            result += input[i-1]+count;
            count = 1
        }
    }
    return result;
}

// console.log(hello("aabbbccccaa"))

const reverseArray=(arr)=>{
  let newArr = [];
  for(let i=arr.length-1;i>=0;i--){
      newArr.push(arr[i])
  }
  return newArr;
}
// console.log(reverseArray([1,2,3,4,5]))


const sortFinAscAndSecInDesc=(arr)=>{
  let mid = Math.floor(arr.length/2);
  let arr1 = arr.slice(0,mid).sort((a,b)=>a-b)
  let arr2 = arr.slice(mid).sort((a,b)=>b-a)
  let result = [...arr1,...arr2];
  return result
}

// console.log(sortFinAscAndSecInDesc([76,65,84,56,78,43,67,89,66,98,75,44]))


const sortAnArray=(arr)=>{
  const result = [...arr]
  for(let i=0;i<arr.length-1;i++){
      for(let j=0;j<arr.length-1-i;j++){
          if(arr[j] > arr[j+1]){
              [result[j],result[j+1]] = [result[j+1],result[j]]
          }
      }
  }
  return result
}

// console.log(sortAnArray([1,5,2,8,6,20,10,45]))

const sortAnArrayDesc=(arr)=>{
  const result = [...arr]
  for(let i=0;i<arr.length-1;i++){
      for(let j=0;j<arr.length-1-i;j++){
          if(arr[j] < arr[j+1]){
              [result[j],result[j+1]] = [result[j+1],result[j]]
          }
      }
  }
  return result
}

// console.log(sortAnArrayDesc([1,5,2,8,6,20,10,45]))

const posOrNeg=(num)=>{
    if(num == 0){
        return 0;        
    }else if(num > 0){
        return "Positive"
    }else{
        return "Negative"
    }
}

// console.log(posOrNeg(0))

const evenOrOdd=(num)=>{
    if(num / 2 == 0){
        return "Even"
    }else{
        return "Odd"
    }
}

// console.log(evenOrOdd(0))

const freqOfArr = (arr) => {
    const count = {};
    for (let i = 0; i < arr.length; i++) {
      count[arr[i]] = (count[arr[i]] || 0) + 1;
    }
    return count;
  };
  
  console.log(freqOfArr([1, 2, 3, 4, 5, 6, 4, 5]));


  const isBalanced=(str)=>{
    const res = {
        "{":"}",
        "[":"]",
        "(":")"
    };
    let arr = [];
    for(let i=0;i<str.length;i++){
        if(res[str[i]]){
            arr.push(res[str[i]])
        }else if(str[i] == "}" || str[i] == ")" || str[i] == "]"){
            if(arr.pop() !== str[i]){
                return false
            }
        }
    }
    return arr.length == 0;
}

// console.log(isBalanced("[{()}]"))

const freqByValue=(arr)=>{
    const freq = {}
    
    for(let num of arr){
        freq[num] = (freq[num] || 0) + 1;
    }
    return [...arr].sort((a,b)=>{
        if(freq[b] == freq[a]){
            return a-b
        }
        return freq[b]-freq[a]
    })

}


// console.log(freqByValue([1,2,3,4,3,2]))