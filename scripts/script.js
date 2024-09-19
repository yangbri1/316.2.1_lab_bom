// opens a popup on the webpage upon load (only w/ an okay button)
window.alert(`Are you ready to rumble!!!!??`);

// prompts user for an input & caches the user input 
/* aside: notice "window" object isn't in the front this time b/c 
   by default everything in JS is already encompassed in "windows" */
let input = prompt(`Pick a number or month`, `YEP YEP`); 
// `YEP YEP` would show as default input & here it would automatically give away answer ...
// Not quite optimized yet 

/* OH! The resulting type from window.prompt() will be a string so below will runs forever
unless casted to Number, then try-catch block wouldn't be necessary */
// Ref: https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt
// try{

//     let valid_input = true;
//     while(valid_input){
//         if(typeof(input) !== 'number'){
//             // throw("Heyo please gimme a NUMBER");
//             input = prompt("Heyo please gimme a NUMBER");
//         }
//         else{
//             valid_input = false;
//             break;
//         }
//     }

//     // if(typeof(input) !== 'number'){
//     //     // throw("Heyo please gimme a NUMBER");
//     //     input = prompt("Heyo please gimme a NUMBER");
//     // }

//     // else{
//     //     console.log("Affirm it's a number alright")
//     // }

// }
// catch(er){
//     console.log("not a number");
// }

// converting word to their number equivalent for 1-10 (working process)
// const number_obj = {
//     'one': 1,
//     'two': 2,
//     'three': 3,
//     'four': 4,
//     'five': 5,
//     'six': 6,
//     'seven': 7,
//     'eight': 8,
//     'nine': 9,
//     'ten': 10
// };

// // utilize Object.prototype keys method to obtain an array of the keys in number_obj 
// let numbers_array = Object.keys(number_obj);
// numbers_array.forEach(element => {
//     if(input === element){
//         input === number_obj.element;
//     }
// });

//let input = 5;
//let random_num = 5; 
let random_num = Math.round(Math.random() * 100);
//console.log(random_num);
let tries = 0;
let limit = 5;

if(random_num > 9){
    limit = 10;
}
while(tries < limit){
    if(input < random_num){
        input = prompt(`not quite ${input}...🤔 (higher) ---\[ ${limit-tries} tries left ]`);
        //console.log(`not ${input}... higher --- ${limit-tries} left`);
    }
    else if(input > random_num){
        input = prompt(`nope not quite ${input}...🤔 (lower) (${limit-tries} tries left)`);
        //console.log(`nope not ${input}... lower --- ${limit-tries} left`);
    }
    else{
        input = alert(`Grats!! 😊 You've found [${random_num}] in ${tries} attempts!`);
        //console.log(`Grats!! You've found ${random_num}!`);
        break;
    }
    tries++;
}

if(tries === limit){
    alert(`Hidden number was ${random_num} \nDon't give up! 💪`);
    //console.log(`Don't give up!`);
}


// since the resulting data type from window.prompt() method will always be a string


