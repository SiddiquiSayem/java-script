function displayResult(result){
    console.log(result);
}

function add(num1,num2,callback){
    let result=num1+num2;
    callback(result);
}

add(20,30,displayResult);

