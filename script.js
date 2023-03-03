var noon = 12;
var evening = 18;

var showCurrentTime = function()
{
    var clock = document.getElementById('clock');

    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";

    if (hours > noon){
        meridian = "PM";
    }

    // if (hours > noon){
    //     hours = hours - 12;
    // }

    var clockTime = hours + ':' + minutes + ':' + seconds + ':' + meridian + '!';

    clock.innerText = clockTime;
};

var updateClock = function()
{
    var time = new Date().getHours();

    showCurrentTime();

};
updateClock();

var oneSecond = 1000;

setInterval(updateClock, oneSecond);

setInterval(() => {    

    d = new Date();

    hr = d.getHours();
    min = d.getMinutes()
    sec = d.getSeconds();

    hr_rotation = 30 * hr + min / 2;
    min_rotation = 6 * min;
    sec_rotation = 6 * sec;

    hour.style.transform = `rotate(${hr_rotation}deg)`;
    minute.style.transform = `rotate(${min_rotation}deg)`;
    second.style.transform = `rotate(${sec_rotation}deg)`;

}, 1000);


var display = document.getElementById("result");
var calcKeys = document.querySelector(".calculator_keys");
var one = document.getElementById("1");
var key = document.getElementsByTagName("button")
var add = document.getElementById("addition");
var equal = document.getElementById("equals");

var buttonPressed = e => {
        console.log(e.target.id);
        console.log(display.value);
        console.log("Button Pressed is: " + buttonPressed.value);
        
        //a += e.target.id;
        // var a = parseInt(document.getElementsByClassName("key-number").value);
        //         var b = parseInt(document.getElementsByClassName("key-number").value);
        const sum = [];
        var results;
        let n;

        if(e.target.id <= "9"){
                display.value += parseInt(e.target.id);
                sum.push(e.target.id);
                for(let i = 0 ; i < sum.length; i++){
                        
                                sum[1] = i;
                               //sum += sum[i];
                               n += sum[i];

                                console.log("Array Content: " + sum[i]);
                                console.log(sum);
                        
                                 results += sum[i];

                                console.log("Results: " + n);
                
                

                // const clickedButton = [].concat(sum);
                

                // console.log(sum);
                // console.log(clickedButton);
                
                }
                        
                        
                
                

        }
        
        
 } 

//        var sum = e =>  {
//                 //add.addEventListener("click", e);
//                 // if(display.value != ""){
//                 //         display.value == "";
//                 // }

                
//                 var result;

//                 var a = parseInt(document.getElementsByClassName("key-number").value);
//                 var b = parseInt(document.getElementsByClassName("key-number").value);

                
//                 if(display.value != null){
//                         //console.log("Display.value: " + display.value + "E.target.value is: " + e.target.value);
//                         //console.log(display.value);
//                         a = parseInt(display.value);

                        
//                         // if(sum[0] != display.value){
//                         //         sum.push(b);
//                         // }else {
//                         //         console.log("Error: Numbers are not correct!")
//                         // }

                        
//                         //console.log("array values: " + sum);
//                         for (let i = 0; i < sum.length; i++){
//                                 let sum = [];

//                                 sum.push(a);
                                
//                                // console.log(sum[i]);
//                                 //console.log("Array List: " + sum.lastIndexOf);

//                                 if(sum[0] != a){
//                                         sum.push(b);
//                                 }else{
//                                         break;
//                                 }

//                                 console.log(sum[0] + sum[1]);
//                         }

//                          var result = parseInt(sum[0]) + parseInt(sum[1]);

//                          console.log("Results are: " + sum[0] + sum[1]);
//                          console.log("Results are: " + result);

                         


//                 }
                
                

//         }

        
        function clearInput(){
                var clr = document.getElementById("delete");
                //console.log(display.value);
                if(clr.value !=""){
                        display.value = "";
                }
        }

 for(let button of key){
        button.addEventListener("click", buttonPressed);
        
 }

//  for(let button of key){
        
//         button.addEventListener("click", sum);
//  }

  

 
      


// calcKeys.addEventListener("click", function(){
//          //display.innerText = document.getElementById("#7");

         
//          var keys = document.querySelector("key-number");
//          alert("Hello World!");

//         if (keys = one.getElementsByID('1')){
//                 display.innerHTML += "1";
//         }
        
//                 //display = "1";
        
       
    
// });


// function mySecondFunction() {

    
    
//     // x.addEventListener("click", mySecondFunction);
//     // display.addEventListener("click", mySecondFunction);

    
//     //     display.innerHTML = x.innerText;
//     // console.log(x);

    
    
// };

//console.log(x);

