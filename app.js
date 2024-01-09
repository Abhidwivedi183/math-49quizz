var q = document.querySelector("#question");
var sc = document.querySelector("#score");
let storedAns;
let scr = localStorage.getItem("score");
const ansfill = document.querySelector("#form");
const random = (max,min)=>{
return Math.floor(Math.random()*(max-min+1) + min);
}
// console.log(random(20,22));

const generatequest = ()=>{
  const first = random(1,10);
  const second = random(1,10);
const questype = random(1,4);
let quest;

let randomquest1;
let randomquest2;
if(first>second && questype === 4 ){
randomquest1 = first;
randomquest2 = second;
}
else{
  randomquest1 = second;
randomquest2 = first;
}

  // const quest = `Q.What is ${randomquest1} multiply by  ${randomquest2} `;
  // const ans = randomquest1*randomquest2;
switch(questype){
  case 1:  quest = `Q.What is ${randomquest1} addition by  ${randomquest2} `
         ans = randomquest1+randomquest2 ;
         break;

         case 2:quest = `Q.What is ${randomquest1} multiplication by  ${randomquest2} `
         ans = randomquest1*randomquest2;
         break;

         case 3:quest = `Q.What is ${randomquest1} division by  ${randomquest2}`
         ans = randomquest1/randomquest2;
         break;

         case 4:quest = `Q.What is ${randomquest1} subtraction by  ${randomquest2}`
           ans = randomquest1 - randomquest2;
           break;
}

  return {quest,ans};//key and value
}
console.log(generatequest());
// destructure
const showfunc  = ()=>{
const {quest,ans} = generatequest();
scr.innerText = score;
q.innerText = quest;
storedAns = ans;
}
showfunc();
//matching ans::::

const checkans = (event)=>{
event.preventDefault();
const formdata = new FormData(ansfill);
const user = parseInt(formdata.get("ans"));
// console.log("answer is ",user);
if(user === storedAns ){
score++;
Toastify({
  text: `Your are wrong and your score is ${score}`,
  gravity: "bottom",
  position: "center",
  style: {
    background: "linear-gradient(to right, #00b09b, #96c93d)",
  },
}).showToast();
} else {
score -= 1;
Toastify({
  text: `Your are wrong and your score is ${score}`,
  gravity: "bottom",
  position: "center",
  style: {
    background: "linear-gradient(to right, #e33217, #ff001e)",
  },
}).showToast();
}
sc.innerText = score;
localStorage.setItem("score",score);
showfunc();
};
