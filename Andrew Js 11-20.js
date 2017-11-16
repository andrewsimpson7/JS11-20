


 function firstLast6(andrew){
    if((andrew[0]==6) || (andrew[andrew.length-1]==6) ){
        return true;
    }else{
        return false;
    }

}





function has23( array) {
    if ((array[0] == 2 || array[0] == 3)) {
        return true;
    }

    if ((array[1] == 2 ||array[1] == 3)) {
        return true;
    }

    return false;
}




 function fix23(array) {
     for(i=0; i<array.length; i++){
         if(array[i]==2 && array[i+1]==3){
         array[i+1] = 0;
         }
     }
    return array;
 }





// if the final letter in the word is y or z, count 1. if there is a space after the word AND the final letter is either y or z, add one.
 function countYZ(string){
     string=string.toLowerCase();
     var count = 0;
     for(i=0 ; i<string.length; i++){

         if(string[i] == ' ' && (string[i - 1] =="y" || string[i - 1]=="z")){

                count+=1;
         }
     }
     if(string[string.length-1] == "y"|| string[string.length-1] == "z"){
         count+=1;
     }
        return count;
 }







 function endOther(string1,string2){
    var res =string1.toLowerCase();
    var rep = string2.toLowerCase();

  if(rep.endsWith(res)){
      return true
  }
  if(res.endsWith(rep)){
      return true
  }
    return false;
 }



 


 function starOut(string) {
     var answer = '';
     for (i = 0; i < string.length; i++) {
         if(string[i] != "*" && string[i-1] != "*" && string[i + 1] != "*"){
             answer += string[i];
         }
     }
     return answer;
 }




 function getSandwich(string){

     //returns location of word, or -1 if not found
     var n = string.indexOf("bread");
     var str = string.substring(n+5,string.length);
     var n2 = string.lastIndexOf("bread")
     var str = string.substring(n-5,string.length);
     if(n == -1){
         return "";
     }
     if(n == n2){
         return "";
     }
     if(n2 > n){
         return string.substring(n+5, n2);
     }
 }

 function canBalance(array) {
     var sum = 0;
     var sum2 = 0;


     for (var i = 0; i < array.length; i++) {
         sum += array[i];
         for (var j = i + 1; j < array.length; j++) {
             sum2 += array[j];
         }
         if(sum == sum2){
             return true;
         }
     }

    return false;
 }

 function tester() {
     document.getElementById("output").innerHTML = canBalance([1, 1, 1, 2, 1]);
 }



 function countClumps(array) {
     var clumps = 0;
     for (var i = 0; i < array.length; i++) {

         if (array[i] == array[i + 1]) {
             i++;
             clumps += 1;
         }
         if (array[i] == array[i + 1] == array[i + 2])
             return clumps;
     }
     return clumps;

 }



 function evenlySpaced(a,b,c){

         if(c-b == b-a||a-b==b-c || c-a==a-b || a-c==c-b){
             return true;
         }

     return false
 }