import React, { Component } from 'react';
import TitleBar from './Components/TitleBar/titleBar';
import axios from 'axios';
import Deck from './Components/Cards/decks';
import CardsForm from './Components/Cards/cardsForm';
import 'bootstrap/dist/css/bootstrap.css';

// import CardCarousel from './Cards/cardCarousel';

class App extends Component {
    constructor(props){
        super(props);
        // this.handlechange = this.handlechange.bind(this);
        this.state = { 
            decks: [{name: "", description: "", cardSet: []}],
        }
    }
    

    componentDidMount(){
    console.log("i mounted");
    this.makeGetRequest();
    console.log("i requested");
    }

    async makeGetRequest() {
        try {
            let response = await axios.get(
                "http://localhost:4000/api/decks/"
            );
            console.log(response.data);
            this.setState({
                decks: response.data,
            });
        }   catch (err) {
            console.log("Error in API call!", err);
        }
    }

    render () {
        return (
            <div className="container-fluid"> 
            <TitleBar />
            <Deck decks={this.state.decks} />
            {this.state.decks.cardSet}
            <CardsForm />
            {this.makeGetRequest}
            </div>
        );
    }
}

export default App;