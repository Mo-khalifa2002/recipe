import React from "react";
import "./Recipe.scss";

const Recipe = ({
  title,
  image,
  calories,
  country,
  ingredients,
  dietLabels,
  dishType,
  mealType,
}) => {
  return (
    <div>
      <div className="recipe-card">
        <div className="recipe-img">
          <img src={image} alt="recipe-image" />
        </div>
        <h1 className="recipe-title">{title}</h1>
        {/* <p className="recipe-calories">{calories}</p> */}
        <p className="recipe-country">Source: {country}</p>
        <div className="die-dish">
          <p className="recipe-die">
            {dietLabels ? <p>{dietLabels}</p> : "No dietlabels"}
          </p>
          <p className="recipe-dish">
            {dishType ? <p>{dishType}</p> : "No dishType"}
          </p>
        </div>
        <p className="recipe-mealType">
          {mealType ? <p>{mealType}</p> : "No meal Type"}
        </p>

        <div className="buttons">
          <a
            href="http://www.seriouseats.com/recipes/2011/12/chicken-vesuvio-recipe.html"
            className="more"
            target="_blank"
          >
            Website
          </a>

          {/* <button className="button-more">More</button> */}
        </div>
        {/* <p className="recipe-ingredients">{ingredients}</p> */}
      </div>
    </div>
  );
};

export default Recipe;
