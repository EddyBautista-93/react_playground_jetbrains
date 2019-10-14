import React,{useEffect,useState} from 'react';
import Recipe from './Recipe';
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
  // const exampleReq =
      // `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

const [recipes, setRecipes] = useState([]);


  useEffect( () => {
      getRecipies();
  },[]);


  const getRecipies = async () => {
      const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
      const data = await response.json();
      setRecipes(data.hits);
      console.log(data.hits);
  };

  return (
      <div className="App">
        <h1>Hello React</h1>
          <form className="search-form">
              <input className="search-bar" type="text"/>
              <button className="search-button" type="submit">Search</button>
          </form>
          {recipes.map(recipe => (
              <Recipe
                  title={recipe.recipe.label}
                  calories={recipe.recipe.calories}
                  image={recipe.recipe.image}
              />
          ))}
      </div>
  );
};

export default App;
