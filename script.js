
let total = 0;
let numberOfElements = 0;

function save() {
    const desciption = document.getElementById('item_name');
    const cost = document.getElementById('item_price');
    const amount = document.getElementById('item_quantity');
    
    addToList(desciption.value,cost.value,amount.value);
}

function addToList(desciption,cost,amount) {
    let costMultiAmount = parseInt(cost) * parseInt(amount);
    addElementToList(desciption, 'db');
    addElementToList(costMultiAmount + 'Ft');

    total += parseInt(cost);
    numberOfElements++;

    document.getElementById('sum_number_of_items').innerHTML = ": " + numberOfElements + " db";
    document.getElementById('sum_of_items_cost').innerHTML = ": " + total.toString() + " Ft";
}

function addElementToList(text,unit) {
    let whichList = (unit === 'db' ? 'megnevezes_list' : 'koltseg_list');
    let selectedList = document.getElementById(whichList);

    let listItemNode = document.createElement("li");
    let textNode = document.createTextNode(text);
    listItemNode.appendChild(textNode);

    selectedList.appendChild(listItemNode);
}
/*
if(typeof desciption.val === 'undefined') {
        alert('Invalid')
    }
*/

function isEmpty(desciption, cost, amount) {
    const desc_val = desciption.val;
    const cost_val = cost.val;
    const amount_val = amount.val;
}