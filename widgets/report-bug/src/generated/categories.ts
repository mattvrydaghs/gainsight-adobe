/**
 * Auto-generated file - do not edit manually
 * Generated: 2026-05-01T15:58:54.062Z
 * 
 * This file contains category data fetched at build time.
 * To regenerate, run: npm run fetch-categories
 */

export interface Category {
  id: string;
  name: string;
  description?: string;
  image?: string | null;
  topicsCount: number;
}

export interface CategoriesData {
  categories: Category[];
  lastUpdated: string;
}

export const categoriesData: CategoriesData = {
  "categories": [
    {
      "id": 1,
      "name": "Welcome",
      "description": "Everything you need to know about this community",
      "image": "e3f57494-86a5-4725-b9ba-0cada26b432c_thumb.png",
      "topicsCount": 0
    },
    {
      "id": 5,
      "name": "Ask the community",
      "description": "Do you have a question? look no further",
      "image": "bdbc9178-0409-4c48-a83b-a17becfb0b8d_thumb.png",
      "topicsCount": 0
    },
    {
      "id": 31,
      "name": "Learn & Share",
      "description": "Share tips and best practices, show what you've created and inspire others",
      "image": "5972ac66-4391-4939-901c-51907cb6c666_thumb.png",
      "topicsCount": 0
    },
    {
      "id": 38,
      "name": "Test area",
      "description": "enter at your own risk",
      "topicsCount": 0
    }
  ],
  "lastUpdated": "2026-05-01T15:58:54.061Z"
};

export const categories: Category[] = categoriesData.categories;

export function getCategoryById(id: string): Category | undefined {
  return categories.find((cat) => cat.id === id);
}

export function getCategoriesSorted(
  sortBy: "name" | "topicsCount" = "name"
): Category[] {
  const sorted = [...categories];
  if (sortBy === "name") {
    sorted.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "topicsCount") {
    sorted.sort((a, b) => b.topicsCount - a.topicsCount);
  }
  return sorted;
}
