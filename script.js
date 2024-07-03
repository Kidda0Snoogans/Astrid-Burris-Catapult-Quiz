let Car_Question = document.querySelector(".Car_Question")
let Bar_Question = document.querySelector(".Bar_Question")

// For the first question //

// For the flee button

let Flee = document.querySelector(".Flee")

Flee.addEventListener('click', function() {
    Car_Question.style.display = "block";
    Bar_Question.style.display = "none";
    let x=1;
})

// For the drink button

let Drink = document.querySelector(".Drink")
Drink.addEventListener('click', function(){
    Car_Question.style.display = "block";
    Bar_Question.style.display = "none"; 
    let x=2;
})

// For the fight button

let Fight = document.querySelector(".Fight")
Fight.addEventListener('click', function(){
    Car_Question.style.display = "block";
    Bar_Question.style.display = "none";
    let (x = 3);
})

// For the Discuss button

let Discuss = document.querySelector(".Discuss")
Discuss.addEventListener('click', function(){
    Car_Question.style.display = "block";
    Bar_Question.style.display = "none"; 
    let (x = 4);
});

// For the Abandon Button

let Abandon = document.querySelector(".Abandon")
Abandon.addEventListener('click', function(){
    let y=1;
})

// For the Goth results //

let Goth_Results = document.querySelector(".Gothy")

if ((x = 1) && (y = 1)) {
    Goth_Results.style.display = "block";
// } else {
    
}