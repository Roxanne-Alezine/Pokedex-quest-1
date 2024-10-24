interface Pokemon {
  name: string;
  image?: string;
}

interface PokemonCardProps {
  pokemon: Pokemon;
}


function PokemonCard({ pokemon }: PokemonCardProps) {
  
    
    
    return (
      <figure>
        {pokemon.image ? (
          <img src={pokemon.image} alt={pokemon.name} />
        ) : (
          <p>???</p>
        )}
        <figcaption>{pokemon.name}</figcaption>
      </figure>
    );
  }


  
  export default PokemonCard;
  