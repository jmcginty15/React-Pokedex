import Pokecard from './Pokecard';
import './Pokedex.css';

const Pokedex = ({ pokemon, totalExp, isWinner }) => {
    return (
        <div className="Pokedex">
            <h1 className="header">Pokedex</h1>
            <h3 className="header">Total EXP: {totalExp}</h3>
            <div className="grid-container">
                {pokemon.map(i => <Pokecard key={i.id} pokemon={i} />)}
            </div>
            {isWinner ? <h3 className="footer">THIS HAND WINS!</h3> : null}
        </div>
    )
}

export default Pokedex;