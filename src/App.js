import React,{useEffect,useState} from 'react';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//     <h1>Hello World</h1>
//     </div>
//   );
// }

const App = () => {

  const APP_ID = '0b743333';
  const APP_KEY = '9a8747a5b4221a830e36f6d282126831';
  const exampleReq =
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;


  const [counter, setCounter] = useState(0);
  useEffect(() => {
     console.log('Effect has been run')
  });

  return (
      <div className="App">
        <h1>Hello React</h1>
          <form className="search-form">
              <input className="search-bar" type="text"/>
              <button className="search-button" type="submit">Search</button>
          </form>
          <h1 onClick={() => setCounter(counter + 1)}>{counter}</h1>
      </div>
  );
};

export default App;
