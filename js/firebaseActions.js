import {
  doc,
  setDoc,
  onSnapshot,
  query,
  where,
  collection,
  getDocs,
  enableIndexedDbPersistence,
  updateDoc,
} from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js';
import { db } from './firebaseConfig.js';

import { customers } from './user-json-data.js';

// Enable DB persistence
enableIndexedDbPersistence(db).catch((err) => {
  if (err.code == 'failed-precondition') {
    // Multiple tabs open, persistence can only be enabled
    // in one tab at a a time.
    // ...
  } else if (err.code == 'unimplemented') {
    // The current browser does not support all of the
    // features required to enable persistence
    // ...
  }
});

const colRef = collection(db, 'customers');

// The following function was used to take my 'user.json file' and upload it to Firebase

/* const setUserData = async (customer) => {
  try {
    await setDoc(doc(db, 'customers', `${customer.customer_id}`), {
      id: customer.customer_id,
      name: customer.customer_name,
      avatar: customer.customer_avatar,
      pickup_location: customer.pickup_location,
      dropoff_location: customer.dropoff_location,
      in_planning: customer.in_planning,
    });
  } catch (error) {
    console.log('An error occurred while setting customer data', error);
  }
}; */

export const getCustomers = async () => {
  try {
    return await getDocs(colRef);
  } catch (error) {
    console.log(error);
  }
};

/**
 * @date 2023-02-01
 * @desc updates a customer data specifically by updating the in_planning property
 * @param {Boolean} in_planning shows if the document i hap
 * @param {HTMLElement | null} container the container the customer information was dragged. Is null when the customer is placed back in the deliveries inter
 * @param {Number} id the cusomer ID
 */
export const updateCustomer = async (in_planning, container = null, id) => {
  let customerRef = doc(db, 'customers', id.toString()); // get a reference to the current customer

  // if the in_planning was false
  if (in_planning === false) {
    try {
      return await updateDoc(customerRef, {
        in_planning: false,
        slot: null,
      });
    } catch (error) {
      console.log(error);
    }
  } else if (in_planning === true && container !== null) {
    let slot = container.id;
    try {
      return await updateDoc(customerRef, {
        in_planning: true,
        slot,
      });
    } catch (error) {
      console.log(error);
    }
  } else return;
};
