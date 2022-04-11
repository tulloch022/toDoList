// Represents a list item

class ToDoItem {
    constructor(item) {
        this.item = item;
    }
}



// Handle UI Tasks


// const checkOffItem = () => {
//     const item = document.querySelector('tr');


// }

// const unCheckOffItem = () => {
//     const bubble = document.querySelector('#delete');

//     bubble.innerHTML = 
//     `<td id="delete"><a class="delete" onclick="checkOffItem()" href="#">X</a></td>
//     `;
// }



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
        <td id="delete"><a class="delete" href="#">o</a></td>
        `;

        list.appendChild(row);
    }
    static clearFields() {
        document.querySelector("#item").value = '';
    }
    // static completeItem(el) {
    //     if (el.classList.contains('delete')) {
    //         el.parentElement.parentElement.remove();
            
    //         const list = document.querySelector("#Completed");
    //         let row = document.createElement("tr");

    //         row = el.parentElement.parentElement;

    //         list.appendChild(row);
    //     }

    // }
    static completeItem(el) {
        let toggle = 'undone';
        if (el.classList.contains('delete')) {
            const bubble = el;
            if (toggle === 'undone') {
                bubble.innerHTML = '<i class="fa-solid fa-check"></i>';
                toggle = 'done';
                console.log(toggle);
                console.log(bubble.innerHTML)
            } else {
                bubble.innerHTML = 'o';
            }
        }

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



// Complete an item

document.querySelector("#Todo").addEventListener('click', (e) => {
    e.preventDefault()
    UI.completeItem(e.target)
 })

