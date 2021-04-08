
//=========================>>
// Selectors/Variables
//======================>>
let itemText = document.getElementById('txtItem');
let shoppingListItems = document.getElementById('shoppingList');
let items = []; // empty array or collection or list

//===============>>
// Functions
//============>>
function ClearItems() {
    items = []; // clear the array
    shoppingListItems.innerHTML = ''; // clear the list
} // ClearItems()

function AddItem() {
    let item = itemText.value; // get the item name
    items.push(item); // add it to a list/array/collection
    DrawItems();

    // clear the textbox and set focus
    itemText.value = '';
    itemText.focus();
} // AddItem()

function RemoveItem(idx) {
    items.splice(idx, 1);
    DrawItems();
} // RemoveItem()

function DrawItems() {
    shoppingListItems.innerHTML = ''; // clears the li's

    // loop! through all the array items
    // and add them to the shoppingListItems!
    for(let i = 0; i < items.length; i++) {
        // create a new element (li)
        curItem = document.createElement('li');
        curItem.setAttribute('class', 'listItem');
        curItem.innerHTML = items[i];
        shoppingListItems.appendChild(curItem);
        // now create a delete button
        button = document.createElement('input');
        button.setAttribute('type', 'button');
        button.setAttribute('class', 'btnDelete');
        button.setAttribute('value', 'delete item');
        button.setAttribute('onclick', 'RemoveItem(' + i + ');');
        shoppingListItems.appendChild(button);
    } // for
} // DrawItems()