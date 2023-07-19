function add(){
    let a = parseInt(document.getElementById("value1").value);
    let b = parseInt(document.getElementById("value2").value);
    let c = a+b;
    document.getElementById("add").innerHTML="addition of "+a+"+"+b+" is "+c;
}
function sub(){
    let a = parseInt(document.getElementById("value1").value);
    let b = parseInt(document.getElementById("value2").value);
    if(a>b){
    let c = a-b;
    document.getElementById("add").innerHTML="addition of "+a+"+"+b+" is "+c;
    }
    else{
        document.getElementById("add").innerHTML="wrong values";
    }
}
function mul(){
    let a = parseInt(document.getElementById("value1").value);
    let b = parseInt(document.getElementById("value2").value);
    let c = a*b;
    document.getElementById("add").innerHTML="addition of "+a+"+"+b+" is "+c;
}
function div(){
    let a = parseInt(document.getElementById("value1").value);
    let b = parseInt(document.getElementById("value2").value);
    if(b==0){
        document.getElementById("add").innerHTML="cant multiply by 0";
    }
    else{
    let c = a/b;
    document.getElementById("add").innerHTML="addition of "+a+"+"+b+" is "+c;
    }
}
function val1(){
    let a = parseInt(document.getElementById("value1").value);
    document.getElementById("val1").innerHTML= a;
}
function val2(){
    let b = parseInt(document.getElementById("value2").value);
    document.getElementById("val2").innerHTML= b;
}