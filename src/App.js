import React,{useEffect,useState} from 'react';
import Recipe from './Recipe';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Form, Button,FormControl, NavDropdown, Nav } from 'react-bootstrap';




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
      console.log(data);
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
        {/*  <Button variant="primary" size="lg" active>*/}
        {/*      Primary button*/}
        {/*  </Button>*/}


          <Navbar bg="light" expand="lg">
              <Navbar.Brand href="#home">Recipes</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                      <Nav.Link href="#home">Home</Nav.Link>
                      <Nav.Link href="#link">Link</Nav.Link>
                      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                          <NavDropdown.Item href="#action/3.1">Recipes</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.2">More Recipes</NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                      </NavDropdown>
                  </Nav>
                  <Form inline onSubmit={getSearch}>
                      <FormControl className="search-form" type="text" placeholder="Search" className="mr-sm-2" />
                      <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
                      <Button variant="outline-success" className="search-button" type="submit">Search</Button>
                  </Form>
              </Navbar.Collapse>
          </Navbar>
          <div className="info">
          {recipes.map(recipe => (
              <Recipe
                  key={recipe.recipe.label}
                  title={recipe.recipe.label}
                  calories={recipe.recipe.healthLabels}
                  image={recipe.recipe.image}
                  ingredients={recipe.recipe.ingredients}
              />
          ))}
          </div>
      </div>
  );
};

export default App;
