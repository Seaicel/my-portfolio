// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addRandomGreeting() {
  const greetings =
      ['Hello world!', '¡Hola Mundo!', '你好，世界！', 'Bonjour le monde!',
      'I love you!', 'Happy everyday!', 'You are so cute!'];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}

function randomizeImage() {
  // The images directory contains 9 images, so generate a random index between
  // 1 and 9.
  const imageIndex = Math.floor(Math.random() * 9) + 1;
  const imgUrl = 'images/S' + imageIndex + '.jpg';

  const imgElement = document.createElement('img');
  imgElement.src = imgUrl;
  imgElement.width= '300';

  const imageContainer = document.getElementById('random-image-container');
  // Remove the previous image.
  imageContainer.innerHTML = '';
  imageContainer.appendChild(imgElement);
}

function getHelloArrowFunctions() {
  fetch('/data').then(response => response.json()).then((quote) => {
    //document.getElementById('Hello').innerText = quote;
    const hello = document.getElementById('Hello');
    //hello.innerText = "My name: " +quote.Name;
    //hello.innerHTML = '';
    hello.appendChild(
        createListElement('My name: ' + quote.Name));
    hello.appendChild(
        createListElement('Age: ' + quote.Age));
    hello.appendChild(
        createListElement('Birthday: ' + quote.Birthday));
  });
}

function getRandomQuoteUsingArrowFunctions() {
  fetch('/random-quote').then(response => response.text()).then((quote) => {
    document.getElementById('quote-container').innerText = quote;
  });
}

/** Creates an <li> element containing text. */
function createListElement(text) {
  const liElement = document.createElement('li');
  liElement.innerText = text;
  return liElement;
}