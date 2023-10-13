// -------- 1 ----------


// const input=myFunction([80,95,100]);
// const input=myFunction([1,2,3]);
// const input=myFunction([-500,0,50]);
// function myFunction(input)
// {
//     console.log("Initial : "+input);
//     input=input.shift();
//     console.log("Final : "+input);
// }


// --------- 2 ----------


// let input=myFunction([1,2,3,4,5]);
// let input=myFunction([1,1,2,1,1]);
// let input=myFunction([5,5,5,6]);
// let input=myFunction([]);
// function myFunction(input)
// {
// let input3;
// input3 =[1];
//     if(input=input3)
//     {
//     console.log("true");
//     }
//     else
//     {
//     console.log("False");
//     }
// return input3;
// }


// ------- 3 --------------


// let input=myFunction();
// function myFunction(input,output)
// {
//     input=[1,2,3,4];
//     input=[9,9,2,3,4];
//     input=[];
//     output=input.reverse();
//     console.log(output);
// }


// ---------- 4 ----------


// let a;
// a=makePair(1,2);
// a=makePair(51,21);
// a=makePair(512124,215);
// function makePair(a,b)
// {
//     return ([a,b]);
// }
// console.log(a);


// ----------- 5 -----------


// let input;
// input=myFunction(["hi","edabit","fgh","abc"]);
// input=myFunction(["Red","blue","Blue","Green"]);
// input=myFunction(["a","g","y","d"]);
// input=myFunction(["Pineapple","Orange","Grape","Apple"]);
// function myFunction(input)
// {
    // let index;
    // index=input.indexOf("Orange");
    // return index;
// }
// console.log(input);


// -------------- 6 -----------------


// let input;
// input=myFunction([1,2,3]);
// input=myFunction(["cat","dog","duck"]);
// input=myFunction([true,false,true]);
// function myFunction(input)
// {
//     let len, leng;
//     len=input.length-1;
//     leng=input.at(len); 
//     return leng;   
// }
// console.log(input);


// ------------ 7 ----------------------


// let input;
// input=arrayToString([1,2,3,4,5,6]);
// input=arrayToString(["a","b","c","d","e"]);
// input=arrayToString([1,2,3,"a","s","dAAAA"]);
// function arrayToString(input)
// {
//     let ar;
//     ar=input.join("");
//     return ar;
// }
// console.log(input);


// -------------- 8 --------------


// let input;
// input=("Hello World");
// input=("Edabit");
// input=("Wash your hands!");
// input=Array.from(input);
// console.log(input.join());
// console.log([...input].reduce(a=>a+1, 0));

// ------------------------------------------- 6 ---------------------------------------


// let a=prompt("Enter a value");
// let c=a.replaceAll(" ","_");
// let d=c.toLowerCase();
// console.log(d);


// ----------------------------------------- 7 ------------------------------------------


// let str = prompt("Enter a value");


// let str1 = str.split(" ");
// console.log(str1.length)


// for (let i = 0; i < str1.length; i++) {
//     str1[i] = str1[i][0].toUpperCase() + str1[i].slice(1); 
//     console.log(str1);
// }
// let str2=str1.join(" ");
// console.log(str2)

// console.log(str1)


// ------------------------------------------------ 8 --------------------------------------


//    let num = prompt('Enter the value ')
//    onesplace=num%10;
//    tenthplace=num%100;
//    if (onesplace==1 && tenthplace!=11) {
//     console.log(num+"st");
//    } 
//    else if(onesplace==2 && tenthplace!=12) {
//     console.log(num+"nd");
//    }
//    else if(onesplace==3 && tenthplace!=13) {
//     console.log(num+"rd");
//    }
//    else {
//     console.log(num+"th");
//    }


// --------------------------------------------- 9 --------------------------------------------


// let input1=prompt("Enter the value");
// let indexTarget=prompt("Enter the index value");
// let spt=input1.split(" ");
// input1=spt.slice(input1,indexTarget).join(" ");
// console.log(input1);


// --------------------------------------------- 10 -------------------------------------------


// let input=myFunction();

// function myFunction()
// {
//     let input2;
//     let value;
//     input2=prompt("Enter value");
//     let index=prompt("Enter the index value");
//     input2=input2.split(" ");
//     value=input2.splice(index,1).join(" ");
//     console.log(value);
//     console.log(input2.join(" "));
// }


// ---------------------------------------------- 11 ---------------------------------------------


// let input=prompt("Enter input1 value");
// let input2=prompt("Enter input2 value");
// input=input.toLowerCase();
// input2=input2.toLowerCase();

// if (input.includes(input2))
// {
//     console.log("Matched");
// }
// else
// {
//     console.log("Not Matched");
// }


// ---------------------------------------------- 12 ---------------------------------------------


// let input1=prompt("Enter a input1 value");
// let input2=prompt("Enter a input2 value");
// input1=input1.toUpperCase();
// input2=input2.toUpperCase();
// if (input1.match(input2))
// {
//     console.log("True");
// }
// else
// {
//     console.log("False");
// }


// ------------------------------------------------- 13 -------------------------------------------


// let strings = prompt('Enter a string to change' );
// let output = strings.split('');
// let ans = '';
// for(i in output){
//     if(output[i].match(/[a-z]/)){
//        ans += output[i].toUpperCase()
//     }else{
//         ans += output[i].toLowerCase()
//     }
// }
// console.log(ans);