const pokemon = fetch('https://restcountries.com/v3.1/name/peru').then(response => { 
 
  return response.json();
}).then(pokemon => { 
  console.log(pokemon)
}).catch(error => { 
  console.log(error);
});
