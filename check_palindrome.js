
function checkpal(){
    let str = 'greater';
    let bag='';

    for(let i=str.length;i>=0;i--){
        bag+=str[i];
    }

    if(str==bag){
        return false;
    }

}
checkpal();