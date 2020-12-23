import Pokedex from './Pokedex';
import { shuffle } from './helpers';

let defaultList = [
    { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
    { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
    { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
    { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
    { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
    { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
    { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
    { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
];
defaultList = shuffle(defaultList);

const Pokegame = ({ pokemon = defaultList }) => {
    const hand1 = pokemon.slice(0, 4);
    const hand2 = pokemon.slice(4);

    const exp1 = hand1.reduce((acc, i) => { return { base_experience: acc.base_experience + i.base_experience } });
    const exp2 = hand2.reduce((acc, i) => { return { base_experience: acc.base_experience + i.base_experience } });

    const winner1 = exp1.base_experience > exp2.base_experience ? true : false;
    const winner2 = winner1 ? false : true;

    return (
        <div className="Pokegame">
            <Pokedex pokemon={hand1} totalExp={exp1.base_experience} isWinner={winner1} />
            <Pokedex pokemon={hand2} totalExp={exp2.base_experience} isWinner={winner2}/>
        </div>
    )
}

export default Pokegame;