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
// const openBtn=document.getElementById('open-btn');
// const modalcontainer=document.getElementById('modal-container');
// const closeBtn = document.getElementById('close-btn');

// openBtn.addEventListener("click",function(){
// modalcontainer.style.display="block";
// });

// closeBtn.addEventListener("click",function(){
//     modalcontainer.style.display="none";
// });

// window.addEventListener('click',function(e){

// if(e.target === modalcontainer)
// {
//     modalcontainer.style.display="none";
// }

// },400);




// Project 3: accordion

// according with my simple idea not animation:

// const questions = document.getElementsByClassName('question');
// const answers = document.getElementsByClassName('answer');

// for (let i = 0; i < questions.length; i++) {
//     questions[i].addEventListener('click', function () {
//         // Toggle the display of the corresponding answer
//         if (answers[i].style.display === "block") {
//             answers[i].style.display = "none";
//             questions[i].classList.remove('active');
//         } else {
//             answers[i].style.display = "block";
//             questions[i].classList.add('active');
//         }
//     });
// }


// accordion with animation , first element show,if one show another hide:

// const accordion = document.getElementsByClassName('content-container');
// // Set the first element as active by default
// if (accordion.length > 0) {
//     accordion[0].classList.add('active');
// }

// // Add event listeners to all the accordion items
// for (let i = 0; i < accordion.length; i++) {
//     accordion[i].addEventListener('click', function() {
//       // First, remove 'active' class from all items except the clicked one
//       for (let j = 0; j < accordion.length; j++) {
//         if (accordion[j] !== this) {
//             accordion[j].classList.remove('active');
//         }
//     }

//         this.classList.toggle('active');
//     });
// }


// project 4: stop watch

// const startstoptBtn = document.querySelector('#startStopBtn');
// const resetBtn = document.querySelector('#resetBtn');
// const saveBtn = document.querySelector('#saveBtn');

// //time values
// let seconds = 0;
// let minutes = 0;
// let hours = 0;

// //  leadings zero
// let leadingseconds =0;
// let leadingminutes =0;
// let leadinghours =0;

// //set interval & timerstatus
// let timerInterval = null;
// let timerstatus = "stopped";


// // stop watch function
// function stopWatch(){
//     seconds++; 
//     if(seconds/60 === 1){
//         seconds =0;
//         minutes++;
//     }
//     if(minutes/60 === 1){
//         minutes=0;
//         hours++;
//     }

//     if(seconds<10)
//     {
//         leadingseconds = "0" + seconds.toString();
//     }
//     else{
//         leadingseconds=seconds;
//     }

//     if(hours<10)
//         {
//             leadinghours = "0" + hours.toString();
//         }
//         else{
//             leadinghours=hours;
//         }

//         if(minutes<10)
//             {
//                 leadingminutes = "0" + minutes.toString();
//             }
//             else{
//                 leadingminutes=minutes;
//             }
        

//     let displayTimer = document.getElementById('timer').innerText = leadinghours + ":" + leadingminutes + ":" + leadingseconds; 
// }

// //window.setInterval(stopWatch,1000) 

// startstoptBtn.addEventListener('click',function(){
//     if(timerstatus === "stopped"){
//         timerInterval = window.setInterval(stopWatch,1000);
//         document.getElementById('startStopBtn').innerHTML=`<i class="fa-solid fa-pause" id="pause"></i>`;
//         timerstatus = "started";
//     }
//     else{
//         window.clearInterval(timerInterval);
//         document.getElementById('startStopBtn').innerHTML=`<i class="fa-solid fa-play" id="play"></i>`;
//         timerstatus = "stopped";
//     }
// });

// resetBtn.addEventListener('click', function(){
//     window.clearInterval(timerInterval);
//     seconds=0;
//     minutes=0;
//     hours=0;
//     document.getElementById('timer').innerHTML="00:00:00";
//     document.getElementById('startStopBtn').innerHTML=`<i class="fa-solid fa-play" id="play"></i>`;
    
// });

// project 5: to do list

// const addBtn = document.querySelector('#addBtn');
// const inputText = document.querySelector('#inputText');
// const tableBody = document.querySelector('#tableBody');

// addBtn.addEventListener('click', function () {
//     const value = inputText.value.trim();

//     if (value !== "") {
//         const row = tableBody.insertRow();
//         const cell = row.insertCell(0);
//         cell.textContent = value;
//         inputText.value = ""; 
//     } else {
//         alert("Please enter something!");
//     }
// });




const addBtn = document.querySelector('#add-task');
const inputText = document.querySelector('#input-task');
const taskContainer = document.querySelector('#task-container');

addBtn.addEventListener('click', function () {
    const taskValue = inputText.value.trim();

    let task = document.createElement('div');
    task.classList.add('task');

    let li = document.createElement('li');
    li.innerText = taskValue;
    task.appendChild(li);

    let checkButton = document.createElement("button");
    checkButton.innerHTML = `<i class="fa-solid fa-check"></i>`;
    checkButton.classList.add('checkTask');
    task.appendChild(checkButton);

    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
    deleteButton.classList.add('deleteTask');
    task.appendChild(deleteButton);

    if (taskValue === "") {
        alert('Please enter a task');
        return;
    }
    else{
        taskContainer.appendChild(task);
        inputText.value = ""; 
    }

    checkButton.addEventListener('click',function(){
        checkButton.parentElement.style.textDecoration="line-through";
    });

    deleteButton.addEventListener('click',function(e){
        let target=e.target;
        target.parentElement.parentElement.remove();
    })
    
});
