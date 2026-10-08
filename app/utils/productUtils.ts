import { Product } from "@/app/types/product";

export const getRisingProducts = (products: Product[]): Product[] => {
    const risingProducts = products.filter(
        (product) => product.change.dir === "up"
    );

    const sortedProducts = risingProducts.sort(
        (a, b) => b.change.pct - a.change.pct
    );

    const topProducts = sortedProducts.slice(0, 6);

    return topProducts;
};


export const getFallingProducts = (products: Product[]): Product[] => {

    const fallingProducts = products.filter(
        (product) => product.change.dir === "down"
    );

    const sortedProducts = fallingProducts.sort(
        (a, b) => a.change.pct - b.change.pct
    );

    const downProducts = sortedProducts.slice(0, 6);

    return downProducts;
};