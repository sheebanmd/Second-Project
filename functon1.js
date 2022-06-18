// //Function Statement AKA Function Declaration
// function a() {
//     console.log("A is Called");
// }

// //Function Expression
// var b = function b() {
//     console.log("B is Called");
// }
// a();
// b();

// //Anonymoues Function
// var c = function() {
//     console.log("C is Called");
// }
// c();

// //Named Function Expression
// var d = function d() {
//     console.log("D is Called");
// }
// d();

// //First Class Function

// function e(age) {//Parameters
//     console.log("E is Called and E Age is "+age);
//     return function obj() {
//         console.log("E is Called and E Age is "+age);
//     }
// }
// console.log(e(24));//Arguments

//Arrow Function

// var obj = () => console.log("Helloooo");
// obj();

//Curring

// var a = (num1) =>  (num2) => num1 + num2;
// console.log(a(2)(5));

//Spread Operator

// var obj1 ={
//     val1 : "Sheeban",
//     val2 : "saqlain"
// }

// // var obj2 = obj1;
// var obj2 = {...obj1};

// obj2.val1 = "Armaan";
// console.log(obj1);
// console.log(obj2);

//Call Back Function
// setTimeout(() => console.log('timer1 expired'), 5000);
// setTimeout(() => console.log('timer2 expired'), 0);

// function x(y) {
// console.log('inside x');
// y();
// }

// x(function y(){
// setTimeout(() => console.log('inside y'), 0)
// })

//Adding Event Listener

// function a() {
//     var count = 0;
//     document.getElementById("clickme")
//     .addEventListener
//     ("click",function check() {
//     console.log("User Clicked on Click ME",++count);
// })    
// }
// a();

// document.getElementById('clickme')
// .addEventListener("click", function click()
// {
//     console.log("clicked")
// })
//     function DOMCONTENTLOADED()
//     {
//     document.getElementById('clickme')
//     .addEventListener("click", function click()
//     {
//         console.log("DOM has loaded")
//     })
   
//     }
//     DOMCONTENTLOADED();


//1 task
// var str = "racecar";
// var str = "see";
// var reverse ="";
// for(var i=str.length-1;i>=0;i--)
// {
//     reverse = reverse+str[i]
// }
// if(str==reverse)
// {
//     console.log(str+" is a palindrome")
// }
// else{
// console.log(str+ " is not a palindrome")
// }

//2 task
console.log();
// class Solution
// {
//     nextPermutation(arr,n)
//     {
//         {
//             const reverse = (index) => 
//             {
//                 let i = index;
//                 let n = arr.length - 1;
//                 while (i < n) 
//                 {
//                     [arr[i], arr[n]] = [arr[n], arr[i]];
//                     i += 1;
//                     n -= 1;
//                 }
//             };
//             for (let index = arr.length - 2; index >= 0; index--) 
//                     {
//                         if (arr[index] < arr[index + 1]) 
//                         {
//                             let swap = arr.length - 1;
//                             while (arr[swap] <= arr[index]) swap -= 1;
//                             [arr[index], arr[swap]] = [arr[swap], arr[index]];
//                             reverse(index + 1);
//                             return arr;	
//                         }
//                     }
//                     return arr.reverse();
//         }
//     }
                                    
// }

//3 Task
// class Solution 
// {
//     //Function to return the count of number of elements in union of two arrays.
//     doUnion(a, n, b, m)
//     {
//         // code here
//         let set = new Set([...a, ...b]);
//         return set.size
//         }
        
// }
//6 Task
// let s= "aabbc" 
// let res = ''
// for(let i = 0; i < s.length-1; i++)
// {
//     if(s[i] != s[i+1])
//     res += s[i]
//     }
//     res += s[s.length - 1]
//     console.log(res);

    //8 Task
    // class Solution 
    // {
    //     kthSmallest(matrix,n,k)
    //     {
    //         var flatted =[]
    //         for(let i=0;i<matrix.length;i++)
    //         {
    //             for(let j=0;j<matrix.length;j++)
    //             {
    //                 flatted.push(matrix[i][j])
    //                 }
    //                 }
    //                 flatted.sort((a,b) => a - b);
    //                 return flatted[k-1]}
                    
    //     }

//7 Task
// var head;
// class Node 
// {
//     constructor(val) 
//     {
//         this.data = val;
//         this.next = null;
//     }
// }
//         /* Function to reverse the linked list */
//         function reverse(node) 
//         {
//             var prev = null;
//             var current = node;
//             var next = null;
//             while (current != null) 
//             {            
//             next = current.next;
//             current.next = prev;
//             prev = current;
//             current = next;
//             }
//             node = prev;
//             return node;
//         }
//             // prints content of var linked list
//             function  printList(node) 
//             {
//                 while(node != null) 
//                 {
//                     document.write(node.data + " ");
//                     node = node.next;        
//                 }   
//             }

//task 4

// class Solution
// {
//     //Function to find the sum of contiguous subarray with maximum sum.
//     maxSubarraySum(arr, N)
//     {
//         // code here
//         let start=0;
//         let end=0;
//         let cMstart=0;
//         let cMend=0;
//         let max=arr[0];
//         let maxSoFar=arr[0];
//         let sumEndingHere=arr[0];
//         for(let i=1;i<N;i++)
//         {
//             sumEndingHere=Math.max(arr[i], sumEndingHere+arr[i]);
//             if(sumEndingHere >= maxSoFar)
//             {
//                 maxSoFar=sumEndingHere;
//             }
//         }
//                 return maxSoFar;
//     }
// }

//task 5

// class Solution{
//     longestPalin(S)
//     {
//         let string = '';
//         let max = 0, ans = '';
//         let n = S.length;
//         for(let i=0; i<n-1; i++)
//         {
//             for(let j=i+1; j<n+1; j++)
//             {
//                 let pal = true;
//                 string = S.slice(i,j);
//                 let l = 0, r = string.length-1;
//                 while(l<r)
//                 {
//                     if(string[l]!==string[r])
//                     {
//                         pal = false;
//                         break;
//                         }
//                         l++;
//                         r--;
//                         }
//                         if(pal===true)
//                         {
//                             if(string.length>max)
//                             {
//                                 max = string.length;
//                                 ans = string;
//                                 }
//                                 }
//                                 }
//                                 }
//                                 return (max!==0) ? ans : S[0]
//     }
//     }