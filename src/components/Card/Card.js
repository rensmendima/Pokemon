import React from 'react';

function Card({ pokemon }) {
    return (
        
        <div className="Card">
            <div className="Card__img">
                <img src={pokemon.sprites.front_default} alt="" />
            </div>
            
            
            <div className="Card_ID">
                ID-Nummer: {pokemon.id}
                </div>

            <div className="Card_name">
                Name: {pokemon.name}
            </div>
                <div className="Card_Type">
                        Type: {pokemon.types[0].type.name}
                    </div>
            </div>
      
    )
}

export default Card;