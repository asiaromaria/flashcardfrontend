import React from 'react';

const CardsForm = (props) => {
    return ( <div>
        <form>
            <label>Question:</label>
            <input type="text" name="question"/>
            <label>Answer:</label>
            <input type="text" name="answer"/>
            <input type="submit"/>
            
        </form>
    </div> );
}
 
export default CardsForm;