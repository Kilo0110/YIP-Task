import { updateCustomer } from "./firebaseActions.js"

export const dragStart = (draggable) => {
  draggable.classList.add('dragging')
}

export const dragEnd = (draggable, id) => {
  draggable.classList.remove('dragging')

  if (draggable.closest('.slots')) {
    let container = draggable.closest('.slots')
    draggable.setAttribute('data-in-planning', 'true')
    updateCustomer(true, container, id)
  } else {
    draggable.setAttribute('data-in-planning', 'false');
    updateCustomer(false, null, id);
  }
}

export const dragOver = (ev, container) => {
  ev.preventDefault()
  const currentDraggable = document.querySelector('.dragging')
  container.appendChild(currentDraggable)
}
