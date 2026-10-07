import { Category } from "../types/category";

export const getCategories = async (): Promise<Category[]> => {
    const res = await fetch("https://api.api-store.workers.dev/api/bazardor/categories");
    const data: Category[] = await res.json();

    return data;
}