function getPokemonInfo(id) {
  $.ajax({
    url: "http://pokeapi.co/api/v2/pokemon/" + id,
    method: "GET",
    success: function (response) {
      // console.log(response);
      //const pokemon = response
      console.log(response.name);
      // console.log(pokemon.id);
    },
    error: function (err) {
      console.log(err);
    },
  })
}

$("#pokeButton").on('click', function(){
  getPokemonInfo(1);
})
