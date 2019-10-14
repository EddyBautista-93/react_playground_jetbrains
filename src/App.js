import React,{useEffect,useState} from 'react';
import Recipe from './Recipe';
import './App.css';


const App = () => {

  const APP_ID = '0b743333';
  const APP_KEY = '9a8747a5b4221a830e36f6d282126831';
  // const exampleReq =
      // `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

const [recipes, setRecipes] = useState([]);
const [search, setSearch] = useState("");
const [query, setQuery] = useState('chicken')


  useEffect( () => {
      getRecipies();
  },[query]);


  const getRecipies = async () => {
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
      const data = await response.json();
      setRecipes(data.hits);
      console.log(data.hits);
  };

  const updateSearch = e => {
      setSearch(e.target.value);
  };

  const getSearch = e => {
      e.preventDefault();
      setQuery(search);
      setSearch("");
  };

  return (
      <div className="App">
        {/*<h1>Hello React</h1>*/}
          <form onSubmit={getSearch} className="search-form">
              <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
              <button className="search-button" type="submit">Search</button>
          </form>
          <div className="info">
          {recipes.map(recipe => (
              <Recipe
                  key={recipe.recipe.label}
                  title={recipe.recipe.label}
                  calories={recipe.recipe.calories}
                  image={recipe.recipe.image}
                  ingredients={recipe.recipe.ingredients}
              />
          ))}
          </div>
      </div>
  );
};

export default App;
