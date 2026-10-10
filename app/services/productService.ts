import { Product } from "../types/product";

export const getProducts = async (): Promise<Product[]> => {
    const res = await fetch(
        "https://openapi.programming-hero.com/api/bazardor/products"
    );

    const data: Product[] = await res.json();

    return data;
};