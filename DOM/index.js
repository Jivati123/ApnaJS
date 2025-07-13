// let div = document.querySelector("div");
// console.dir(div);

// // let h2 = document.querySelector("h2");
// // console.dir(h2);

// // console.log(h2.innerText = h2.innerText + "from Apna College students");

// let jivati = document.querySelectorAll (".box");
// // console.log(jivati);

// // console.log(jivati[1].innerText = "NEW VALUE" ); //THE VALUE AT THE BOX2 WILL GET CHANGES HERE.

// // jivati[0] = jivati[0] + "hello Jivati !!!";

// let idx = 1;
// for (jiv of jivati){
//     jiv.innerText = `New update ${idx}`
//     idx++;

// }


// let div = document.querySelector("div")  //hume div ka attribute access karna hai 
// console.log(div);                        // to phle hum div print karayege

// let id = div.getAttribute("id");         //fir hum div ke attribute - id ko access karege
// console.log(id);                         // attriubute - id ko pront kar dege

// console.log(div.getAttribute("id"));      //same as above short form

// let para = document.querySelector("p");        // p is a tag here
// console.log(para);                             // para is the attribute name that we are trying to fetch 

// console.log(para.getAttribute("class"));

// console.log(para.setAttribute("class", "newClass"));


// let div = document.querySelector("div");
// console.log(div);

// div.style.backgroundColor = "green";


let newBtn = document.createElement("button");
console.log(newBtn); //button is created by it's not visible yet
newBtn.innerText ="Click here!"


let div = document.querySelector("div");
console.log(div);

div.append(newBtn);

let heading  = document.createElement("h1");
console.log(heading);
heading.innerHTML ="<i>Hello!! This is Jivati<i>";

div.before(heading);
