import React from 'react';


const Deck = (props) => {
    return (
        <div>
            {props.decks.map((deck,index) => <h1 key={index}>{deck.name}</h1>)}
            {/* <div class="row">
                <div class="col-sm-6">
                    <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Special title treatment</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="app.js" class="btn btn-primary">Go somewhere</a>
                    </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Special title treatment</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="app.js" class="btn btn-primary">Go somewhere</a>
                    </div>
                    </div>
                </div>
                </div> */}
        </div>
        
    )
}

export default Deck;