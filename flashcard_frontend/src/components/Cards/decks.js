import React from 'react';

const Deck = (props) => {
    return (
        <div>
            {props.decks.map((deck,index) => <h1 key={index}>{deck.name}</h1>)}
        </div>
    )
}

export default Deck;