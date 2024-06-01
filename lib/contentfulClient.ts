import {
    TypeRecipeListItem,
    TypeRecipeDetailItem,
} from "@/app/(contentful)/types/TypeRecipe";

const gqlAllRecipesQuery = `query RecipeList {
    recipesCollection {
        items {
            sys {
                id 
            }
            recipeName,
            recipeAuthor,
            recipeImage {
                url
            }
            recipeIngredients {
                json
            }
            recipeInstructions {
                json
            }
            category
        }
    }
}`;
  
interface RecipeCollectionResponse {
    recipeCollection: {
        items: RecipeItem[];
    };
}
  
interface RecipeItem {
    sys: {
        id: string;
    };
    recipeName: string;
    recipeAuthor: string;
    recipeImage: {
        url: string;
    };
    recipeIngredients: {
        json: any;
    };
    recipeInstructions: {
        json: any;
    };
    category: string[];
}

const baseUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master`;

const getAllRecipes = async (): Promise<any[]> => {
    try {
      const response = await fetch(baseUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
        },
        body: JSON.stringify({ query: gqlAllRecipesQuery }),
      });
  
      
      // Get the response as JSON, cast as RecipeCollectionResponse
      const body = (await response.json()) as {
          data: any;
        };
      

      // Map the response to the format we want
      const recipes: any[] =
        body.data.recipesCollection.items.map((item: any) => ({
            id: item.sys.id,
            name: item.recipeName,
            author: item.recipeAuthor,
            image: item.recipeImage.url,
            ingredients: item.recipeIngredients.json,
            instructions: item.recipeInstructions.json,
            tags: item.category,
        }));
        return recipes;
    } catch (error) {
      console.log(error);
      return [];
    }
};

const contentfulService = {
    getAllRecipes
};
  
export default contentfulService;