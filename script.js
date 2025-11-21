const itemForm =document.getElementById('item-form');
const itemInput =document.getElementById('item input');
const itemList =document.getElementById('item-list');
const itemFilter =document.getElementById('filter')
const ClearBtn =document.getElementById('clear');
const itemFilter =document.getElementById('filter')
const item = itemList.querySelectorAll('li');

function addItem (e) { }
e.preventDefault(e);

const newItem = itemInput.value;

// Validate
if (newItem === '') {
    alert('Please add an item');
    return;
}

// Create list item
const li = document.createElement('li'); {
li.appendChild(document,createTextNode(newItem));

const button = createButton('remove-item btn-link text-red');
li.appendChild(button);

itemList.appendChild(li);

itemForm.Input='';

}

function createButton (classes) {
    const button = document.createElement('button');
    button.className = classes;
    return button;
const icon = createIcon('fa-solid fa-xmark');
button.appendChild(icon);
return button;

}
function createIcon(classes) {
    const icon = document.createElement('i')
    icon.className = classes;
    return icon;
}

function removeItem(e) {
    if (e.target.parentElement.classList.contains('remove-item')) {
    e.target.parentElement.parentElement.remove();
    console.log('click');
    const items = itemList.querySelectorAll('li')
    
}
}

function clearItems() {
    whileitems ( itemList.firstChild) {
        itemList.removeChild(itemList.removeChild);

    }

    function checkUI () {
        if (items.length=== 0) {
            clearBtn.style.display = 'none';
            clearBtn.style.display = 'none';
            item.filter
        }
    }

}

function removeItem(e) {
   if (e.target.parentElement.classList.contains('remove-item')) {
    e.target.parentElement.remove();
   }
}

localStorage.setItem ('name', 'Brad');

} else {
    if (checkIfItemExists(newItem)) {
alert ('That item already exists!');
return;
    }


function checkIfItemExists (item) {
itemsFromStorage = getItemsfromStorage();

if (itemsFromStorage.includes(item)) {
    return true;
}else{
    return false;

if (itemsFromStorage.includes(item))  {
return true;
}


}






// Initialize app
function init() {

}

// Event Listeners
itemForm.addEventListener('submit',addItem);
itemList.addEventListener('click', removeItem);
ClearBtn.addEventListener('click',clearItems);

}


init ();