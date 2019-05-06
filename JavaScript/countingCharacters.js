function countingCharacters(stringtoCount) {

  console.log(stringtoCount + " has " + stringtoCount.length + " characters. ");

}

function countingCharacters2(stringtoCount, characterstoFind) {

  var characterCount=0;
  for (var characterPosition=0;
      characterPosition<stringtoCount.length;
      characterPosition++){
        if(stringtoCount[characterPosition]==characterstoFind){
          characterCount++;
        }
      }
      console.log("String to search in: " + stringtoCount);
      console.log("Characters to find: " + characterstoFind);
      console.log("Number of times the characters appears: " + characterCount);
}

//str-string to search
//search-characters to find in str

function countingCharacters3(str, search) {
  var count=0;//numbers found
  var numChars=search.length; /*we need to stop loop based on mulitple characters, examples:
  if searching "Ohio" with 3 characters at a time we want to stop at h so we dont go pass the end of the string*/
  var lastIndex=str.length-numChars; // we'll use a loop to go through our string
   //This time we looking for a series of characters-substring
   for (var index=0; index<=lastIndex; index++){ //substring gets a part of a string from a start to end lastIndex
     var current= str.substring(index,index+numChars);
     //If the substring matches our series, increase our counter
     if (current==search){
       count++;
     }
   }
   return count;



}
