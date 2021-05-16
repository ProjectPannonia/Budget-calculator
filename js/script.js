class UserInterfaceElements {
    constructor(itemName, itemPrice, itemQuantity) {
        this.itemName = document.getElementById(itemName);
        this.itemPrice = document.getElementById(itemPrice);
        this.itemQuantity = document.getElementById(itemQuantity);
    }
}
class DataContainerElements {
    constructor(elementCounter, sumOfCost) {
        this.elementCounter = document.getElementById(elementCounter);
        this.sumOfCost = document.getElementById(sumOfCost);
    }
}

const interfaceElement = new UserInterfaceElements('item_name', 'item_price', 'item_quantity');
const dataContainers = new DataContainerElements('sum_number_of_items', 'sum_of_items_cost');

let total = 0;
let numberOfElements = 0;

function save() {
    let itemName = interfaceElement.itemName.value;
    let itemPrice = interfaceElement.itemPrice.value;
    let itemQuantity = interfaceElement.itemQuantity.value;

    if(isValidData(itemName, itemPrice, itemQuantity)) {
        addToList(itemName, itemPrice, itemQuantity);
        clearFields();
    } else {
        alert('Invalid input data!');
    }
    
}

function addToList(desciption,cost,amount) {
    let multipliedCostAndAmount = parseInt(cost) * parseInt(amount);

    addElementToList(desciption, 'db');
    addElementToList( multipliedCostAndAmount + 'Ft');
    refreshTotals(multipliedCostAndAmount);
}

function addElementToList(text,unit) {
    let whichList = (unit === 'db' ? 'megnevezes_list' : 'koltseg_list');
    let selectedList = document.getElementById(whichList);

    let listItemNode = document.createElement("li");
    let textNode = document.createTextNode(text);
    
    listItemNode.appendChild(textNode);
    selectedList.appendChild(listItemNode);
}
function refreshTotals(multipliedCostAndAmount) {
    total += parseInt(multipliedCostAndAmount);
    numberOfElements++;
    dataContainers.elementCounter.innerHTML = ": " + numberOfElements + " db";
    dataContainers.sumOfCost.innerHTML = ": " + total.toString() + " Ft";
}

function isValidData(itemNameValue, itemPriceValue, itemQuantityValue) {
    let validName = isNaN(parseInt(itemNameValue)) && (itemNameValue.length > 0);
    let validPrice = isValidNumber(itemPriceValue);
    let validQuantity = isValidNumber(itemQuantityValue);

    return (validName && validPrice && validQuantity);
}

function isValidNumber(value) {
    let parsedValue = parseInt(value);
    let valid = false;

    if(!isNaN(parsedValue) && parsedValue > 0) {
        valid = true;
    }
    return valid;
}

function clearFields() {
    interfaceElement.itemName.value = "";
    interfaceElement.itemPrice.value = "";
    interfaceElement.itemQuantity.value = "";
}

class ItemsToSave{
    constructor(itemName, ite) {

    }
}

function saveToFile() {
    let blob = new Blob(['test text'],
                         {type: 'text/plain;charset=utf-8'});

    saveAs(blob, "testfile1.txt");
}