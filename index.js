import {
    showOff, AddNewBook, showFromStorage,
} from './modules/eventModule.js';

import { DateTime } from './modules/luxon.js';


    showOff();
    AddNewBook();
    showFromStorage();
  
  const now = DateTime.now();
  const date = document.querySelector('#date');
  date.textContent = now.toLocaleString(DateTime.DATETIME_MED);
