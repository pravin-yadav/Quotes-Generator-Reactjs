import React, {useState} from 'react';
import QuotesGen from './QuotesGen';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [key, setKey] = useState('qod');
  return (
    <div className="App">
       <Tabs
          id="quotes-gen"
          activeKey={key}
          onSelect={(k) => setKey(k)}
        >
        <Tab eventKey="qod" title="QOD">
          <QuotesGen />
        </Tab>
        <Tab eventKey="random" title="RANDOM">
          <QuotesGen />
        </Tab>
        <Tab eventKey="success" title="Success">
          <QuotesGen />
        </Tab>
      </Tabs>
    </div>
  );
}

export default App;
