//checking prime code by deepak m1;

let check_prime(num){
    let count=0;
    for(let i=1;i<=num;i++){
        if(num%i==0){
            count++;
        }
    }

    if(count==2){
        return true;
    }

}

console.log(check_prime(5));

