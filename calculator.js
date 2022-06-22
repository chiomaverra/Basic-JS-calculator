
var opr = prompt("Operator: Pick one(*, +, -, /)")
var num1 = parseInt(prompt("Number 1: "))
var num2 = parseInt(prompt("Number 2: "))
let result;


if(opr == "+")
{
    result = num1 + num2;
}else if(opr == "-")

{
    result = num1 - num2;
}else if(opr == "*")

{
    result = num1 * num2;
}else if(opr == "/")

{
    result = num1 / num2;
}
alert(result)
