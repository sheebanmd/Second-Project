var itemList = document.querySelector('#items');

// console.log(itemList.parentNode);

// itemList.parentNode.style.backgroudColor = '#f4f4f4';

// console.log(itemList.parentNode.parentNode);
// console.log(itemList.parentNode.parentNode.parentNode);

// console.log(itemList.childNodes);

// console.log(itemList.children);

// console.log(itemList.children[1]);

// itemList.children[1].style.backgroundColor = 'gray';

// console.log(itemList.firstElementChild);
// itemList.firstElementChild.style.backgroundColor = 'yellow';
// itemList.firstElementChild.textContent = 'Sheeban';

// console.log(itemList.lastElementChild);
// itemList.lastElementChild.style.backgroundColor = 'green';
// itemList.lastElementChild.textContent = 'John';

// console.log(itemList.nextElementSibling);
// console.log(itemList.previousElementSibling);

// itemList.previousElementSibling.style.color = 'red';

// var newDiv = document.createElement('div');

// newDiv.className = 'Java';
// newDiv.id = 'J1';
// newDiv.setAttribute('title','welcome');

// var newDivText = document.createTextNode('Hello World');
// newDiv.appendChild(newDivText);

// var container = document.querySelector('header .container');

// var h1 = document.querySelector('header h1');
// console.log(newDiv);

// container.insertBefore(newDiv, h1)



var newDiv =  document.createElement('div');

// Add class
newDiv.className= 'hello';

// Add id
newDiv.id = 'hello1';

// Add attr
newDiv.setAttribute('title', 'Hello Div');

// Create text node
var newDivText = document.createTextNode('Hello');

// Add text to div
 newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

// console.log(newDiv);

newDiv.style.fontSize = '30px';

container.insertBefore(newDiv, h1);


// adding HEllo word before Item 1
var itemList = document.querySelector('#items')
itemList.previousElementSibling.textContent = 'Hello';













