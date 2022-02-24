function getHistory(){
   return document.getElementById("history-value").innerText;
}
function printHistory(num){
   document.getElementById("history-value").innerText=num;
}
function getOutput() {
   return document.getElementById("output-value").innerText;
}
function printOutput(num){
    document.getElementById("output-value").innerText=num;
}
printOutput("9999")