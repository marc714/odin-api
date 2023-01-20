// https://www.theodinproject.com/lessons/node-path-javascript-asynchronous-code

const img = document.querySelector('img');
const newImage = document.querySelector('#btn-image');
const searchBtn = document.querySelector("#search-btn");
newImage.addEventListener('click', getImage);
searchBtn.addEventListener('click', searchGif);

function getImage(){
  fetch('https://api.giphy.com/v1/gifs/translate?api_key=SApUDah5aiTL85ZBVexepgsZazATwhAQ&s=cats', {mode: 'cors'})
  .then(function(response) {
      //console.log(response.json());  // returned a Promise
      //Essentially, a promise is an OBJECT that might produce a value at some point in the future.
      //we fetched an object with search string of cats
  return response.json(); //lets return that value in JSON to the next part of the chain
  })
  .then( response => {
  //console.log(response); // shows the json data
  //console.log(response.data.images.original.url) // shows the URL
  img.src = response.data.images.original.url;
  });
  // .then( response => img.src = response.data.images.original.url)
};

// use a parameter like 'response' in TOP or fetchedData
// above on a successful fetch promise, .then(do something), which it returned the data in json format, and then chained a console log of specific fetched data.

function searchGif(e){
  e.preventDefault();
  let searchTerm = document.querySelector("#search-input").value;
  console.log(searchTerm);
  fetch(`https://api.giphy.com/v1/gifs/translate?api_key=SApUDah5aiTL85ZBVexepgsZazATwhAQ&s=${searchTerm}`, {mode: 'cors'})
  .then(response => response.json())
  .then(response => img.src = response.data.images.original.url)
  .catch(error => console.log('error: something is wrong'))
  .finally(console.log('search done'))
}


const onLoad = (() => {
  getImage();
})();