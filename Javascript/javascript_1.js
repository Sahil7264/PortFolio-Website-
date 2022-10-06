// First Point : 1

let hello_button = document.querySelector('button');
//Query Selector : use to select element (first button is selected)
//To store  selected element write  : let variable_name

//write fucntion i.e action you want to perform
hello_button.addEventListener('click',showMsg);

function showMsg(){
    //Alert is use to show some Text
    alert("Hello Sahil")
}

//Second Point : 2
let Changename=document.querySelector('button');
Changename.addEventListener('click',changeName);

function changeName(){
//prompt : use to take input from User
let name = prompt('Enter Name of Candiadate')
Changename.textContent='1 : '+name;
}

