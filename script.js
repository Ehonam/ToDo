// ajout d'écouteur d'événement
const addBtn = document.querySelector('#btn');
addBtn.addEventListener('click', addTask); // add a task on click

//création fonction d'ajout
const taskCard = document.querySelector(".todoCard");
const taskContainer = document.querySelector("#todoCards");

function addTask() {
    const newTask = taskCard.cloneNode(true) // clone the task card
    const newDelBtn = newTask.querySelector('.delBtn')
    const newTextArea = newTask.querySelector('.task')
    newTextArea.value = "New Task" // set new task text to "New Task"

//faire fonctionner le bouton de suppression
    // ajout d'écouteur d'événement
const delBtn = document.querySelector('.delBtn');
delBtn.addEventListener('click', function() { //delete default task on click
deleteTask(taskCard); //target the right task
});
    //on crée la fonction de suppression
function deleteTask(task) {
    task.remove(); //remove the task
}

//écouteur d'événement sur l'élément clôné
    newDelBtn.addEventListener('click', function() { // add delete event listener to new task
    deleteTask(newTask); //target the new task
});

taskContainer.appendChild(newTask) //append new task to the tasks container
updateCount();


//ajout du compteur de tasks
//écouteur d'événement sur l'élémént tasks
const nbCards = document.querySelectorAll(".todoCards");
nbCards.addEventListener('click', function() {

}) 
//création fonction compteur
function compteur(nbCards) {

}

}

// It is used to import collect.js library 
const collect = require('collect.js'); 
  
const num = [todoCard];  
const data = collect(task); 
const total = data.count(); 
  
console.log('Total number of elements are:', {total});