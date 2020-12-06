import React from 'react';
import axios from 'axios';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'

class RandomQuote extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="container">
                    <div className="qod">
                        <Jumbotron>
                            <h1 className="qod-text"> {hasQuote ? quote : "Click to generate quote.. ."}</h1>
                        </Jumbotron>

                        <Button className="btn-quote" variant="primary">Random Quote</Button>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default RandomQuote;