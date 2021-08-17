import React from 'react';
import './titleBar.css';



function TitleBar(props) { return (
<div className=".container-fluid">
<div className="col-lg-4" style={{padding: 2}}>
                <div>
                    <div className="titlebar-nav" ></div>
                    <h1>Asia's Flashcards!</h1>
                </div>
            </div>
</div> );
}
export default TitleBar;