"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 4

   Countdown Clock for Ticket Ordering
   Author: Anthony S,A Gradillas
   Date:  2.14.19

   Filename:   ph_clock.js     

*/

/* A global variable named minsLeft was inserted with the initial value being set to 0. This will track the number of minutes left to submit the ticket order. A global variable named secsLeft was inserted with the initial value set to 15. This will track the number of seconds left within each minute to order. */
var minsLeft = 0;
var secsLeft = 15;

/* A global variable named timeLeft was declared, which will allow the number of econds left to submit the ticket order. The initial value was set to be equal to the number of minutes left multiplied by 60 plus the number of seconds left. */
var timeLeft = (minsLeft * 60 + secsLeft);

function countdown() {
    var minsLeft = Math.floor(timeLeft / 60);
    var secsLeft = timeLeft - (60 * minsLeft);
}

/* ------------------------------------------------- */


/* The checkTimer() function tests whether there is any time left to make the
   ticket order. If the time left is 0, the stopClock() function is run;
   otherwise nothing happens and the program continues to run. */

function checkTimer() {
    if (timeLeft === 0) stopClock();
}


/* The addLeadingZero() function adds a leading zero to values which are less than 10 */

function addLeadingZero(num) {
    var numStr = (num < 10) ? ("0" + num) : "" + num;
    return numStr;
}