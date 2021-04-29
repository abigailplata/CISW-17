//Initializing counter and array
var numitems=0;
var items = new Array();

function GetItems() {
	//Get the item from the text field
	theitem=document.theform.newitem.value;
	//Add the item to the array
	items[numitems]=theitem;
	//increment counter
	numitems++;
	//sort
	items.sort();
	document.theform.sorted.value=items.join("\n");
}

function SortItems() {
	
}