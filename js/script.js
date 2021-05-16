class UserInterfaceElements {
    constructor(itemName, itemPrice, itemQuantity) {
        this.itemName = document.getElementById(itemName);
        this.itemPrice = document.getElementById(itemPrice);
        this.itemQuantity = document.getElementById(itemQuantity);
    }
}
class DataContainerElements {
    constructor(elementCounter,quantityCounter , sumOfCost) {
        this.elementCounter = document.getElementById(elementCounter);
        this.quantityCounter = document.getElementById(quantityCounter)
        this.sumOfCost = document.getElementById(sumOfCost);
    }
}


const interfaceElement = new UserInterfaceElements('item_name', 'item_price', 'item_quantity');
const dataContainers = new DataContainerElements('sum_number_of_items', 'sum_number_of_quantity', 'sum_of_items_cost');

let totalCost = 0;
let quantityCounter = 0;
let numberOfElements = 0;

function save(id) {
    addClassToBtn(id);
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
    addElementToList(amount, 'adb')
    addElementToList( multipliedCostAndAmount + 'Ft');

    refreshTotals(desciption,cost,amount);
}

function addElementToList(text,unit) {
    let listSelector;

    switch(unit) {
        case 'db':
            listSelector = 'item_name_list';
            break;
        case 'adb':
            listSelector = 'quantity_list';
            break;
        default:
            listSelector = 'value_list';
    }

    let selectedList = document.getElementById(listSelector);
    let listItemNode = document.createElement("li");
    let textNode = document.createTextNode(text);
    
    listItemNode.appendChild(textNode);
    selectedList.appendChild(listItemNode);
}
function refreshTotals(desciption,cost,amount) {
    totalCost += (parseInt(cost) * parseInt(amount));
    quantityCounter++;
    numberOfElements++;

    dataContainers.elementCounter.innerHTML = ": " + numberOfElements + " db";
    dataContainers.quantityCounter.innerHTML = ": " + quantityCounter + " db";
    dataContainers.sumOfCost.innerHTML = ": " + totalCost.toString() + " Ft";
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



function saveToFile(id) {
    addClassToBtn(id);
    let item_names_list = getDataFromTable(document.getElementById('item_name_list'));
    let item_quantities_list = getDataFromTable(document.getElementById('quantity_list'));
    let values_list = getDataFromTable(document.getElementById('value_list'));
    
    let blob = new Blob(
        [createDataArray(item_names_list, item_quantities_list, values_list)],
        {type: 'text/plain;charset=utf-8'}
    );

    saveAs(blob, "My_expense_data.txt");
}
function createDataArray(names_list, quantities_list, values_list) {
    let line;
    let result = [];

    for(let index = 0; index < names_list.length; index++) {
        line = (index) + ". " + names_list[index].innerHTML + " " + quantities_list[index].innerHTML + " " + values_list[index].innerHTML;
        result.push(line);
    }

    return result;
}
function getDataFromTable(listNode) {
    let itemNameList = listNode;
    let itemNameListChildren = itemNameList.childNodes;
    let tableValues = [];

    for(let value of itemNameListChildren.values()) {
        tableValues.push(value.innerHTML);
    }
    
    return itemNameListChildren;
}

function addClassToBtn(id) {
    let button = document.getElementById(id);
    button.classList.add('slide-bck-center');
    //setTimeout()
}