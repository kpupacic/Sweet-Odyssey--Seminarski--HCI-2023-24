import { FC } from "react";
import Image from "next/image";
import contentfulService from "@/lib/contentfulClient";
import { TypeRecipeDetailItem } from "@/app/(contentful)/types/TypeRecipe";

type Params = {
  recipeId: any;
  recipeID: string;
};

const RecipeFull: FC<TypeRecipeDetailItem> = ({
  name,
  image,
  author,
  ingredients,
  instructions
}) => (
  <div className="fullRecipe">
      <div className="fullRecipeHeader">
        <h1>{name}</h1>
        <p>Author: {author}</p>
      </div>
      <div className="fullRecipeImg">
        <Image
            src={image}
            layout="fill"
            objectFit="cover"
            alt={name}
        />
      </div>
      <hr></hr>
      <div className="fullRecipeDetails">
        <div className="recipeDetails">
          <h3>Ingredients:</h3><br></br> 
            <ul style={{ listStyleType: 'disc'}}>
              {ingredients.content[0].content.map((item: any, index: number) => 
                  <li key={index}>{item.content[0].content[0].value}</li>
              )}
            </ul>
        </div>
        <div className="recipeDetails">
        <h3>Instructions:</h3><br></br>
          <ul style={{ listStyleType: 'decimal' }}>
            {instructions.content[0].content[0].value.split(/\d+\.\s/).map((instruction: string, index: number) => 
              index !== 0 ? <li key={index}>{instruction.trim()}</li> : null
            )}
          </ul>
        </div>
      </div>
  </div>
);
  const RecipeIDPage = async ({ params }: { params: Params }) => {
    const recipeId = params.recipeId;
    const recipes = await contentfulService.getAllRecipes();
    const filteredRecipe = recipes.filter(recipe => recipe.id.includes(recipeId));

    if (!filteredRecipe) {
        return <div>An error has occured! This recipe can't be fetched!</div>;
    }

    return (
        <main>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {filteredRecipe.map((recipe) => (
                    <li key={recipe.id} style={{ marginBottom: '2em' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <h2 style={{ textAlign: 'center' }}>{recipe.title}</h2>
                            <RecipeFull {...recipe} />
                        </div>
                    </li>
                ))}
            </ul>
        </main>
    );
};

// const RecipeIDPage = async ({ params }: { params: Params }) => {
//     const recipeId = params.recipeId;
//     const recipes = await contentfulService.getAllRecipes();
//     const filteredRecipe = recipes.filter(recipe => recipe.id.includes(recipeId));

//     if (!filteredRecipe) {
//         return <div>An error has occured! This recipe can't be fetched!</div>;
//     }

//   return (
//     <main>
//       <ul className="fullRecipe">
//         {filteredRecipe.map((recipe) => (
//           <li key={recipe.id}>
//             <RecipeFull {...recipe} />
//           </li>
//         ))}
//       </ul>
//     </main>
//   );
// };

export default RecipeIDPage;