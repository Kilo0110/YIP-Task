import { dragStart, dragEnd } from "../dragAndDrop.js";

/**
 * @date 2023-01-31
 * @desc Creates a new instance of the HTML Image element and appends it to the parent element
 * @param {HTMLElement} parent
 * @param {String} src attribute value
 * @returns {any}
 */
export const createAndAppendImageElement = (parent, src) => {
  const imageElement = document.createElement('img');
  imageElement.setAttribute('src', src);
  parent.appendChild(imageElement);
};

/**
 * @date 2023-01-31
 * @desc Creates a new instance of the HTML Paragraph element and appends it to the parent element. Uses the Firebase data to output textContent to the DOM
 * @param {HTMLElement} parent element
 * @param {String} className
 * @param {Object} data Firebase data
 */
export const createAndAppendParagraphElement = (parent, className, data) => {
  const spanElement = document.createElement('p');
  spanElement.setAttribute('class', className);

  if (className === 'customer-id') {
    spanElement.textContent = `Customer ID: ${data.id}`;
  }
  if (className === 'customer-name') {
    spanElement.textContent = `NAME: ${data.name}`;
  }
  if (className !== 'customer-id' && className !== 'customer-name') {
    let propertyArray = className.split('-');
    let property = propertyArray.join('_');
    spanElement.innerHTML = `${propertyArray.join(' ').toUpperCase().bold()}: ${
      data[property]
    }`;
  }
  parent.appendChild(spanElement);
};

/**
 * @date 2023-01-31
 * @desc Creates a new instance of the HTML Div element, sets necessary attributes and appends it to the parent
 * @param {HTMLElement} parent
 * @param {Object} data Firebase data
 * @returns {HTMLDivElement} created draggable
 */
export const createAndAppendDraggables = (parent, data) => {
  const draggable = document.createElement('div');
  draggable.setAttribute('class', 'deliveries draggable');
  draggable.setAttribute('draggable', 'true');
  draggable.setAttribute('data-in-planning', data.in_planning.toString());

  draggable.addEventListener('dragstart', () => {
    dragStart(draggable);
  });
  draggable.addEventListener('dragend', () => {
    dragEnd(draggable, data.id);
  });

  parent.appendChild(draggable);
  return draggable;
};
