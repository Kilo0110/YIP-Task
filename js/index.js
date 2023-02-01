import { getCustomers } from './firebaseActions.js';
import {
  createAndAppendDraggables,
  createAndAppendImageElement,
  createAndAppendParagraphElement,
} from './helpers/createElements.js';
import { dragOver } from './dragAndDrop.js';

const containers = document.querySelectorAll('.container');

const deliveriesContainer = document.querySelector('.deliveries-container');

const slotContainers = document.querySelectorAll('.slots.container');

const dateIndicators = document.querySelectorAll('.date-indicator');

const now = moment(); // get the current day

// Calculate the 4 consecutive days 7 days away from the present day
dateIndicators.forEach((indicator) => {
  // get the current indicator id string and slice out the number
  let indicatorID = parseInt(indicator.id.slice(10));
  // clone the current moment to avoid side effects
  let momentClone = now.clone();
  // calculate the day and output it to the DOM
  let dayFromNow = momentClone
    .add(7 + indicatorID, 'day')
    .toDate()
    .toDateString();
  indicator.textContent = dayFromNow;
});

containers.forEach((container) => {
  container.addEventListener('dragover', (ev) => {
    dragOver(ev, container);
  });
});

getCustomers().then((data) => {
  data.docs.forEach((doc) => {
    let data = doc.data();
    let classNames = [
      'customer-name',
      'customer-id',
      'pickup-location',
      'dropoff-location',
    ];

    if (data.in_planning === true) {
      let parentSlot = parseInt(data.slot.slice(5))
      let parent = slotContainers[parentSlot - 1]
      const draggable = createAndAppendDraggables(parent, data);

      createAndAppendImageElement(draggable, data.avatar);

      classNames.forEach((className) => {
        createAndAppendParagraphElement(draggable, className, data);
      });
    } else {
      const draggable = createAndAppendDraggables(deliveriesContainer, data)

      createAndAppendImageElement(draggable, data.avatar);

      classNames.forEach((className) => {
        createAndAppendParagraphElement(draggable, className, data);
      });
    }
  });
});

