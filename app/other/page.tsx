import { SearchParams } from "@/app/blog/page";
import { FC } from "react";
import { RecipeCard } from "../(contentful)/cms/recipes/page";
import contentfulService from "@/lib/contentfulClient";

const OthersPage: FC<SearchParams> = async ({ searchParams }) => {
  const recipes = await contentfulService.getAllRecipes();
  const filteredRecipes = recipes.filter(recipe => recipe.tags.includes('other'));

  return (
    <main>
      <ul className="cards gap-5">
        {filteredRecipes.sort((a, b) => a.name.localeCompare(b.name)).map((recipe) => (
          <li key={recipe.id}>
            <RecipeCard {...recipe} />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default OthersPage;