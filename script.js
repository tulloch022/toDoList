// Represents a list item

class ToDoItem {
    constructor(item) {
        this.item = item;
    }
}



// Handle UI Tasks







// Add an item

document.querySelector('#item-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const item  = document.querySelector('#item').value;

    if (item == '') {
        alert('You must enter an item.')
    } else {

    const item = new ToDoItem();

    UI.addItemToList(item);

    UI.clearFields()
    }
});
