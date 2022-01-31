const url = "https://pokeapi.co/api/v2/pokemon/";

const amountPokemon = 891;



selectedPokemon = "br";
selectedSprite = "bing";

fetch(url + "78/").then(res=>{
    if (res.status === 200){
        // SUCCESS
        res.json().then(data=>{
            pokemon = data;
            
            selectedPokemon = pokemon["name"];
            selectedSprite = pokemon["sprites"]["front_default"];

            console.log(selectedPokemon);
            console.log(selectedSprite);

            $(".selected").append('<h1>' + selectedPokemon.charAt(0).toUpperCase() + selectedPokemon.slice(1) + '</h1>');

            $(".selected").append('<img src="' + selectedSprite + '" alt="Pokemon">')
            
        }).catch(err => console.log(err))
    }
    else{
        alert("Could not connect online");
    }
})


for (i = 1; i < amountPokemon; i++){

    fetch(url + i.toString() + "/").then(res=>{
        if (res.status === 200){
            // SUCCESS
            res.json().then(data=>{
                pokemon = data;
                $(".pokeoptions").append('<option value="' + pokemon["name"] + '">' + pokemon["name"] + '</option>');

                //console.log(pokemon["name"]);
            }).catch(err => console.log(err))
        }
        else{
            alert("Could not connect online");
        }
    })
}

function updatePokemon(){

    $(".selected").empty();

    value = $('#nameselection').val();

    console.log(value);

    fetch(url + value + "/").then(res=>{
        if (res.status === 200){
            // SUCCESS
            res.json().then(data=>{
                pokemon = data;
                
                selectedPokemon = pokemon["name"];
                selectedSprite = pokemon["sprites"]["front_default"];
    
                console.log(selectedPokemon);
                console.log(selectedSprite);
    
                $(".selected").append('<h1>' + selectedPokemon.charAt(0).toUpperCase() + selectedPokemon.slice(1) + '</h1>');
    
                $(".selected").append('<img src="' + selectedSprite + '" alt="Pokemon">')
                
            }).catch(err => console.log(err))
        }
        else{
            alert("Could not connect online");
        }
    })
}