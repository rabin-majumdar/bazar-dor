import { Category } from "../types/category";

export const getCategories = async (): Promise<Category[]> => {
    const res = await fetch("https://openapi.programming-hero.com/api/bazardor/categories");
    const data: Category[] = await res.json();

    return data;
}
