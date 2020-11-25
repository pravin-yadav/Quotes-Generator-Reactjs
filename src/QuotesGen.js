import React from 'react';

class QuotesGen extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div class="quote">
                    <h1>Quotes Generator</h1>
                </div>

                <button type="submit" onClick="refreshPage()">
                    Quote Of The Day
                </button>
            </React.Fragment>
        )
    }
}

export default QuotesGen;