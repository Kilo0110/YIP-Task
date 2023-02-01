import { updateCustomer } from "./firebaseActions.js"

export const dragStart = (draggable) => {
  draggable.classList.add('dragging'); // add dragging class to the current animal being dragged
}

export const dragEnd = (draggable, id) => {
  draggable.classList.remove('dragging'); // removing dragging class to the current animal being dragged

  // if the draggable has an element with class name of 'slots' as on of its parent node, then it is in planning
  if (draggable.closest('.slots')) {
    let container = draggable.closest('.slots');
    draggable.setAttribute('data-in-planning', 'true');
    updateCustomer(true, container, id);
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
