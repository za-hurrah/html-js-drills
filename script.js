// Helpful Resources:
// https://www.w3schools.com/js/js_htmldom.asp
// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector

/*****************************
 * Section 1 - Personal Info *
 *****************************
 *
 * Description:
 *   Change the code below to display some (static) information
 *   when a user clicks the "Show Info" button.
 *
 * Resources:
 *   (See below for drill-specific resources)
 */

function addName() {
  console.log('addName() ran');

  // See:
  // - https://www.digitalocean.com/community/tutorials/js-innertext-and-innerhtml
  // - https://www.w3schools.com/jsref/prop_node_innertext.asp

  let nameElement = document.querySelector('#name');
  nameElement.innerText = 'BoBo Banana!';
}

function addFavoriteThings() {
  console.log('Called addFavoriteThings()');

  let fivElement = document.querySelector('#favthings');

   console.log(fivElement);
   fivElement.innerHTML = '<li>growing</li><li>ripening</li><li>transferring energy!</li>';

  // ^I don't think this is properly listed under the intended ul, but it gets the job done.
   // nameElement.textContent = 'growing';
  // nameElement.textContent = 'ripening';
  // nameElement.textContent = 'transferring energy';

// document.getElementById('#favthings').innerHTML = <li>growing</li>;
  // favElement.innerHTML = <li>growing</li><li>ripening</li><li>transferring energy!</li> ;
  // favElement.style.color = 'green';
  // let li = document.createElement('LIST');


  // li.textContent = 'growing';
  // favthings.appendChild(li);

  // li = document.createElement('LIST');
  // li.textContent = 'ripening';

  // const favthings = document.querySelector('#favthings');
  // favthings.appendChild(li);
// ^ all of those are from resources but I couldn't get them to work

  // 1. Get a reference to <ul id="favthings">
  // 2. Create a few list items representing your favorite things
  // 3. Add them to append them to favthings

  // See:
  //   - https://htmldog.com/guides/javascript/advanced/creatingelements/
  //   - https://www.javascripttutorial.net/javascript-dom/javascript-createelement/
  //   - https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
}

function replaceImage() {
  console.log('Called replaceImage()');

  let picElement = document.querySelector('#picture');
  picElement.src = "https://p7.hiclipart.com/preview/553/1007/814/banana-bread-animation-food-clip-art-banana.jpg";

  // console.log(picElement);
  // picElement.innerHTML = '<img src= "https://p7.hiclipart.com/preview/553/1007/814/banana-bread-animation-food-clip-art-banana.jpg">';

  // picElement.newImage.src = "https://lh3.googleusercontent.com/proxy/UkQwq3qzk5wtPTeP-8MtyUTS3HLMz8STyf0w5WRGK_8lPUBW35jiv_JshEhHgiV43bL807uwdMWDkBziOwmH4HNJ1shHyXabBCfwSjasTm1XT3R6w6jz05pnRfr4Jxx909ptEm6PEz1dlqR-HitV-zQZRVqsdJ39iA";


  // Change the puppy picture to a picture of your choosing

  // See:
  // - https://www.tutorialrepublic.com/javascript-tutorial/javascript-dom-get-set-attributes.php
  // - https://www.w3schools.com/jsref/met_element_setattribute.asp
}

function changeCodeStatus() {
  console.log('Called changeCodeStatus()');

  let statElement = document.querySelector('#codestatus');

   console.log(statElement);
   statElement.innerHTML = '<img src= "https://devhumor.com/content/uploads/images/August2019/js.png" width=300>';

  // let statusElement = document.querySelector('#codestatus');
  // statusElement.src = "https://devhumor.com/content/uploads/images/August2019/js.png";

  // 1. Get a reference to <div id="codestatus">
  // 2. Create image element containing a sweet ol' meme
  // 3. Replace text in codestatus w/ image
}

// Get a reference to the button w/ id="show-info-button"
let showInfoButton = document.querySelector('#show-info-button');

// Do something when showInfoButton is clicked
showInfoButton.addEventListener('click', function() {
  console.log('Clicked "Show Info" button');

  // Implement addName, addFavoriteThings, replaceImage, changeCodeStatus above

  addName();
  addFavoriteThings();
  replaceImage();
  changeCodeStatus();
});

/**********************************
 * Section 2 - Reading From Forms *
 **********************************
 *
 * Description:
 *   Change the code below to populate the section on the right-hand
 *   side of the page with the data entered into the form.
 *
 */

// Get a reference to form w/ id="information-form"
let informationForm = document.querySelector('#information-form');

// Do something when form is submitted
informationForm.addEventListener('submit', function(event) {
  event.preventDefault(); // You will want this here. Remove it and see what changes.

  console.log('Form submitted');

  // Your job:
  //   1. Get information typed into the form
  //   2. Display that info in "Display that info here" section

  // Google things like:
  //   javascript form element get values
});

/*************************************
 * Section 3 - Clicks and Keypresses *
 *************************************
 *
 * Description:
 *   Make the buttons in section 3 of index.html behave as described below.
 *
 */

// When a user clicks "Click me to log something to the console"
// then log something to the console

// Fill in ________ to get a reference to the correct button on the page
let consoleLogButton = document.querySelector('#________');

// Log something when that button is clicked
consoleLogButton.addEventListener('click', function() {
  console.log('Change this text if you want!');
});

let makeBlueButton = document.querySelector('#________');
makeBlueButton.addEventListener('click', function() {
  // Your job:
  //  1. When a user clicks "Change the text to the right blue"
  //  2. Change the text in <div id="colorText">...</div> to blue
});

// Adding an event listener to document means the "keydown" event
// can happen anywhere on the page and we'll respond.
document.addeventListener('keydown', function() {
  // This is called whenever a user pressed any key.

  // Your job:
  //  1. Turn colorText red whenever a user presses the 'r' key
  //  2. Add your own keybind somewhere

  // See:
  // - https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event
  // - https://javascript.info/keyboard-events
});

/*************************************
 * Section 4 - TODO List             *
 *************************************
 *
 * Description:
 *   Build a simple TODO list.
 *
 *   For this you will need to have a listener on the submit form and add
 *   anything entered into the text box to the to do list on the right side.
 *
 * Bonus:
 *   Add a delete button next to each item and allow it to delete the item
 *   it is next to.
 */

// Your code goes here

/****************************************
 * Section 5 - setInterval + setTimeout *
 ****************************************
 *
 * Description:
 *   Use the setInterval function to create a counter that counts every
 *   second on the page (Should look kind of like a stopwatch counting up).
 *   Display this in the span with the id of 'seconds'.
 *
 *   Then use the SetTimeout function to display something (your choice) to the
 *   div with the id 'delayedDisplay' after 5 seconds have passed.
 *
 * Resources:
 *   - https://javascript.info/settimeout-setinterval
 *
 */

// Your code goes here

/****************************************
 * Section 6 - Your own section!        *
 ****************************************
 *
 * Description:
 *   Add your own section to this page with its own event listeners.
 *   Use a JavaScript event listener that is new to you.
 *   Here is a handy list: https://developer.mozilla.org/en-US/docs/Web/Events
 *   Click on each event listener to see an example of how it is used
 *
 */

// Your code goes here
