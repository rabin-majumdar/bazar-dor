import { Product } from "../types/product";

export const getProducts = async (): Promise<Product[]> => {
    const res = await fetch(
        "https://api.abcz.workers.dev/api/bazardor/products"
    );

    const data: Product[] = await res.json();

    return data;
};