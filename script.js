// Represents a list item

class ToDoItem {
    constructor(item) {
        this.item = item;
    }
}



// Handle UI Tasks



class UI {
    static displayList() {
        const storedItems = [];

        const items = storedItems;

        items.forEach((item) => UI.addItemToList(item));
    }
    static addItemToList(item) {
        const list = document.querySelector("#Todo");
        const row = document.createElement("tr");

        row.innerHTML = `
        <td>${item.item}</td>
        <td><a class="delete" href="#">O</a></td>
        `;

        list.appendChild(row);
    }
}



// Add an item

document.querySelector('#item-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const item  = document.querySelector('#item').value;

    if (item == '') {
        alert('You must enter an item.')
    } else {

    const newItem = new ToDoItem(item);

    UI.addItemToList(newItem);

    UI.clearFields()
    }
});
