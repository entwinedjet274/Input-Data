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

   
