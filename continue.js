let numbers = [45,34,54,65,21,32,12,78,98,67,65,78,98,100]
for(let i =0; i< numbers.length; i++){
    let num = numbers[i];
    if(num > 50){
        continue;
    }
    console.log(num);
}