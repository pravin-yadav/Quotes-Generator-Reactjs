import React from 'react';
import axios from 'axios';

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
                <div className="quote">
                    {hasQuote ? quote : "Click to generate quote.. ."}
                </div>

                <button type="button" onClick={this.fetchQuotes}>
                    Quote Of The Day
                </button>
            </React.Fragment>
        )
    }
}

export default QuotesGen;