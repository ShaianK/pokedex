var queryString = decodeURIComponent(window.location.search); //parsing 
pokemonName = queryString.substring(6); 

const url = "https://pokeapi.co/api/v2/pokemon/";

fetch(url + pokemonName + "/").then(res=>{
    if (res.status === 200){
        // SUCCESS
        res.json().then(data=>{
            pokemon = data;
            selectedSprite = pokemon["sprites"]["front_default"];

            types = pokemon["types"];
            abilites = pokemon["abilities"];
            moves = pokemon["moves"];
            stats = pokemon["stats"];
            types = pokemon["types"];


            $(".name").append('<h2>' + pokemon["name"] + '</h2>');
            $(".image").append('<img src="' + selectedSprite + '" alt="Pokemon">');

            for (i = 0; i < types.length; i++){
                $(".type").append('<h2>' + types[i]["type"]["name"] + '</h2>');
            }

            for (i = 0; i < abilites.length; i++){
                $(".abilitys").append('<h2>' + abilites[i]["ability"]["name"] + '</h2>');
            }

            for (i = 0; i < moves.length; i++){

                $(".moves").append('<div class="move_div_' + moves[i]["move"]["name"] + '">' + '</div>');
                console.log(moves[i]["move"]["name"])
                $(".move_div_" + moves[i]["move"]["name"]).append('<h2>' + moves[i]["move"]["name"] + '</h2>');
                fetch(moves[i]["move"]["url"]).then(res=>{
                    if (res.status === 200){
                        // SUCCESS
                        res.json().then(data=>{
                            move = data;    
                            console.log(move["name"])
                            $(".move_div_" + move["name"]).append('<h3>' + "Accuracy: " + move["accuracy"] + '</h3>');
                            $(".move_div_" + move["name"]).append('<h3>Power: ' + move["power"] + '</h3>');
                            $(".move_div_" + move["name"]).append('<h3>pp: ' + move["pp"] + '</h3>');
                            $(".move_div_" + move["name"]).append('<h3>Type: ' + move["type"]["name"] + '</h3>');
                        }).catch(err => console.log(err))
                    }
                    else{
                        alert("Could not connect online");
                    }
                })
            }


            for (i = 0; i < stats.length; i++){
                

                $(".stats").append('<h3>' + stats[i]["stat"]["name"] + ": " + stats[i]["base_stat"] + '</h3>');
                            
            }

            
            $(".physical").append('<p>Weight: ' + parseInt(pokemon["weight"]) / 10 + ' kg</p>');
            $(".physical").append('<p>Height: ' + parseInt(pokemon["height"]) * 10 + ' cm</p>');
            


            //console.log(pokemon["name"]);
        }).catch(err => console.log(err))
    }
    else{
        alert("Could not connect online");
    }
})


