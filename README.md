# Smart Recipe Generator
Suggests matching recipes from a local database based on ingredients you provide.

_________________________________________________________________________________________________
# Link
Github Link -> https://github.com/anurag654321/smartrecipesuggestion
<br>
Render Link -> https://smartrecipesuggestion.onrender.com/

__________________________________________________________________________________________________

## Tech
- Node.js + Express (backend & static frontend)

## Setup
 **Install dependencies**
   ```bash
   npm install
   ```

## Logic & Approach

### 1. Ingredient Search (Manual)
- User provides a list of ingredients (via frontend form or API).
- The backend matches these ingredients against each recipe in `recipes.json`.
- For each recipe, it counts how many ingredients overlap with the user's list (case-insensitive, trimmed).
- Recipes are ranked by the number of matching ingredients (overlap score).
- The top results are returned to the user.

### 2. Image Upload & OCR (Automated)
- User uploads an image ( printed ingredient list) via the frontend.
- The backend receives the image using a POST endpoint (e.g., `/upload-image`) and saves it temporarily.
- The backend uses the `tesseract.js` library to perform OCR (Optical Character Recognition) on the image and extract text.
- The extracted text is parsed to identify individual ingredients (splitting by lines, commas, or bullet points as needed).
- The parsed ingredient list is passed to the same recipe matching logic as above.
- Suggested recipes are returned to the frontend.

### 3. Frontend
- Provides a form for manual ingredient entry and an image upload button.
- Displays suggested recipes based on the backend response.

### 4. Security & Cleanliness
- Sensitive files like `.env` and service account keys are also gitignored.

### 5. Extensibility
- The system can be extended to support dietary filters, difficulty levels, serving sizes, or more advanced OCR post-processing.

