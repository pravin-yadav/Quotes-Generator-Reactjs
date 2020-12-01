import React from 'react';
import axios from 'axios';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'

class QuotesGen extends React.Component{
    state= {
        quotes: [],
        hasQuote: false
    }
    fetchQuotes = (e) => {
        e.preventDefault();
        axios.get('https://quotes.rest/qod?language=en').then(response => {
            this.setState({quotes: response.data.contents.quotes, hasQuote: true})
        }).catch(error => {
            console.log(error)
        })
    }
    render(){
        const { quotes,hasQuote } = this.state || [];
        let quote = quotes.map(quote => quote.quote);
        return(
            <React.Fragment>
                <div className="container">
                    <div className="qod">
                        <Jumbotron>
                            <h1 className="qod-text"> {hasQuote ? quote : "Click to generate quote.. ."}</h1>
                        </Jumbotron>

                        <Button className="btn-quote" onClick={this.fetchQuotes} variant="primary">Quote Of the Day</Button>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default QuotesGen;