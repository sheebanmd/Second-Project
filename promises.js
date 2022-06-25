// PROMISES

// let obj = new Promise(function(resolve,reject){
//     let a = 1 + 2;
//     if (a == 2) {
//         resolve(" PASS");
//     }
//     else{
//         reject(" NOT PASS");
//     }
// })

// obj.then(function (message) {
//     console.log("Result --"+message);
// }).catch(function (message) {
//     console.log("Result --"+message);
// })


// CALLBACK FUNCTIONS

// function task1() {
//     console.log("TASK 1");
// }

// function task2() {
//     console.log("TASK 2");
// }

// setTimeout(() => {
//     task1()
// }, 3000);

// setTimeout(task1,3000);

// task2();

// setTimeout( ()=> {
//     console.log("TASK 1");
// },3000);

// window.onload = function (){
//     document.getElementById("btn").addEventListener("click", function() {
//         console.log("Button Clicked");
//     })      
// }


function buycar() {
    return new Promise((res, rej) =>{
        setTimeout(() => {
            res("Buy A Car");
        }, 5000);
    })
  
}

function planatrip() {
    return new Promise((res, rej)=>{
        setTimeout(() => {
            res("Lets Plan A Trip");
        }, 2000);    
    })
}

function gotomanali() {
    return new Promise((res, rej)=>{
        setTimeout(() => {
            res("Lets Go To Manali");
        }, 2000);    
    })
}

function letsseemountain() {
    return new Promise((res, rej)=>{
        setTimeout(() => {
        //    res("Lets Go and see Mountain");
                rej("ERROR : SOME ACCiDENT HAPPENED")
        }, 1000);    
    })
}

    async function see() {
        try{
            let msg1 = await buycar();
            console.log(msg1);
            let msg2 = await planatrip();
            console.log(msg2);
            let msg3 = await gotomanali();
            console.log(msg3);
            let msg4 = await letsseemountain();
            console.log(msg4);            
    
        }
        catch(err){
                console.log(err);
        }
    }    
    see();


// buycar().then((msg1)=>{
//     console.log(msg1);
//     planatrip().then((msg2) =>{
//         console.log(msg2);
//         gotomanali().then((msg3)=>{
//             console.log(msg3);  
//             letsseemountain().then((msg4)=>{
//             console.log(msg4);
//             })
//         })
//     })
// })