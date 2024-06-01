import { TypeCategory } from "./TypeCategory";

export interface TypeRecipeListItem {
  id: string;
  name: string;
  image: string;
  tags: TypeCategory[];
}
  
export interface TypeRecipeDetailItem extends TypeRecipeListItem {
  author: string;
  ingredients: any;
  instructions: any;
}