// 6 kyu - Convert string to camel case

/*
Complete the method/function so that it converts dash/underscore delimited
words into camel casing. The first word within the output should be capitalized
only if the original word was capitalized (known as Upper Camel Case, also often
referred to as Pascal case). 
*/

function toCamelCase(str){
    let ans = "";
    for (let i = 0; i < str.length; i++) {     
        // check if first letter is uper case
        //str[0] === str[0].toUpperCase() ? ans = str[0] : ans = str[0]
        if (i === 0) {
            str[0] === str[0].toUpperCase() ? ans += str[0].toUpperCase() : ans += str[0];

        }else if(str[i] === " " | str[i] === "-" | str[i] === "_") {
            i++;
            ans += str[i].toUpperCase(); 
            //Check if the current char is " ", "-" or "_"
            //If true sum +1 in the index and add the next char as uper case
        }else {
            ans += str[i];
            //for every other case just add the current char to the answer string
        }
    }
    return ans; //return the string in CamelCase
}
