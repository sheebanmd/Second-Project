// 1. Using QuerySelectorALL change the font color to green for 2nd item in the item list

// var Items1 = document.querySelector('.list-group-item:nth-child(2)')
// Items1.style.backgroundColor = "Green";

// 2. Make the 3rd item invisible

// var tItem = document.querySelector('.list-group-item:nth-child(3)'); 
// tItem.textContent = "";

// 1. Using QuerySelectorALL change the font color to green for 2nd item in the item list 

var even= document.querySelectorAll('li:nth-child(even)');
even[0].style.color = "green";

// 2. Choose all the odd elements and make their background green using QuerySelectorALL﻿

var check = document.querySelectorAll('li:nth-child(odd)');

for (let i = 0; i < check.length; i++) {
    
    check[i].style.backgroundColor = "Green";

}

// 3. What is the difference between queryselector and queryselectorall?

// // The difference between querySelector() and querySelectorAll()
// // is that querySelector() returns a single object with the first HTML element that matches the 'selectors', 
// // but querySelectorAll() returns an array of objects with all the HTML elements that match the 'selectors'.