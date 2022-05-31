// //console.dir(document);

// // console.log(document.domain);

// console.log(document.URL);

// console.log(document.doctype);
// // console.log(document.head);
// // console.log(document.body);

// console.log(document.all[10]);

// document.all[10].textContent = "NEXT"
// console.log(document.forms);

// console.log(document.title);

// var MainTile = document.getElementById('header-title');
// var Header = document.getElementById('main-header');
// // console.log(MainTile);
// // MainTile.textContent = "Item Not Listener";

// // MainTile.innerText = "Not Listener";

// Header.style.borderBottom = 'solid 3px black';

// var title = document.getElementById('items');
// title.style.fontWeight = 'bold';
// title.style.color = 'green';

//const item = document.getElementsByClassName('list-group-item');

// for(let i = 0; i < item.length; i++ ){
//     item[i].style.fontWeight = 'bold';
//   }
// item[2].style.backgroundColor = 'green';

// const li = document.getElementsByTagName('li');
// for(let i = 0; i < li.length; i++ ){
//     li[i].style.fontWeight = 'bold';
//     li[i].style.backgroundColor = 'yellow';

//     }

// var input = document.querySelector('input');

// input.value = "Hello World";

// var submit = document.querySelector('input[type="submit"]');
// submit.value = 'SEND';

// var Items = document.querySelector('.list-group-item')
// Items.style.color = "Blue";

// var Items1 = document.querySelector('.list-group-item:nth-child(2)')
// Items1.style.color = "Green";

// var Items2 = document.querySelector('.list-group-item:last-child')
// Items2.style.color = "Red";

// Using QuerySelectorALL change the font color to green for 2nd item in the item list

// var check = document.querySelectorAll('list-group-item:nth-child(1)');
// var check = document.querySelectorAll('li:nth-child(even)');
// check[1].style.color = "green";

var even= document.querySelectorAll('li:nth-child(even)');
even[0].style.color = "green";

var check = document.querySelectorAll('li:nth-child(odd)');

for (let i = 0; i < check.length; i++) {
    
    check[i].style.backgroundColor = "Green";

}




