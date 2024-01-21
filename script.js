function btnclick(val){
    document.getElementById("screen").value+=val
}
function btnclear(){
    document.getElementById("screen").value=""
}
function equalClick(){
    var text=document.getElementById("screen").value
    var result=eval(text)//already defined
    document.getElementById('screen').value=result
}