var storedItem = localStorage.getItem("storedItem");

var storedItem2 = localStorage.getItem("storedItem2");

let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");


console.log(saveEl);
console.log(countEl);
  













function increment() {
    var Item = document.getElementById("input").value;

  var Item2 = document.getElementById("input2").value;

  var array =  [Item + " " +Item2];
let count = array;
    let rer = count + " " + " - "  ;
   
    saveEl.innerText += rer;
  
    console.log(count);
    
      localStorage.setItem( "storedItem", array);

document.getElementById("nameSaved").innerHTML = array;


  
};

function save() {

 var Item = document.getElementById("input").value;

  var Item2 = document.getElementById("input2").value;

  var array =  [Item + " " +Item2];
let count = array;
    let rer = count + " - " + " ";
   
    countEl.innerText += rer;
  
    console.log(count);
    
      localStorage.setItem( "storedItem", array);

document.getElementById("nameSaved").innerHTML = array;


};





function get(){

  localStorage.getItem("storedItem");
  localStorage.getItem("storedItem2");


  document.getElementById("nameSaved2").innerHTML = storedItem; 

   document.getElementById("outSaved2").innerHTML = storedItem2; 

}




