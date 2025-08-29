# Smart Recipe Generator

Suggests matching recipes from a local database based on ingredients you provide.

## Tech
- Node.js + Express (backend & static frontend)
- Local `recipes.json` (25 recipes)

## Setup
1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Environment**
   - Create a `.env` file in the project root:
     ```env
     PORT=3000
     ```

3. **Run the server**
   ```bash
   npm start
   ```
   Visit: http://localhost:3000

## API
- `POST /search` with JSON body `{ "ingredients": ["ingredient1", "ingredient2", ...] }` → returns ranked recipes.

## Notes
- Uses a simple **overlap score** to rank recipes.
- You can add dietary filters, difficulty, and serving size on the frontend later if needed.

