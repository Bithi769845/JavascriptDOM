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



// document.querySelector('#sports').addEventListener("click",function(e){
// console.log(e.target.getAttribute('id')+'is clicked');

// const target = e.target;

// if(target.matches('li')){
//     target.style.backgroundColor = 'lightgrey';
// }
// });
// document.querySelector('#sports li').click();

document.querySelector('#sports').addEventListener("click", function(e) {
    const target = e.target;

    if (target.matches('li')) {
        // Remove background from all li elements
        document.querySelectorAll('#sports li').forEach(li => {
            li.style.backgroundColor = ''; // reset to default
        });

        // Add background to the clicked one
        target.style.backgroundColor = 'lightgrey';

        console.log(target.getAttribute('id') + ' is clicked');
    }
});

// Simulate a click on the first item after page load
document.querySelector('#sports li').click();
