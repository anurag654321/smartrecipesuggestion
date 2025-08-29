const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const recipes = require("./recipes.json");

app.use(bodyParser.json());
app.use(express.static("public")); 

function matchRecipes(userIngredients) {
  const ing = userIngredients.map(i => i.toLowerCase().trim());

  return recipes
    .map(r => {
      const overlap = r.ingredients.filter(x => ing.includes(x.toLowerCase()));
      return { ...r, score: overlap.length };
    })
    .filter(r => r.score > 0) 
    .sort((a, b) => b.score - a.score); 
}

app.post("/search", (req, res) => {
  const { ingredients } = req.body;

  if (!ingredients || ingredients.length === 0) {
    return res.status(400).json({ error: "No ingredients provided" });
  }

  const matches = matchRecipes(ingredients);
  res.json({ recipes: matches });
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(` Smart Recipe Generator running at http://localhost:${PORT}`)
);
