import logo from './logo.svg';
import './App.css';

import { API } from 'aws-amplify';
import { useEffect, useState } from 'react';

function App() {

  useEffect(() => {
    accessLambda()
  }, [])

  const [lambdaOutput, setLambdaOutput] = useState("");

  async function accessLambda() {

    API
      .get("lambdaAPI", "/accessLambda", {})
      .then(response => {
        setLambdaOutput(response)
        console.log(`Response: ${response}`)
      })
      .catch(error => {
        console.log(error.response)
      });
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         {lambdaOutput}
        </p>
      </header>
    </div>
  );
}

export default App;
