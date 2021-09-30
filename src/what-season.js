import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 export default function getSeason(date) {
  if (typeof date !== "object") {
    return  "Unable to determine the time of year!"
  } 
  if (!date || !date.getMonth) {
   throw new Error ("Invalid date!" )
  }
  const currentMonth = date.getMonth ()
  if ((currentMonth < 2 && currentMonth >= 0) || currentMonth === 11 ) {
    return "winter"
  } else if (currentMonth < 5 && currentMonth >= 2) {
    return "spring"
  } else if (currentMonth < 8 && currentMonth >= 5) {
    return "summer"
  } else if (currentMonth < 11 && currentMonth >= 8){
    return "autumn"
  }

 }