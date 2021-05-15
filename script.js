
let total = 0;
let numberOfElements = 0;

function save() {
    const desciption = document.getElementById('tetel_neve');
    const cost = document.getElementById('tetel_ara');
    const amount = document.getElementById('tetel_db');
    
    addToList(desciption.value,cost.value,amount.value);
    total += parseInt(cost.value);
    numberOfElements++;
    console.log(typeof total);
    document.getElementById('sum_number_of_items').innerHTML = numberOfElements + " db";
    document.getElementById('sum_of_items_cost').innerHTML = total.toString() + " Ft";
}

function addToList(desciption,cost,amount) {
    let desc_Node = document.createElement("li");
    let desc_Text = document.createTextNode(desciption);
    desc_Node.appendChild(desc_Text);
    document.getElementById('megnevezes_list').appendChild(desc_Node);

    let cost_Node = document.createElement("li");
    let costMultiAmount = parseInt(cost) * parseInt(amount);
    let cost_Text = document.createTextNode(costMultiAmount + " Ft");
    cost_Node.appendChild(cost_Text);
    document.getElementById('koltseg_list').appendChild(cost_Node);

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