const form = document.querySelector('form');
const input = document.querySelector('#input');
const list = document.querySelector('#list');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const text = input.value.trim();
  if (text !== '') {
    const item = document.createElement('li');
    item.innerHTML = `
      <span>${text}</span>
      <button class="delete">Delete</button>
    `;
    list.appendChild(item);
    input.value = '';
    const deleteButton = item.querySelector('.delete');
    deleteButton.addEventListener('click', () => {
      item.remove();
    });
  }
});
