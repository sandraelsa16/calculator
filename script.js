//1. display number in text box

function displayNumber(num){
    result.value+=num
}

//calculate percent


//2. clear text box

function clearBox(){
    result.value=''
}

//3. evaluate expression

function ans(){
    //method1
    exp=result.value
    output=eval(exp);
    result.value=output
    
    //method 2
    // result.value = eval(result.value)
}

//4. Remove last item from text box

function singleClear(){
    result.value = result.value.slice(0,-1)
}

