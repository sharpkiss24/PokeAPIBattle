$(document).ready(function(){
//starter function to pull a random pokemon from the PokeAPI
  function getRandomPokemonLeft() {
    let randomNumber = Math.floor(Math.random() * 800) + 1;
    $.get(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`).then(function(pokeData){
      console.log("Left Pokemon Data: ", pokeData);
      console.log(pokeData.name);
      $("#Left").append(`<h1>${pokeData.name}</h1>`);
    });
  }


 function getRandomPokemonRight() {
    let randomNumber = Math.floor(Math.random() * 800) + 1;
    $.get(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`).then(function(pokeData){
      console.log("Right Pokemon Data: ", pokeData);
      console.log(pokeData.name);
      $("#Right").append(`<h1>${pokeData.name}</h1`);
    });
  }



$("#leftButton").click(getRandomPokemonLeft);
$("#rightButton").click(getRandomPokemonRight);
//all code here





})
