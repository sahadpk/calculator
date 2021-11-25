function buttonclick(val)
{
    document.getElementById("screen").value=document.getElementById("screen").value+val;

}
function clearDisplay(){
    document.getElementById("screen").value=""
}
function equalClick(){
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById('screen').value=result
}
function backSpace(){
    var text=document.getElementById("screen")
    var back=text.value
    text.value=back.slice(0,-1)
}

// var buttonclick=(val)=>result.value+=val
// var clearDisplay=()=>result.value=""
// var equalclick=()=>result.value=eval(result.value)=""