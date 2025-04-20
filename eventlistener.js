// Event Listener:

// const buttontwo = document.querySelector("#btn-2");

// function alertbnt(){
//     alert("Button 2 clicked!");
// }
// buttontwo.addEventListener("click", alertbnt);

// const backgroundColor = document.querySelector(".box-3");
// function mouseroverbtn(){
//     backgroundColor.style.backgroundColor = "red";
//     backgroundColor.style.color = "white";
// }

// backgroundColor.addEventListener("mouseover", mouseroverbtn);

// const backgroundColor2 = document.querySelector(".box-4");
// function mouseroutbtn(){
//     backgroundColor2.style.backgroundColor = "blue";
//     backgroundColor2.style.color = "white";
// }   
// backgroundColor2.addEventListener("mouseout", mouseroutbtn);


// const revealbtn = document.querySelector(".reveal-btn");
// const hiddenText = document.querySelector(".hidden-text");

// function revealText() {
//     if(hiddenText.classList.contains('reveal-btn'))
//     {
//         hiddenText.classList.remove('reveal-btn');
//         revealbtn.style.width = "800px";
//     }
//     else{
//         hiddenText.classList.add('reveal-btn');
//         revealbtn.style.width = "130px";
//     }
// }

// revealbtn.addEventListener("click", revealText); 


// Event Listener Propagation:

// window.addEventListener("click",function(){
//     console.log("window clicked");
// },true);

// document.addEventListener("click",function(){
//     console.log("Document clicked");
// },true);

// document.querySelector(".div2").addEventListener("click",function(){
//  console.log("Div 2 clicked");
// }, true);

// document.querySelector(".div1").addEventListener("click",function(){
//     console.log("Div 1 clicked");
// },true);

// document.querySelector("button").addEventListener("click",function(e){
//     console.log(e.target.innerText='clicked!');
// }, true);


// document.querySelector('#Football').addEventListener("click", function(e){
// console.log("Football is clicked");
// const target = e.target;
// if(target.matches('li')){
//     target.style.backgroundColor = 'lightgrey';
// }
// });


// javascript even delegation:

// document.querySelector('#sports').addEventListener("click",function(e){
// console.log(e.target.getAttribute('id')+'is clicked');

// const target = e.target;

// if(target.matches('li')){
//     target.style.backgroundColor = 'lightgrey';
// }
// });
// document.querySelector('#sports li').click();

// document.querySelector('#sports').addEventListener("click", function(e) {
//     const target = e.target;

//     if (target.matches('li')) {
//         // Remove background from all li elements
//         document.querySelectorAll('#sports li').forEach(li => {
//             li.style.backgroundColor = ''; // reset to default
//         });

//         // Add background to the clicked one
//         target.style.backgroundColor = 'lightgrey';

//         console.log(target.getAttribute('id') + ' is clicked');
//     }
// });

// // Simulate a click on the first item after page load
// document.querySelector('#sports li').click();


// const sport  = document.querySelector('#sports');
// const newsport= document.createElement('li');

// newsport.innerHTML="Rugby";
// newsport.style.border='1px solid white';
// newsport.style.padding='.5rem';
// newsport.style.borderRadius='.25rem';
// newsport.setAttribute('id','rugby');

// sport.appendChild(newsport);


// Project 1 : Beginner---
// let btn = document.querySelector('#new-qoute');
// let quote = document.querySelector('.quote');
// let person = document.querySelector('.person');

// const quotes = [
//     {
//         quote: `"The best way to find yourself is to lose yourself in the service of others."`,
//         person: `Mahatma Gandhi`
//     },
//     {
//         quote: `"If you want to live a happy life, tie it to a goal, not to people or things."`,
//         person: `Albert Einstein`
//     },
//     {
//         quote: `"Success is not final, failure is not fatal: It is the courage to continue that counts."`,
//         person: `Winston Churchill`
//     },
//     {
//         quote: `"Believe you can and you're halfway there."`,
//         person: `Theodore Roosevelt`
//     },
//     {
//         quote: `"Do not wait for leaders; do it alone, person to person."`,
//         person: `Mother Teresa`
//     },
//     {
//         quote: `"It does not matter how slowly you go as long as you do not stop."`,
//         person: `Confucius`
//     },
//     {
//         quote: `"Your time is limited, so don't waste it living someone else's life."`,
//         person: `Steve Jobs`
//     },
//     {
//         quote: `"Happiness is not something ready made. It comes from your own actions."`,
//         person: `Dalai Lama`
//     },
//     {
//         quote: `"The only limit to our realization of tomorrow is our doubts of today."`,
//         person: `Franklin D. Roosevelt`
//     },
//     {
//         quote: `"In the middle of every difficulty lies opportunity."`,
//         person: `Albert Einstein`
//     },
// ];

// btn.addEventListener('click', function(){
//     let random = Math.floor(Math.random()* quotes.length);

//     quote.innerText = quotes[random].quote;
//     person.innerText = quotes[random].person;
// })


// project 2: modal styling
const openBtn=document.getElementById('open-btn');
const modalcontainer=document.getElementById('modal-container');
const closeBtn = document.getElementById('close-btn');

openBtn.addEventListener("click",function(){
modalcontainer.style.display="block";
});

closeBtn.addEventListener("click",function(){
    modalcontainer.style.display="none";
});

window.addEventListener('click',function(e){

if(e.target === modalcontainer)
{
    modalcontainer.style.display="none";
}

},400);
