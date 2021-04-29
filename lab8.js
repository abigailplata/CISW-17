//Initializing counter and array
var numitems=0;
var items = new Array();

function GetItems() {
	//Get the item from the text field
	theitem=document.theform.newitem.value;
	//Add the item to the array
	if (theitem == ("CRN: 40652" || "40652" || "CRN 40652")) {
		items[2]=theitem;
	} 
	if (theitem==("Victor Zamora"||"Professor Victor Zamora"||"Professor Victor Y. Zamora"||"Victor Y. Zamora"||"Professor Zamora")) {
		items[3]=theitem;
	}
	else {
		items[numitems]=theitem;
	}
	//increment counter
	numitems++;
	
	document.theform.sorted.value=items.join("\n");
}
