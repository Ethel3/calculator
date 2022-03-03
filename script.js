// alert(9876)

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
   if(num==""){
    document.getElementById("output-value").innerText= num;
   }
   else{
      document.getElementById("output-value").innerText=getFormattedNumber(num);
   }

}
 function getFormattedNumber(num){
    if(num="."){
       return"";
    }
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
 }
function reverseNumberFormatted(num){
   return Number(num.replace(/,/g,''));
}

var operator = document.getElementsByClassName("operator");

for (let i =0;i<operator.length;i++){
   operator[i].addEventListener('click',function(){
      if (this.id=="clear") {
         printHistory("");
         printOutput("");
      }
      else if (this.id=="backspace") {
         var output=reverseNumberFormatted(getOutput).toString();
         if (output) {//if output has a value
            output=output.substr(0, output.length-1);
            printOutput(output); 
         }
      }else{
         var output=getOutput();
         var history=getHistory();
         if(output !="" && output == reverseNumberFormat(output))
         {
         history= history+output;
         if(this.id==""){
            var result=eval(history);
            printOutput(result);
            printHistory("");
         }
         else{
            history=this.id;
            printHistory(history);
            printOutput("");
         }
         }
      }
   })
}

var number = document.getElementsByClassName("number");
for (let i =0; i<operator.length; i++){
   number[i].addEventListener('click',function(){
      var output=reverseNumberFormatted(getOutput());
      if(output != NaN){ //if output is a number
         output=output+this.id;
         printOutput(output);
      }
   });
}

