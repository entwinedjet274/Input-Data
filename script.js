var storedItem = localStorage.getItem("storedItem");

var storedItem2 = localStorage.getItem("storedItem2");

var storedItem3 = localStorage.getItem("storedItem3");

var storedItem4 = localStorage.getItem("storedItem4");
  



function checkedIn() {
 
  var Item = document.getElementById("input").value;

  var Item2 = document.getElementById("input2").value;


var array =  [Item + " " + Item2];




localStorage.setItem( "storedItem", array);

document.getElementById("nameSaved").innerHTML = Item + " " + Item2;




let storedItem3 = storedItem;

document.getElementById("nameSaved3").innerHTML = array;

storedItem3.push = storedItem4;


}

function checkedOut() {
 
  var Item = document.getElementById("input").value;

  var Item2 = document.getElementById("input2").value;

  var array =  [Item + " " +Item2];

localStorage.setItem("storedItem2", array);

document.getElementById("outSaved").innerHTML = Item + " " + Item2;


}


function get(){

  localStorage.getItem("storedItem");
  localStorage.getItem("storedItem2");
  localStorage.getItem("storedItem3");
  localStorage.getItem("storedItem4");

  document.getElementById("nameSaved2").innerHTML = storedItem; 

   document.getElementById("outSaved2").innerHTML = storedItem2; 

}





let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");


console.log(saveEl);
console.log(countEl);
let count = "nameSaved";
let saveBTN = 0;
let word = 0;
function increment() {
    count += 1;
    countEl.innerText = count;
};

function save() {

 var Item = document.getElementById("input").value;

  var Item2 = document.getElementById("input2").value;




    let rer = count + " - " + " ";
   
    saveEl.innerText = rer;
  
    console.log(count);
    
    localStorage.setItem( "storedItem", array);

document.getElementById("nameSaved").innerHTML = [Item + " " + Item2];
};



