import './Pokecard.css';

const Pokecard = (props) => {
    const pokemon = props.pokemon
    pokemon.img_src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;
    return (
        <div className="Pokecard">
            <h3 className="name">{pokemon.name}</h3>
            <img src={pokemon.img_src} alt={pokemon.name} className="image" />
            <p className="details">Type: {pokemon.type}</p>
            <p className="details">EXP: {pokemon.base_experience}</p>
        </div>
    )
}

export default Pokecard;