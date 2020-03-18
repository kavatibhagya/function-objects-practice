let myString = "search the string baby c c c c ";
let searchString = "c";
for(i=0; i<myString.length; i++){
    if(myString[i]===searchString){
        console.log(myString[i] + " is found at " +i);
        break;
    }
}