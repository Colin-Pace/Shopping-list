/* Functions
1. Add item
3. Submit item
4. Focus on item
5. Remove item    */


// Global variables
let main, container, list, itemCount = 1, focused, focusedItem, focusedItems = [];

// Functions
function goToAddScreen() {
  main = document.getElementById('main');
  container = document.getElementById('container');
  list = document.getElementById('list');

  const add = document.createElement('div');
  const input = document.createElement('input');
  const button = document.createElement('button');
  const textNode = document.createTextNode('Add item');

  add.setAttribute('id', 'addFrame')
  input.setAttribute('type', 'text');
  input.setAttribute('placeholder', 'item');
  input.setAttribute('id', 'input');
  input.setAttribute('autocomplete', 'off');
  button.setAttribute('type', 'submit');
  button.setAttribute('id', 'submitButton');
  button.setAttribute('onclick', 'addItem()');

  button.appendChild(textNode);
  add.appendChild(input);
  add.appendChild(button);
  main.replaceChild(add, main.childNodes[1]);
}

function addItem() {
  const item = document.getElementById('input').value;
  const text = document.createTextNode(item);
  const node = document.createElement('li');
  const id = itemCount.toString();
  itemCount++;

  node.setAttribute('class', 'listItem');
  node.setAttribute('onclick', 'focusOnItem(event)');
  node.setAttribute('id', id);

  if (item === '') {
    main.replaceChild(container, main.childNodes[1]);
  } else {
    node.appendChild(text);
    list.appendChild(node);
    container.appendChild(list);

    main.replaceChild(container, main.childNodes[1]);
  }
}

function focusOnItem(event) {
  const item = event.target;
  const itemClass = item.getAttribute('class');
  if (itemClass !== 'listItem') return;

  if (item.style.borderColor === 'blue') {
    item.style.borderColor = 'black';
    item.style.borderWidth = '2px';
  } else {
    item.style.borderColor = 'blue';
    item.style.borderWidth = '4px';
  }
}

function removeItem() {
  const items = list.childNodes, l = items.length;
  const ids = [];

  for (let i = 0; i < l; i++) {
    if (items[i].style.borderColor === 'blue') {
      ids.push(items[i].id);
    }
  }

  const nodes = list.childNodes;
  const l_ = list.childNodes.length;
  for (let i = l_ - 1; i >= 0; i--) {
    if (ids.includes(nodes[i].id)) {
      list.removeChild(list.childNodes[i]);
    };
  }
}
