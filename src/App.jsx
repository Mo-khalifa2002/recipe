import { useState } from "react";
import { useEffect } from "react";
import "./App.scss";
import Recipe from "./Recipe";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  // const APP_ID = "89e5cbd9";
  // const APP_KEY = "de0036fec7c75d17afa665ca3aacaac5";

  // const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=89e5cbd9&app_key=de0036fec7c75d17afa665ca3aacaac5 `
    );

    const data = await response.json();

    console.log(data);
    setRecipes(data.hits);
  };

  useEffect(() => {
    getRecipes();
  }, [query]);

  const updateSearchInput = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  const searchOnSubmit = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <div className="app-header app__bg__header">
        <h1 className="search-header">Recipe Search</h1>
        <form onSubmit={searchOnSubmit}>
          <div className="search-sect">
            <input
              value={search}
              type="text"
              placeholder="Search..."
              className="search-input"
              onChange={updateSearchInput}
            />
            <label className="search-label">Search</label>
          </div>
        </form>
      </div>

      <div className="app__bg__hheader">
        <div className="container">
          <div>
            <div className="row d-flex justify-content-center align-items-center">
              {recipes.map((recipe) => (
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <Recipe
                    title={recipe.recipe.label}
                    // key={recipe.recipe.label}
                    calories={recipe.recipe.calories}
                    country={recipe.recipe.source}
                    image={recipe.recipe.image}
                    ingredients={recipe.recipe.ingredientLines}
                    dietLabels={recipe.recipe.dietLabels[0]}
                    dishType={recipe.recipe.dishType[0]}
                    mealType={recipe.recipe.mealType[0]}
                    url={recipe.recipe.url}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* </Container> */}
    </div>
  );
}

export default App;
